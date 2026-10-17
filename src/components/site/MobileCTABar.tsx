import { Link, useLocation } from "@tanstack/react-router";
import { Phone, CalendarCheck } from "lucide-react";
import { SITE } from "./site-data";

/**
 * Sticky bottom action bar shown only on small screens.
 * Keeps the two highest-intent actions (book / call) one tap away.
 * Hidden on the booking page (redundant, could overlap the scheduler)
 * and on the quiz (it overlaps quiz controls and competes with the
 * quiz's own conversion flow).
 */
export function MobileCTABar() {
  const pathname = useLocation({ select: (l) => l.pathname });
  if (pathname === "/book" || pathname === "/qualify") return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-hairline bg-background px-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 lg:hidden">
      <div className="flex items-center gap-2">
        <a
          href={SITE.phoneHref}
          className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full border border-primary/30 bg-white text-sm font-semibold text-primary"
        >
          <Phone className="h-4 w-4" /> Call
        </a>
        <Link
          to="/book"
          className="gold-gradient gold-glow inline-flex h-12 flex-[1.4] items-center justify-center gap-2 rounded-full text-sm font-semibold text-primary"
        >
          <CalendarCheck className="h-4 w-4" /> Book Appointment
        </Link>
      </div>
    </div>
  );
}
