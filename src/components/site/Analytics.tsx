import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

type Gtag = (...args: unknown[]) => void;

/**
 * Explicit GA4 pageview tracking for this single-page app.
 * gtag's automatic page_view is disabled (send_page_view: false in the root
 * head), so we fire one page_view per route change here, including the initial
 * load. Keyed on the full href so path and query changes both count. This does
 * not depend on GA4 Enhanced Measurement's history-based tracking.
 */
export function Analytics() {
  const href = useRouterState({ select: (s) => s.location.href });

  useEffect(() => {
    const w = window as unknown as { gtag?: Gtag };
    if (typeof w.gtag !== "function") return;
    // Defer a frame so the new document title (set via <head>) is current.
    const raf = requestAnimationFrame(() => {
      w.gtag?.("event", "page_view", {
        page_path: window.location.pathname + window.location.search,
        page_location: window.location.href,
        page_title: document.title,
      });
    });
    return () => cancelAnimationFrame(raf);
  }, [href]);

  return null;
}
