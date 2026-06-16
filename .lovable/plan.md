## Goal
Replace Unsplash placeholders with the real Uplift Medical photos and logos the user uploaded, and ensure they load fast.

## Assets to upload (via `lovable-assets` CLI → CDN, not bundled)
1. `kenny-portrait.png` — solo headshot of owner (couch, white shirt)
2. `kenny-injection.jpg` — close-up holding syringe
3. `team.jpg` — full team group photo
4. `logo-primary.svg` — first SVG (primary brand logo)
5. `logo-secondary.svg` — second SVG (alt/monogram)

Each gets a `src/assets/<name>.asset.json` pointer. Imported via ES6 and referenced by `.url`. CDN-served, cached, fast.

## Where each photo goes

**Owner headshot (`kenny-portrait`)**
- `src/routes/about.tsx` → "Meet the Owner" image slot (replaces current Unsplash portrait, removes "Image slot" caption)
- `src/routes/index.tsx` → small framed inset in an "About the Founder" teaser block on the home page (if not already present, add a compact 2-col band linking to /about)

**Injection close-up (`kenny-injection`)**
- `src/routes/index.tsx` → hero image (replace current hero placeholder) — sets the editorial tone immediately
- `src/routes/services.hormone-therapy-men.tsx` → hero image
- `src/routes/services.peptide-therapy.tsx` → secondary/in-body image

**Team photo (`team.jpg`)**
- `src/routes/about.tsx` → replace the 3-circle "Team Member" placeholder grid with a single full-width editorial team photo + short caption
- `src/routes/index.tsx` → "Why Uplift" or testimonials adjacent band as a wide image strip

**Logos**
- `src/components/site/Logo.tsx` → use `logo-primary.svg` (currently text/SVG mark). Keep responsive sizing; navy version for light bg, ensure footer variant works on dark navy (use secondary logo if it's a light/mono variant; otherwise apply CSS `filter: brightness(0) invert(1)` for footer).
- `src/components/site/Footer.tsx` → wire footer logo through the same component.
- Favicon: update `<link rel="icon">` in `__root.tsx` to point at the primary logo asset URL.

## Performance
- Lovable Assets are served via Cloudflare R2 with aggressive CDN caching — fast by default.
- Hero image on `/` gets `loading="eager"` + `fetchpriority="high"` and a `<link rel="preload" as="image">` in that route's `head().links`.
- All other photos: `loading="lazy"` + `decoding="async"`.
- Add explicit `width`/`height` attributes to prevent CLS.
- Provide descriptive alt text on every image (no em dashes).

## OG/social
- Update `og:image` in `__root.tsx` and per-route heads to use the hero injection photo URL (currently points to a stale preview screenshot).

## Out of scope
No layout/typography rework, no copy changes, no new sections beyond the small founder teaser on home if needed to feature the portrait.

## Technical notes
- Uploads use `lovable-assets create --file /mnt/user-uploads/<file> --filename <name>` written to `src/assets/<name>.asset.json`.
- Import pattern: `import portrait from "@/assets/kenny-portrait.png.asset.json"` then `<img src={portrait.url} … />`.
- Logo SVGs: import the `.asset.json` and render via `<img>` (keeps SVG features, still cached). If precise color control is needed later we can inline.
