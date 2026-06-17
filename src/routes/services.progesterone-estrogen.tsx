import { createFileRoute } from "@tanstack/react-router";
import { ServicePageLayout } from "@/components/site/ServicePageLayout";
import heroImg from "@/assets/hero-progesterone-estrogen.jpg.asset.json";

export const Route = createFileRoute("/services/progesterone-estrogen")({
  head: () => ({
    meta: [
      { title: "Progesterone and Estrogen Therapy | Uplift Medical" },
      { name: "description", content: "Balance hormones and ease menopause or perimenopause symptoms with personalized therapy in Tupelo, MS." },
      { property: "og:title", content: "Progesterone and Estrogen Therapy" },
      { property: "og:description", content: "Balance your hormones, restore your vitality." },
      { property: "og:image", content: heroImg.url },
    ],
  }),
  component: () => (
    <ServicePageLayout
      content={{
        eyebrow: "Progesterone and Estrogen Therapy",
        headline: "Balance your hormones, restore your vitality.",
        subhead: "Feel like yourself again with personalized hormone therapy.",
        heroImage:
          "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
        heroAlt: "Calm clinical wellness scene",
        intro:
          "Hormonal imbalances can significantly impact a woman's well-being, causing fatigue, mood swings, weight gain, hot flashes, and sleep disturbances. Whether due to menopause, perimenopause, or other shifts, estrogen and progesterone play a crucial role in energy, mood, bone health, and vitality. Our therapy helps women restore balance and regain control of their health.",
        benefits: [
          {
            title: "Progesterone benefits",
            items: [
              "Menstrual cycle regulation.",
              "Support during pregnancy.",
              "Symptom relief during menopause such as hot flashes, night sweats, and mood swings.",
              "Bone health.",
              "Mood stability, reduced cramping, and better sleep.",
            ],
          },
          {
            title: "Estrogen benefits",
            items: [
              "Relief of menopausal symptoms.",
              "Bone health and reduced osteoporosis risk.",
              "Heart health benefits for younger women within ten years of menopause.",
              "Improved skin and hair.",
              "Support for cognitive function and memory.",
            ],
          },
        ],
        includeQualifyLink: true,
      }}
    />
  ),
});