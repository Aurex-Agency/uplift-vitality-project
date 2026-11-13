import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, Phone } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { CTAButton } from "@/components/site/CTAButton";
import { CTABand } from "@/components/site/CTABand";
import { SITE } from "@/components/site/site-data";
import { CHERRY_APPLY_URL, CHERRY_FULL_PAGE_ID, mountCherryFullPage } from "@/lib/cherry";

export const Route = createFileRoute("/payment-plans")({
  head: () => ({
    meta: [
      { title: "Payment Plans with Cherry | Uplift Medical, Tupelo MS" },
      {
        name: "description",
        content:
          "Pay over time for care at Uplift Medical with Cherry, our primary financing option. See estimated monthly payments and apply online.",
      },
      { property: "og:title", content: "Payment Plans with Cherry | Uplift Medical" },
      {
        property: "og:description",
        content:
          "Cherry is Uplift Medical's primary financing option. See estimated monthly payments and apply online.",
      },
    ],
  }),
  component: PaymentPlans,
});

function PaymentPlans() {
  // The root layout loads Cherry's script. On a client-side visit after it has
  // loaded, mount the full-page widget into the fresh #all container.
  useEffect(() => {
    mountCherryFullPage();
  }, []);

  return (
    <>
      <section className="bg-background pt-14 pb-12 md:pt-24 md:pb-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <span className="eyebrow">Payment Plans</span>
            <h1 className="mt-5 font-display text-5xl leading-[1.05] text-primary md:text-7xl">
              Pay over time with Cherry.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Cherry is our primary financing option. Split the cost of your care into monthly
              payments, and check your options online before your visit.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <CTAButton href={CHERRY_APPLY_URL} external variant="gold">
                Apply with Cherry <ExternalLink className="h-4 w-4" />
              </CTAButton>
              <CTAButton to="/book" variant="outline">
                Book a Consultation
              </CTAButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/*
        Cherry is the primary financing option and stays first on this page.
        If other financing providers are added later, list them below this section.
      */}
      <section aria-label="Cherry payment plans" className="bg-white py-12 md:py-16">
        {/* Cherry's full-page widget renders here; React leaves its contents alone. */}
        <div id={CHERRY_FULL_PAGE_ID} className="mx-auto flex max-w-7xl justify-center" />
        <p className="mx-auto mt-8 max-w-3xl px-6 text-center text-sm text-muted-foreground">
          Payment calculator not showing?{" "}
          <a
            href={CHERRY_APPLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary underline underline-offset-4 hover:text-gold"
          >
            Apply directly with Cherry
          </a>
          .
        </p>
      </section>

      <section className="bg-background py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-display text-3xl text-primary md:text-4xl">Good to know</h2>
          <ul className="mt-6 space-y-4 leading-relaxed">
            <li>
              Ask our team about current charges for your consultation, lab work and treatment plan,
              so you can choose a payment amount that fits.
            </li>
            <li>
              Cherry reviews each application. Approval, payment amounts, APR and terms are set by
              Cherry and its lending partners, not by Uplift Medical.
            </li>
          </ul>
          <div className="mt-8">
            <CTAButton href={SITE.phoneHref} variant="outline">
              <Phone className="h-4 w-4" /> Questions? Call {SITE.phone}
            </CTAButton>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
