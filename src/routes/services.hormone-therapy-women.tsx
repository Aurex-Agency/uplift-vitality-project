import { createFileRoute } from "@tanstack/react-router";
import { ServicePageLayout } from "@/components/site/ServicePageLayout";
import heroImg from "@/assets/hero-hormone-women.jpg.asset.json";

export const Route = createFileRoute("/services/hormone-therapy-women")({
  head: () => ({
    meta: [
      { title: "Testosterone Therapy for Women | Uplift Medical, Tupelo MS" },
      { name: "description", content: "Testosterone therapy designed for women. Restore energy, mood, libido, and strength with concierge care in Tupelo, MS." },
      { property: "og:title", content: "Testosterone Therapy for Women | Uplift Medical" },
      { property: "og:description", content: "Restore balance, energy, and confidence." },
      { property: "og:image", content: heroImg.url },
    ],
  }),
  component: () => (
    <ServicePageLayout
      content={{
        eyebrow: "Testosterone Therapy for Women",
        headline: "Restore balance, energy, and confidence.",
        subhead: "Feel stronger, sharper, and more in control of your health.",
        heroImage: heroImg.url,
        heroAlt: "Uplift Medical provider preparing an injection", 
        intro:
          "Testosterone is not just for men. Women need healthy testosterone levels to maintain energy, muscle tone, mood stability, and overall well-being. As women age, levels decline, leading to fatigue, brain fog, weight gain, low libido, and reduced strength. Our testosterone therapy for women is designed to restore hormonal balance so you feel revitalized and in control again.",
        signs: {
          title: "Signs you may be a candidate",
          items: [
            "Chronic fatigue and low energy.",
            "Brain fog and poor concentration.",
            "Decreased libido and sexual satisfaction.",
            "Loss of muscle tone and increased fat.",
            "Mood swings and irritability.",
            "Thinning hair and weaker nails.",
          ],
        },
        benefits: [
          {
            title: "What it helps with",
            items: [
              "Increased energy and stamina.",
              "Improved mental clarity and focus.",
              "Restored libido and sexual health.",
              "Stronger muscles and fat loss.",
              "Better mood and emotional balance.",
              "Thicker hair and healthier skin.",
            ],
          },
        ],
        includeQualifyLink: true,
      }}
    />
  ),
});