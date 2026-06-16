import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/logo-primary.png.asset.json";

export function Logo({ tone = "navy" }: { tone?: "navy" | "cream" }) {
  return (
    <Link to="/" className="inline-flex items-center" aria-label="Uplift Medical home">
      <img
        src={logoAsset.url}
        alt="Uplift Medical"
        className="h-10 w-auto md:h-12"
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />
    </Link>
  );
}