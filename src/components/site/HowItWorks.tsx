import { SectionHeading } from "./SectionHeading";
import { STEPS } from "./site-data";
import { Reveal } from "./Reveal";
import { PhoneCall, FlaskConical, Stethoscope, TrendingUp, type LucideIcon } from "lucide-react";

const STEP_ICONS: LucideIcon[] = [PhoneCall, FlaskConical, Stethoscope, TrendingUp];

export function HowItWorks() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="How It Works"
            title="Your path to feeling uplifted."
            subhead="Four simple steps from first call to feeling like yourself again."
          />
        </Reveal>
        <div className="relative mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => {
            const Icon = STEP_ICONS[i] ?? PhoneCall;
            return (
              <Reveal key={s.n} delay={i * 80}>
                <div className="group relative flex h-full flex-col rounded-2xl border border-hairline bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-[0_24px_48px_-24px_rgba(14,42,71,0.2)] md:p-8">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-cream">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <span className="font-display text-4xl text-gold/40 transition-colors group-hover:text-gold">
                      {s.n}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-2xl text-primary">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
