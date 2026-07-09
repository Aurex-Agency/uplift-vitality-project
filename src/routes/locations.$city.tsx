import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { MapPin, MonitorSmartphone, Check, Star } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ServiceCard } from "@/components/site/ServiceCard";
import { CTAButton } from "@/components/site/CTAButton";
import { CTABand } from "@/components/site/CTABand";
import { HowItWorks } from "@/components/site/HowItWorks";
import { FAQAccordion } from "@/components/site/FAQAccordion";
import { SERVICES, SITE, TRUST_POINTS } from "@/components/site/site-data";
import { LOCATIONS } from "@/components/site/location-data";

export const Route = createFileRoute("/locations/$city")({
  loader: ({ params }) => {
    if (!LOCATIONS[params.city]) throw notFound();
  },
  head: ({ params }) => {
    const loc = LOCATIONS[params.city];
    if (!loc) return { meta: [] };
    const title = `TRT & Hormone Replacement Therapy in ${loc.name}, MS | Uplift Medical`;
    const description = `Testosterone replacement therapy (TRT) for men and hormone therapy for women in ${loc.name}, MS. Personalized to your labs, in person or by telehealth. Call 662-584-4958.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            name: "Uplift Medical",
            url: `${SITE.url}/locations/${loc.slug}`,
            telephone: "+1-662-584-4958",
            areaServed: { "@type": "City", name: `${loc.name}, MS` },
            address: {
              "@type": "PostalAddress",
              streetAddress: "144 S Thomas St, Suite 102, B",
              addressLocality: "Tupelo",
              addressRegion: "MS",
              postalCode: "38801",
              addressCountry: "US",
            },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: loc.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
              {
                "@type": "ListItem",
                position: 2,
                name: `${loc.name}, MS`,
                item: `${SITE.url}/locations/${loc.slug}`,
              },
            ],
          }),
        },
      ],
    };
  },
  component: LocationPage,
});

function LocationPage() {
  const { city } = Route.useParams();
  const loc = LOCATIONS[city];
  if (!loc) return null;

  return (
    <>
      {/* HERO */}
      <section className="aurora relative overflow-hidden bg-background pt-12 md:pt-20">
        <div className="dot-grid pointer-events-none absolute inset-0 opacity-50" />
        <div className="pointer-events-none absolute -right-32 top-0 h-[420px] w-[420px] rounded-full bg-gold/10 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-6 pb-16 text-center md:pb-24">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/70 px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-primary backdrop-blur">
              <MapPin className="h-3.5 w-3.5 text-gold" />
              Serving {loc.name}, Mississippi
            </span>
            <h1 className="mt-6 font-display text-4xl leading-[1.05] text-primary sm:text-5xl md:text-6xl">
              {loc.headline}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {loc.sub}
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <CTAButton to="/book" variant="gold">
                Book an Appointment
              </CTAButton>
              <CTAButton to="/qualify" variant="outline">
                See If You Qualify
              </CTAButton>
            </div>
            <div className="mt-7 flex items-center justify-center gap-2">
              <div className="flex text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                Rated 5.0 by patients across MS &amp; TN
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <Reveal>
              <SectionHeading
                eyebrow={loc.county}
                title={`Concierge care for ${loc.name}.`}
                subhead={loc.visitNote}
              />
            </Reveal>
          </div>
          <div className="md:col-span-7">
            <Reveal delay={100}>
              <div className="space-y-5 text-lg leading-relaxed text-foreground">
                {loc.intro.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {TRUST_POINTS.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center gap-2 rounded-full border border-hairline bg-background px-4 py-2 text-xs font-medium tracking-wide text-foreground"
                  >
                    <Check className="h-3.5 w-3.5 text-gold" strokeWidth={2.5} />
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TRT + WOMEN'S HORMONES */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2">
          <Reveal>
            <div className="lift-card h-full p-8 md:p-10">
              <span className="eyebrow">For Men</span>
              <h2 className="mt-3 font-display text-2xl leading-snug text-primary md:text-3xl">
                Testosterone replacement therapy (TRT) in {loc.name}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-foreground">{loc.trtBlurb}</p>
              <Link
                to="/services/hormone-therapy-men"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold tracking-wide text-gold hover:underline"
              >
                Explore TRT for men
              </Link>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="lift-card h-full p-8 md:p-10">
              <span className="eyebrow">For Women</span>
              <h2 className="mt-3 font-display text-2xl leading-snug text-primary md:text-3xl">
                Hormone therapy for women in {loc.name}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-foreground">{loc.womenBlurb}</p>
              <Link
                to="/services/hormone-therapy-women"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold tracking-wide text-gold hover:underline"
              >
                Explore hormone therapy for women
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* THE UPLIFT DIFFERENCE */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <SectionHeading
              eyebrow="The Uplift Difference"
              title="Not a franchise. A clinic that knows you."
              subhead="What patients get here that big-box hormone chains do not."
              align="center"
            />
          </Reveal>
          <div className="mx-auto mt-14 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Care for men and women, not men only",
              "Plans built from your labs, not one standard protocol",
              "The same provider at every visit",
              "Telehealth visits with lab draws near you",
              "Nutrition, training, and supplement guidance included",
              "No insurance required and no surprise fees",
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

      {/* SERVICES */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <SectionHeading
              eyebrow="What We Offer"
              title={`Services available to ${loc.name} patients.`}
              subhead="Every plan starts with your labs, your history, and your goals."
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

      {/* TELEHEALTH NOTE */}
      <section className="navy-gradient relative overflow-hidden py-20 text-cream md:py-24">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/10 px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-cream backdrop-blur">
              <MonitorSmartphone className="h-3.5 w-3.5 text-gold" />
              Telehealth Available
            </span>
            <h2 className="mt-5 font-display text-3xl leading-tight md:text-5xl">
              Expert care without leaving {loc.name}.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-cream/85">
              Secure video visits, prescriptions sent to your pharmacy, and lab draws arranged close
              to home. The full Uplift Medical experience, wherever you are.
            </p>
            <div className="mt-8">
              <CTAButton to="/book" variant="gold">
                Schedule a Visit
              </CTAButton>
            </div>
          </Reveal>
        </div>
      </section>

      <HowItWorks />

      {/* LOCAL FAQ */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <Reveal>
              <SectionHeading
                eyebrow={`${loc.name} FAQs`}
                title="Good to know."
                subhead="If you do not see your question, we are a phone call away."
              />
            </Reveal>
          </div>
          <div className="md:col-span-7">
            <Reveal delay={100}>
              <FAQAccordion items={loc.faqs} />
            </Reveal>
          </div>
        </div>
      </section>

      <CTABand
        headline={`Ready to feel uplifted, ${loc.name}?`}
        subhead="Book your consultation today and start your journey to more energy, confidence, and vitality."
      />
    </>
  );
}
