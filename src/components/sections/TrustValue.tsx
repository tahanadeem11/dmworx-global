"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { Compass, HeartHandshake, Lightbulb, Rocket, Wrench } from "lucide-react";
import { useEffect, useRef } from "react";
import { Reveal } from "@/components/ui/Reveal";

const pillars = [
  { icon: Compass, title: "Digital Expertise", text: "Specialists across development, search, social and paid media working as one team." },
  { icon: Lightbulb, title: "Creative Execution", text: "Ideas shaped into design and content that feel distinctive and on-brand." },
  { icon: Rocket, title: "Business-Focused Strategy", text: "Every decision tied to your goals, not vanity metrics." },
  { icon: Wrench, title: "Scalable Solutions", text: "Foundations built to grow as your business and audience do." },
  { icon: HeartHandshake, title: "Long-Term Support", text: "A partner who stays involved after launch." },
];

const statement =
  "DM Worx Global combines technology, creativity and digital strategy to help businesses succeed online, from the first idea to long-term growth.";

export function TrustValue() {
  const root = useRef<HTMLElement>(null);
  const para = useRef<HTMLParagraphElement>(null);

  // words light up as you scroll through the statement
  useEffect(() => {
    gsap.registerPlugin(SplitText, ScrollTrigger);
    const el = para.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      SplitText.create(el, {
        type: "words",
        autoSplit: true,
        onSplit(self) {
          return gsap.fromTo(
            self.words,
            { opacity: 0.16 },
            {
              opacity: 1,
              ease: "none",
              stagger: 0.12,
              scrollTrigger: { trigger: el, start: "top 82%", end: "bottom 45%", scrub: true },
            },
          );
        },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="band relative py-24 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal y={16}>
          <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-electric">
            <span className="bg-brand h-px w-8" aria-hidden /> Who we are
          </span>
        </Reveal>
        <h2 className="mt-6 font-display text-[clamp(1.3rem,2.4vw,1.6rem)] font-medium text-muted">
          Your <span className="text-brand">Digital Growth</span> Partner.
        </h2>
        <p ref={para} className="mt-6 max-w-5xl font-display text-[clamp(1.9rem,4.4vw,3.6rem)] font-medium leading-[1.12] tracking-tight">
          {statement}
        </p>

        <ul className="mt-20 grid border-t border-line sm:grid-cols-2 lg:grid-cols-5">
          {pillars.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 0.07}>
              <div className="spot group h-full border-b border-line p-7 transition-colors sm:border-r sm:last:border-r-0 lg:border-b-0">
                <span className="bg-brand-2 grid h-11 w-11 place-items-center rounded-2xl text-white transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                  <p.icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-6 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
