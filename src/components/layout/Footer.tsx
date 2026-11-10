import { ArrowRight, ArrowUp, ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { BackToTop } from "./BackToTop";
import { Year } from "./Year";

const explore = [
  ["Home", "/"],
  ["About", "/about"],
  ["Services", "/services"],
  ["Pricing", "/#pricing"],
  ["Portfolio", "/portfolio"],
  ["Contact", "/contact"],
];

/** Floating pills around the wordmark: [label, position classes, rotation, style] */
const pills: [string, string, string, "brand" | "light"][] = [
  ["From idea to launch", "left-[2%] top-[4%]", "-rotate-3", "brand"],
  ["SEO & local search", "right-[8%] top-[0%]", "rotate-2", "light"],
  ["Websites & mobile apps", "left-[14%] bottom-[2%]", "-rotate-2", "light"],
  ["Open for new projects", "right-[0%] bottom-[14%]", "rotate-3", "brand"],
];

const FOOTER_SERVICES = 8;

export function Footer() {
  const a = site.address;
  return (
    <footer className="scope-dark edge-fade-top relative overflow-hidden">
      <div className="dot-grid absolute inset-0 opacity-40" aria-hidden />
      <div className="orb -left-32 top-10 h-96 w-96 bg-purple" aria-hidden />
      <div className="orb -right-32 bottom-20 h-96 w-96 bg-electric" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-5 pb-8 pt-20 sm:px-8 sm:pt-28">
        {/* giant wordmark */}
        <div className="relative mx-auto max-w-6xl py-14 sm:py-20" aria-label={site.name}>
          <p
            className="select-none text-center font-display font-bold uppercase leading-[0.85] tracking-tighter"
            style={{ fontSize: "clamp(3.4rem, 18.5vw, 13rem)" }}
          >
            <span className="text-brand">DM</span> <span className="text-fg">WORX</span>
          </p>
          <p className="mt-3 text-center font-mono text-[0.7rem] uppercase tracking-[0.6em] text-muted sm:text-sm">Global</p>
          {pills.map(([label, pos, rot, kind]) => (
            <span
              key={label}
              className={`absolute ${pos} ${rot} hidden items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold shadow-xl sm:inline-flex sm:text-sm ${
                kind === "brand" ? "bg-brand text-white" : "bg-white text-[#09090d]"
              }`}
              aria-hidden
            >
              <span className={`h-1.5 w-1.5 rounded-full ${kind === "brand" ? "bg-white" : "bg-royal"}`} />
              {label}
            </span>
          ))}
        </div>

        {/* mobile pills as a tidy row instead of absolute positioning */}
        <ul className="mb-12 flex flex-wrap justify-center gap-2 sm:hidden">
          {pills.map(([label, , , kind]) => (
            <li key={label} className={`rounded-full px-3.5 py-1.5 text-xs font-semibold ${kind === "brand" ? "bg-brand text-white" : "bg-white text-[#09090d]"}`}>
              {label}
            </li>
          ))}
        </ul>

        {/* link grid */}
        <div className="grid gap-12 border-t border-line pt-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_1.4fr_1.2fr]">
          <div>
            <Logo className="h-10 w-auto" />
            <p className="mt-5 max-w-sm leading-relaxed text-muted">
              A digital solutions and technology agency helping businesses build their online presence, reach the right audience and grow with confidence.
            </p>
            <Link href="/contact" className="bg-brand shine mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white">
              Start a project <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
            <ul className="mt-7 flex flex-wrap gap-2" aria-label="Social media">
              {site.socials.map((s) => (
                <li key={s.label}>
                  {s.url ? (
                    <a href={s.url} target="_blank" rel="noopener noreferrer" className="rounded-full border border-line px-4 py-1.5 text-sm transition hover:border-electric hover:text-electric">
                      {s.label}
                    </a>
                  ) : (
                    <span title="Profile link coming soon" className="cursor-default rounded-full border border-dashed border-line px-4 py-1.5 text-sm text-muted">{s.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Quick links">
            <h2 className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-muted">Explore</h2>
            <ul className="mt-5 space-y-3">
              {explore.map(([l, h]) => (
                <li key={h}>
                  <Link href={h} className="link-underline inline-block transition-colors hover:text-electric">{l}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Services">
            <h2 className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-muted">Services</h2>
            <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {services.slice(0, FOOTER_SERVICES).map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-sm text-fg/85 transition-colors hover:text-electric">{s.title}</Link>
                </li>
              ))}
            </ul>
            <Link href="/services" className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-electric">
              See all {services.length} services <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </Link>
          </nav>

          <div>
            <h2 className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-muted">Contact</h2>
            <ul className="mt-5 space-y-4">
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-electric" aria-hidden />
                <a href={site.phoneHref} className="transition-colors hover:text-electric">{site.phone}</a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-electric" aria-hidden />
                <a href={`mailto:${site.email}`} className="break-words transition-colors hover:text-electric">{site.email}</a>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-electric" aria-hidden />
                <address className="not-italic leading-relaxed">{a.street}<br />{a.city}, {a.region} {a.zip}</address>
              </li>
            </ul>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line pt-6 font-mono text-xs text-muted sm:flex-row">
          <p className="text-center sm:text-left">
            © <Year /> <strong className="text-fg">{site.name}</strong> · {a.city}, {a.region}
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <li><Link href="/privacy-policy" className="hover:text-fg">Privacy Policy</Link></li>
            <li><Link href="/terms-and-conditions" className="hover:text-fg">Terms of Use</Link></li>
            <li><Link href="/cancellation-refund-policy" className="hover:text-fg">Cancellation &amp; Refund</Link></li>
            <li>
              <BackToTop>
                Back to top <ArrowUp className="h-3.5 w-3.5" aria-hidden />
              </BackToTop>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
