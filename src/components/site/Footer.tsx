import { Link } from "@tanstack/react-router";
import { Facebook, MapPin, Phone, Clock } from "lucide-react";
import { Logo } from "./Logo";
import { SERVICES, SITE } from "./site-data";

export function Footer() {
  return (
    <footer className="navy-gradient relative mt-24 border-t border-hairline text-primary-foreground">
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-[0.05]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="text-cream">
            <Logo tone="cream" />
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-primary-foreground/75">
            Concierge hormone and wellness care. Personalized treatment that restores energy,
            confidence, and vitality.
          </p>
          <a
            href={SITE.facebook}
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="mt-6 inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-gold transition hover:bg-gold hover:text-primary"
          >
            <Facebook className="h-4 w-4" />
          </a>
        </div>

        <div>
          <p className="eyebrow">Explore</p>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/services", label: "Services" },
              { to: "/qualify", label: "Qualify Quiz" },
              { to: "/contact", label: "Contact" },
              { to: "/book", label: "Book Appointment" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-primary-foreground/80 transition hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow">Services</p>
          <ul className="mt-4 space-y-2 text-sm">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link
                  to={`/services/${s.slug}` as string}
                  className="text-primary-foreground/80 transition hover:text-gold"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow">Visit Us</p>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>{SITE.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href={SITE.phoneHref} className="hover:text-gold">
                {SITE.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <div>
                {SITE.hours.map((h) => (
                  <div key={h.day}>
                    <span className="text-primary-foreground/60">{h.day}: </span>
                    {h.time}
                  </div>
                ))}
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 text-xs text-primary-foreground/60 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Uplift Medical. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link to="/privacy" className="hover:text-gold">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-gold">
              Terms of Service
            </Link>
          </div>
        </div>
        <p className="mx-auto max-w-7xl px-6 pb-8 text-xs leading-relaxed text-primary-foreground/50">
          The information on this site is for educational purposes and is not a substitute for
          medical advice. Individual results vary.
        </p>
      </div>
    </footer>
  );
}
