import { Quote } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonialSlots } from "@/data/content";

export function Testimonials() {
  return (
    <section className="overflow-x-clip py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title={<>What Our <span className="text-brand">Clients Say.</span></>}
          text="Client feedback will appear here once authentic testimonials are supplied."
        />
        <ul className="grid gap-5 md:grid-cols-3">
          {testimonialSlots.map((t, i) => (
            <Reveal as="li" key={t.service} delay={i * 0.1}>
              <figure className="card spot grad-border relative h-full rounded-3xl p-8">
                <Quote className="h-8 w-8 text-purple/50" aria-hidden />
                <blockquote className="mt-4 space-y-2" aria-hidden>
                  <span className="block h-3 w-full rounded bg-line" />
                  <span className="block h-3 w-11/12 rounded bg-line" />
                  <span className="block h-3 w-3/4 rounded bg-line" />
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-3">
                  <span className="bg-brand-2 grid h-11 w-11 place-items-center rounded-full text-sm font-bold text-white">?</span>
                  <div>
                    <div className="text-sm font-semibold">Client name</div>
                    <div className="text-xs text-muted">Company · {t.service}</div>
                  </div>
                </figcaption>
                <span className="absolute right-5 top-5 rounded-full border border-dashed border-line px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-muted">
                  Placeholder
                </span>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
