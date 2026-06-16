# Uplift Medical Marketing Site

A production-quality, editorial marketing site for a concierge hormone and wellness clinic in Tupelo, MS. Navy and gold luxe-clinical aesthetic, serif display + clean sans, generous whitespace, tasteful scroll-reveal motion.

## Brand & design system

Set up in `src/styles.css` as Tailwind v4 `@theme` tokens (no `tailwind.config.js`):
- Colors (oklch-converted from the supplied hex): navy `#0E2A47`, gold `#C8A45C`, cream `#FAF7F1`, white, charcoal `#1F2933`, slate `#5B6B7B`, border `#E7E1D6`. Mapped to shadcn semantic tokens (`--background` = cream, `--primary` = navy, `--accent` = gold, etc.) so existing shadcn components inherit the palette.
- Fonts: Cormorant Garamond (display) + Inter (body), loaded via `<link>` tags in `__root.tsx` head (never `@import` URLs in CSS). Tokens `--font-display`, `--font-sans`.
- Reusable utilities: `.eyebrow` (uppercase tracked small caps label), `.gold-divider` (1px gold rule), soft layered shadow token, 12–16px radii.
- Motion: a small `Reveal` wrapper using IntersectionObserver for fade-and-rise on section entrance (no extra deps; tasteful, fast, no bounce).

## Routes (TanStack Start file-based)

Each route gets its own `head()` with unique title, description, og:title, og:description. Replace the placeholder home immediately.

- `src/routes/index.tsx` – Home
- `src/routes/about.tsx`
- `src/routes/contact.tsx`
- `src/routes/book.tsx`
- `src/routes/qualify.tsx`
- `src/routes/services.index.tsx` (Services overview; also reachable from nav dropdown)
- `src/routes/services.hormone-therapy-men.tsx`
- `src/routes/services.hormone-therapy-women.tsx`
- `src/routes/services.progesterone-estrogen.tsx`
- `src/routes/services.peptide-therapy.tsx`
- `src/routes/services.iv-therapy.tsx`
- `src/routes/services.weight-loss.tsx`
- `src/routes/privacy.tsx`, `src/routes/terms.tsx` (simple styled placeholders)
- 404 styled via existing `__root.tsx` `notFoundComponent` (restyled to match brand)

`__root.tsx` keeps the QueryClient provider and `<Outlet />`, adds the font `<link>` tags, top utility bar, sticky `Navbar`, and `Footer` wrapping `<Outlet />`.

## Shared components (`src/components/site/`)

- `Navbar.tsx` – sticky, transparent → solid on scroll (scroll listener + boolean state), serif "UPLIFT MEDICAL" wordmark with a small gold accent mark, Services dropdown (desktop hover/click, mobile accordion), primary "Book Appointment" CTA, secondary "See If You Qualify" link, hamburger drawer (Sheet) on mobile.
- `Footer.tsx` – logo + positioning line, quick links, services list, contact block (address, click-to-call, hours), Facebook link, small-print row (© Uplift Medical, Privacy, Terms), medical disclaimer line.
- `TopUtilityBar.tsx` – thin navy/gold bar with click-to-call.
- `Logo.tsx` – swappable wordmark component.
- `Button.tsx` – primary (navy/white, hover lift), secondary (gold outline), ghost; pill/rounded. Built as a shadcn Button variant extension so existing UI still works.
- `SectionHeading.tsx` – eyebrow + serif headline + optional subhead.
- `ServiceCard.tsx`, `BenefitCard.tsx`, `StepItem.tsx`, `TestimonialCard.tsx`, `FAQAccordion.tsx` (wraps shadcn Accordion), `CTABand.tsx`, `Reveal.tsx`.
- `FormField.tsx` – label + input/textarea + inline validation state.
- Service page template `ServicePageLayout.tsx` consumed by all six service routes with a typed content object (hero, intro, signs[], benefits[], includeQualifyLink).

## Qualify quiz (`/qualify`)

Custom polished multi-step funnel, one question per screen.

- `QuizContainer` manages state with `useState` (no localStorage): `step`, `answers` keyed by step id, `contact` object, `errors`.
- `ProgressBar` (thin gold fill on cream track) + step count.
- `QuizStep` wrapper with fade-and-slide transition (CSS keyframes, ~200ms).
- Question components: single-select card grid, multi-select card grid, contact capture form.
- Steps exactly as specified (concern, symptoms multi, hormones-checked, goal, age range, contact + consents).
- Required-field validation with inline errors; full keyboard accessibility (role=button cards, Enter/Space toggle, focus rings).
- `submitLead(payload)` placeholder function in `src/lib/leads.ts` with a clear TODO comment for the GHL webhook; for now logs to console and advances to the results screen.
- Results screen: encouraging copy + "Book an Appointment" CTA + click-to-call.

## Page content

All copy used verbatim from the brief. Voice: confident, warm, premium. **Hard rule enforced site-wide: no em dashes** in copy, headings, buttons, alt text, or JSX. A final grep for the em-dash character before sign-off.

- Home: hero, welcome, telehealth navy band, services grid (6 cards linking to service pages), 4-step How It Works, Why Uplift benefits, qualify quiz teaser band, testimonials (3 supplied quotes with 5-star marks), FAQ accordion (7 supplied Q&As), final CTA band.
- Service pages: shared layout, all supplied copy (intro, signs where applicable, benefits), shared How It Works, closing CTA, qualify link on hormone pages.
- About: hero, Our Story, Meet the Owner with headshot slot + Kenny's full quote, optional team grid placeholder, testimonials, CTA band.
- Contact: two-column form + details, Google Maps iframe for 144 S Thomas St, Suite 102, Tupelo, MS 38801, `submitContact(payload)` placeholder.
- Book: hero, primary click-to-call, clearly labeled placeholder container for the scheduler embed (with code comment), hours + address reinforcement.
- Privacy / Terms: clean typographic placeholders styled to match.

## Imagery

Use Unsplash URLs for tall editorial hero crops and lifestyle/wellness imagery (calm, natural light, 30–60s). Every `<img>` gets descriptive alt text and a comment marker like `{/* IMAGE SLOT: hero portrait */}` so real photos can be swapped in. No image generation needed for this build.

## Accessibility & responsive

Semantic HTML (`header`, `nav`, `main`, `section`, `footer`), single H1 per page, ordered headings, visible focus rings on all interactive elements, AA contrast checked against the palette (gold used for accents/borders/large text, not small body text on cream). Mobile-first layouts, hamburger drawer, tap targets ≥44px, fluid type with `clamp()` for display headings.

## Technical notes

- Stack: TanStack Start + Tailwind v4 + shadcn (already present). No new heavy deps; reuse existing `Accordion`, `Sheet`, `Input`, `Textarea`, `Checkbox`, `Button`.
- Fonts loaded via `<link>` in `__root.tsx` head with preconnect to fonts.gstatic.com.
- Scroll-reveal via a tiny IntersectionObserver hook, no Framer Motion install.
- All forms are client-side only with placeholder submit functions; no backend wiring this pass (Lovable Cloud not enabled — none of the supplied features require persistence yet).
- 404 page restyled in `__root.tsx`'s `notFoundComponent` to match the brand.
- Final self-check pass: em-dash grep, single-Tupelo-location grep (no Oxford/Southaven/Memphis), responsive spot-checks at mobile/tablet/desktop, all six service routes reachable from nav dropdown and services index.
