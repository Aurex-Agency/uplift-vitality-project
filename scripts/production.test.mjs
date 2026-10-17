import { test } from "node:test";
import assert from "node:assert/strict";
import { readdirSync, readFileSync } from "node:fs";
import vm from "node:vm";
import app from "../.vercel/output/functions/__server.func/index.mjs";
async function page(path) {
  const response = await app.fetch(new Request(`https://upliftmedicalms.com${path}`), {});
  return { response, html: await response.text() };
}
const drafts = readdirSync("docs/editorial")
  .filter((f) => f.endsWith(".json"))
  .map((f) => JSON.parse(readFileSync(`docs/editorial/${f}`, "utf8")));
test("Built server keeps all four pending articles private and absent from resource hub", async () => {
  const hub = await page("/resources");
  assert.equal(hub.response.status, 200);
  for (const draft of drafts) {
    const result = await page(`/resources/${draft.slug}`);
    assert.equal(result.response.status, 404);
    assert.ok(!result.html.includes(draft.intro[0]));
    assert.ok(!hub.html.includes(draft.slug));
  }
});
test("Built public routes have a single canonical, readable main content and valid structured data", async () => {
  for (const path of [
    "/",
    "/about",
    "/resources",
    "/services/hormone-therapy-men",
    "/services/hormone-therapy-women",
    "/services/progesterone-estrogen",
    "/locations/pontotoc",
  ]) {
    const { response, html } = await page(path);
    assert.equal(response.status, 200, path);
    assert.equal((html.match(/rel="canonical"/g) || []).length, 1, path);
    assert.ok(html.includes(`href="https://upliftmedicalms.com${path}"`), path);
    assert.ok(html.includes("<h1"), path);
    for (const match of html.matchAll(
      /<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gis,
    ))
      assert.doesNotThrow(() => JSON.parse(match[1]));
  }
});
test("Built intake pages are noindex and do not load the analytics bootstrap", async () => {
  for (const path of ["/qualify", "/book"]) {
    const { response, html } = await page(path);
    assert.equal(response.status, 200);
    assert.ok(html.includes('content="noindex,follow"'));
    assert.ok(!html.includes("upliftAnalyticsInitialized"));
  }
});
test("Serialized production analytics bootstrap executes without missing bundled helpers and refuses preview host", async () => {
  const { html } = await page("/");
  const script = [...html.matchAll(/<script[^>]*>(.*?)<\/script>/gis)]
    .map((m) => m[1])
    .find((s) => s.includes("upliftAnalyticsInitialized"));
  assert.ok(script);
  let loads = 0;
  const window = { location: { hostname: "preview.example" } };
  const context = {
    window,
    URL,
    document: {
      addEventListener() {},
      referrer: "https://www.bing.com/search?q=private",
      createElement() {
        return {};
      },
      head: {
        appendChild() {
          loads++;
        },
      },
    },
  };
  vm.runInNewContext(script, context);
  assert.equal(loads, 0);
  window.location = {
    hostname: "upliftmedicalms.com",
    origin: "https://upliftmedicalms.com",
    pathname: "/",
    href: "https://upliftmedicalms.com/?private=1",
  };
  window.history = { pushState() {}, replaceState() {} };
  window.addEventListener = () => {};
  vm.runInNewContext(script, context);
  assert.equal(loads, 1);
  assert.equal(window.upliftSearchReferrer, "https://www.bing.com/");
  assert.ok(!JSON.stringify(window.dataLayer).includes("private"));
});
