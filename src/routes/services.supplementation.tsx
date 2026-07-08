import { createFileRoute } from "@tanstack/react-router";
import { ServicePageLayout } from "@/components/site/ServicePageLayout";
import { SITE } from "@/components/site/site-data";
import heroImg from "@/assets/kenny-injection.jpg";

export const Route = createFileRoute("/services/supplementation")({
  head: () => ({
    meta: [
      { title: "Vitamin & Supplementation Protocols | Uplift Medical, Tupelo MS" },
      {
        name: "description",
        content:
          "Holistic, provider-guided vitamin and supplement protocols to support healthy blood pressure, cholesterol, and lab values in Tupelo, MS. Care coordinated with your prescriber.",
      },
      { property: "og:title", content: "Vitamin & Supplementation Protocols | Uplift Medical" },
      { property: "og:description", content: "A holistic approach to how you feel every day." },
      { property: "og:image", content: SITE.url + heroImg },
    ],
  }),
  component: () => (
    <ServicePageLayout
      content={{
        eyebrow: "Vitamin & Supplementation",
        headline: "A holistic approach to how you feel.",
        subhead:
          "Provider-guided vitamin and supplement protocols, tailored to your labs and your body.",
        heroImage: heroImg,
        heroAlt: "Uplift Medical provider preparing a personalized health protocol",
        intro:
          "If you are tired of relying on medication for high blood pressure, cholesterol, or elevated lab values, we take a holistic approach to what best suits your body. Paired with optimized hormones, our natural vitamin and health protocols are designed to support your overall health and, under your provider's supervision, may help reduce your reliance on certain medications over time. We always coordinate with your prescriber, and you should never stop a prescribed medication on your own.",
        signs: {
          title: "This may be a fit if you",
          items: [
            "Want a more natural, holistic approach to your health.",
            "Are managing blood pressure, cholesterol, or other lab values.",
            "Prefer to address root causes, not just symptoms.",
            "Are already optimizing your hormones.",
            "Want protocols tailored to your own lab work.",
            "Want a plan coordinated with your existing care.",
          ],
        },
        benefits: [
          {
            title: "How we approach it",
            items: [
              "Natural vitamin and supplement protocols.",
              "Support for healthy blood pressure and cholesterol.",
              "Tailored to your lab values and your body.",
              "Paired with optimized hormones for better results.",
              "A holistic, root-cause mindset.",
              "Guided by your provider and coordinated with your prescriber.",
            ],
          },
        ],
        includeQualifyLink: true,
      }}
    />
  ),
});
