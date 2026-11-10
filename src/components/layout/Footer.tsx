import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { Logo } from "@/components/ui/Logo";
import { Year } from "./Year";

const quick = [
  ["Home", "/"],
  ["About", "/about"],
  ["Services", "/services"],
  ["Portfolio", "/portfolio"],
  ["Contact", "/contact"],
];

export function Footer() {
  const a = site.address;
  return (
    <footer className="relative overflow-hidden border-t border-line bg-band">
      <div className="orb -bottom-40 left-1/4 h-80 w-80 bg-royal" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 sm:grid-cols-2 xl:grid-cols-[1.4fr_0.6fr_1.3fr_1.1fr]">
          <div>
            <Logo className="h-10 w-auto" />
            <p className="mt-5 max-w-sm leading-relaxed text-muted">
              A digital solutions and technology agency helping businesses build their online presence, reach the right audience and grow with confidence.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Social media">
              {site.socials.map((s) => (
                <li key={s.label}>
                  {s.url ? (
                    <a href={s.url} target="_blank" rel="noopener noreferrer" className="rounded-full border border-line px-4 py-1.5 text-sm transition hover:border-electric hover:text-electric">
                      {s.label}
                    </a>
                  ) : (
                    <span title="Profile link coming soon" className="cursor-default rounded-full border border-dashed border-line px-4 py-1.5 text-sm text-muted">
                      {s.label}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Quick links">
            <h2 className="text-sm font-semibold uppercase tracking-widest">Explore</h2>
            <ul className="mt-5 space-y-3 text-muted">
              {quick.map(([l, h]) => (
                <li key={h}>
                  <Link href={h} className="transition hover:text-electric">{l}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Services">
            <h2 className="text-sm font-semibold uppercase tracking-widest">Services</h2>
            <ul className="mt-5 grid grid-cols-1 gap-x-6 gap-y-3 text-muted sm:grid-cols-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-sm transition hover:text-electric">{s.title}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest">Contact</h2>
            <ul className="mt-5 space-y-4 text-muted">
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-electric" aria-hidden />
                <a href={site.phoneHref} className="hover:text-electric">{site.phone}</a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-electric" aria-hidden />
                <a href={`mailto:${site.email}`} className="hover:text-electric">{site.email}</a>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-electric" aria-hidden />
                <address className="not-italic">{a.street}<br />{a.city}, {a.region} {a.zip}</address>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 text-sm text-muted sm:flex-row">
          <p>© <Year /> {site.name}. All rights reserved.</p>
          <ul className="flex gap-6">
            <li><Link href="/privacy-policy" className="hover:text-electric">Privacy Policy</Link></li>
            <li><Link href="/terms-and-conditions" className="hover:text-electric">Terms &amp; Conditions</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
