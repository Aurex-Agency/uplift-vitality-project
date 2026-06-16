import { createFileRoute } from "@tanstack/react-router";
import { CTAButton } from "@/components/site/CTAButton";
import { CTABand } from "@/components/site/CTABand";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ServiceCard } from "@/components/site/ServiceCard";
import { TestimonialCard } from "@/components/site/TestimonialCard";
import { FAQAccordion } from "@/components/site/FAQAccordion";
import { HowItWorks } from "@/components/site/HowItWorks";
import { SERVICES, TESTIMONIALS, FAQS, SITE } from "@/components/site/site-data";
import { Phone, ShieldCheck, MonitorSmartphone, Sparkles } from "lucide-react";
import heroImage from "@/assets/kenny-injection.jpg.asset.json";
import teamImage from "@/assets/team.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Uplift Medical | Concierge Hormone & Wellness Care in Tupelo, MS" },
      { name: "description", content: "Personalized hormone therapy, medical weight loss, peptide, and IV treatments in Tupelo, MS. In-person and telehealth across MS and TN." },
      { property: "og:title", content: "Uplift Medical | Concierge Hormone & Wellness Care" },
      { property: "og:description", content: "Restore energy, confidence, and vitality with concierge medical care designed around you." },
      { property: "og:image", content: heroImage.url },
      { name: "twitter:image", content: heroImage.url },
    ],
    links: [
      { rel: "preload", as: "image", href: heroImage.url, fetchpriority: "high" } as unknown as { rel: string; href: string },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-background">
        <div className="pointer-events-none absolute -right-40 top-10 h-[480px] w-[480px] rounded-full bg-gold/10 blur-3xl" />
        <div className="mx-auto grid max-w-7xl gap-12 px-6 pt-14 pb-20 md:grid-cols-12 md:items-end md:gap-10 md:pt-20 md:pb-28">
          <div className="md:col-span-6 lg:col-span-7">
            <Reveal>
              <span className="eyebrow">Concierge Hormone and Wellness Care</span>
              <h1 className="mt-5 font-display text-[2.65rem] leading-[1.02] tracking-tight text-primary sm:text-6xl md:text-[5.25rem]">
                Feel like the best version of yourself again.
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Personalized hormone therapy, medical weight loss, peptide, and IV treatments designed to restore your energy, confidence, and vitality. Expert care without the hassle of insurance.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <CTAButton to="/book">Book an Appointment</CTAButton>
                <CTAButton to="/qualify" variant="outline">See If You Qualify</CTAButton>
              </div>
              <div className="mt-10 flex flex-wrap gap-2">
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
                {/* IMAGE SLOT: hero portrait */}
                <div className="relative overflow-hidden rounded-[28px] border border-hairline shadow-[0_40px_80px_-40px_rgba(14,42,71,0.45)]">
                  <img
                    src={heroImage.url}
                    alt="Provider at Uplift Medical preparing a precision injection"
                    className="h-[560px] w-full object-cover md:h-[640px]"
                    width={1440}
                    height={1800}
                    loading="eager"
                    decoding="async"
                    {...({ fetchpriority: "high" } as { fetchpriority: "high" })}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
                </div>
                <div className="absolute -bottom-6 -left-6 hidden w-56 rounded-2xl border border-hairline bg-white p-5 shadow-[0_24px_48px_-24px_rgba(14,42,71,0.30)] md:block">
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
                At Uplift Medical, we specialize in transforming lives through personalized medical care. Based in Tupelo, Mississippi, we help men and women restore hormonal balance, lose weight, and feel their best from the inside out. Whether you visit us in person or connect through telehealth across Mississippi and Tennessee, you get expert, attentive care built around your goals.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <CTAButton to="/book">Book an Appointment</CTAButton>
                <a href={SITE.phoneHref} className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-gold">
                  <Phone className="h-4 w-4" /> {SITE.phone}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TELEHEALTH BAND */}
      <section className="relative overflow-hidden bg-primary py-24 text-cream md:py-32">
        <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-12 md:items-center">
          <div className="md:col-span-6">
            <Reveal>
              <span className="eyebrow">Telehealth Across MS and TN</span>
              <h2 className="mt-4 font-display text-4xl leading-tight md:text-6xl">
                Quality care, on your terms.
              </h2>
              <span className="gold-rule mt-6" />
            </Reveal>
          </div>
          <div className="md:col-span-6">
            <Reveal delay={120}>
              <p className="text-lg leading-relaxed text-cream/85">
                Access expert medical care from the comfort of home. We offer comprehensive telehealth services across Tennessee and Mississippi, supported by a network of local lab draw stations so you get thorough, seamless care without the long drive. Modern, patient-focused medicine that fits your life.
              </p>
              <div className="mt-8">
                <CTAButton to="/book" variant="gold">Schedule a Telehealth Visit</CTAButton>
              </div>
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
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <HowItWorks />

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
          <div className="mx-auto mt-14 grid max-w-5xl gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Personalized treatment plans",
              "No insurance required",
              "In-person and telehealth options",
              "Experienced and attentive providers",
              "Ongoing monitoring and support",
              "Concierge-level communication",
            ].map((b, i) => (
              <Reveal key={b} delay={i * 60} className="bg-white p-8">
                <span className="font-display text-sm tracking-[0.3em] text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 font-display text-xl leading-snug text-primary">{b}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* QUALIFY TEASER */}
      <section className="relative overflow-hidden bg-gold/15 py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <span className="eyebrow">Free Assessment</span>
            <h2 className="mt-5 font-display text-4xl leading-tight text-primary md:text-6xl">
              Wondering if hormone therapy is right for you?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foreground">
              Fatigue, weight gain, brain fog, low libido, and mood swings can all point to a hormone imbalance. Take our free 60-second assessment and find out if you may be a candidate.
            </p>
            <div className="mt-9">
              <CTAButton to="/qualify">See If You Qualify</CTAButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Testimonials"
              title="What our patients are saying."
            />
          </Reveal>
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
