"use client";

import { ArrowUpRight, Check, MapPin } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import type { Project } from "@/data/content";
import { ProjectArt } from "./ProjectArt";

export function ProjectCard({ p, tall = false, detailed = false }: { p: Project; tall?: boolean; detailed?: boolean }) {
  const [a, b] = p.hue;
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);
  const host = p.url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

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
      <a href={p.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${p.name} website (opens in a new tab)`} className="block">
        <motion.div
          variants={{ hidden: { clipPath: "inset(0 0 100% 0)" }, show: { clipPath: "inset(0 0 0% 0)", transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } } }}
          className={`relative overflow-hidden rounded-[1.75rem] ${tall ? "aspect-[4/5]" : "aspect-[16/11]"}`}
          style={{ background: `linear-gradient(135deg, ${a}, ${b})` }}
        >
          <motion.div style={{ y }} className="absolute -inset-[6%] transition-transform duration-[900ms] ease-out group-hover:scale-105">
            {p.image ? (
              <>
                <Image
                  src={p.image.src}
                  alt={p.image.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                  style={{ objectPosition: p.image.position }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" aria-hidden />
                <div className="bg-brand-2 absolute inset-0 opacity-[0.14] mix-blend-soft-light" aria-hidden />
              </>
            ) : (
              <ProjectArt slug="project-one" />
            )}
          </motion.div>
          <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-black/45 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden /> Live website
          </span>
          <span className="absolute bottom-4 right-4 inline-flex items-center gap-1 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#09090d] opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100 max-md:opacity-100">
            Visit site <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
          </span>
        </motion.div>
      </a>

      <div className="mt-5">
        <div className="flex items-center justify-between gap-4 text-xs font-semibold uppercase tracking-widest">
          <span className="text-electric">{p.industry}</span>
          <span className="flex items-center gap-1 text-muted"><MapPin className="h-3.5 w-3.5" aria-hidden />{p.location}</span>
        </div>
        <h3 className="mt-1.5 text-2xl font-semibold">{p.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{p.description}</p>

        {(detailed || !p.detailsPending) && p.highlights.length > 0 && (
          <ul className="mt-4 space-y-2">
            {p.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2.5 text-sm">
                <span className="bg-brand mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full text-white"><Check className="h-2.5 w-2.5" aria-hidden /></span>
                {h}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-4 flex flex-wrap items-center gap-2">
          {p.services.map((s) => (
            <span key={s} className="rounded-full border border-line px-3 py-1 text-xs text-muted">{s}</span>
          ))}
        </div>

        <a
          href={p.url}
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-electric"
        >
          {host} <ArrowUpRight className="h-4 w-4" aria-hidden />
        </a>
      </div>
    </motion.article>
  );
}
