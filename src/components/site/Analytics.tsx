import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";
import { trackEvent, isPublicMeasurementPath } from "@/lib/analytics";
// No health-answer, query, fragment, form-value or treatment-page collection.
export function Analytics() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  useEffect(() => {
    if (
      !import.meta.env.PROD ||
      window.location.hostname !== "upliftmedicalms.com" ||
      !isPublicMeasurementPath(pathname)
    )
      return;
    const w = window as unknown as {
      gtag?: (...args: unknown[]) => void;
      upliftSearchReferrer?: string;
    };
    w.gtag?.("event", "page_view", {
      page_path: pathname,
      page_location: window.location.origin + pathname,
      page_title: "Uplift Medical",
      page_referrer: w.upliftSearchReferrer || "",
    });
  }, [pathname]);
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const link = (e.target as Element | null)?.closest?.("a")?.getAttribute("href") || "";
      if (link.startsWith("tel:")) trackEvent("call_click");
      else if (link === "/book") trackEvent("book_appointment_click");
    }
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);
  return null;
}
