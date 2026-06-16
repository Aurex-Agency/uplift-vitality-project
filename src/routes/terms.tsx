import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service | Uplift Medical" },
      { name: "description", content: "Terms of Service for Uplift Medical." },
    ],
  }),
  component: Terms,
});

function Terms() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <span className="eyebrow">Legal</span>
        <h1 className="mt-4 font-display text-5xl leading-tight text-primary">Terms of Service</h1>
        <span className="gold-rule mt-6" />
        <div className="mt-8 space-y-5 text-base leading-relaxed text-foreground">
          <p>
            By accessing and using this website you agree to these terms. The content on this site is for informational purposes and is not a substitute for medical advice, diagnosis, or treatment.
          </p>
          <p>
            Always seek the advice of a qualified healthcare provider with any questions you may have regarding a medical condition. Individual results vary.
          </p>
          <p className="text-sm text-muted-foreground">
            Full terms will be added here. This page is intentionally brief.
          </p>
        </div>
      </div>
    </section>
  );
}