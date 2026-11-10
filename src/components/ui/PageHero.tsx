import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { SplitHeading } from "./SplitHeading";

export function PageHero({ eyebrow, title, text }: { eyebrow: string; title: ReactNode; text?: string }) {
  return (
    <section className="relative isolate overflow-hidden pb-16 pt-36 sm:pb-20 sm:pt-44">
      <div className="dot-grid absolute inset-0 -z-10" aria-hidden />
      <div className="orb -left-40 -top-24 -z-10 h-[30rem] w-[30rem] bg-purple" aria-hidden />
      <div className="orb -right-32 top-10 -z-10 h-[26rem] w-[26rem] bg-electric" aria-hidden />
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal y={16}>
          <span className="glass inline-flex items-center gap-3 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-electric">
            <span className="bg-brand h-1.5 w-1.5 rounded-full" aria-hidden /> {eyebrow}
          </span>
        </Reveal>
        <SplitHeading as="h1" start="top 100%" className="mt-6 text-[clamp(2.4rem,6.4vw,5rem)] font-semibold leading-[1.02]">
          {title}
        </SplitHeading>
        {text && (
          <Reveal delay={0.2}>
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-muted">{text}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
