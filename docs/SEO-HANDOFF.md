# Uplift Medical SEO implementation handoff

Prepared October 16, 2026. This branch is a reviewable implementation, not a deployment or clinical publication approval.

## Repository and deployment mapping

- Remote: https://github.com/Aurex-Agency/uplift-vitality-project.git
- Branch: codex/uplift-seo-authority
- Base: origin/claude/hormone-therapy-quiz-txs5pq, 6eae4f6. This is newer than main and matches the public domain's phone 662-584-4958, resources, service routes, office details and visible content. The alternate uplift-connect repository has a different route architecture and is not this site's source.
- Exact hosting deployment SHA and production branch setting remain unverified. Confirm hosting mapping before opening a merge against a target branch or deploying. Do not merge to old main without accounting for the newer source branch.
- No production deployment, remote branch push, PR, account setting, profile edit or outreach was performed.
- Bun remains the package manager. The pre-merge review updated Bun lock within compatible ranges to fix inherited critical framework/serializer advisories; see PRE-MERGE-REVIEW.md. npm invokes scripts only; no npm lockfile migration. Local validation used Node 24.19.0; hosting package declares Node 22.x, so validate the hosting preview runtime before release.

## Four complete new articles

All four are complete prose, not outlines. They use existing /resources/:slug templates and internal links. Content JSON is outside the public directory and is not included in production unless approval fields are complete.

| Source file | Intended URL | Status |
| --- | --- | --- |
| docs/editorial/first-hormone-consultation.json | /resources/first-hormone-consultation | Clinical and operational review pending |
| docs/editorial/questions-before-starting-trt.json | /resources/questions-before-starting-trt | Clinical review pending |
| docs/editorial/prepare-menopause-consultation.json | /resources/prepare-menopause-consultation | Clinical review pending |
| docs/editorial/telehealth-in-person-follow-up.json | /resources/telehealth-in-person-follow-up | Clinical and operational scope review pending |

The articles cover distinct preparation questions and do not replace existing low-testosterone signs, TRT cost or clinic-selection articles. Sources include the Endocrine Society, FDA, ACOG and HHS. No clinician authorship, treatment eligibility, prescription, appointment availability or telehealth legal authorization is invented.

Local `npm run dev` shows drafts with a review banner and noindex/nofollow. `npm run build`, `build:dev` and direct Vite builds regenerate the content module with approved articles only. Pending drafts are absent from public hub, route content, bundles and sitemap. Unknown/pending production routes return notFound. Review source lives under docs/editorial, not public. This build-time gate is stronger than a robots tag alone.

To publish after actual review, edit each source record: reviewStatus=approved, a real reviewer name, and reviewedAt in ISO date form. Clinician and office must approve the wording and actual processes; retain that approval evidence in the business's records. The generator then includes the article, links it from the resource hub and adds its canonical URL to the sitemap. Do not use invented names or dates to bypass this gate.

## Plan coverage

| Plan work | Implementation / remaining condition |
| --- | --- |
| Existing service map | Preserved actual routes. Base commit history explicitly retires IV therapy and weight loss, so no new pages target them. Retained the existing retirement redirects. Peptide availability and exact offerings require clinical/office confirmation. |
| Homepage and resource discovery | Added a contextual patient-resource entry section; retained the existing resource navigation and brand route. |
| Men's, women's, estrogen/progesterone pages | Updated titles/descriptions, neutral consultation copy and questions. Removed unsupported outcome lists and symptom-based eligibility language from these three pages. Shared service template now includes evaluation, alternatives, risks, monitoring and appointment confirmation information. |
| Provider trust | Added a practical care-team question section. Existing owner biography retained. Licenses, degrees, specialty credentials, clinician authorship and claim verification cannot be invented and remain an evidence task. |
| Four blog posts | Complete, integrated, sourced and gated as above. |
| Local pages | Clarified one Tupelo office, distinct service-area access, appointment-format confirmation. Updated metadata and shared clinic entity ID instead of implying a separate clinic in each city. No fabricated offices or city-page expansion. |
| Canonicals and schema | Existing SSR canonical policy retained. Consistent #clinic identity on root and location schema. Existing article and breadcrumb templates reused. No ratings added. Host redirect behavior still needs hosting-level verification. |
| Sitemap / crawl | Removed booking and qualification routes from sitemap and added noindex,follow. Generator includes only approved editorial posts. Existing live guide URLs retained. No arbitrary lastmod changes across the whole site. |
| Conversion reliability | Contact and quiz now show success only after a successful HTTP delivery response. Failed or network delivery exposes a readable error and retains input. Local and preview hosts cannot send live forms. No sensitive console logging. Unit tests stub delivery responses and check failure/success. A 2xx confirms endpoint receipt, not a completed appointment or downstream CRM processing. |
| Privacy-aware measurement | Existing GA ID retained. Generic public pages can retain pageviews and Google/Bing search-origin attribution. No symptoms, goals, query strings, fragments, detailed treatment titles or form values sent by custom events. Health-specific resources/services, intake, booking and contact pages are excluded. Automatic GHL form capture removed pending review. See measurement caveats below. |
| Google/Bing/IndexNow | Added production-only IndexNow tooling with dry-run default, host/key/URL/sitemap checks, deduplication and response checking. No submission performed. Bing ownership, baseline, sitemap submission, URL inspection, GSC manual/security actions and account changes require signed-in account work after release. |
| Local authority and offsite | Profile reconciliation, licensure/service verification, photo permissions and appropriate directory updates remain business/account work. No outreach or review solicitation performed. |
| Performance / accessibility | Existing SSR and responsive templates retained. No new large image or third-party dependency. Typecheck, build and SEO tests validate code. Full field CWV and post-release traffic require real-user data over time; no guaranteed lab score or traffic claim. |
| Ongoing measurement | Compare matched 28-day periods and same-period prior year where available. Track branded vs non-branded and relevant service intent. Review 30/60/90 day traffic and office-confirmed qualified appointment outcomes. No automation created. |

