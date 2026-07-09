import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Clock } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CTABand } from "@/components/site/CTABand";
import { GUIDE_LIST } from "@/components/site/guide-data";

export const Route = createFileRoute("/resources/")({
  head: () => ({
    meta: [
      { title: "Hormone & TRT Resources | Uplift Medical, Tupelo MS" },
      {
        name: "description",
        content:
          "Straightforward guides on testosterone, hormone therapy, TRT cost, and choosing a clinic, from the team at Uplift Medical in Tupelo, MS.",
      },
      { property: "og:title", content: "Hormone & TRT Resources | Uplift Medical" },
      {
        property: "og:description",
        content: "Clear, no-nonsense guides on testosterone and hormone therapy.",
      },
    ],
  }),
  component: ResourcesIndex,
});

function ResourcesIndex() {
  return (
    <>
      <section className="bg-background pt-14 pb-10 md:pt-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Resources"
              title="Straight answers on hormones and TRT."
              subhead="Clear, no-nonsense guides from our team. No jargon, no hype, just what you need to make a good decision."
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-background pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {GUIDE_LIST.map((g, i) => (
              <Reveal key={g.slug} delay={i * 60}>
                <Link
                  to="/resources/$slug"
                  params={{ slug: g.slug }}
                  className="group flex h-full flex-col rounded-2xl border border-hairline bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/60 hover:shadow-[0_28px_56px_-24px_rgba(14,42,71,0.22)]"
                >
                  <span className="text-xs font-semibold uppercase tracking-widest text-gold">
                    {g.category}
                  </span>
                  <h2 className="mt-3 font-display text-2xl leading-snug text-primary">{g.h1}</h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {g.summary}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-3 text-xs font-medium text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" /> {g.readMinutes} min read
                    </span>
                    <span className="inline-flex items-center gap-1 text-gold group-hover:underline">
                      Read <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
