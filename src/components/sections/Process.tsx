"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Compass, Lightbulb, Rocket, Wand2 } from "lucide-react";
import { useEffect, useRef } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SplitHeading } from "@/components/ui/SplitHeading";
import { process } from "@/data/content";

const icons = [Compass, Lightbulb, Wand2, Rocket];

export function Process() {
  const root = useRef<HTMLElement>(null);
  const line = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      const steps = gsap.utils.toArray<HTMLElement>(".p-step");
      if (reduce) {
        steps.forEach((s) => s.classList.add("is-active"));
        gsap.set(line.current, { scaleY: 1 });
        return;
      }
      gsap.fromTo(
        line.current,
        { scaleY: 0 },
        { scaleY: 1, ease: "none", scrollTrigger: { trigger: ".p-list", start: "top 60%", end: "bottom 60%", scrub: 0.4 } },
      );
      steps.forEach((s) => {
        ScrollTrigger.create({
          trigger: s,
          start: "top 62%",
          end: "bottom 38%",
          toggleClass: { targets: s, className: "is-active" },
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="overflow-x-clip relative py-24 sm:py-36">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Reveal y={16}>
            <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-electric">
              <span className="bg-brand h-px w-8" aria-hidden /> Our process
            </span>
          </Reveal>
          <SplitHeading className="mt-5 text-[clamp(2.1rem,5vw,3.6rem)] font-semibold leading-[1.04]">
            From first conversation to <span className="text-brand">continued growth.</span>
          </SplitHeading>
          <Reveal delay={0.15}>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">
              A clear four-stage approach so you always know where your project stands and what happens next.
            </p>
          </Reveal>
        </div>

        <div className="p-list relative">
          <div className="absolute bottom-0 left-[1.65rem] top-0 w-px bg-line" aria-hidden>
            <div ref={line} className="bg-brand h-full w-full origin-top" />
          </div>
          <ol className="space-y-12 sm:space-y-16">
            {process.map((s, i) => {
              const Icon = icons[i];
              return (
                <li key={s.n} className="p-step group relative pl-20 opacity-40 transition-opacity duration-500 [&.is-active]:opacity-100">
                  <span className="card absolute left-0 top-0 grid h-[3.3rem] w-[3.3rem] place-items-center rounded-full transition-all duration-500 group-[.is-active]:bg-brand group-[.is-active]:text-white group-[.is-active]:shadow-[0_0_30px_rgba(67,56,245,0.55)]">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="font-mono text-xs tracking-[0.25em] text-electric">{s.n}</div>
                  <h3 className="mt-2 text-3xl font-semibold sm:text-4xl">{s.title}</h3>
                  <p className="mt-3 max-w-md text-lg leading-relaxed text-muted">{s.text}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
