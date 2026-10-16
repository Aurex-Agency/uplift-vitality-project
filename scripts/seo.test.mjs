import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { execFileSync } from "node:child_process";
const read = (p) => readFileSync(p, "utf8");
const posts = readdirSync("docs/editorial")
  .filter((f) => f.endsWith(".json"))
  .map((f) => JSON.parse(read(`docs/editorial/${f}`)));
test("Four complete distinct articles, review pending", () => {
  assert.equal(posts.length, 4);
  assert.equal(new Set(posts.map((p) => p.slug)).size, 4);
  for (const post of posts) {
    assert.equal(post.reviewStatus, "pending");
    assert.ok(JSON.stringify(post.sections).split(/\s+/).length > 450);
    assert.ok(post.related.some((l) => l.to === "/book"));
  }
});
test("Production compilation excludes unreviewed text; preview includes it", () => {
  execFileSync(process.execPath, ["scripts/prepare-editorial.mjs", "--preview"]);
  let module = read("src/components/site/review-guides.generated.ts");
  for (const p of posts) assert.ok(module.includes(p.slug));
  execFileSync(process.execPath, ["scripts/prepare-editorial.mjs"]);
  module = read("src/components/site/review-guides.generated.ts");
  for (const p of posts) {
    assert.ok(!module.includes(p.slug));
    assert.ok(!read("public/sitemap.xml").includes(`/resources/${p.slug}`));
  }
});
test("Analytics cannot send arbitrary health data or quiz outcomes", () => {
  const code = read("src/lib/analytics.ts");
  assert.ok(code.includes("allowed.has(name)"));
  assert.ok(code.includes('page_title: "Uplift Medical"'));
  assert.ok(!read("src/routes/qualify.tsx").includes("trackEvent"));
  assert.ok(!read("src/routes/__root.tsx").includes("external-tracking.js"));
});
test("Sitemap excludes intake and booking URLs; production canonicals retained", () => {
  const xml = read("public/sitemap.xml");
  assert.ok(!xml.includes("<loc>https://upliftmedicalms.com/qualify</loc>"));
  assert.ok(!xml.includes("<loc>https://upliftmedicalms.com/book</loc>"));
  assert.ok(!xml.includes("uplift.aurexagency.com"));
});
test("IndexNow refuses unknown / preview / draft URLs", () => {
  assert.throws(() =>
    execFileSync(process.execPath, ["scripts/indexnow.mjs"], {
      env: { ...process.env, INDEXNOW_KEY: "" },
      stdio: "pipe",
    }),
  );
});

test("Lead delivery failure cannot report success; requests strip URL query and fragment", async () => {
  const { default: ts } = await import("typescript");
  const { default: vm } = await import("node:vm");
  const js = ts.transpileModule(read("src/lib/leads.ts"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS },
  }).outputText;
  let captured;
  const context = {
    exports: {},
    window: {
      location: {
        hostname: "upliftmedicalms.com",
        origin: "https://upliftmedicalms.com",
        pathname: "/contact",
        href: "https://upliftmedicalms.com/contact?email=private#private",
      },
    },
    fetch: async (_url, options) => {
      captured = JSON.parse(options.body);
      return { ok: false, status: 500 };
    },
  };
  vm.runInNewContext(js, context);
  const payload = { name: "Test", email: "test@example.invalid", phone: "000", message: "Test" };
  await assert.rejects(context.exports.submitContact(payload), /not confirmed/);
  assert.equal(captured.page, "https://upliftmedicalms.com/contact");
  context.fetch = async () => ({ ok: true, status: 200 });
  await assert.doesNotReject(context.exports.submitContact(payload));
  context.fetch = async () => {
    throw new Error("network");
  };
  await assert.rejects(
    context.exports.submitLead({
      answers: {},
      contact: { ...payload, smsConsent: false, marketingConsent: false },
    }),
    /not confirmed/,
  );
  context.window.location.hostname = "localhost";
  await assert.rejects(context.exports.submitContact(payload), /preview/);
});

test("Analytics loader is host-gated and blocks collection before sensitive SPA navigation", async () => {
  const { default: ts } = await import("typescript");
  const { default: vm } = await import("node:vm");
  const js = ts.transpileModule(read("src/lib/analytics-bootstrap.ts"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS },
  }).outputText;
  const appended = [];
  const transitions = [];
  const window = {
    location: {
      hostname: "preview.example",
      origin: "https://preview.example",
      pathname: "/",
      href: "https://preview.example/",
    },
    history: {
      pushState() {
        transitions.push(window["ga-disable-G-test"]);
      },
      replaceState() {
        transitions.push(window["ga-disable-G-test"]);
      },
    },
    addEventListener() {},
  };
  const context = {
    exports: {},
    window,
    URL,
    document: {
      referrer: "https://www.google.com/search?q=private+symptom",
      addEventListener() {},
      createElement() {
        return {};
      },
      head: {
        appendChild(s) {
          appended.push(s);
        },
      },
    },
  };
  vm.runInNewContext(js, context);
  context.exports.analyticsBootstrap("G-test");
  assert.equal(appended.length, 0);
  window.location = {
    hostname: "upliftmedicalms.com",
    origin: "https://upliftmedicalms.com",
    pathname: "/",
    href: "https://upliftmedicalms.com/?email=private",
  };
  context.exports.analyticsBootstrap("G-test");
  assert.equal(appended.length, 1);
  assert.equal(window.upliftSearchReferrer, "https://www.google.com/");
  assert.ok(!JSON.stringify(window.dataLayer).includes("private"));
  window.history.pushState({}, "", "/qualify?answer=private");
  assert.equal(transitions.at(-1), true);
  window.history.pushState({}, "", "/services/hormone-therapy-men");
  assert.equal(transitions.at(-1), true);
  window.history.replaceState({}, "", "/about");
  assert.equal(transitions.at(-1), false);
});

test("Article body has no animation visibility gate", () => {
  assert.ok(!read("src/routes/resources.$slug.tsx").includes("<Reveal"));
});
