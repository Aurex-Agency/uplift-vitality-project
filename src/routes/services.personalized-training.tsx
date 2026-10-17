import { createFileRoute } from "@tanstack/react-router";
import { ServicePageLayout } from "@/components/site/ServicePageLayout";
import { SITE } from "@/components/site/site-data";
import heroImg from "@/assets/hero-hormone-men.jpg";

export const Route = createFileRoute("/services/personalized-training")({
  head: () => ({
    meta: [
      { title: "Personalized Training Programs | Uplift Medical, Tupelo MS" },
      {
        name: "description",
        content:
          "Custom workout programming built around your goals: strength, muscle, fat loss, or toning up. Get the structure and push you need with Uplift Medical in Tupelo, MS.",
      },
      { property: "og:title", content: "Personalized Training Programs | Uplift Medical" },
      { property: "og:description", content: "A training plan built around your goals." },
      { property: "og:image", content: SITE.url + heroImg },
    ],
  }),
  component: () => (
    <ServicePageLayout
      content={{
        eyebrow: "Personalized Training",
        headline: "A training plan built around your goals.",
        subhead:
          "Whether you need structure, accountability, or an extra push, we program for where you want to go.",
        heroImage: heroImg,
        heroAlt: "Athlete showing the results of a personalized training program",
        intro:
          "If you already know your way around the gym but have lost your motivation or just need an extra push, we build a routine around your goals. Whether you want to get stronger, tone up, build muscle, or lose fat, we create a comprehensive plan built to fit your body, your experience, and your schedule.",
        signs: {
          title: "Personalized training is for you if",
          items: [
            "You know how to train but have lost momentum.",
            "You want a plan built for your specific goals.",
            "You need structure and accountability.",
            "Your progress has stalled and you want a push.",
            "You are optimizing hormones and want to maximize results.",
            "You want strength, muscle, fat loss, or a leaner look.",
          ],
        },
        benefits: [
          {
            title: "What your program delivers",
            items: [
              "Programming for your goal: strength, muscle, fat loss, or tone.",
              "Routines matched to your experience level.",
              "Progression that keeps you moving forward.",
              "Accountability and an extra push when you need it.",
              "Built around your schedule and available equipment.",
              "Designed to pair with your hormone and nutrition plan.",
            ],
          },
        ],
        includeQualifyLink: true,
      }}
    />
  ),
});
