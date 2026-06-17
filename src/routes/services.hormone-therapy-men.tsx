import { createFileRoute } from "@tanstack/react-router";
import { ServicePageLayout } from "@/components/site/ServicePageLayout";
import hero from "@/assets/hero-hormone-men.jpg.asset.json";

export const Route = createFileRoute("/services/hormone-therapy-men")({
  head: () => ({
    meta: [
      { title: "Testosterone Therapy for Men | Uplift Medical, Tupelo MS" },
      { name: "description", content: "Physician-guided TRT in Tupelo, MS. Restore energy, strength, focus, libido, and mood. In-person and telehealth." },
      { property: "og:title", content: "Testosterone Therapy for Men | Uplift Medical" },
      { property: "og:description", content: "Restore strength, energy, and vitality. Feel stronger. Think sharper. Live with more confidence." },
      { property: "og:image", content: hero.url },
    ],
  }),
  component: () => (
    <ServicePageLayout
      content={{
        eyebrow: "Testosterone Therapy for Men",
        headline: "Restore strength, energy, and vitality.",
        subhead: "Feel stronger. Think sharper. Live with more confidence.",
        heroImage: hero.url,
        heroAlt: "Uplift Medical provider preparing a testosterone injection",
        intro:
          "Testosterone plays a critical role in a man's overall health, affecting energy, muscle mass, libido, mood, and focus. As men age, testosterone naturally declines, leading to fatigue, weight gain, low motivation, and reduced performance. Our testosterone replacement therapy is designed to restore your levels so you feel like the best version of yourself again.",
        signs: {
          title: "Signs of Low T",
          items: [
            "Chronic fatigue even after a full night of sleep.",
            "Loss of muscle mass and strength.",
            "Weight gain and increased body fat, especially around the midsection.",
            "Reduced sex drive and performance issues.",
            "Mood swings and irritability.",
            "Brain fog and difficulty concentrating.",
          ],
        },
        benefits: [
          {
            title: "What it helps with",
            items: [
              "Increased energy and stamina.",
              "Stronger muscles and reduced body fat.",
              "Enhanced sexual performance and drive.",
              "Sharper focus and mental clarity.",
              "Improved mood and motivation.",
              "Better sleep and recovery.",
            ],
          },
        ],
        includeQualifyLink: true,
      }}
    />
  ),
});