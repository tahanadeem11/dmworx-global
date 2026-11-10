"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

/** Brand intro shown once per session. Skipped for reduced motion and return visits. */
export function Preloader() {
  const root = useRef<HTMLDivElement>(null);
  const count = useRef<HTMLSpanElement>(null);
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const html = document.documentElement;

    const finish = () => {
      window.__dmwReady = true;
      window.dispatchEvent(new Event("dmw:ready"));
    };

    if (html.dataset.pl === "seen") {
      finish();
      return;
    }

    document.body.style.overflow = "hidden";
    const state = { v: 0 };
    const tl = gsap.timeline({
      onComplete: () => {
        try {
          sessionStorage.setItem("dmw-pl", "1");
        } catch {}
        html.dataset.pl = "seen";
        document.body.style.overflow = "";
        finish();
      },
    });

    tl.fromTo(".pl-logo", { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" })
      .to(
        state,
        {
          v: 100,
          duration: 1.2,
          ease: "power2.inOut",
          onUpdate: () => {
            if (count.current) count.current.textContent = String(Math.round(state.v)).padStart(2, "0");
            if (bar.current) bar.current.style.transform = `scaleX(${state.v / 100})`;
          },
        },
        0.1,
      )
      .to(".pl-meta", { opacity: 0, y: -10, duration: 0.3 }, ">0.1")
      .to(el, { yPercent: -100, duration: 0.9, ease: "expo.inOut" }, ">")
      .set(el, { display: "none" });

    return () => {
      tl.kill();
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      ref={root}
      className="preloader scope-dark fixed inset-0 z-[120] grid place-items-center overflow-hidden"
      aria-hidden
    >
      <div className="orb left-1/4 top-1/4 h-96 w-96 bg-purple" />
      <div className="orb bottom-1/4 right-1/4 h-96 w-96 bg-electric" />
      <div className="relative flex flex-col items-center gap-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logos/logo-dark.png" alt="" width={339} height={95} className="pl-logo w-[220px] opacity-0 sm:w-[300px]" />
        <div className="pl-meta w-56 sm:w-72">
          <div className="h-px w-full bg-white/15">
            <div ref={bar} className="bg-brand h-full origin-left scale-x-0" style={{ height: 2, marginTop: -0.5 }} />
          </div>
          <div className="mt-3 flex justify-between font-mono text-xs tracking-widest text-white/50">
            <span>LOADING EXPERIENCE</span>
            <span ref={count}>00</span>
          </div>
        </div>
      </div>
    </div>
  );
}
