import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CTABand } from "@/components/site/CTABand";
import { TestimonialCard } from "@/components/site/TestimonialCard";
import { TESTIMONIALS } from "@/components/site/site-data";
import portrait from "@/assets/kenny-portrait.png.asset.json";
import teamPhoto from "@/assets/team.jpg.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Uplift Medical | Concierge Care in Tupelo, MS" },
      { name: "description", content: "Meet the team behind Uplift Medical. Personalized hormone, weight loss, and wellness care led by owner Kenneth Goolsby in Tupelo, MS." },
      { property: "og:title", content: "About Uplift Medical" },
      { property: "og:description", content: "Restoring balance. Revitalizing lives. Meet the team behind Uplift Medical." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="relative overflow-hidden bg-background pt-14 md:pt-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-20 md:grid-cols-12 md:gap-16 md:pb-28">
          <div className="md:col-span-6">
            <Reveal>
              <span className="eyebrow">About Uplift Medical</span>
              <h1 className="mt-5 font-display text-5xl leading-[1.05] text-primary md:text-7xl">
                Restoring balance. Revitalizing lives.
              </h1>
              <span className="gold-rule mt-6" />
            </Reveal>
          </div>
          <div className="md:col-span-6">
            <Reveal delay={120}>
              <p className="text-lg leading-relaxed text-foreground">
                Welcome to Uplift Medical, where we specialize in transforming lives through personalized medical care. Based in Tupelo, Mississippi, we are dedicated to exceptional healthcare tailored to the unique needs of each patient. We see in-person patients at our Tupelo office and serve patients across Mississippi and Tennessee through telehealth, supported by local lab draw stations.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* OWNER */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-12 md:items-start md:gap-16">
          <div className="md:col-span-5">
            <Reveal>
              {/* IMAGE SLOT: owner headshot. Replace with real photo. */}
              <div className="relative overflow-hidden rounded-3xl border border-hairline shadow-[0_30px_60px_-30px_rgba(14,42,71,0.30)]">
                <img
                  src={portrait.url}
                  alt="Kenneth Goolsby, owner of Uplift Medical, in a tailored white shirt"
                  className="h-[560px] w-full object-cover"
                  width={1080}
                  height={1280}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </Reveal>
          </div>
          <div className="md:col-span-7">
            <Reveal delay={100}>
              <span className="eyebrow">Meet the Owner</span>
              <h2 className="mt-4 font-display text-4xl leading-tight text-primary md:text-5xl">
                Kenneth "Kenny" Goolsby
              </h2>
              <p className="mt-2 text-sm font-medium tracking-wide text-gold">OWNER</p>
              <span className="gold-rule mt-6" />
              <div className="mt-8 space-y-5 text-base leading-relaxed text-foreground">
                <p>
                  "My name is Kenny Goolsby, owner of Uplift Medical. I have been involved in fitness and health since the age of 14. With over a decade of experience reading bloodwork for personal training clients and my clinical experience in various clinics, I realized the dire need for hormone replacement therapy for people in all walks of life."
                </p>
                <p>
                  "Hormone replacement is not only for those chasing a fitness goal. It is for anyone dealing with a decline in their quality of life. I have treated teenagers, middle aged adults, and people as old as 100. I have shared laughs, tears, and success stories with so many people, and it has been a blessing to be part of their journeys."
                </p>
                <p>
                  "At Uplift Medical, we do not see patients as just another person. We see someone who deserves to be heard, consoled, and treated accordingly. I look forward to meeting you, hearing your story, and being part of your journey to feeling the way you have always wanted. You deserve to be Uplifted."
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TEAM PLACEHOLDER */}
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Our Team"
              title="Experienced providers, attentive care."
              subhead="Our team includes nurse practitioners and support staff dedicated to every step of your journey."
            />
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-14 overflow-hidden rounded-3xl border border-hairline shadow-[0_30px_60px_-30px_rgba(14,42,71,0.30)]">
              <img
                src={teamPhoto.url}
                alt="The Uplift Medical providers and staff together in the Tupelo office"
                className="h-auto w-full object-cover"
                width={1920}
                height={960}
                loading="lazy"
                decoding="async"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Testimonials"
              title="What our patients are saying."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 80}>
                <TestimonialCard quote={t.quote} name={t.name} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}