import { createFileRoute } from "@tanstack/react-router";
import { ServicePageLayout } from "@/components/site/ServicePageLayout";
import { SITE } from "@/components/site/site-data";
import heroImg from "@/assets/hero-hormone-women.jpg";

export const Route = createFileRoute("/services/hormone-therapy-women")({
  head: () => ({
    meta: [
      { title: "Women’s Hormone Consultation in Tupelo, MS | Uplift Medical" },
      {
        name: "description",
        content:
          "Prepare for an individual women’s hormone consultation in Tupelo. Discuss your history, concerns, treatment choices and follow-up.",
      },
      { property: "og:title", content: "Testosterone Therapy for Women | Uplift Medical" },
      {
        property: "og:description",
        content:
          "Prepare for an individual women’s hormone consultation in Tupelo. Discuss your history, concerns, treatment choices and follow-up.",
      },
      { property: "og:image", content: SITE.url + heroImg },
    ],
  }),
  component: () => (
    <ServicePageLayout
      content={{
        eyebrow: "Testosterone Therapy for Women",
        headline: "A conversation about your hormone care options.",
        subhead: "Bring your questions. Discuss evaluation, alternatives and next steps.",
        heroImage: heroImg,
        heroAlt: "Uplift Medical provider preparing an injection",
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
          { label: "Signs of low testosterone", to: "/resources/signs-of-low-testosterone" },
          { label: "How to choose a hormone clinic", to: "/resources/how-to-choose-a-trt-clinic" },
        ],
      }}
    />
  ),
});
