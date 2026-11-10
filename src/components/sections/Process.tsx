"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { process } from "@/data/content";

export function Process() {
  const root = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      if (reduce) {
        gsap.set(bar.current, { scaleY: 1, scaleX: 1 });
        return;
      }
      gsap.fromTo(
        bar.current,
        { scaleY: 0, scaleX: 0 },
        { scaleY: 1, scaleX: 1, ease: "none", scrollTrigger: { trigger: root.current, start: "top 70%", end: "bottom 65%", scrub: true } },
      );
      gsap.utils.toArray<HTMLElement>(".step").forEach((el) => {
        gsap.from(el, { opacity: 0, y: 40, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 85%" } });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="Our process" title={<>From first conversation to <span className="text-brand">continued growth.</span></>} />
        <div ref={root} className="relative">
          {/* progress line: vertical on mobile, horizontal on desktop */}
          <div className="absolute left-6 top-0 h-full w-0.5 bg-line lg:left-0 lg:top-6 lg:h-0.5 lg:w-full" aria-hidden>
            <div ref={bar} className="bg-brand h-full w-full origin-top lg:origin-left" />
          </div>
          <ol className="grid gap-10 lg:grid-cols-4 lg:gap-6">
            {process.map((s) => (
              <li key={s.n} className="step relative pl-16 lg:pl-0 lg:pt-16">
                <span className="bg-brand absolute left-0 top-0 grid h-12 w-12 place-items-center rounded-full font-display text-sm font-bold text-white shadow-[0_0_30px_rgba(67,56,245,0.5)]">
                  {s.n}
                </span>
                <h3 className="text-2xl font-semibold">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
