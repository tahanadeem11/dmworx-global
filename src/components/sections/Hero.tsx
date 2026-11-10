"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { Code2, MousePointer2, Palette, Sparkles, TrendingUp } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { services } from "@/data/services";
import { useReady } from "@/hooks/useReady";

const HeroScene = dynamic(() => import("@/components/three/HeroScene"), { ssr: false });

function hasWebGL() {
  try {
    const c = document.createElement("canvas");
    return !!(c.getContext("webgl2") || c.getContext("webgl"));
  } catch {
    return false;
  }
}

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const progress = useRef(0);
  const ready = useReady();
  const [webgl, setWebgl] = useState<boolean | null>(null);
  const [inView, setInView] = useState(true);
  const [sceneReady, setSceneReady] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setWebgl(hasWebGL());
  }, []);

  // pause the 3D loop whenever the hero is off-screen or the tab is hidden
  useEffect(() => {
    const el = root.current;
    if (!el) return;
    let visible = true;
    const sync = () => setInView(visible && !document.hidden);
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      sync();
    });
    io.observe(el);
    document.addEventListener("visibilitychange", sync);
    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", sync);
    };
  }, []);

  useEffect(() => {
    if (!ready) return;
    gsap.registerPlugin(SplitText, ScrollTrigger);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const el = root.current!;

    const ctx = gsap.context(() => {
      const show = (sel: string, vars: gsap.TweenVars = {}) => gsap.set(sel, { visibility: "visible", ...vars });
      show(".hero-init");
      if (reduce) return;

      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.fromTo(".h-eyebrow", { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 1 }, 0.1);

      SplitText.create(".h-line", {
        type: "lines,chars",
        mask: "lines",
        onSplit(self) {
          tl.from(self.chars, { yPercent: 115, rotate: 6, duration: 1.2, stagger: 0.022 }, 0.2);
        },
      });
      tl.fromTo(".h-accent", { yPercent: 115 }, { yPercent: 0, duration: 1.3 }, 0.55)
        .fromTo(".h-sub", { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: 1 }, 0.8)
        .fromTo(".h-cta > *", { opacity: 0, y: 24, scale: 0.94 }, { opacity: 1, y: 0, scale: 1, duration: 0.9, stagger: 0.1 }, 0.95)
        .fromTo(".h-par", { opacity: 0, scale: 0.7 }, { opacity: 1, scale: 1, duration: 1.1, stagger: 0.14, ease: "back.out(1.6)" }, 0.9)
        .fromTo(".h-strip", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1 }, 1.2)
        .fromTo(".h-cue", { opacity: 0 }, { opacity: 1, duration: 1 }, 1.5);

      // scroll exit: content drifts up while the 3D orb recedes
      ScrollTrigger.create({
        trigger: el,
        start: "top top",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => (progress.current = self.progress),
      });
      gsap.to(".h-content", {
        yPercent: -14,
        opacity: 0.2,
        ease: "none",
        scrollTrigger: { trigger: el, start: "top top", end: "bottom 20%", scrub: true },
      });

      // cursor parallax on floating glass chips
      if (window.matchMedia("(hover: hover)").matches) {
        const pars = gsap.utils.toArray<HTMLElement>(".h-par");
        const movers = pars.map((p) => ({
          x: gsap.quickTo(p, "x", { duration: 0.9, ease: "power3" }),
          y: gsap.quickTo(p, "y", { duration: 0.9, ease: "power3" }),
          d: Number(p.dataset.depth ?? 20),
        }));
        const onMove = (e: PointerEvent) => {
          const nx = e.clientX / window.innerWidth - 0.5;
          const ny = e.clientY / window.innerHeight - 0.5;
          movers.forEach((m) => {
            m.x(nx * m.d * 2);
            m.y(ny * m.d * 2);
          });
        };
        window.addEventListener("pointermove", onMove, { passive: true });
        return () => window.removeEventListener("pointermove", onMove);
      }
    }, root);

    return () => ctx.revert();
  }, [ready]);

  const marquee = [...services, ...services];

  return (
    <section ref={root} className="relative isolate flex min-h-[100svh] flex-col overflow-hidden">
      {/* ambient background */}
      <div className="dot-grid absolute inset-0 -z-20" aria-hidden />
      <div className="orb -left-40 -top-20 -z-20 h-[36rem] w-[36rem] bg-purple" aria-hidden />
      <div className="orb -right-40 top-1/3 -z-20 h-[34rem] w-[34rem] bg-electric" aria-hidden />

      {/* 3D scene */}
      <div className={`absolute inset-0 -z-10 transition-opacity duration-[1400ms] ${sceneReady || webgl === false ? "opacity-100" : "opacity-0"}`} aria-hidden>
        {webgl ? (
          <HeroScene progress={progress} active={inView && ready} onReady={() => setSceneReady(true)} />
        ) : (
          webgl === false && (
            <div className="bg-brand absolute right-[12%] top-1/2 h-72 w-72 -translate-y-1/2 rounded-full opacity-70 blur-2xl" />
          )
        )}
      </div>
      {/* keeps copy legible over the 3D scene in both themes */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-bg from-40% via-bg/70 via-60% to-transparent lg:bg-gradient-to-r lg:from-bg lg:via-bg/55 lg:to-transparent lg:[mask-image:linear-gradient(90deg,#000_30%,transparent_62%)]" aria-hidden />

      <div className="h-content relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end px-5 pb-10 pt-32 sm:px-8 lg:justify-center lg:pb-16">
        <div className="max-w-3xl">
          <span className="h-eyebrow hero-init glass inline-flex items-center gap-2.5 rounded-full py-1.5 pl-2 pr-4 text-[11px] font-semibold uppercase tracking-[0.18em] sm:text-xs">
            <span className="bg-brand grid h-6 w-6 place-items-center rounded-full text-white">
              <Sparkles className="h-3.5 w-3.5" aria-hidden />
            </span>
            Digital solutions &amp; technology agency
          </span>

          <h1 className="mt-6 text-[clamp(2.6rem,7.4vw,6.4rem)] font-semibold leading-[0.98]">
            <span className="h-line hero-init block">Transforming Ideas</span>
            <span className="h-line hero-init block">Into Powerful</span>
            <span className="block overflow-hidden pb-[0.12em]">
              <span className="h-accent hero-init text-brand-anim block">Digital Experiences.</span>
            </span>
          </h1>

          <p className="h-sub hero-init mt-7 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            From strategic digital marketing to high-performance websites and mobile applications, we help businesses build their digital presence, reach the right audience, and grow with confidence.
          </p>

          <div className="h-cta mt-9 flex flex-wrap gap-4">
            <Button href="/services" className="hero-init">Explore Our Services</Button>
            <Button href="/contact" variant="ghost" className="hero-init">Let&apos;s Work Together</Button>
          </div>
        </div>
      </div>

      {/* floating glass chips: parallax with the cursor (desktop) */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden>
        <div className="mx-auto h-full max-w-7xl px-8">
          <div className="relative h-full">
            <div className="h-par hero-init absolute right-[30%] top-[19%]" data-depth="26">
              <div className="glass float-y flex items-center gap-3 rounded-2xl px-4 py-3">
                <span className="bg-brand-2 grid h-9 w-9 place-items-center rounded-xl text-white"><Code2 className="h-[18px] w-[18px]" /></span>
                <div>
                  <div className="text-[11px] uppercase tracking-widest text-muted">Web &amp; Apps</div>
                  <div className="font-display text-sm font-semibold">Fast. Secure. Scalable.</div>
                </div>
              </div>
            </div>
            <div className="h-par hero-init absolute right-[0%] top-[27%]" data-depth="40">
              <div className="glass float-y rounded-2xl px-4 py-3" style={{ animationDelay: "1.2s" }}>
                <div className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-muted"><TrendingUp className="h-3.5 w-3.5 text-electric" /> Search visibility</div>
                <div className="mt-2 flex h-9 items-end gap-1.5">
                  {[35, 52, 44, 70, 62, 88, 100].map((h, i) => (
                    <span key={i} className="bg-brand w-2 rounded-sm" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
            </div>
            <div className="h-par hero-init absolute bottom-[26%] right-[12%]" data-depth="34">
              <div className="glass float-y flex items-center gap-3 rounded-2xl px-4 py-3" style={{ animationDelay: "2.2s" }}>
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-solid text-purple"><Palette className="h-[18px] w-[18px]" /></span>
                <div>
                  <div className="text-[11px] uppercase tracking-widest text-muted">Brand &amp; Creative</div>
                  <div className="mt-1 flex gap-1.5">
                    {["#a020f0", "#4338f5", "#087bff", "#08bfea"].map((c) => <span key={c} className="h-3.5 w-3.5 rounded-full" style={{ background: c }} />)}
                  </div>
                </div>
              </div>
            </div>
            <div className="h-par hero-init absolute right-[8%] top-[16%]" data-depth="18">
              <div className="glass float-y flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium" style={{ animationDelay: "3s" }}>
                <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-75" /><span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" /></span>
                Open for new projects
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* interaction hint */}
      <div className="h-cue hero-init absolute bottom-[5.5rem] right-8 hidden items-center gap-2 text-xs text-muted xl:flex" aria-hidden>
        <MousePointer2 className="h-3.5 w-3.5" /> Move your cursor · click the orb
      </div>

      {/* services marquee */}
      <div className="h-strip hero-init marquee relative z-10 border-y border-line bg-bg/60 py-4 backdrop-blur-md">
        <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap pr-10">
          {marquee.map((s, i) => (
            <Link key={i} href={`/services/${s.slug}`} className="group flex items-center gap-10 font-display text-lg font-medium text-muted transition-colors hover:text-fg">
              {s.title}
              <span className="bg-brand h-1.5 w-1.5 rounded-full" aria-hidden />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
