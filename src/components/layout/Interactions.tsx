"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

/** Global pointer effects: card spotlight (.spot) and a soft cursor ring on fine pointers. */
export function Interactions() {
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine) return;

    const el = ring.current;
    const moveX = el && !reduce ? gsap.quickTo(el, "x", { duration: 0.35, ease: "power3" }) : null;
    const moveY = el && !reduce ? gsap.quickTo(el, "y", { duration: 0.35, ease: "power3" }) : null;

    const onMove = (e: PointerEvent) => {
      const t = e.target as Element | null;
      const spot = t?.closest<HTMLElement>(".spot");
      if (spot) {
        const r = spot.getBoundingClientRect();
        spot.style.setProperty("--mx", `${e.clientX - r.left}px`);
        spot.style.setProperty("--my", `${e.clientY - r.top}px`);
      }
      if (el) {
        moveX?.(e.clientX);
        moveY?.(e.clientY);
        if (reduce) el.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        el.dataset.active = "true";
        el.dataset.hover = String(!!t?.closest("a, button, [data-cursor], input, select, textarea, summary"));
      }
    };
    const onLeave = () => {
      if (el) el.dataset.active = "false";
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <div ref={ring} className="cursor-ring" aria-hidden />;
}
