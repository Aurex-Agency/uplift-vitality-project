import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ChevronDown } from "lucide-react";
import { Logo } from "./Logo";
import { SERVICES, SITE } from "./site-data";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-hairline bg-background/90 shadow-[0_4px_24px_-12px_rgba(14,42,71,0.18)] backdrop-blur"
          : "bg-background/60 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
        <Logo />

        <div className="hidden items-center gap-8 lg:flex">
          <NavLink to="/" exact>Home</NavLink>
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              onClick={() => setServicesOpen((s) => !s)}
              className="inline-flex items-center gap-1 text-sm font-medium text-foreground transition hover:text-primary"
            >
              Services <ChevronDown className="h-3.5 w-3.5" />
            </button>
            {servicesOpen && (
              <div className="absolute left-1/2 top-full -translate-x-1/2 pt-3">
                <div className="w-[320px] soft-card overflow-hidden p-2">
                  {SERVICES.map((s) => (
                    <Link
                      key={s.slug}
                      to={`/services/${s.slug}` as string}
                      className="block rounded-lg px-4 py-3 text-sm text-foreground transition hover:bg-secondary hover:text-primary"
                    >
                      {s.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/qualify"
            className="text-sm font-medium text-primary underline-offset-4 transition hover:underline"
          >
            See If You Qualify
          </Link>
          <Link
            to="/book"
            className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-medium tracking-wide text-primary-foreground shadow-sm transition hover:-translate-y-0.5 hover:bg-primary/90"
          >
            Book Appointment
          </Link>
        </div>

        <div className="lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                aria-label="Open menu"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-hairline bg-white text-primary"
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[88vw] max-w-sm bg-background p-0">
              <SheetTitle className="sr-only">Navigation</SheetTitle>
              <div className="flex items-center justify-between border-b border-hairline px-6 py-4">
                <Logo />
                <button
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full text-primary"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="flex flex-col gap-1 px-6 py-6">
                <MobileLink to="/" onClick={() => setOpen(false)}>Home</MobileLink>
                <p className="eyebrow mt-4 mb-2">Services</p>
                {SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/services/${s.slug}` as string}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-2 py-2 text-base text-foreground hover:bg-secondary"
                  >
                    {s.title}
                  </Link>
                ))}
                <div className="my-2 h-px w-full bg-hairline" />
                <MobileLink to="/about" onClick={() => setOpen(false)}>About</MobileLink>
                <MobileLink to="/contact" onClick={() => setOpen(false)}>Contact</MobileLink>
                <MobileLink to="/qualify" onClick={() => setOpen(false)}>See If You Qualify</MobileLink>
                <Link
                  to="/book"
                  onClick={() => setOpen(false)}
                  className="mt-4 inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground"
                >
                  Book Appointment
                </Link>
                <a
                  href={SITE.phoneHref}
                  className="mt-2 inline-flex h-12 items-center justify-center rounded-full border border-primary px-6 text-sm font-medium text-primary"
                >
                  Call {SITE.phone}
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}

function NavLink({ to, exact, children }: { to: string; exact?: boolean; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="text-sm font-medium text-foreground transition hover:text-primary"
      activeProps={{ className: "text-primary" }}
      activeOptions={{ exact: !!exact }}
    >
      {children}
    </Link>
  );
}

function MobileLink({ to, children, onClick }: { to: string; children: React.ReactNode; onClick?: () => void }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="rounded-md px-2 py-3 text-lg font-medium text-foreground hover:bg-secondary"
    >
      {children}
    </Link>
  );
}