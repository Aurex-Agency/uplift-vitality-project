import { createFileRoute } from "@tanstack/react-router";
import { ServicePageLayout } from "@/components/site/ServicePageLayout";

export const Route = createFileRoute("/services/weight-loss")({
  head: () => ({
    meta: [
      { title: "Medical Weight Loss | Uplift Medical, Tupelo MS" },
      { name: "description", content: "Medically guided weight loss in Tupelo, MS. Science-backed nutrition and personalized plans built for your body." },
      { property: "og:title", content: "Medical Weight Loss | Uplift Medical" },
      { property: "og:description", content: "Burn fat, boost energy, and take control." },
      { property: "og:image", content: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80" },
    ],
  }),
  component: () => (
    <ServicePageLayout
      content={{
        eyebrow: "Medical Weight Loss",
        headline: "Burn fat, boost energy, and take control.",
        subhead: "Medically guided weight loss with no guesswork.",
        heroImage:
          "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
        heroAlt: "Person walking outdoors in natural light",
        intro:
          "Our medically guided weight loss programs combine science-backed nutrition, metabolism-boosting treatments, and personalized plans to help you achieve lasting results. No fad diets and no guesswork, just a plan built for your body.",
        benefits: [
          {
            title: "What it helps with",
            items: [
              "Sustainable fat loss and metabolism boost.",
              "Appetite control and craving reduction.",
              "Increased energy and endurance.",
              "Muscle growth and body composition.",
              "Personalized nutrition and meal planning.",
              "Hormonal balance for weight management.",
              "Better sleep and stress management.",
              "Long-term lifestyle changes.",
            ],
          },
        ],
      }}
    />
  ),
});