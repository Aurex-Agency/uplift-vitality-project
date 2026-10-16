import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
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
        ...(g.reviewStatus === "pending" ? [{ name: "robots", content: "noindex,nofollow" }] : []),
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
            datePublished: g.reviewedAt || g.updated,
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
          <div>
            <Link
              to="/resources"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" /> All resources
            </Link>
            {g.reviewStatus === "pending" && (
              <p role="status" className="rounded-xl border border-gold p-4">
                Editorial preview: clinical and operational review pending. Excluded from production
                builds.
              </p>
            )}
            <span className="eyebrow mt-6 block">{g.category}</span>
            <h1 className="mt-3 font-display text-4xl leading-[1.1] text-primary md:text-5xl">
              {g.h1}
            </h1>
            <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" /> {g.readMinutes} min read
            </div>
            <span className="gold-rule mt-6" />
          </div>

          <div>
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
          </div>

          {g.sources && (
            <section className="mt-10">
              <h2 className="font-display text-2xl">Sources and review</h2>
              <ul className="mt-4 space-y-3">
                {g.sources.map((s) => (
                  <li key={s.url}>
                    <a href={s.url} className="underline">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm">
                {g.reviewStatus === "approved"
                  ? `Reviewed by ${g.reviewer} on ${g.reviewedAt}`
                  : "Draft prepared for Uplift Medical. No clinical review is claimed."}
              </p>
            </section>
          )}
          {/* Inline CTA */}
          <div>
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
          </div>

          {/* FAQ */}
          {g.faqs.length > 0 && (
            <div className="mt-14">
              <div>
                <h2 className="font-display text-2xl leading-snug text-primary md:text-3xl">
                  Frequently asked questions
                </h2>
                <div className="mt-6">
                  <FAQAccordion items={g.faqs} />
                </div>
              </div>
            </div>
          )}
          {/* Related links */}
          <div className="mt-14">
            <div>
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
            </div>
          </div>

          <p className="mt-12 text-xs leading-relaxed text-muted-foreground">{GUIDE_DISCLAIMER}</p>
        </div>
      </article>
    </>
  );
}
