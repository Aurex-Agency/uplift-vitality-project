# SEO and schema review, 2026-10-16

Removed undocumented $$ priceRange. Added pretypecheck editorial generation so clean checkouts typecheck without exposing pending clinical articles. Formatted the existing production regression test to satisfy lint.

Based on the verified Vercel production source `main` at `d889ccd3dda1`. Reviewed existing SEO work before making this focused follow-up.

Validation: frozen Bun lockfile install; lint; typecheck; build; SEO tests; production SSR tests. The built-page validator parsed 51 JSON-LD blocks across 23 HTML files using the official Schema.org vocabulary and found no issues in the implemented checks. Representative homepage checks at desktop and mobile widths found no horizontal overflow, with primary conversion paths present. No production lead was submitted.

Remaining dependencies: Four pending editorial articles remain gated for qualified clinician approval. Historical IV/weight-loss query demand does not authorize restoring retired services.

This PR is independently reviewable. After release, recrawl production and recheck Search Console; local validation does not guarantee Google indexing or rich-result display.
