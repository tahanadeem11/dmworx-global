import { ArrowUpRight, Check, TriangleAlert } from "lucide-react";
import Link from "next/link";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/ui/ContactForm";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceIcon } from "@/components/ui/icons";
import { getService, services, type Service } from "@/data/services";
import { site } from "@/data/site";
import { ServiceVisual } from "./ServiceVisual";

export function ServicePage({ service, index }: { service: Service; index: number }) {
  const flip = index % 2 === 1;
  const listLayout = index % 3 === 1;

  return (
    <>
      {/* A. Hero */}
      <section className="relative isolate overflow-hidden pb-20 pt-36 sm:pt-40">
        <div className="dot-grid absolute inset-0 -z-10" aria-hidden />
        <div className={`orb -z-10 h-[30rem] w-[30rem] bg-purple ${flip ? "-right-40 top-0" : "-left-40 top-0"}`} aria-hidden />
        <div className={`orb -z-10 h-96 w-96 bg-electric ${flip ? "-left-32 bottom-0" : "-right-32 bottom-0"}`} aria-hidden />
        <div className={`mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 ${flip ? "lg:[&>*:first-child]:order-2" : ""}`}>
          <Reveal>
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted">
              <Link href="/services" className="hover:text-electric">Services</Link> <span aria-hidden>/</span> <span className="text-fg">{service.title}</span>
            </nav>
            <span className="bg-brand-2 mb-6 grid h-14 w-14 place-items-center rounded-2xl text-white shadow-lg"><ServiceIcon name={service.icon} className="h-7 w-7" /></span>
            <h1 className="text-4xl font-semibold leading-[1.05] sm:text-6xl">
              {service.heroHeadline} <span className="text-brand-anim">{service.heroAccent}</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{service.heroText}</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button href="#get-started">Get a Free Consultation</Button>
              <Button href="#offer" variant="ghost">See What We Offer</Button>
            </div>
          </Reveal>
          <Reveal delay={0.15}><ServiceVisual id={service.visual} /></Reveal>
        </div>
      </section>

      {/* B. Introduction */}
      <section className="bg-alt py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-electric">Overview</span>
            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">{service.introTitle}</h2>
          </Reveal>
          <Reveal delay={0.1} className="space-y-5 text-lg leading-relaxed text-muted">
            {service.intro.map((p) => <p key={p}>{p}</p>)}
          </Reveal>
        </div>
      </section>

      {/* C. Problems */}
      <section className="py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="Challenges" title={<>Problems we <span className="text-brand">solve</span></>} />
          <ul className="grid gap-4 sm:grid-cols-2">
            {service.problems.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 0.06}>
                <div className="flex h-full gap-4 rounded-3xl border border-line bg-solid p-6">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-alt2 text-purple"><TriangleAlert className="h-5 w-5" aria-hidden /></span>
                  <div><h3 className="font-semibold">{p.title}</h3><p className="mt-1.5 text-sm leading-relaxed text-muted">{p.text}</p></div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* D. What we offer */}
      <section id="offer" className="relative scroll-mt-24 overflow-hidden bg-alt py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="What we offer" title={<>Capabilities built around <span className="text-brand">{service.title}</span></>} />
          {listLayout ? (
            <ol className="mx-auto max-w-4xl divide-y divide-line rounded-3xl border border-line bg-solid">
              {service.offers.map((o, i) => (
                <Reveal as="li" key={o.title} delay={i * 0.05}>
                  <div className="flex gap-5 p-6 sm:p-7">
                    <span className="text-brand font-display text-3xl font-bold">{String(i + 1).padStart(2, "0")}</span>
                    <div><h3 className="text-lg font-semibold">{o.title}</h3><p className="mt-1 text-muted">{o.text}</p></div>
                  </div>
                </Reveal>
              ))}
            </ol>
          ) : (
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {service.offers.map((o, i) => (
                <Reveal as="li" key={o.title} delay={i * 0.05}>
                  <div className="grad-border h-full rounded-3xl bg-solid p-6 transition-transform duration-300 hover:-translate-y-1.5">
                    <span className="bg-brand grid h-9 w-9 place-items-center rounded-full text-white"><Check className="h-4 w-4" aria-hidden /></span>
                    <h3 className="mt-4 text-lg font-semibold">{o.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{o.text}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* E. Benefits */}
      <section className="py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="Benefits" title={<>What it means <span className="text-brand">for your business</span></>} />
          <ul className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {service.benefits.map((b, i) => (
              <Reveal as="li" key={b.title} delay={i * 0.07}>
                <div className="h-full bg-solid p-7">
                  <div className="text-brand font-display text-4xl font-bold">0{i + 1}</div>
                  <h3 className="mt-5 font-semibold">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{b.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* F. Approach */}
      <section className="bg-alt py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="Our approach" title={<>How we deliver <span className="text-brand">{service.title}</span></>} />
          <ol className="grid gap-6 lg:grid-cols-4">
            {service.approach.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 0.08}>
                <div className="relative h-full rounded-3xl border border-line bg-solid p-7">
                  <span className="bg-brand-2 grid h-11 w-11 place-items-center rounded-full font-display text-sm font-bold text-white">{i + 1}</span>
                  <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
                  {i < 3 && <span className="bg-brand absolute -right-3 top-1/2 hidden h-0.5 w-6 lg:block" aria-hidden />}
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* G. Why choose us */}
      <section className="py-24 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-electric">Why DM Worx Global</span>
            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">A partner that cares about the <span className="text-brand">outcome</span></h2>
          </Reveal>
          <ul className="space-y-4">
            {service.whyUs.map((w, i) => (
              <Reveal as="li" key={w.title} delay={i * 0.08}>
                <div className="flex gap-4 rounded-3xl border border-line bg-solid p-6">
                  <span className="bg-brand mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full text-white"><Check className="h-3.5 w-3.5" aria-hidden /></span>
                  <div><h3 className="font-semibold">{w.title}</h3><p className="mt-1 text-sm text-muted">{w.text}</p></div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* H. Related projects + related services */}
      <section className="bg-alt py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="Related" title={<>Projects &amp; <span className="text-brand">related services</span></>} />
          <Reveal className="mb-8 rounded-3xl border border-dashed border-line bg-solid p-8 text-center">
            <p className="font-medium">Related {service.title.toLowerCase()} projects will appear here.</p>
            <p className="mt-1 text-sm text-muted">Real case studies are being prepared. <Link href="/portfolio" className="font-semibold text-electric">Visit the portfolio →</Link></p>
          </Reveal>
          <ul className="grid gap-4 sm:grid-cols-3">
            {service.related.map((slug) => {
              const r = getService(slug);
              if (!r) return null;
              return (
                <li key={slug}>
                  <Link href={`/services/${slug}`} className="grad-border group flex h-full flex-col rounded-3xl bg-solid p-6 transition-transform hover:-translate-y-1.5">
                    <ServiceIcon name={r.icon} className="h-7 w-7 text-electric" />
                    <h3 className="mt-4 font-semibold">{r.title}</h3>
                    <p className="mt-1.5 line-clamp-2 text-sm text-muted">{r.short}</p>
                    <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-semibold text-electric">Explore <ArrowUpRight className="h-4 w-4" aria-hidden /></span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* I. FAQs */}
      <section className="py-24 sm:py-28">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <SectionHeading eyebrow="FAQ" title={<>{service.title} <span className="text-brand">questions</span></>} />
          <Accordion items={service.faqs} />
        </div>
      </section>

      {/* J. CTA + form */}
      <section id="get-started" className="scroll-mt-20 px-5 pb-24 sm:px-8">
        <div className="bg-brand-2 relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] p-6 sm:p-12 lg:grid lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div className="dot-grid absolute inset-0 opacity-30" aria-hidden />
          <div className="relative text-white">
            <h2 className="text-3xl font-semibold leading-tight sm:text-5xl">Ready to start with {service.title}?</h2>
            <p className="mt-4 max-w-md text-white/80">Tell us about your project and we&apos;ll come back with a tailored recommendation.</p>
            <ul className="mt-8 space-y-2 text-sm text-white/90">
              <li><a href={site.phoneHref} className="underline-offset-4 hover:underline">{site.phone}</a></li>
              <li><a href={`mailto:${site.email}`} className="underline-offset-4 hover:underline">{site.email}</a></li>
            </ul>
          </div>
          <div className="relative mt-10 rounded-3xl bg-solid p-6 text-fg sm:p-8 lg:mt-0">
            <ContactForm defaultService={service.title} id={`svc-${service.slug}`} />
          </div>
        </div>
      </section>
    </>
  );
}

export const serviceIndex = (slug: string) => services.findIndex((s) => s.slug === slug);
