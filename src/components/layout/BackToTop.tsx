"use client";

import type { ReactNode } from "react";

export function BackToTop({ children }: { children: ReactNode }) {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" })}
      className="inline-flex items-center gap-1.5 transition-colors hover:text-fg"
    >
      {children}
    </button>
  );
}
