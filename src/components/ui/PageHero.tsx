import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function PageHero({ eyebrow, title, text }: { eyebrow: string; title: ReactNode; text?: string }) {
  return (
    <section className="relative isolate overflow-hidden pb-16 pt-36 sm:pt-44">
      <div className="dot-grid absolute inset-0 -z-10" aria-hidden />
      <div className="orb -left-40 -top-10 -z-10 h-[28rem] w-[28rem] bg-purple" aria-hidden />
      <div className="orb -right-32 top-10 -z-10 h-96 w-96 bg-electric" aria-hidden />
      <Reveal className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-electric">
          <span className="h-px w-8 bg-brand" aria-hidden /> {eyebrow}
        </span>
        <h1 className="mt-5 text-4xl font-semibold leading-[1.05] sm:text-6xl">{title}</h1>
        {text && <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">{text}</p>}
      </Reveal>
    </section>
  );
}
