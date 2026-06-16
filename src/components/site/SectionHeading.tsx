import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  subhead,
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  subhead?: ReactNode;
  align?: "left" | "center";
  light?: boolean;
}) {
  const center = align === "center";
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2
        className={`mt-4 font-display text-4xl leading-[1.05] tracking-tight md:text-5xl ${
          light ? "text-cream" : "text-primary"
        }`}
      >
        {title}
      </h2>
      {subhead && (
        <p
          className={`mt-5 text-base leading-relaxed md:text-lg ${
            light ? "text-cream/80" : "text-muted-foreground"
          }`}
        >
          {subhead}
        </p>
      )}
      <span className={`gold-rule mt-6 ${center ? "mx-auto" : ""}`} />
    </div>
  );
}