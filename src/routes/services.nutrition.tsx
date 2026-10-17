import { createFileRoute } from "@tanstack/react-router";
import { ServicePageLayout } from "@/components/site/ServicePageLayout";
import { SITE } from "@/components/site/site-data";
import heroImg from "@/assets/uplift-tee-gym.jpg";

export const Route = createFileRoute("/services/nutrition")({
  head: () => ({
    meta: [
      { title: "Personalized Nutrition Coaching | Uplift Medical, Tupelo MS" },
      {
        name: "description",
        content:
          "Custom nutrition plans built around your goals, activity level, and the foods you love. Optimize your physique and health with Uplift Medical in Tupelo, MS.",
      },
      { property: "og:title", content: "Personalized Nutrition Coaching | Uplift Medical" },
      {
        property: "og:description",
        content: "Nutrition that fits your life, not the other way around.",
      },
      { property: "og:image", content: SITE.url + heroImg },
    ],
  }),
  component: () => (
    <ServicePageLayout
      content={{
        eyebrow: "Nutrition",
        headline: "Nutrition that fits your life, not the other way around.",
        subhead: "A tailored plan built around your goals, your schedule, and the foods you love.",
        heroImage: heroImg,
        heroAlt: "Person wearing an Uplift Medical shirt at the gym",
        intro:
          "Once your hormones are dialed in, nutrition is how you take your physique and performance to the next level. Not every plan has to be boring, and you do not have to give up your favorite foods. We take into account your day-to-day life, activity level, and preferences to build a comprehensive, tailored nutrition plan around your needs and lifestyle goals.",
        signs: {
          title: "Nutrition may be your next step if",
          items: [
            "Your hormones are optimized and you want to level up your physique.",
            "Restrictive diets have never stuck for you.",
            "You are unsure how much to eat for your goals.",
            "You want results without giving up the foods you love.",
            "Your energy dips through the day or around training.",
            "You want a plan built for your life, not a template.",
          ],
        },
        benefits: [
          {
            title: "What your plan includes",
            items: [
              "Built around your daily routine and activity level.",
              "Flexible enough to keep your favorite foods.",
              "Calories and macros tuned to your goals.",
              "A focus on your physique and lifestyle goals.",
              "Adjustments as your body and goals change.",
              "A sustainable approach, not a crash diet.",
            ],
          },
        ],
        includeQualifyLink: true,
      }}
    />
  ),
});
