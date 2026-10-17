import { createFileRoute } from "@tanstack/react-router";
import { ServicePageLayout } from "@/components/site/ServicePageLayout";
import { SITE } from "@/components/site/site-data";
import hero from "@/assets/hero-hormone-men.jpg";

export const Route = createFileRoute("/services/hormone-therapy-men")({
  head: () => ({
    meta: [
      { title: "Testosterone Evaluation & TRT in Tupelo, MS | Uplift Medical" },
      {
        name: "description",
        content:
          "Explore a consultation about testosterone evaluation and treatment options in Tupelo. Ask about diagnosis, alternatives, risks and monitoring.",
      },
      { property: "og:title", content: "Testosterone Replacement Therapy (TRT) | Uplift Medical" },
      {
        property: "og:description",
        content:
          "Explore a consultation about testosterone evaluation and treatment options in Tupelo. Ask about diagnosis, alternatives, risks and monitoring.",
      },
      { property: "og:image", content: SITE.url + hero },
    ],
  }),
  component: () => (
    <ServicePageLayout
      content={{
        eyebrow: "Testosterone Replacement Therapy (TRT)",
        headline: "Discuss testosterone care with a clinician.",
        subhead: "Bring your questions. Discuss evaluation, alternatives and next steps.",
        heroImage: hero,
        heroAlt: "Competition-ready physique representing peak male vitality and strength",
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
