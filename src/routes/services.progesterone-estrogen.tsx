import { createFileRoute } from "@tanstack/react-router";
import { ServicePageLayout } from "@/components/site/ServicePageLayout";
import { SITE } from "@/components/site/site-data";
import heroImg from "@/assets/hero-progesterone-estrogen.jpg";

export const Route = createFileRoute("/services/progesterone-estrogen")({
  head: () => ({
    meta: [
      { title: "Menopause Consultation in Tupelo, MS | Uplift Medical" },
      {
        name: "description",
        content:
          "Explore a menopause consultation in Tupelo. Ask about progesterone and estrogen options, alternatives, personal risks and follow-up.",
      },
      { property: "og:title", content: "Progesterone and Estrogen Therapy" },
      {
        property: "og:description",
        content:
          "Explore a menopause consultation in Tupelo. Ask about progesterone and estrogen options, alternatives, personal risks and follow-up.",
      },
      { property: "og:image", content: SITE.url + heroImg },
    ],
  }),
  component: () => (
    <ServicePageLayout
      content={{
        eyebrow: "Progesterone and Estrogen Therapy",
        headline: "Discuss menopause care and your choices.",
        subhead: "Bring your questions. Discuss evaluation, alternatives and next steps.",
        heroImage: heroImg,
        heroAlt: "A person holding an Uplift Medical business card",
        intro:
          "Your medical history and individual circumstances matter when considering care. Use a consultation to discuss the concerns affecting your daily life, the evaluation that may be appropriate and the choices available to you. No symptom checklist establishes eligibility or guarantees a particular treatment result.",
        benefits: [
          {
            title: "Questions for your consultation",
            items: [
              "What information is needed before a treatment decision?",
              "What options and alternatives are appropriate to discuss?",
              "What limitations and potential risks apply to my history?",
              "How would progress and potential problems be monitored?",
              "What follow-up is needed and what does it cost?",
              "What would lead us to reconsider the plan?",
            ],
          },
        ],
        includeQualifyLink: true,
      }}
    />
  ),
});
