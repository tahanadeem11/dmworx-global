"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import type { Project } from "@/data/content";
import { ProjectArt } from "./ProjectArt";

export function ProjectCard({ p, tall = false }: { p: Project; tall?: boolean }) {
  const [a, b] = p.hue;
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  return (
    <motion.article
      ref={ref}
      id={p.slug}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.05 }}
      variants={{ hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } }}
      className="group"
      data-cursor
    >
      <motion.div
        variants={{ hidden: { clipPath: "inset(0 0 100% 0)" }, show: { clipPath: "inset(0 0 0% 0)", transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } } }}
        className={`relative overflow-hidden rounded-[1.75rem] ${tall ? "aspect-[4/5]" : "aspect-[16/11]"}`}
        style={{ background: `linear-gradient(135deg, ${a}, ${b})` }}
      >
        <motion.div style={{ y }} className="absolute -inset-[6%] transition-transform duration-[900ms] ease-out group-hover:scale-105">
          <ProjectArt slug={p.slug} />
        </motion.div>
        {p.placeholder && (
          <span className="absolute left-4 top-4 rounded-full bg-black/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white backdrop-blur">
            Placeholder
          </span>
        )}
      </motion.div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-electric">{p.industry}</p>
          <h3 className="mt-1 text-2xl font-semibold">{p.name}</h3>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">{p.description}</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {p.services.map((s) => (
              <li key={s} className="rounded-full border border-line px-3 py-1 text-xs text-muted">{s}</li>
            ))}
          </ul>
        </div>
        <span
          className={`mt-1 inline-flex shrink-0 items-center gap-1 text-sm font-semibold ${p.placeholder ? "cursor-default text-muted" : "text-electric"}`}
          aria-disabled={p.placeholder}
        >
          {p.placeholder ? "Coming soon" : "View Project"}
          {!p.placeholder && <ArrowUpRight className="h-4 w-4" aria-hidden />}
        </span>
      </div>
    </motion.article>
  );
}
