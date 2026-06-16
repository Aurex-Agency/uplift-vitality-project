import { SITE } from "./site-data";
import { Phone } from "lucide-react";

export function TopUtilityBar() {
  return (
    <div className="hidden w-full bg-primary text-primary-foreground md:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs tracking-wide">
        <p className="opacity-90">
          Concierge hormone and wellness care in Tupelo, MS.
        </p>
        <a
          href={SITE.phoneHref}
          className="inline-flex items-center gap-2 font-medium text-gold transition hover:opacity-80"
        >
          <Phone className="h-3.5 w-3.5" />
          Call {SITE.phone}
        </a>
      </div>
    </div>
  );
}