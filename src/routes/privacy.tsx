import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Uplift Medical" },
      { name: "description", content: "Privacy Policy for Uplift Medical." },
    ],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <span className="eyebrow">Legal</span>
        <h1 className="mt-4 font-display text-5xl leading-tight text-primary">Privacy Policy</h1>
        <span className="gold-rule mt-6" />
        <div className="mt-8 space-y-5 text-base leading-relaxed text-foreground">
          <p>
            Uplift Medical respects your privacy. This page is a placeholder for our full Privacy Policy. We do not sell your personal information. We use the information you provide to communicate with you about your care and our services.
          </p>
          <p>
            If you have questions about how we handle your information, please contact us at the address or phone number listed on our Contact page.
          </p>
          <p className="text-sm text-muted-foreground">
            Full policy text will be added here. This page is intentionally brief.
          </p>
        </div>
      </div>
    </section>
  );
}