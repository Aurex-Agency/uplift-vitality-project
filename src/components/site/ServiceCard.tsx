import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export function ServiceCard({
  title,
  description,
  to,
  index,
}: {
  title: string;
  description: string;
  to: string;
  index: number;
}) {
  return (
    <Link
      to={to}
      className="group relative flex flex-col gap-4 rounded-2xl border border-hairline bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-[0_24px_48px_-24px_rgba(14,42,71,0.18)]"
    >
      <div className="flex items-start justify-between">
        <span className="font-display text-sm tracking-[0.3em] text-gold">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-hairline text-primary transition group-hover:border-gold group-hover:bg-gold group-hover:text-primary">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
      <h3 className="font-display text-2xl leading-tight text-primary">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
      <span className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium tracking-widest text-primary opacity-0 transition group-hover:opacity-100">
        LEARN MORE
      </span>
    </Link>
  );
}