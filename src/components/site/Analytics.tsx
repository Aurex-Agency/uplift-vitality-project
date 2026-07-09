import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";
import { trackEvent } from "@/lib/analytics";

type Gtag = (...args: unknown[]) => void;

/**
 * Explicit GA4 pageview tracking for this single-page app, plus site-wide
 * conversion click tracking.
 *
 * Pageviews: gtag's automatic page_view is disabled (send_page_view: false in
 * the root head), so we fire one page_view per route change here, including the
 * initial load. Keyed on the full href so path and query changes both count.
 * This does not depend on GA4 Enhanced Measurement's history-based tracking.
 *
 * Clicks: a single delegated listener fires `book_appointment_click` for any
 * link to /book and `call_click` for any tel: link, so every Book/Call button
 * across the site is covered without tagging each one.
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

  useEffect(() => {
    function onClick(e: MouseEvent) {
      const target = e.target as Element | null;
      const anchor = target?.closest?.("a");
      if (!anchor) return;
      const link = anchor.getAttribute("href") || "";
      const label = (anchor.textContent || "").trim().slice(0, 60);
      if (link.startsWith("tel:")) {
        trackEvent("call_click", { link_url: link, link_text: label });
      } else if (link === "/book" || link.startsWith("/book?") || link.startsWith("/book#")) {
        trackEvent("book_appointment_click", { link_text: label });
      }
    }
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
