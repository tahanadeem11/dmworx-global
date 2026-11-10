"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { mainNav } from "@/data/site";
import { services } from "@/data/services";
import { Button } from "@/components/ui/Button";
import { getIcon } from "@/components/ui/icons";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [mega, setMega] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close menus on navigation (state adjusted during render, per React guidance)
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setMobile(false);
    setMega(false);
  }

  useEffect(() => {
    document.body.style.overflow = mobile ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobile]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMega(false);
        setMobile(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const openMega = () => {
    clearTimeout(closeTimer.current);
    setMega(true);
  };
  const closeMega = () => {
    closeTimer.current = setTimeout(() => setMega(false), 140);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || mobile ? "border-b border-line bg-bg/85 shadow-sm backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
        <Link href="/" aria-label="DM Worx Global home" className="shrink-0">
          <Logo priority className="h-9 w-auto sm:h-10" />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-9 text-[15px] font-medium">
            {mainNav.map((item) =>
              item.dropdown ? (
                <li key={item.href} className="relative" onMouseEnter={openMega} onMouseLeave={closeMega}>
                  <button
                    type="button"
                    aria-expanded={mega}
                    aria-haspopup="true"
                    onClick={() => setMega((v) => !v)}
                    className={`link-underline flex items-center gap-1 py-2 ${isActive(item.href) ? "text-electric" : ""}`}
                    aria-current={isActive(item.href) ? "page" : undefined}
                  >
                    {item.label}
                    <ChevronDown className={`h-4 w-4 transition-transform ${mega ? "rotate-180" : ""}`} aria-hidden />
                  </button>
                  <AnimatePresence>
                    {mega && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="glass absolute left-1/2 top-full w-[640px] -translate-x-1/2 rounded-3xl p-3"
                        style={{ background: "var(--surface-solid)" }}
                      >
                        <div className="grid grid-cols-2 gap-1">
                          {services.map((s) => {
                            const Icon = getIcon(s.icon);
                            return (
                              <Link
                                key={s.slug}
                                href={`/services/${s.slug}`}
                                className="group flex items-center gap-3 rounded-2xl p-3 text-sm transition hover:bg-alt"
                              >
                                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand-2 text-white">
                                  <Icon className="h-[18px] w-[18px]" aria-hidden />
                                </span>
                                <span className="font-medium">{s.title}</span>
                              </Link>
                            );
                          })}
                        </div>
                        <Link href="/services" className="mt-2 block rounded-2xl bg-alt p-3 text-center text-sm font-semibold text-electric">
                          View all services →
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={`link-underline py-2 ${isActive(item.href) ? "text-electric" : ""}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <div className="hidden sm:block">
            <Button href="/contact" arrow={false} className="!px-6 !py-3">
              Let&apos;s Talk
            </Button>
          </div>
          <button
            type="button"
            aria-label={mobile ? "Close menu" : "Open menu"}
            aria-expanded={mobile}
            onClick={() => setMobile((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-line bg-surface lg:hidden"
          >
            {mobile ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobile && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "calc(100dvh - 76px)" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-y-auto border-t border-line lg:hidden"
            style={{ background: "var(--bg)" }}
          >
            <nav aria-label="Mobile" className="px-5 py-6">
              <ul className="space-y-1">
                {mainNav.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className={`block rounded-xl px-3 py-3 font-display text-2xl font-semibold ${isActive(item.href) ? "text-electric" : ""}`}
                    >
                      {item.label}
                    </Link>
                    {item.dropdown && (
                      <ul className="mb-2 ml-3 grid grid-cols-1 gap-0.5 border-l border-line pl-4 sm:grid-cols-2">
                        {services.map((s) => (
                          <li key={s.slug}>
                            <Link href={`/services/${s.slug}`} className="block py-1.5 text-sm text-muted hover:text-fg">
                              {s.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </motion.li>
                ))}
              </ul>
              <div className="mt-6 sm:hidden">
                <Button href="/contact" className="w-full">
                  Let&apos;s Talk
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
