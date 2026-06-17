import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { CTAButton } from "@/components/site/CTAButton";
import { SITE } from "@/components/site/site-data";
import { MapPin, Phone, Clock } from "lucide-react";
import { useEffect } from "react";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book an Appointment | Uplift Medical, Tupelo MS" },
      { name: "description", content: "Book your consultation with Uplift Medical. Concierge hormone, weight loss, peptide, and IV therapy in Tupelo, MS." },
      { property: "og:title", content: "Book an Appointment | Uplift Medical" },
      { property: "og:description", content: "Start your journey to feeling uplifted. Choose a time or call us directly." },
    ],
  }),
  component: Book,
});

function Book() {
  useEffect(() => {
    const existing = document.querySelector<HTMLScriptElement>(
      'script[src="https://link.msgsndr.com/js/form_embed.js"]'
    );
    if (existing) return;
    const s = document.createElement("script");
    s.src = "https://link.msgsndr.com/js/form_embed.js";
    s.async = true;
    document.body.appendChild(s);
  }, []);

  return (
    <>
      <section className="bg-background pt-14 pb-10 md:pt-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <span className="eyebrow">Book Your Appointment</span>
            <h1 className="mt-5 font-display text-5xl leading-[1.05] text-primary md:text-7xl">
              Start your journey to feeling uplifted.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Booking is easy. Choose a time that works for you, or call us directly and our team will get you scheduled.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-background pb-24 md:pb-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-hairline bg-white p-4 sm:p-8 md:p-12">
              <div className="flex flex-col items-center text-center">
                <CTAButton href={SITE.phoneHref} variant="gold">
                  <Phone className="h-4 w-4" /> Call {SITE.phone}
                </CTAButton>
                <p className="mt-4 text-sm text-muted-foreground">
                  Prefer to book online? Use the scheduler below.
                </p>
              </div>
              <div className="mt-8 -mx-4 sm:mx-0">
                <iframe
                  src="https://api.leadconnectorhq.com/widget/booking/MFomhe6DLDUH3epL2IeI"
                  id="YvaIns8LkHwNtABgDEmD_1781735960215"
                  scrolling="no"
                  style={{ width: "100%", minWidth: 0, border: "none", display: "block", minHeight: 760 }}
                />
              </div>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <Info icon={MapPin} title="Location">{SITE.address}</Info>
            <Info icon={Clock} title="Hours">
              {SITE.hours.map((h) => (
                <div key={h.day} className="text-sm">
                  <span className="text-muted-foreground">{h.day}: </span>
                  {h.time}
                </div>
              ))}
            </Info>
            <Info icon={Phone} title="Phone">
              <a href={SITE.phoneHref} className="hover:text-gold">{SITE.phone}</a>
            </Info>
          </div>
        </div>
      </section>
    </>
  );
}

function Info({ icon: Icon, title, children }: { icon: any; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-hairline bg-white p-6">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gold/15 text-gold">
        <Icon className="h-4 w-4" />
      </span>
      <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">{title}</p>
      <div className="mt-1 text-base text-foreground">{children}</div>
    </div>
  );
}