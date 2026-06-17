I found the remaining gap is coming from the root layout, not the Footer component: `<main>` still has `pb-20` on mobile, which adds bottom padding before the footer.

Plan:
1. Update `src/routes/__root.tsx` so the main content no longer adds bottom padding above the footer.
2. Preserve the mobile fixed CTA bar behavior separately so page content still isn’t hidden behind it, without creating a visible gap before the footer.
3. Verify the `/services/weight-loss` page at mobile size to confirm the CTA section touches the footer with no dead space.