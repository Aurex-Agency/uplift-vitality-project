type Gtag = (...args: unknown[]) => void;

/**
 * Fire a Google Analytics 4 event. No-op on the server or before gtag loads
 * (calls still queue in the dataLayer, so nothing is lost).
 */
export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  const w = window as unknown as { gtag?: Gtag };
  if (typeof w.gtag !== "function") return;
  w.gtag("event", name, params ?? {});
}
