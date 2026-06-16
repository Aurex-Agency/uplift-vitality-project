import { STATS } from "./site-data";

export function StatStrip() {
  return (
    <div className="grid grid-cols-2 divide-x divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur md:grid-cols-4 md:divide-y-0">
      {STATS.map((s) => (
        <div key={s.label} className="px-5 py-6 text-center md:px-6 md:py-7">
          <div className="font-display text-3xl text-gold md:text-4xl">{s.value}</div>
          <div className="mt-1 text-xs font-medium tracking-wide text-cream/70">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
