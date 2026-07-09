import { createFileRoute } from "@tanstack/react-router";
import { ServicePageLayout } from "@/components/site/ServicePageLayout";
import { SITE } from "@/components/site/site-data";
import heroImg from "@/assets/hero-hormone-women.jpg";

export const Route = createFileRoute("/services/hormone-therapy-women")({
  head: () => ({
    meta: [
      { title: "Testosterone Therapy for Women in Tupelo, MS | Uplift Medical" },
      {
        name: "description",
        content:
          "Hormone replacement therapy designed for women in Tupelo, MS. Testosterone therapy to restore energy, mood, libido, and strength. In person or by telehealth.",
      },
      { property: "og:title", content: "Testosterone Therapy for Women | Uplift Medical" },
      { property: "og:description", content: "Restore balance, energy, and confidence." },
      { property: "og:image", content: SITE.url + heroImg },
    ],
  }),
  component: () => (
    <ServicePageLayout
      content={{
        eyebrow: "Testosterone Therapy for Women",
        headline: "Restore balance, energy, and confidence.",
        subhead: "Feel stronger, sharper, and more in control of your health.",
        heroImage: heroImg,
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
        relatedGuides: [
          { label: "Signs of low testosterone", to: "/resources/signs-of-low-testosterone" },
          { label: "How to choose a hormone clinic", to: "/resources/how-to-choose-a-trt-clinic" },
        ],
      }}
    />
  ),
});
