import { createFileRoute } from "@tanstack/react-router";
import { ServicePageLayout } from "@/components/site/ServicePageLayout";

export const Route = createFileRoute("/services/hormone-therapy-men")({
  head: () => ({
    meta: [
      { title: "Testosterone Therapy for Men | Uplift Medical, Tupelo MS" },
      { name: "description", content: "Physician-guided TRT in Tupelo, MS. Restore energy, strength, focus, libido, and mood. In-person and telehealth." },
      { property: "og:title", content: "Testosterone Therapy for Men | Uplift Medical" },
      { property: "og:description", content: "Restore strength, energy, and vitality. Feel stronger. Think sharper. Live with more confidence." },
      { property: "og:image", content: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80" },
    ],
  }),
  component: () => (
    <ServicePageLayout
      content={{
        eyebrow: "Testosterone Therapy for Men",
        headline: "Restore strength, energy, and vitality.",
        subhead: "Feel stronger. Think sharper. Live with more confidence.",
        heroImage:
          "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80",
        heroAlt: "Man training in natural light",
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