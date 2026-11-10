"use client";

import { ArrowRight, ArrowUpRight, ChevronDown, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { ServiceIcon } from "@/components/ui/icons";
import { Logo } from "@/components/ui/Logo";
import { services } from "@/data/services";
import { mainNav, site } from "@/data/site";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [mega, setMega] = useState(false);
  const [svcOpen, setSvcOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const closeBtn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close menus on navigation (state adjusted during render, per React guidance)
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setDrawer(false);
    setMega(false);
  }

  // lock page scroll while the drawer is open
  useEffect(() => {
    if (!drawer) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.classList.add("lenis-stopped");
    closeBtn.current?.focus();
    return () => {
      document.body.style.overflow = prev;
      document.documentElement.classList.remove("lenis-stopped");
    };
  }, [drawer]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMega(false);
        setDrawer(false);
      }
    };
    const onResize = () => window.innerWidth >= 1024 && setDrawer(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : !href.includes("#") && pathname.startsWith(href));
  const openMega = () => {
    clearTimeout(closeTimer.current);
    setMega(true);
  };
  const closeMega = () => {
    closeTimer.current = setTimeout(() => setMega(false), 140);
  };
  const a = site.address;

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
        <div
          className={`mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 rounded-full pl-5 pr-2.5 transition-all duration-500 sm:pl-6 sm:pr-3 ${
            scrolled ? "glass" : "border border-transparent"
          }`}
        >
          <Link href="/" aria-label="DM Worx Global home" className="shrink-0">
            <Logo priority className="h-8 w-auto sm:h-9" />
          </Link>

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1 text-[15px] font-medium">
              {mainNav.map((item) =>
                item.dropdown ? (
                  <li key={item.href} className="relative" onMouseEnter={openMega} onMouseLeave={closeMega}>
                    <button
                      type="button"
                      aria-expanded={mega}
                      aria-haspopup="true"
                      onClick={() => setMega((v) => !v)}
                      className={`flex items-center gap-1 rounded-full px-4 py-2 transition-colors hover:bg-fg/5 ${isActive(item.href) ? "text-electric" : ""}`}
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
                          className="absolute left-1/2 top-full w-[660px] -translate-x-1/2 pt-3"
                        >
                          <div className="card rounded-3xl p-3" style={{ boxShadow: "var(--shadow-lg)" }}>
                            <div className="grid grid-cols-2 gap-1">
                              {services.map((s) => (
                                <Link key={s.slug} href={`/services/${s.slug}`} className="group flex items-center gap-3 rounded-2xl p-3 text-sm transition hover:bg-band">
                                  <span className="bg-brand-2 grid h-9 w-9 shrink-0 place-items-center rounded-xl text-white transition-transform group-hover:scale-110">
                                    <ServiceIcon name={s.icon} className="h-[18px] w-[18px]" />
                                  </span>
                                  <span className="font-medium">{s.title}</span>
                                </Link>
                              ))}
                            </div>
                            <Link href="/services" className="mt-2 flex items-center justify-center gap-1 rounded-2xl bg-band p-3 text-sm font-semibold text-electric">
                              View all services <ArrowRight className="h-4 w-4" aria-hidden />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                ) : (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={isActive(item.href) ? "page" : undefined}
                      className={`block rounded-full px-4 py-2 transition-colors hover:bg-fg/5 ${isActive(item.href) ? "text-electric" : ""}`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <a href={site.phoneHref} className="hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-medium transition-colors hover:bg-fg/5 xl:flex" aria-label={`Call ${site.phone}`}>
              <Phone className="h-4 w-4 text-electric" aria-hidden />
              {site.phone}
            </a>
            <ThemeToggle />
            <div className="hidden sm:block">
              <Button href="/contact" arrow={false} className="!px-6 !py-3">Let&apos;s Talk</Button>
            </div>
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={drawer}
              aria-controls="mobile-drawer"
              onClick={() => setDrawer(true)}
              className="bg-brand grid h-10 w-10 place-items-center rounded-full text-white lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer: rendered outside <header> so it is positioned against the viewport */}
      <AnimatePresence>
        {drawer && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setDrawer(false)}
              className="fixed inset-0 z-[60] bg-[#05060d]/60 backdrop-blur-sm lg:hidden"
              aria-hidden
            />
            <motion.aside
              key="drawer"
              id="mobile-drawer"
              role="dialog"
              aria-modal="true"
              aria-label="Site menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-y-0 right-0 z-[70] flex w-[min(88vw,24rem)] flex-col overflow-hidden border-l border-line bg-bg shadow-2xl lg:hidden"
            >
              <div className="orb -right-24 -top-24 h-64 w-64 bg-purple" aria-hidden />
              <div className="relative flex h-[4.5rem] shrink-0 items-center justify-between border-b border-line px-5">
                <Logo className="h-8 w-auto" />
                <button ref={closeBtn} type="button" aria-label="Close menu" onClick={() => setDrawer(false)} className="glass grid h-10 w-10 place-items-center rounded-full">
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav aria-label="Mobile" className="relative flex-1 overflow-y-auto overscroll-contain px-3 py-4">
                <ul className="space-y-0.5">
                  {mainNav.map((item, i) => (
                    <motion.li key={item.href} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}>
                      {item.dropdown ? (
                        <>
                          <button
                            type="button"
                            aria-expanded={svcOpen}
                            onClick={() => setSvcOpen((v) => !v)}
                            className={`flex w-full items-center justify-between rounded-2xl px-4 py-3.5 font-display text-xl font-semibold ${isActive(item.href) ? "text-electric" : ""}`}
                          >
                            {item.label}
                            <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${svcOpen ? "rotate-180" : ""}`} aria-hidden />
                          </button>
                          <AnimatePresence initial={false}>
                            {svcOpen && (
                              <motion.ul
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <li>
                                  <Link href="/services" onClick={() => setDrawer(false)} className="flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-semibold text-electric">
                                    All services <ArrowUpRight className="h-4 w-4" aria-hidden />
                                  </Link>
                                </li>
                                {services.map((s) => (
                                  <li key={s.slug}>
                                    <Link href={`/services/${s.slug}`} onClick={() => setDrawer(false)} className="flex items-center gap-3 rounded-xl px-4 py-2.5 text-[15px] text-muted transition-colors hover:bg-band hover:text-fg">
                                      <ServiceIcon name={s.icon} className="h-4 w-4 text-electric" />
                                      {s.title}
                                    </Link>
                                  </li>
                                ))}
                              </motion.ul>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={() => setDrawer(false)}
                          aria-current={isActive(item.href) ? "page" : undefined}
                          className={`block rounded-2xl px-4 py-3.5 font-display text-xl font-semibold ${isActive(item.href) ? "bg-band text-electric" : ""}`}
                        >
                          {item.label}
                        </Link>
                      )}
                    </motion.li>
                  ))}
                </ul>
              </nav>

              <div className="relative shrink-0 space-y-4 border-t border-line p-5">
                <ul className="space-y-2.5 text-sm text-muted">
                  <li className="flex items-center gap-3"><Phone className="h-4 w-4 shrink-0 text-electric" aria-hidden /><a href={site.phoneHref} className="hover:text-fg">{site.phone}</a></li>
                  <li className="flex items-center gap-3"><Mail className="h-4 w-4 shrink-0 text-electric" aria-hidden /><a href={`mailto:${site.email}`} className="break-all hover:text-fg">{site.email}</a></li>
                  <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-electric" aria-hidden />{a.street}, {a.city}, {a.region} {a.zip}</li>
                </ul>
                <Button href="/contact" className="w-full">Let&apos;s Talk</Button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
