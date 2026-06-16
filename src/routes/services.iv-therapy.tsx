import { createFileRoute } from "@tanstack/react-router";
import { ServicePageLayout } from "@/components/site/ServicePageLayout";

export const Route = createFileRoute("/services/iv-therapy")({
  head: () => ({
    meta: [
      { title: "IV Therapy | Uplift Medical, Tupelo MS" },
      { name: "description", content: "IV therapy in Tupelo, MS. Hydration, vitamins, immune support, and recovery delivered directly to your bloodstream." },
      { property: "og:title", content: "IV Therapy | Uplift Medical" },
      { property: "og:description", content: "Hydrate, replenish, and revitalize." },
      { property: "og:image", content: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=1200&q=80" },
    ],
  }),
  component: () => (
    <ServicePageLayout
      content={{
        eyebrow: "IV Therapy",
        headline: "Hydrate, replenish, and revitalize.",
        subhead: "Boost your energy. Strengthen your immune system. Feel your best.",
        heroImage:
          "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=1200&q=80",
        heroAlt: "IV therapy treatment in a calm clinical setting",
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