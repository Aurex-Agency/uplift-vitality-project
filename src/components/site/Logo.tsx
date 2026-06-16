import { Link } from "@tanstack/react-router";

export function Logo({ tone = "navy" }: { tone?: "navy" | "cream" }) {
  const text = tone === "cream" ? "text-cream" : "text-primary";
  return (
    <Link to="/" className="group inline-flex items-baseline gap-1.5">
      <span className={`font-display text-2xl leading-none tracking-tight ${text}`}>
        UPLIFT
      </span>
      <span className="h-1.5 w-1.5 translate-y-[-2px] rounded-full bg-gold transition-transform group-hover:scale-125" />
      <span className={`font-display text-2xl leading-none tracking-tight ${text}`}>
        MEDICAL
      </span>
    </Link>
  );
}