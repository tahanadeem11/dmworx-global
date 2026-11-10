"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useEffect, useRef, type ElementType, type ReactNode } from "react";
import { useReady } from "@/hooks/useReady";

/**
 * Masked line-by-line headline reveal (GSAP SplitText + ScrollTrigger).
 * Works with nested gradient spans because only line wrappers are animated.
 */
export function SplitHeading({
  as: Tag = "h2",
  className = "",
  children,
  start = "top 90%",
}: {
  as?: ElementType;
  className?: string;
  children: ReactNode;
  start?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const ready = useReady();

  useEffect(() => {
    const el = ref.current;
    if (!el || !ready) return;
    gsap.registerPlugin(SplitText, ScrollTrigger);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.remove("split-init");
      return;
    }

    const ctx = gsap.context(() => {
      SplitText.create(el, {
        type: "lines",
        mask: "lines",
        autoSplit: true,
        onSplit(self) {
          el.classList.remove("split-init");
          return gsap.from(self.lines, {
            yPercent: 110,
            duration: 1.1,
            ease: "expo.out",
            stagger: 0.09,
            scrollTrigger: { trigger: el, start, once: true },
          });
        },
      });
    }, el);

    return () => ctx.revert();
  }, [ready, start]);

  return (
    <Tag ref={ref} className={`split-init ${className}`}>
      {children}
    </Tag>
  );
}
