import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { CTAButton } from "./CTAButton";
import { CTABand } from "./CTABand";
import { HowItWorks } from "./HowItWorks";
import { Check } from "lucide-react";

export type ServiceContent = {
  eyebrow: string;
  headline: string;
  subhead: string;
  heroImage: string;
  heroAlt: string;
  intro: string;
  signs?: { title: string; items: string[] };
  benefits: { title: string; items: string[] }[];
  includeQualifyLink?: boolean;
};

export function ServicePageLayout({ content }: { content: ServiceContent }) {
  return (
    <>
      <section className="relative overflow-hidden bg-background pt-12 md:pt-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-20 md:grid-cols-2 md:items-center md:gap-16 md:pb-28">
          <Reveal>
            <span className="eyebrow">{content.eyebrow}</span>
            <h1 className="mt-4 font-display text-4xl leading-[1.05] text-primary sm:text-5xl md:text-6xl">
              {content.headline}
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              {content.subhead}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <CTAButton to="/book">Book an Appointment</CTAButton>
              <CTAButton to="/qualify" variant="outline">See If You Qualify</CTAButton>
            </div>
          </Reveal>
          <Reveal delay={120}>
            {/* IMAGE SLOT: service hero */}
            <div className="relative overflow-hidden rounded-3xl border border-hairline shadow-[0_30px_60px_-30px_rgba(14,42,71,0.30)]">
              <img
                src={content.heroImage}
                alt={content.heroAlt}
                className="h-[480px] w-full object-cover md:h-[560px]"
                loading="eager"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <span className="eyebrow">What We Do</span>
            <p className="mt-6 font-display text-2xl leading-snug text-primary md:text-3xl">
              {content.intro}
            </p>
          </Reveal>
        </div>
      </section>

      {content.signs && (
        <section className="bg-background py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal>
              <SectionHeading eyebrow="Signs You May Be a Candidate" title={content.signs.title} />
            </Reveal>
            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {content.signs.items.map((item, i) => (
                <Reveal key={i} delay={i * 60}>
                  <div className="flex gap-4 rounded-xl border border-hairline bg-white p-6">
                    <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold">
                      <Check className="h-4 w-4" />
                    </span>
                    <p className="text-base leading-relaxed text-foreground">{item}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          {content.benefits.map((group, gi) => (
            <div key={gi} className={gi > 0 ? "mt-20" : ""}>
              <Reveal>
                <SectionHeading eyebrow="Benefits" title={group.title} />
              </Reveal>
              <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {group.items.map((b, i) => (
                  <Reveal key={i} delay={i * 60}>
                    <div className="h-full rounded-xl border border-hairline bg-background p-6">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gold/15 font-display text-gold">
                        {i + 1}
                      </span>
                      <p className="mt-4 text-base leading-relaxed text-foreground">{b}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <HowItWorks />

      {content.includeQualifyLink && (
        <section className="bg-background py-16">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <span className="eyebrow">Free Assessment</span>
            <p className="mt-4 font-display text-3xl leading-snug text-primary md:text-4xl">
              Not sure if this is right for you?
            </p>
            <p className="mt-4 text-muted-foreground">
              Take our free 60-second assessment and find out if you may be a candidate.
            </p>
            <div className="mt-7">
              <CTAButton to="/qualify" variant="primary">See If You Qualify</CTAButton>
            </div>
          </div>
        </section>
      )}

      <CTABand />
    </>
  );
}