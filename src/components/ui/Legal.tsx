import Link from "next/link";
import type { ReactNode } from "react";
import { PageHero } from "./PageHero";
import { Reveal } from "./Reveal";

const nav = [
  ["Privacy Policy", "/privacy-policy"],
  ["Terms of Use", "/terms-and-conditions"],
  ["Cancellation & Refund", "/cancellation-refund-policy"],
] as const;

export function Legal({
  title,
  subtitle,
  updated,
  current,
  children,
}: {
  title: string;
  subtitle: string;
  updated: string;
  current: string;
  children: ReactNode;
}) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} text={subtitle} />
      <div className="mx-auto max-w-3xl px-5 pb-28 sm:px-8">
        <nav aria-label="Legal pages" className="mb-8 flex flex-wrap justify-center gap-2">
          {nav.map(([l, h]) => (
            <Link
              key={h}
              href={h}
              aria-current={h === current ? "page" : undefined}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                h === current ? "bg-brand border-transparent text-white" : "border-line text-muted hover:border-electric/60 hover:text-fg"
              }`}
            >
              {l}
            </Link>
          ))}
        </nav>
        <p className="mb-10 text-center font-mono text-xs uppercase tracking-widest text-muted">Last updated: {updated}</p>
        <article className="space-y-12 [&_a]:font-medium [&_a]:text-electric [&_a]:underline [&_a]:underline-offset-4">{children}</article>
      </div>
    </>
  );
}

export function Sec({ title, children }: { title: string; children: ReactNode }) {
  return (
    <Reveal>
      <section>
        <h2 className="text-2xl font-semibold sm:text-3xl">{title}</h2>
        <div className="mt-4 space-y-4 leading-relaxed text-muted">{children}</div>
      </section>
    </Reveal>
  );
}

export function Bullets({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((t, i) => (
        <li key={i} className="flex gap-3">
          <span className="bg-brand mt-2 h-1.5 w-1.5 shrink-0 rounded-full" aria-hidden />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

export function Clause({ n, title, children }: { n?: number | string; title: string; children: ReactNode }) {
  return (
    <div className="card rounded-2xl p-5 sm:p-6">
      <h3 className="flex items-start gap-3 text-lg font-semibold text-fg">
        {n !== undefined && <span className="text-brand font-display">{n}.</span>}
        {title}
      </h3>
      <div className="mt-2 leading-relaxed text-muted">{children}</div>
    </div>
  );
}

export function Callout({ children }: { children: ReactNode }) {
  return <div className="rounded-2xl border border-electric/30 bg-electric/5 p-5 leading-relaxed text-fg/90">{children}</div>;
}
