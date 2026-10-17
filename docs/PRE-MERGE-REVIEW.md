# Uplift pre-merge quality review

Reviewed October 16, 2026 against freshly fetched origin/main (173aa02) and origin/claude/hormone-therapy-quiz-txs5pq (6eae4f6).

## Target and verdict

Use **main** as the PR base. Although main is not an ancestor of the SEO branch, its three exclusive commits are historical merges. `git merge-tree --write-tree origin/main HEAD` reports no conflict, and the result has the same content as HEAD. The branch already incorporates the newer public-site source. No real merge or deployment was performed.

The code is suitable for review/merge with the four posts still private. Actual clinical publication remains separately gated. If merging main automatically deploys the site, treat the merge as a release: confirm that hosting configuration and the measurement settings below have been reviewed first. Exact current hosting deployment SHA remains unverified.

## Defects found and fixed

1. The original locked TanStack runtime included critical reflected-XSS and serialization advisories. Updated React Start, Router and router-plugin within their supported version ranges, refreshing Bun lock and compatible development tooling. React Start is now 1.169.2, with patched server-core and serializer dependencies. Adapted the example server function to the supported `.validator()` API. No npm lockfile introduced.
2. Contact and quiz submit controls allowed repeated submissions while a network request was pending. Both now have synchronous submission locks, disabled/busy controls and visible progress. Requests time out after 15 seconds; error handling preserves entered information and never confirms failed delivery. No real endpoint was contacted in tests.
3. A visitor landing directly on an excluded treatment page could later enter a general page without analytics initialization. The public-page effect now initializes the production-host-gated bootstrap before its sanitized pageview. Health/intake page suppression remains unchanged.
4. The resources hub had no H1 because its shared heading always rendered H2. Added an explicit semantic heading option and H1 for the hub.
5. Added tests against the actual production server output, not just source strings: four private drafts return real 404s and remain absent from the hub; public pages have a single canonical and parseable schema; intake pages are noindex without analytics bootstrap; the serialized production bootstrap executes successfully and refuses preview hosts.

## Verification

- TypeScript check passed after framework security updates.
- Production build passed.
- Eight source/runtime SEO/privacy/delivery tests passed.
- Four built-server integration tests passed (`npm run test:production`, after build).
- ESLint: no errors, six pre-existing UI fast-refresh warnings.
- Checked generated server bundles for remaining advisory package identifiers, with none found.
- Validation runtime: Node 24.19.0. The app declares Node 22.x. The attempted npx Node 22 command was resolved by the environment to Node 24, so a Node 22 run is not claimed. Hosting preview validation on its configured runtime remains a release check.

## Dependency advisory residuals

Registry audit no longer reports the inherited critical TanStack/seroval runtime findings. It still reports advisories in six dependency families: @babel/core (low), baseline-browser-mapping (moderate), brace-expansion (high/moderate), browserslist (high), js-yaml (high/moderate), source-map-js (high). Dependency-path inspection places these under Babel/Vite/Tailwind compilation, the TanStack build plugin, or ESLint. They were absent from the emitted server bundle scan. This is not a claim of a vulnerability-free dependency tree.

These build-time issues require separate transitive dependency maintenance; avoid processing untrusted build configuration/content in the meantime. No forced cross-major dependency overrides were added to make the audit appear clean. Relevant resolved runtime advisory: https://github.com/advisories/GHSA-qx66-fv34-fjm8. Audit was performed with the project's Bun lock; npm audit could not operate without an npm lock, and no alternate lockfile was created.

## Release conditions, not unfinished article writing

The four articles are complete and may safely stay private through merge. Real clinical/operational approval, reviewer identity and review date are required to publish. Do not fabricate them. The generator excludes pending prose from production JS/server output and sitemap; their routes return 404.

Before production release: verify hosting source/runtime and canonical redirect setup; audit remote GA Enhanced Measurement and consent/privacy configuration; verify the legacy clinical intake/webhook handling operationally. Local code tests cannot establish those account facts. Measurement is intentionally limited to general public pages, so post-change GA totals cannot be compared directly with the old whole-site baseline. Use Search Console for full-site search discovery and aggregate first-party booking/office reporting for confirmed consultations. Clicks are not conversions.

Bing ownership/index inspection, IndexNow submission, local profile edits, medical evidence verification and future traffic checks remain account/evidence work, not mergeable source edits. No live lead, analytics event, search submission or external account change was made during this review.

## Vercel vulnerable-version block

The user reported Vercel refusing top-level @tanstack/react-start 1.167.50 and requiring at least 1.168.60 (CVE-2026-102989). The committed manifest and Bun lock now resolve @tanstack/react-start 1.169.2, @tanstack/start-server-core 1.169.43 and seroval 1.6.9; installed versions were checked against those lock records. No DANGEROUSLY_DEPLOY bypass or equivalent override was introduced. The similarly named @tanstack/react-start-server adapter remains 1.167.50 as selected by the patched upstream package; it is distinct from the blocked @tanstack/react-start package. Hosted build status must be checked on this new commit, not the superseded commit.
