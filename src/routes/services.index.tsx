import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ServiceCard } from "@/components/site/ServiceCard";
import { CTABand } from "@/components/site/CTABand";
import { CTAButton } from "@/components/site/CTAButton";
import { SERVICES } from "@/components/site/site-data";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services | Uplift Medical, Tupelo MS" },
      {
        name: "description",
        content:
          "Hormone therapy, progesterone and estrogen therapy, and peptide therapy in Tupelo, MS. Concierge care tailored to you.",
      },
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
              as="h1"
              eyebrow="What We Do"
              title="Treatments built around your goals."
              subhead="Concierge care. Every plan starts with your labs, your history, and your goals."
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-background pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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

      <section className="bg-background pb-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-display text-3xl text-primary">
            Start with a conversation about your goals.
          </h2>
          <p className="mt-4 text-lg leading-relaxed">
            A service description cannot determine which care is right for you. Bring your
            questions, relevant history and current medication list to a consultation. Ask the team
            how to share records securely.
          </p>
          <p className="mt-4 leading-relaxed">
            Before scheduling, confirm the appointment format, location, current charges and any
            preparation instructions. The clinician can explain whether further evaluation or
            another approach is appropriate.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <CTAButton to="/book" variant="gold">
              Book a Consultation
            </CTAButton>
            <CTAButton to="/resources" variant="outline">
              Read Patient Resources
            </CTAButton>
          </div>
        </div>
      </section>
      <CTABand />
    </>
  );
}
