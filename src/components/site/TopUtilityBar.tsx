import { SITE } from "./site-data";
import { Phone, Star } from "lucide-react";

export function TopUtilityBar() {
  return (
    <div className="navy-gradient hidden w-full text-primary-foreground md:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs tracking-wide">
        <div className="flex items-center gap-5">
          <p className="opacity-90">Concierge hormone &amp; wellness care in Tupelo, MS</p>
          <span className="hidden items-center gap-1.5 lg:inline-flex">
            <span className="flex text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3 w-3 fill-current" />
              ))}
            </span>
            <span className="text-primary-foreground/80">Rated 5.0 by patients</span>
          </span>
        </div>
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
