import { SectionHeading } from "./SectionHeading";
import { STEPS } from "./site-data";
import { Reveal } from "./Reveal";

export function HowItWorks() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionHeading eyebrow="How It Works" title="Your path to feeling uplifted." />
        </Reveal>
        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 80} className="bg-white p-8 md:p-10">
              <span className="font-display text-5xl text-gold">{s.n}</span>
              <h3 className="mt-6 font-display text-2xl text-primary">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}