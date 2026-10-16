import { readFileSync, writeFileSync } from "node:fs";
const host = "upliftmedicalms.com";
const key = process.env.INDEXNOW_KEY;
if (!key || !/^[a-zA-Z0-9-]{8,128}$/.test(key))
  throw new Error("Set a host-specific INDEXNOW_KEY of 8-128 letters, numbers or hyphens.");
if (process.argv.includes("--prepare-key")) {
  writeFileSync(`public/${key}.txt`, key);
  console.log("Verification file prepared. Review and deploy it before submission.");
  process.exit(0);
}
const file = process.argv.find((a) => a.startsWith("--urls="))?.slice(7);
if (!file) throw new Error("Provide --urls=changed-urls.json. Dry run is the default.");
const sitemap = readFileSync("public/sitemap.xml", "utf8");
const urls = [...new Set(JSON.parse(readFileSync(file, "utf8")))];
if (!urls.length || urls.length > 10000) throw new Error("Provide 1-10000 changed URLs.");
for (const value of urls) {
  const url = new URL(value);
  if (
    url.origin !== `https://${host}` ||
    url.search ||
    url.hash ||
    !sitemap.includes(`<loc>${value}</loc>`)
  )
    throw new Error(`Not an approved canonical sitemap URL: ${value}`);
}
const body = { host, key, keyLocation: `https://${host}/${key}.txt`, urlList: urls };
if (!process.argv.includes("--submit")) {
  console.log(JSON.stringify({ host, urlList: urls, dryRun: true }, null, 2));
  process.exit(0);
}
if (process.env.VERCEL_ENV !== "production")
  throw new Error("Submission requires an approved production deployment.");
const verification = await fetch(body.keyLocation);
if (!verification.ok || (await verification.text()).trim() !== key)
  throw new Error("Live verification file does not match.");
const result = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(body),
});
console.log(
  JSON.stringify({
    time: new Date().toISOString(),
    host,
    count: urls.length,
    status: result.status,
  }),
);
if (![200, 202].includes(result.status))
  throw new Error(
    `Submission failed (${result.status}); investigate before retrying. For 429, honor Retry-After.`,
  );
