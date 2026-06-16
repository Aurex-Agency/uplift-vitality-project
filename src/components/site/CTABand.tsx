import { CTAButton } from "./CTAButton";
import { SITE } from "./site-data";

export function CTABand({
  headline = "Ready to feel uplifted?",
  subhead = "Book your consultation today and start your journey to more energy, confidence, and vitality.",
}: {
  headline?: string;
  subhead?: string;
}) {
  return (
    <section className="navy-gradient relative overflow-hidden py-20 text-cream md:py-28">
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-[0.06]" />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <span className="eyebrow">Begin Today</span>
        <h2 className="mt-4 font-display text-4xl leading-tight md:text-6xl">{headline}</h2>
        <p className="mx-auto mt-5 max-w-xl text-cream/80">{subhead}</p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <CTAButton to="/book" variant="gold">
            Book an Appointment
          </CTAButton>
          <CTAButton
            href={SITE.phoneHref}
            variant="outline"
            className="border-gold text-cream hover:bg-gold hover:text-primary"
          >
            Call {SITE.phone}
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
