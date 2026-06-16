import { createFileRoute } from "@tanstack/react-router";
import { ServicePageLayout } from "@/components/site/ServicePageLayout";

export const Route = createFileRoute("/services/peptide-therapy")({
  head: () => ({
    meta: [
      { title: "Peptide Therapy | Uplift Medical, Tupelo MS" },
      { name: "description", content: "Customized peptide therapy to support recovery, performance, metabolism, and anti-aging." },
      { property: "og:title", content: "Peptide Therapy | Uplift Medical" },
      { property: "og:description", content: "Unlock your body's full potential." },
      { property: "og:image", content: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&w=1200&q=80" },
    ],
  }),
  component: () => (
    <ServicePageLayout
      content={{
        eyebrow: "Peptide Therapy",
        headline: "Unlock your body's full potential.",
        subhead: "Enhance performance, boost recovery, and optimize your health.",
        heroImage:
          "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&w=1200&q=80",
        heroAlt: "Clinical lab vials in soft light",
        intro:
          "Peptides are naturally occurring amino acid chains that help regulate hormone production, metabolism, immune response, and cellular repair. As we age, peptide levels decline, leading to slower recovery, lower energy, weight gain, and reduced muscle mass. Our peptide therapy is designed to restore optimal function through customized, science-backed treatments.",
        benefits: [
          {
            title: "What it helps with",
            items: [
              "Muscle growth and fat loss.",
              "Enhanced energy and stamina.",
              "Cognitive function and mental clarity.",
              "Immune system support.",
              "Tissue and injury recovery.",
              "Anti-aging and skin rejuvenation.",
              "Hormonal balance and sexual wellness.",
              "Metabolism and weight management.",
              "Better sleep and recovery.",
            ],
          },
        ],
      }}
    />
  ),
});