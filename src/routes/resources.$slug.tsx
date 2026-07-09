import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { CTAButton } from "@/components/site/CTAButton";
import { FAQAccordion } from "@/components/site/FAQAccordion";
import { SITE } from "@/components/site/site-data";
import { GUIDES, GUIDE_DISCLAIMER } from "@/components/site/guide-data";

export const Route = createFileRoute("/resources/$slug")({
  loader: ({ params }) => {
    if (!GUIDES[params.slug]) throw notFound();
  },
  head: ({ params }) => {
    const g = GUIDES[params.slug];
    if (!g) return { meta: [] };
    const url = `${SITE.url}/resources/${g.slug}`;
    return {
      meta: [
        { title: `${g.title} | Uplift Medical` },
        { name: "description", content: g.description },
        { property: "og:title", content: g.title },
        { property: "og:description", content: g.description },
        { property: "og:type", content: "article" },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: g.h1,
            description: g.description,
            datePublished: g.updated,
            dateModified: g.updated,
            author: { "@type": "Organization", name: "Uplift Medical" },
            publisher: {
              "@type": "Organization",
              name: "Uplift Medical",
              url: SITE.url,
            },
            mainEntityOfPage: url,
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: g.faqs.map((f) => ({
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
                name: "Resources",
                item: `${SITE.url}/resources`,
              },
              { "@type": "ListItem", position: 3, name: g.h1, item: url },
            ],
          }),
        },
      ],
    };
  },
  component: GuidePage,
});

function GuidePage() {
  const { slug } = Route.useParams();
  const g = GUIDES[slug];
  if (!g) return null;

  return (
    <>
      <article className="bg-background">
        <div className="mx-auto max-w-3xl px-6 pt-12 pb-16 md:pt-16">
          <Reveal>
            <Link
              to="/resources"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" /> All resources
            </Link>
            <span className="eyebrow mt-6 block">{g.category}</span>
            <h1 className="mt-3 font-display text-4xl leading-[1.1] text-primary md:text-5xl">
              {g.h1}
            </h1>
            <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" /> {g.readMinutes} min read
            </div>
            <span className="gold-rule mt-6" />
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-foreground">
              {g.intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {g.sections.map((s, i) => (
              <div key={i} className="mt-10">
                <h2 className="font-display text-2xl leading-snug text-primary md:text-3xl">
                  {s.heading}
                </h2>
                <div className="mt-4 space-y-4 text-base leading-relaxed text-foreground">
                  {s.body.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </Reveal>

          {/* Inline CTA */}
          <Reveal delay={80}>
            <div className="mt-12 rounded-2xl border border-gold/30 bg-gradient-to-br from-gold/10 to-transparent p-7 text-center">
              <p className="font-display text-2xl leading-snug text-primary">
                Not sure where you stand?
              </p>
              <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
                Take our free 60-second assessment, or book a consultation. No obligation.
              </p>
              <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <CTAButton to="/qualify" variant="gold">
                  See If You Qualify
                </CTAButton>
                <CTAButton to="/book" variant="outline">
                  Book a Consultation
                </CTAButton>
              </div>
            </div>
          </Reveal>

          {/* FAQ */}
          <div className="mt-14">
            <Reveal>
              <h2 className="font-display text-2xl leading-snug text-primary md:text-3xl">
                Frequently asked questions
              </h2>
              <div className="mt-6">
                <FAQAccordion items={g.faqs} />
              </div>
            </Reveal>
          </div>

          {/* Related links */}
          <div className="mt-14">
            <Reveal>
              <span className="eyebrow">Keep reading</span>
              <ul className="mt-4 divide-y divide-hairline border-y border-hairline">
                {g.related.map((r) => (
                  <li key={r.to}>
                    <Link
                      to={r.to}
                      className="group flex items-center justify-between gap-4 py-4 text-primary transition hover:text-gold"
                    >
                      <span className="font-medium">{r.label}</span>
                      <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <p className="mt-12 text-xs leading-relaxed text-muted-foreground">{GUIDE_DISCLAIMER}</p>
        </div>
      </article>
    </>
  );
}
