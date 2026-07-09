import { createFileRoute } from "@tanstack/react-router";
import { ServicePageLayout } from "@/components/site/ServicePageLayout";
import { SITE } from "@/components/site/site-data";
import hero from "@/assets/hero-hormone-men.jpg";

export const Route = createFileRoute("/services/hormone-therapy-men")({
  head: () => ({
    meta: [
      { title: "Testosterone Replacement Therapy (TRT) in Tupelo, MS | Uplift Medical" },
      {
        name: "description",
        content:
          "Physician-guided testosterone replacement therapy (TRT) in Tupelo, MS. Personalized to your labs, not a one-size protocol. Restore energy, strength, focus, and libido. In-person or telehealth.",
      },
      { property: "og:title", content: "Testosterone Replacement Therapy (TRT) | Uplift Medical" },
      {
        property: "og:description",
        content:
          "Restore strength, energy, and vitality. Feel stronger. Think sharper. Live with more confidence.",
      },
      { property: "og:image", content: SITE.url + hero },
    ],
  }),
  component: () => (
    <ServicePageLayout
      content={{
        eyebrow: "Testosterone Replacement Therapy (TRT)",
        headline: "TRT that restores strength, energy, and vitality.",
        subhead: "Feel stronger. Think sharper. Live with more confidence.",
        heroImage: hero,
        heroAlt: "Competition-ready physique representing peak male vitality and strength",
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
        relatedGuides: [
          {
            label: "10 signs of low testosterone in men",
            to: "/resources/signs-of-low-testosterone",
          },
          { label: "How much does TRT cost?", to: "/resources/how-much-does-trt-cost" },
          { label: "How to choose a TRT clinic", to: "/resources/how-to-choose-a-trt-clinic" },
        ],
      }}
    />
  ),
});
