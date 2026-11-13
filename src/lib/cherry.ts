/**
 * Cherry payment plans: Uplift Medical's primary financing option.
 *
 * The configuration below matches the embed script that Cherry's Widget Builder
 * produces (provider.withcherry.com/script-generator, application slug
 * "uplift-medical-llc", industry segment "medspa"). It is adapted for this
 * single-page app:
 *  - Cherry's script must load only once per page load (it throws on a second load),
 *    so the loader is guarded and runs from the root layout.
 *  - The full-page widget renders into #all. After a client-side navigation back to
 *    /payment-plans, it is mounted again with `_hw("all")`.
 *  - The floating estimate button is not shown on intake pages (booking and the quiz),
 *    and the script is not loaded at all when a visit starts on one of them.
 *
 * To restyle the widget, adjust it in the Widget Builder and copy the values from its
 * generated `_hw("init", …)` call into `cherryConfig` below.
 */

export const CHERRY_SLUG = "uplift-medical-llc";
export const CHERRY_SCRIPT_SRC = "https://files.withcherry.com/widgets/widget.js";
// Same pre-qualification link the widget opens; used as a no-script / blocked-script fallback.
export const CHERRY_APPLY_URL = `https://pay.withcherry.com/${CHERRY_SLUG}?utm_source=merchant&utm_medium=website`;
export const CHERRY_FULL_PAGE_ID = "all";
export const CHERRY_FLOATING_ID = "floatingEstimator";

// Matches MobileCTABar: the scheduler and the quiz keep their own conversion flow.
const FLOATING_EXCLUDED_PATHS = new Set(["/book", "/qualify"]);

export function isCherryFloatingPath(pathname: string) {
  const path = pathname.replace(/\/+$/, "") || "/";
  return !FLOATING_EXCLUDED_PATHS.has(path);
}

const NAVY = "#0e2a47";
const CREAM = "#faf6ee";

export function cherryConfig(heroImageUrl: string) {
  return {
    debug: false,
    variables: {
      slug: CHERRY_SLUG,
      name: "Uplift Medical",
      customLogo: "",
      customImage: heroImageUrl,
      customImageAlt: "Wearing the Uplift Medical tank top at the gym",
      defaultPurchaseAmount: 1000,
      imageCategory: "medspa",
      language: "en",
    },
    styles: {
      primaryColor: NAVY,
      secondaryColor: CREAM,
      fontFamily: "Inter",
      headerFontFamily: "Cormorant Garamond",
      floatingEstimator: {
        position: "bottom-right",
        // The y offset reads a CSS variable so the button can sit above the mobile
        // action bar on small screens (see "Cherry" in styles.css).
        offset: { x: "0px", y: "var(--uplift-cherry-offset-y, 0px)" },
        // Above page content and the sticky header (z-40); below dialogs and sheets (z-50).
        zIndex: 45,
        ctaFontFamily: "Inter",
        bodyFontFamily: "Inter",
        ctaColor: NAVY,
        ctaTextColor: "#ffffff",
      },
    },
  };
}

type CherryFn = ((...args: unknown[]) => void) & { q?: unknown[][] };
type CherryWindow = Window & { _hw?: CherryFn; upliftCherryRequested?: boolean };

/** Queues Cherry's init call and injects its script, once per page load. */
export function loadCherry(config: ReturnType<typeof cherryConfig>) {
  const w = window as CherryWindow;
  if (w.upliftCherryRequested) return;
  w.upliftCherryRequested = true;
  const queue: CherryFn = (...args: unknown[]) => {
    (queue.q = queue.q || []).push(args);
  };
  w._hw = queue;
  queue("init", config, [CHERRY_FULL_PAGE_ID, CHERRY_FLOATING_ID]);
  const script = document.createElement("script");
  // Cherry's script finds its queue through the id of its own script tag.
  script.id = "_hw";
  script.src = CHERRY_SCRIPT_SRC;
  script.async = true;
  document.body.appendChild(script);
}

/**
 * Mounts the full-page widget into #all when Cherry's script has already loaded.
 * Before it loads, the queued init call renders #all itself once the script arrives.
 * The pre-load queue must never receive a bare widget name: Cherry would fail on it.
 */
export function mountCherryFullPage() {
  const hw = (window as CherryWindow)._hw;
  if (typeof hw === "function" && !hw.q) hw(CHERRY_FULL_PAGE_ID);
}
