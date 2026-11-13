import { useEffect } from "react";
import { useLocation } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import teamPhoto from "@/assets/team.jpg";
import { cherryConfig, isCherryFloatingPath, loadCherry } from "@/lib/cherry";
import { CTAButton } from "./CTAButton";

/**
 * Loads Cherry for the whole site (floating estimate button + full-page widget on
 * /payment-plans). Rendered once in the root layout.
 * Off on intake pages: the script is not loaded when a visit starts there, and
 * an already-mounted button is hidden through html[data-cherry-floating="off"].
 */
export function CherryLoader() {
  const pathname = useLocation({ select: (l) => l.pathname });
  const enabled = isCherryFloatingPath(pathname);

  useEffect(() => {
    document.documentElement.dataset.cherryFloating = enabled ? "on" : "off";
    // Uplift's own photo is the widget image; it must be an absolute URL.
    if (enabled) loadCherry(cherryConfig(new URL(teamPhoto, window.location.origin).href));
  }, [enabled]);

  return null;
}

/** Promotes Cherry payment plans and links to the full Payment Plans page. */
export function FinancingCallout() {
  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col gap-6 rounded-3xl border border-hairline bg-white p-8 shadow-[0_20px_40px_-28px_rgba(14,42,71,0.25)] md:flex-row md:items-center md:justify-between md:p-10">
          <div className="max-w-xl">
            <span className="eyebrow">Payment Plans</span>
            <h2 className="mt-3 font-display text-3xl leading-tight text-primary md:text-4xl">
              Pay over time with Cherry.
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Cherry is our primary financing option. See estimated monthly payments for your care
              and apply online.
            </p>
          </div>
          <CTAButton to="/payment-plans" className="shrink-0">
            See Payment Plans
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
