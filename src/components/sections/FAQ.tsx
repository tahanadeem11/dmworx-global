import { Accordion } from "@/components/ui/Accordion";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { homeFaqs } from "@/data/content";

export function FAQ() {
  return (
    <section className="band py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading eyebrow="FAQ" title={<>Questions, <span className="text-brand">answered.</span></>} />
        <Reveal>
          <Accordion items={homeFaqs} />
        </Reveal>
      </div>
    </section>
  );
}
