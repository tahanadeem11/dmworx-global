import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { plans } from "@/data/content";

export function Pricing() {
  return (
    <section id="pricing" className="relative scroll-mt-20 overflow-x-clip py-24 sm:py-32">
      <div className="orb left-1/2 top-1/3 h-[28rem] w-[28rem] -translate-x-1/2 bg-royal" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Pricing"
          title={<>Simple monthly plans that <span className="text-brand">scale with you.</span></>}
          text="Choose the package that fits your stage. Every plan is month to month and tailored to your business during onboarding."
        />

        <ul className="grid items-stretch gap-6 lg:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal as="li" key={p.id} delay={i * 0.1} className={p.popular ? "lg:-mt-4 lg:mb-4" : ""}>
              <article
                className={`spot relative flex h-full flex-col rounded-[2rem] p-7 sm:p-8 ${
                  p.popular ? "grad-border bg-solid shadow-[var(--shadow-lg)]" : "card"
                }`}
              >
                {p.popular && (
                  <span className="bg-brand absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 font-mono text-[11px] font-bold uppercase tracking-widest text-white shadow-lg">
                    Most popular
                  </span>
                )}
                {p.popular && <div className="bg-brand-2 pointer-events-none absolute inset-0 -z-10 rounded-[2rem] opacity-[0.07]" aria-hidden />}

                <p className={`font-mono text-xs font-semibold uppercase tracking-[0.2em] ${p.popular ? "text-electric" : "text-muted"}`}>
                  {p.name} plan
                </p>
                <p className="mt-3 min-h-[3rem] text-muted">{p.tagline}</p>

                <div className="mt-6 flex items-end gap-2 border-b border-line pb-7">
                  <span className={`font-display text-6xl font-semibold leading-none tracking-tight ${p.popular ? "text-brand" : ""}`}>
                    ${p.price}
                  </span>
                  <span className="mb-1 font-mono text-xs uppercase tracking-widest text-muted">/ mo</span>
                </div>

                <ul className="mt-7 flex-1 space-y-3.5">
                  {p.inherits && (
                    <li className="flex items-start gap-3 font-semibold">
                      <span className="bg-brand mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full text-white"><Check className="h-3 w-3" aria-hidden /></span>
                      {p.inherits}
                    </li>
                  )}
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-[15px]">
                      <span className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border ${p.popular ? "border-electric/40 text-electric" : "border-line text-muted"}`}>
                        <Check className="h-3 w-3" aria-hidden />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/contact?plan=${p.id}`}
                  className={`group mt-9 inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-semibold transition-all ${
                    p.popular
                      ? "bg-brand shine text-white shadow-[0_10px_30px_-8px_rgba(67,56,245,0.6)] hover:shadow-[0_14px_40px_-6px_rgba(8,123,255,0.7)]"
                      : "border border-line hover:border-electric/60 hover:text-electric"
                  }`}
                >
                  {p.cta}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
                </Link>
              </article>
            </Reveal>
          ))}
        </ul>

        <p className="mt-10 text-center text-sm text-muted">
          Need something different? <Link href="/contact" className="font-semibold text-electric underline-offset-4 hover:underline">Talk to us about a custom plan</Link>.
        </p>
      </div>
    </section>
  );
}
