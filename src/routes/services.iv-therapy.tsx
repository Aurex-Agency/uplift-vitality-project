import { createFileRoute } from "@tanstack/react-router";
import { ServicePageLayout } from "@/components/site/ServicePageLayout";
import heroImg from "@/assets/hero-iv-therapy.jpg.asset.json";

export const Route = createFileRoute("/services/iv-therapy")({
  head: () => ({
    meta: [
      { title: "IV Therapy | Uplift Medical, Tupelo MS" },
      { name: "description", content: "IV therapy in Tupelo, MS. Hydration, vitamins, immune support, and recovery delivered directly to your bloodstream." },
      { property: "og:title", content: "IV Therapy | Uplift Medical" },
      { property: "og:description", content: "Hydrate, replenish, and revitalize." },
      { property: "og:image", content: heroImg.url },
    ],
  }),
  component: () => (
    <ServicePageLayout
      content={{
        eyebrow: "IV Therapy",
        headline: "Hydrate, replenish, and revitalize.",
        subhead: "Boost your energy. Strengthen your immune system. Feel your best.",
        heroImage: heroImg.url,
        heroAlt: "Uplift Medical providers showing wellness products",
        intro:
          "IV therapy delivers fluids, vitamins, minerals, and nutrients directly into your bloodstream for rapid absorption. It bypasses the digestive system so your body gets more of what it needs, faster.",
        benefits: [
          {
            title: "Benefits",
            items: [
              "Fast and effective hydration.",
              "High nutrient absorption.",
              "Enhanced energy from B vitamins and amino acids.",
              "Immune support with vitamin C and zinc.",
              "Detoxification support with antioxidants like glutathione.",
              "Hangover relief.",
              "Support for specific conditions like migraines and chronic fatigue.",
              "Quick symptom relief.",
            ],
          },
        ],
      }}
    />
  ),
});