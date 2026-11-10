"use client";

import { BarChart3, Code2, Smartphone, TrendingUp } from "lucide-react";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";

const lines = ["Transforming Ideas", "Into Powerful", "Digital Experiences."];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yText = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const yVis = useTransform(scrollYProgress, [0, 1], [0, -60]);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 80, damping: 18 });
  const sy = useSpring(my, { stiffness: 80, damping: 18 });
  const rotY = useTransform(sx, [-1, 1], [-8, 8]);
  const rotX = useTransform(sy, [-1, 1], [6, -6]);

  return (
    <section
      ref={ref}
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mx.set(((e.clientX - r.left) / r.width) * 2 - 1);
        my.set(((e.clientY - r.top) / r.height) * 2 - 1);
      }}
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pb-20 pt-32"
    >
      <div className="dot-grid absolute inset-0 -z-10" aria-hidden />
      <div className="orb -left-40 top-0 -z-10 h-[34rem] w-[34rem] bg-purple" aria-hidden />
      <div className="orb -right-32 top-32 -z-10 h-[30rem] w-[30rem] bg-electric" aria-hidden />
      <div className="orb bottom-0 left-1/3 -z-10 h-72 w-72 bg-cyan" aria-hidden />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div style={{ y: yText }}>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden />
            Digital solutions &amp; technology agency
          </motion.span>

          <h1 className="mt-7 text-[2.7rem] font-semibold leading-[1.02] sm:text-6xl xl:text-7xl">
            {lines.map((l, i) => (
              <span key={l} className="block overflow-hidden pb-[0.08em]">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.25 + i * 0.12, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className={`block ${i === 2 ? "text-brand-anim" : ""}`}
                >
                  {l}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
            className="mt-7 max-w-xl text-lg leading-relaxed text-muted"
          >
            From strategic digital marketing to high-performance websites and mobile applications, we help businesses build their digital presence, reach the right audience, and grow with confidence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <Button href="/services">Explore Our Services</Button>
            <Button href="/contact" variant="ghost">Let&apos;s Work Together</Button>
          </motion.div>
        </motion.div>

        {/* Interactive growth visual */}
        <motion.div style={{ y: yVis }} className="relative mx-auto hidden h-[30rem] w-full max-w-[34rem] lg:block" aria-hidden>
          <motion.div style={{ rotateX: rotX, rotateY: rotY, transformPerspective: 1000 }} className="absolute inset-0">
            <svg viewBox="0 0 500 500" className="absolute inset-0 h-full w-full">
              <defs>
                <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#a020f0" />
                  <stop offset="0.5" stopColor="#4338f5" />
                  <stop offset="0.8" stopColor="#087bff" />
                  <stop offset="1" stopColor="#08bfea" />
                </linearGradient>
              </defs>
              <g className="spin-slow" style={{ transformOrigin: "250px 250px" }}>
                <circle cx="250" cy="250" r="200" fill="none" stroke="url(#g)" strokeWidth="1.5" strokeDasharray="4 10" opacity="0.7" />
                <circle cx="450" cy="250" r="8" fill="url(#g)" />
                <circle cx="110" cy="109" r="6" fill="#08bfea" />
              </g>
              <circle cx="250" cy="250" r="140" fill="none" stroke="url(#g)" strokeWidth="1" opacity="0.4" />
              <circle cx="250" cy="250" r="95" fill="url(#g)" opacity="0.9" />
              <circle cx="250" cy="250" r="95" fill="none" stroke="#fff" strokeOpacity="0.25" strokeWidth="2" />
              <path d="M205 270 L235 240 L255 258 L295 215" fill="none" stroke="#fff" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M272 215 H295 V238" fill="none" stroke="#fff" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            <FloatCard className="left-0 top-10" delay={0}>
              <Code2 className="h-5 w-5 text-purple" />
              <div>
                <div className="text-xs text-muted">Development</div>
                <div className="font-display text-sm font-semibold">Fast. Secure. Scalable.</div>
              </div>
            </FloatCard>

            <FloatCard className="right-0 top-24" delay={1.2}>
              <TrendingUp className="h-5 w-5 text-electric" />
              <div>
                <div className="text-xs text-muted">Growth</div>
                <div className="flex h-6 items-end gap-1">
                  {[40, 62, 48, 80, 100].map((h, i) => (
                    <span key={i} className="w-1.5 rounded-sm bg-brand" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
            </FloatCard>

            <FloatCard className="bottom-16 left-6" delay={2.2}>
              <Smartphone className="h-5 w-5 text-royal" />
              <div>
                <div className="text-xs text-muted">Mobile apps</div>
                <div className="font-display text-sm font-semibold">iOS &amp; Android</div>
              </div>
            </FloatCard>

            <FloatCard className="bottom-6 right-10" delay={3}>
              <BarChart3 className="h-5 w-5 text-cyan" />
              <div>
                <div className="text-xs text-muted">Marketing</div>
                <div className="font-display text-sm font-semibold">SEO · Ads · Social</div>
              </div>
            </FloatCard>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted sm:flex" aria-hidden>
        Scroll
        <span className="relative h-10 w-px overflow-hidden bg-line">
          <motion.span
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-brand"
          />
        </span>
      </div>
    </section>
  );
}

function FloatCard({ children, className, delay }: { children: React.ReactNode; className: string; delay: number }) {
  return (
    <div className={`absolute ${className}`}>
      <div className="glass float-y flex items-center gap-3 rounded-2xl px-4 py-3" style={{ animationDelay: `${delay}s` }}>
        {children}
      </div>
    </div>
  );
}
