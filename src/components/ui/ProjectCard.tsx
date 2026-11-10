"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import type { Project } from "@/data/content";

export function ProjectCard({ p, tall = false }: { p: Project; tall?: boolean }) {
  const [a, b] = p.hue;
  return (
    <motion.article
      id={p.slug}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <motion.div
        initial={{ clipPath: "inset(0 0 100% 0)" }}
        whileInView={{ clipPath: "inset(0 0 0% 0)" }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        className={`relative overflow-hidden rounded-3xl ${tall ? "aspect-[4/5]" : "aspect-[16/11]"}`}
        style={{ background: `linear-gradient(135deg, ${a}, ${b})` }}
      >
        <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full transition-transform duration-[900ms] ease-out group-hover:scale-110" aria-hidden>
          <circle cx="320" cy="60" r="120" fill="#fff" opacity="0.1" />
          <circle cx="60" cy="260" r="150" fill="#fff" opacity="0.08" />
          <rect x="70" y="80" width="260" height="150" rx="16" fill="#fff" opacity="0.14" />
          <rect x="90" y="100" width="90" height="10" rx="5" fill="#fff" opacity="0.7" />
          <rect x="90" y="124" width="150" height="6" rx="3" fill="#fff" opacity="0.4" />
          <rect x="90" y="140" width="120" height="6" rx="3" fill="#fff" opacity="0.4" />
          <rect x="90" y="172" width="60" height="30" rx="15" fill="#fff" opacity="0.85" />
        </svg>
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
