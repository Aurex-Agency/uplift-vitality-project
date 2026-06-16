import { Star } from "lucide-react";

export function TestimonialCard({ quote, name }: { quote: string; name: string }) {
  return (
    <figure className="flex h-full flex-col gap-6 rounded-2xl border border-hairline bg-white p-8 shadow-[0_2px_24px_-12px_rgba(14,42,71,0.10)]">
      <div className="flex gap-0.5 text-gold">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <blockquote className="flex-1 font-display text-xl leading-snug text-primary">
        “{quote}”
      </blockquote>
      <figcaption className="flex items-center gap-3 border-t border-hairline pt-5">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary font-display text-primary">
          {name.charAt(0)}
        </span>
        <span className="text-sm font-medium tracking-wide text-foreground">{name}</span>
      </figcaption>
    </figure>
  );
}