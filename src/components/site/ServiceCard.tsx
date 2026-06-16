import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Dumbbell, Flower2, HeartPulse, Dna, Droplets, Flame, type LucideIcon } from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  Dumbbell,
  Flower2,
  HeartPulse,
  Dna,
  Droplets,
  Flame,
};

export function ServiceCard({
  title,
  description,
  to,
  index,
  icon,
}: {
  title: string;
  description: string;
  to: string;
  index: number;
  icon?: string;
}) {
  const Icon = icon ? ICONS[icon] : undefined;
  return (
    <Link
      to={to}
      className="group relative flex h-full flex-col gap-5 overflow-hidden rounded-2xl border border-hairline bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/60 hover:shadow-[0_28px_56px_-24px_rgba(14,42,71,0.22)] sm:p-8"
    >
      {/* gold wash on hover */}
      <span className="pointer-events-none absolute inset-x-0 -top-px h-1 origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" />
      <div className="flex items-start justify-between">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-cream">
          {Icon ? (
            <Icon className="h-5 w-5" strokeWidth={1.75} />
          ) : (
            <span className="font-display text-lg">{String(index + 1).padStart(2, "0")}</span>
          )}
        </span>
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-hairline text-primary transition group-hover:border-gold group-hover:bg-gold group-hover:text-primary">
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
        </span>
      </div>
      <h3 className="font-display text-2xl leading-tight text-primary">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
      <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-xs font-semibold tracking-widest text-gold">
        LEARN MORE
        <ArrowUpRight className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
      </span>
    </Link>
  );
}