## Measurement release prerequisites

The new privacy boundary intentionally changes measurement coverage. Do not compare partial new totals directly to the old full-site totals without annotating deployment and matching the same page set. Existing reported organic key events were zero and do not establish zero leads. Search Console remains the full-site SEO discovery baseline. Confirmed consultations need aggregate first-party office/booking reconciliation.

GA loading is gated to the actual production hostname and general pages. The bootstrap disables GA before sensitive SPA push/replace history transitions and on click/back navigation. Tests verify pre-transition disable and sanitized search referrer. No live collection requests were sent to GA during tests. Remote GA Enhanced Measurement settings remain uninspected: disable automatic form interactions and history-based pageviews in the property, validate with an intercepted-network preview, and confirm privacy/consent requirements before release. Do not claim these local changes alone audit every remote tag setting.

Call and booking clicks are intent events, not leads. Neither quiz completion nor form contents is sent to GA. Use aggregate office/CRM reporting for qualified requests and completed bookings unless an approved, non-sensitive completion measurement design is established. Clinical intake transmission and the existing client-side webhook integration still need an operational privacy/security review; this branch does not certify their compliance.

## IndexNow release procedure

1. Choose a new host-specific key in the release environment and run `INDEXNOW_KEY=... npm run indexnow -- --prepare-key`. Review the generated verification file and include it in the approved deployment.
2. Create changed-urls.json listing only changed canonical public URLs, excluding pending articles and private routes.
3. Run `INDEXNOW_KEY=... npm run indexnow -- --urls=changed-urls.json` for a dry run.
4. After approved production deployment and live verification, use VERCEL_ENV=production and --submit. Logs contain counts/status only. Handle a 429 using Retry-After and investigate other failures; do not loop blindly.
5. Submission receipt does not guarantee indexing or ranking. Confirm results in Bing Webmaster Tools separately.

## Verification and release checklist

- Bun installation succeeded; the pre-merge review security-updated the existing Bun lock.
- TypeScript check passes against locked dependency versions.
- Build passes and pending draft article content is excluded.
- Eight automated SEO/privacy/delivery tests and four production-server tests pass, including failed/successful mocked delivery, sanitized attribution, host gating and pre-navigation suppression.
- ESLint passes with six pre-existing fast-refresh warnings in UI primitives, no errors.
- Desktop and 390x844 mobile article previews inspected: body visible, no horizontal overflow, and no opacity-hidden paragraphs. The existing tall article Reveal wrapper was removed so reading does not depend on scroll animation.
- No production lead submissions made. Do not test with real personal information or real webhooks.
- Verify hosting source branch, actual Node runtime, HTTP/www canonical redirects, tracking configuration and medical/business evidence before release.
- Obtain explicit clinical/operational article review and review imagery and older guide claims. Unsupported global rating strips, the homepage testimonial section, patient-count and same-week stats were removed from display; quote source data remains for evidence review before any reinstatement. These existing claims were not independently verified and are not newly endorsed.
