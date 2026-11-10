import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "center",
}: {
  eyebrow: string;
  title: ReactNode;
  text?: string;
  align?: "center" | "left";
}) {
  return (
    <Reveal className={`mb-14 max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-electric">
        <span className="h-px w-8 bg-brand" aria-hidden />
        {eyebrow}
      </span>
      <h2 className="mt-4 text-4xl font-semibold leading-[1.05] sm:text-5xl">{title}</h2>
      {text && <p className="mt-5 text-lg leading-relaxed text-muted">{text}</p>}
    </Reveal>
  );
}
