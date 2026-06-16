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
  "inline-flex h-12 items-center justify-center rounded-full px-7 text-sm font-medium tracking-wide transition-all duration-200";

const styles = {
  primary:
    "bg-primary text-primary-foreground shadow-sm hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-md",
  outline: "border border-gold text-primary hover:bg-gold/10",
  gold: "bg-gold text-primary hover:-translate-y-0.5 hover:bg-gold/90",
};

export function CTAButton({ to, href, variant = "primary", children, className = "" }: Props) {
  const cls = `${base} ${styles[variant]} ${className}`;
  if (href) {
    return <a href={href} className={cls}>{children}</a>;
  }
  return <Link to={to ?? "/"} className={cls}>{children}</Link>;
}