import { Link } from "@tanstack/react-router";
import logoPrimary from "@/assets/logo-primary.svg.asset.json";
import logoSecondary from "@/assets/logo-secondary.svg.asset.json";

export function Logo({ tone = "navy" }: { tone?: "navy" | "cream" }) {
  const src = tone === "cream" ? logoSecondary.url : logoPrimary.url;
  return (
    <Link to="/" className="inline-flex items-center" aria-label="Uplift Medical home">
      <img
        src={src}
        alt="Uplift Medical"
        className={`h-10 w-auto md:h-12 ${tone === "cream" ? "" : ""}`}
        loading="eager"
        decoding="async"
      />
    </Link>
  );
}