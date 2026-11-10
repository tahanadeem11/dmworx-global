import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { SplitHeading } from "./SplitHeading";

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
  const center = align === "center";
  return (
    <div className={`mb-14 max-w-3xl sm:mb-16 ${center ? "mx-auto text-center" : ""}`}>
      <Reveal y={16}>
        <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-electric">
          <span className="bg-brand h-px w-8" aria-hidden />
          {eyebrow}
          {center && <span className="bg-brand h-px w-8" aria-hidden />}
        </span>
      </Reveal>
      <SplitHeading className="mt-5 text-[clamp(2.1rem,5vw,3.6rem)] font-semibold leading-[1.04]">{title}</SplitHeading>
      {text && (
        <Reveal delay={0.15} y={20}>
          <p className="mt-5 text-lg leading-relaxed text-muted">{text}</p>
        </Reveal>
      )}
    </div>
  );
}
