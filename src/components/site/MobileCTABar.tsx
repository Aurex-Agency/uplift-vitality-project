import { Link, useLocation } from "@tanstack/react-router";
import { Phone, CalendarCheck } from "lucide-react";
import { SITE } from "./site-data";

/**
 * Sticky bottom action bar shown only on small screens.
 * Keeps the two highest-intent actions (book / call) one tap away.
 * Hidden on the booking page, where it would be redundant and could
 * overlap the scheduler.
 */
export function MobileCTABar() {
  const pathname = useLocation({ select: (l) => l.pathname });
  if (pathname === "/book") return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-hairline bg-background/95 px-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 backdrop-blur lg:hidden">
      <div className="flex items-center gap-2">
        <a
          href={SITE.phoneHref}
          className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full border border-primary/30 bg-white text-sm font-semibold text-primary"
        >
          <Phone className="h-4 w-4" /> Call
        </a>
        <Link
          to="/book"
          className="inline-flex h-12 flex-[1.4] items-center justify-center gap-2 rounded-full bg-primary text-sm font-semibold text-primary-foreground shadow-[0_8px_24px_-10px_rgba(14,42,71,0.6)]"
        >
          <CalendarCheck className="h-4 w-4" /> Book Appointment
        </Link>
      </div>
    </div>
  );
}
