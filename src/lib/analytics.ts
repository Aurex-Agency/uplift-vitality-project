type Gtag = (...args: unknown[]) => void;
// Keep in sync with safe() in analytics-bootstrap.ts and the Analytics section of the
// privacy policy (src/routes/privacy.tsx) when changing measured pages or events.
const safePaths = new Set(["/", "/about", "/services", "/resources", "/payment-plans"]);
export const isPublicMeasurementPath = (path: string) =>
  safePaths.has(path.replace(/\/$/, "") || "/") || /^\/locations\/[a-z-]+$/.test(path);
const allowed = new Set(["call_click", "book_appointment_click", "cherry_apply_click"]);
export function trackEvent(name: string, _params?: Record<string, unknown>) {
  if (
    !import.meta.env.PROD ||
    typeof window === "undefined" ||
    window.location.hostname !== "upliftmedicalms.com" ||
    !isPublicMeasurementPath(window.location.pathname) ||
    !allowed.has(name)
  )
    return;
  const w = window as unknown as { gtag?: Gtag };
  w.gtag?.("event", name, {
    page_location: window.location.origin + window.location.pathname,
    page_title: "Uplift Medical",
  });
}
