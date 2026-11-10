"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { useMagnetic } from "@/hooks/useMagnetic";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "light";
  arrow?: boolean;
  className?: string;
};

const styles = {
  primary:
    "bg-brand text-white shadow-[0_10px_30px_-8px_rgba(67,56,245,0.6)] hover:shadow-[0_14px_40px_-6px_rgba(8,123,255,0.7)]",
  ghost: "border border-line bg-surface text-fg hover:border-electric/60 backdrop-blur",
  light: "bg-white text-[#09090d] hover:shadow-[0_10px_30px_-8px_rgba(255,255,255,0.5)]",
};

export function Button({ href, children, variant = "primary", arrow = true, className = "" }: Props) {
  const ref = useMagnetic<HTMLAnchorElement>();
  return (
    <Link
      ref={ref}
      href={href}
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-shadow ${styles[variant]} ${className}`}
    >
      {children}
      {arrow && <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />}
    </Link>
  );
}
