import { createFileRoute } from "@tanstack/react-router";
import { ServicePageLayout } from "@/components/site/ServicePageLayout";
import { SITE } from "@/components/site/site-data";
import heroImg from "@/assets/hero-progesterone-estrogen.jpg";

export const Route = createFileRoute("/services/progesterone-estrogen")({
  head: () => ({
    meta: [
      { title: "Menopause & Perimenopause Treatment in Tupelo, MS | Progesterone & Estrogen" },
      {
        name: "description",
        content:
          "Hormone replacement therapy for menopause and perimenopause in Tupelo, MS. Progesterone and estrogen plans to ease hot flashes, mood swings, and sleep problems.",
      },
      { property: "og:title", content: "Progesterone and Estrogen Therapy" },
      { property: "og:description", content: "Balance your hormones, restore your vitality." },
      { property: "og:image", content: SITE.url + heroImg },
    ],
  }),
  component: () => (
    <ServicePageLayout
      content={{
        eyebrow: "Progesterone and Estrogen Therapy",
        headline: "Balance your hormones, restore your vitality.",
        subhead: "Feel like yourself again with personalized hormone therapy.",
        heroImage: heroImg,
        heroAlt: "A person holding an Uplift Medical business card",
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
