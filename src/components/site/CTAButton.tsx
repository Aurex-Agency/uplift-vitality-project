import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

type Props = {
  to?: string;
  href?: string;
  variant?: "primary" | "outline" | "gold";
  children: ReactNode;
  className?: string;
};

const base =
  "group inline-flex h-12 items-center justify-center gap-2 rounded-full px-7 text-sm font-semibold tracking-wide transition-all duration-200 active:translate-y-0";

const styles = {
  primary:
    "bg-primary text-primary-foreground shadow-[0_8px_24px_-10px_rgba(14,42,71,0.5)] hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-[0_14px_32px_-12px_rgba(14,42,71,0.6)]",
  outline: "border border-gold/70 text-primary hover:bg-gold/10 hover:border-gold",
  gold: "gold-gradient text-primary hover:-translate-y-0.5 gold-glow",
};

export function CTAButton({ to, href, variant = "primary", children, className = "" }: Props) {
  const cls = `${base} ${styles[variant]} ${className}`;
  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link to={to ?? "/"} className={cls}>
      {children}
    </Link>
  );
}
