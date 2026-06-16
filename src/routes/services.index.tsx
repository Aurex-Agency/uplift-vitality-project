import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ServiceCard } from "@/components/site/ServiceCard";
import { CTABand } from "@/components/site/CTABand";
import { SERVICES } from "@/components/site/site-data";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services | Uplift Medical, Tupelo MS" },
      { name: "description", content: "Hormone therapy, peptides, IV therapy, and medical weight loss in Tupelo, MS. Six concierge services tailored to you." },
      { property: "og:title", content: "Services | Uplift Medical" },
      { property: "og:description", content: "Treatments built around your goals." },
    ],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <>
      <section className="bg-background pt-14 pb-10 md:pt-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <SectionHeading
              eyebrow="What We Do"
              title="Treatments built around your goals."
              subhead="Six concierge services. Every plan starts with your labs, your history, and your goals."
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-background pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={i * 60}>
                <ServiceCard title={s.title} description={s.short} to={`/services/${s.slug}`} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}