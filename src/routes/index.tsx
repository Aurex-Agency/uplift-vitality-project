import { createFileRoute } from "@tanstack/react-router";
import { CTAButton } from "@/components/site/CTAButton";
import { CTABand } from "@/components/site/CTABand";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ServiceCard } from "@/components/site/ServiceCard";
import { TestimonialCard } from "@/components/site/TestimonialCard";
import { FAQAccordion } from "@/components/site/FAQAccordion";
import { HowItWorks } from "@/components/site/HowItWorks";
import { StatStrip } from "@/components/site/StatStrip";
import { SERVICES, TESTIMONIALS, FAQS, SITE } from "@/components/site/site-data";
import {
  Phone,
  ShieldCheck,
  MonitorSmartphone,
  Sparkles,
  Star,
  ArrowRight,
  Check,
} from "lucide-react";
import heroImage from "@/assets/kenny-injection.jpg.asset.json";
import teamImage from "@/assets/team.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Uplift Medical | Concierge Hormone & Wellness Care in Tupelo, MS" },
      {
        name: "description",
        content:
          "Personalized hormone therapy, medical weight loss, peptide, and IV treatments in Tupelo, MS. In-person and telehealth across MS and TN.",
      },
      { property: "og:title", content: "Uplift Medical | Concierge Hormone & Wellness Care" },
      {
        property: "og:description",
        content:
          "Restore energy, confidence, and vitality with concierge medical care designed around you.",
      },
      { property: "og:image", content: heroImage.url },
      { name: "twitter:image", content: heroImage.url },
    ],
    links: [
      { rel: "preload", as: "image", href: heroImage.url, fetchpriority: "high" } as unknown as {
        rel: string;
        href: string;
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="aurora relative overflow-hidden bg-background">
        <div className="dot-grid pointer-events-none absolute inset-0 opacity-60" />
        <div className="pointer-events-none absolute -right-40 top-10 h-[520px] w-[520px] rounded-full bg-gold/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pt-12 pb-16 md:grid-cols-12 md:items-center md:gap-10 md:pt-20 md:pb-24">
          <div className="md:col-span-6 lg:col-span-7">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/70 px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-primary backdrop-blur">
                <Sparkles className="h-3.5 w-3.5 text-gold" />
                Concierge Hormone &amp; Wellness Care
              </span>
              <h1 className="mt-6 font-display text-[2.75rem] leading-[1.0] tracking-tight text-primary sm:text-6xl md:text-[5.25rem]">
                Feel like the <span className="gradient-text">best version</span> of yourself again.
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Personalized hormone therapy, medical weight loss, peptide, and IV treatments
                designed to restore your energy, confidence, and vitality &mdash; expert care
                without the hassle of insurance.
              </p>

              {/* Rating + social proof */}
              <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2">
                <div className="flex items-center gap-2">
                  <div className="flex text-gold">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-primary">5.0</span>
                </div>
                <span className="text-sm text-muted-foreground">
                  Rated 5.0 by patients across Mississippi &amp; Tennessee
                </span>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <CTAButton to="/book">
                  Book an Appointment
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </CTAButton>
                <CTAButton to="/qualify" variant="outline">
                  See If You Qualify
                </CTAButton>
              </div>
              <div className="mt-9 flex flex-wrap gap-2">
                {[
                  { icon: ShieldCheck, label: "No insurance needed" },
                  { icon: MonitorSmartphone, label: "In-person and telehealth" },
                  { icon: Sparkles, label: "Personalized treatment plans" },
                ].map((t) => (
                  <span
                    key={t.label}
                    className="inline-flex items-center gap-2 rounded-full border border-hairline bg-white/70 px-4 py-2 text-xs font-medium tracking-wide text-foreground backdrop-blur"
                  >
                    <t.icon className="h-3.5 w-3.5 text-gold" />
                    {t.label}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
          <div className="md:col-span-6 lg:col-span-5">
            <Reveal delay={150}>
              <div className="relative">
                <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[40px] bg-gradient-to-br from-gold/20 via-transparent to-primary/10 blur-2xl" />
                {/* IMAGE SLOT: hero portrait */}
                <div className="relative overflow-hidden rounded-[28px] border border-white/40 shadow-[0_50px_100px_-40px_rgba(14,42,71,0.5)]">
                  <img
                    src={heroImage.url}
                    alt="Provider at Uplift Medical preparing a precision injection"
                    className="h-[460px] w-full object-cover sm:h-[560px] md:h-[640px]"
                    width={1440}
                    height={1800}
                    loading="eager"
                    decoding="async"
                    {...({ fetchpriority: "high" } as { fetchpriority: "high" })}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/55 via-transparent to-transparent" />
                </div>
                <div className="absolute -bottom-6 -left-4 w-52 rounded-2xl border border-hairline bg-white/95 p-5 shadow-[0_24px_48px_-24px_rgba(14,42,71,0.35)] backdrop-blur md:-left-6 md:w-56 float-soft">
                  <span className="eyebrow">Tupelo, MS</span>
                  <p className="mt-2 font-display text-lg leading-tight text-primary">
                    One office. Care that travels with you.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* STATS BAND */}
      <section className="navy-gradient relative -mt-2 overflow-hidden text-cream">
        <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 py-12 md:py-16">
          <Reveal>
            <StatStrip />
          </Reveal>
        </div>
      </section>

      {/* WELCOME */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <Reveal>
              <SectionHeading
                eyebrow="Welcome to Uplift Medical"
                title={<>Medicine that treats you like a person, not a number.</>}
              />
            </Reveal>
          </div>
          <div className="md:col-span-7">
            <Reveal delay={100}>
              <p className="text-lg leading-relaxed text-foreground">
                At Uplift Medical, we specialize in transforming lives through personalized medical
                care. Based in Tupelo, Mississippi, we help men and women restore hormonal balance,
                lose weight, and feel their best from the inside out. Whether you visit us in person
                or connect through telehealth across Mississippi and Tennessee, you get expert,
                attentive care built around your goals.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <CTAButton to="/book">Book an Appointment</CTAButton>
                <a
                  href={SITE.phoneHref}
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-gold"
                >
                  <Phone className="h-4 w-4" /> {SITE.phone}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TELEHEALTH BAND */}
      <section className="navy-gradient relative overflow-hidden py-24 text-cream md:py-32">
        <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
        <div className="dot-grid pointer-events-none absolute inset-0 opacity-[0.07]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-12 md:items-center">
          <div className="md:col-span-6">
            <Reveal>
              <span className="eyebrow">Telehealth Across MS and TN</span>
              <h2 className="mt-4 font-display text-4xl leading-tight md:text-6xl">
                Quality care, <span className="text-gold">on your terms.</span>
              </h2>
              <span className="gold-rule mt-6" />
              <p className="mt-7 max-w-lg text-lg leading-relaxed text-cream/85">
                Access expert medical care from the comfort of home. Comprehensive telehealth across
                Tennessee and Mississippi, supported by local lab draw stations &mdash; thorough,
                seamless care without the long drive.
              </p>
              <div className="mt-8">
                <CTAButton to="/book" variant="gold">
                  Schedule a Telehealth Visit
                </CTAButton>
              </div>
            </Reveal>
          </div>
          <div className="md:col-span-6 md:pl-8">
            <Reveal delay={120}>
              <ul className="grid gap-3 sm:grid-cols-2">
                {[
                  "Visits from your phone or laptop",
                  "Local lab draw stations near you",
                  "Prescriptions sent to your pharmacy",
                  "Same provider, every appointment",
                  "Secure, private video consults",
                  "Follow-ups without the drive",
                ].map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4 text-sm leading-snug text-cream/90 backdrop-blur"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={2.5} />
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <SectionHeading
              eyebrow="What We Do"
              title="Treatments built around your goals."
              subhead="Six core services, each tailored to your labs, history, and lifestyle."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={i * 60}>
                <ServiceCard
                  title={s.title}
                  description={s.short}
                  to={`/services/${s.slug}`}
                  index={i}
                  icon={s.icon}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <HowItWorks />

      {/* TEAM BAND */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-hairline shadow-[0_40px_80px_-40px_rgba(14,42,71,0.45)]">
              <img
                src={teamImage.url}
                alt="The Uplift Medical care team in their Tupelo, Mississippi office"
                className="h-[360px] w-full object-cover md:h-[520px]"
                width={1920}
                height={960}
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8 text-cream md:p-12">
                <span className="eyebrow text-gold">The Team</span>
                <p className="mt-3 max-w-2xl font-display text-2xl leading-snug md:text-4xl">
                  Experienced providers who listen first, then build a plan around you.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY UPLIFT */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Why Uplift"
              title="Care that actually moves the needle."
              align="center"
            />
          </Reveal>
          <div className="mx-auto mt-14 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Personalized treatment plans",
              "No insurance required",
              "In-person and telehealth options",
              "Experienced and attentive providers",
              "Ongoing monitoring and support",
              "Concierge-level communication",
            ].map((b, i) => (
              <Reveal key={b} delay={i * 60}>
                <div className="flex h-full items-start gap-4 rounded-2xl border border-hairline bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_20px_40px_-24px_rgba(14,42,71,0.18)]">
                  <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                    <Check className="h-4 w-4" strokeWidth={2.5} />
                  </span>
                  <p className="font-display text-xl leading-snug text-primary">{b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* QUALIFY TEASER */}
      <section className="relative overflow-hidden bg-background py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="aurora relative overflow-hidden rounded-[28px] border border-gold/30 bg-gradient-to-br from-gold/15 via-gold/5 to-transparent px-6 py-14 text-center md:px-16 md:py-20">
              <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-gold/20 blur-3xl" />
              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/70 px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-primary backdrop-blur">
                  <Sparkles className="h-3.5 w-3.5 text-gold" /> Free 60-Second Assessment
                </span>
                <h2 className="mx-auto mt-6 max-w-3xl font-display text-4xl leading-tight text-primary md:text-6xl">
                  Wondering if hormone therapy is right for you?
                </h2>
                <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foreground">
                  Fatigue, weight gain, brain fog, low libido, and mood swings can all point to a
                  hormone imbalance. Take our free assessment and find out if you may be a candidate
                  &mdash; no obligation.
                </p>
                <div className="mt-9">
                  <CTAButton to="/qualify">
                    See If You Qualify
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </CTAButton>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <Reveal>
              <SectionHeading eyebrow="Testimonials" title="What our patients are saying." />
            </Reveal>
            <Reveal delay={100}>
              <div className="flex items-center gap-4 rounded-2xl border border-hairline bg-white px-5 py-4 shadow-[0_2px_24px_-12px_rgba(14,42,71,0.12)]">
                <div className="font-display text-4xl text-primary">5.0</div>
                <div>
                  <div className="flex text-gold">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Based on real patient reviews
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 80}>
                <TestimonialCard quote={t.quote} name={t.name} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <Reveal>
              <SectionHeading
                eyebrow="Frequently Asked Questions"
                title="Answers, before you ask."
                subhead="If you don't see your question, we are a phone call away."
              />
              <div className="mt-8">
                <CTAButton href={SITE.phoneHref} variant="outline">
                  <Phone className="h-4 w-4" /> Call {SITE.phone}
                </CTAButton>
              </div>
            </Reveal>
          </div>
          <div className="md:col-span-7">
            <Reveal delay={100}>
              <FAQAccordion items={FAQS} />
            </Reveal>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
