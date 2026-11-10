import { Eye, Handshake, Target } from "lucide-react";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Process } from "@/components/sections/Process";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd, orgJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About Us",
  description: "DM Worx Global is a digital solutions and technology agency combining strategy, creativity and engineering to help businesses grow.",
  path: "/about",
});

const values = [
  { icon: Target, title: "Our mission", text: "To help businesses build a powerful digital presence, reach the right audience and grow with confidence." },
  { icon: Eye, title: "Our vision", text: "To be the digital partner ambitious brands trust for technology, creativity and strategy that lasts." },
  { icon: Handshake, title: "Our values", text: "Honest communication, craft in the details, and results tied to your real business goals." },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={orgJsonLd()} />
      <PageHero
        eyebrow="About DM Worx Global"
        title={<>Technology, creativity and strategy, <span className="text-brand-anim">working as one.</span></>}
        text="We're a digital solutions and technology agency that partners with businesses to design, build and grow their digital presence."
      />
      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 sm:px-8 md:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.08}>
              <div className="grad-border h-full rounded-3xl bg-solid p-8">
                <span className="bg-brand-2 grid h-12 w-12 place-items-center rounded-2xl text-white"><v.icon className="h-6 w-6" aria-hidden /></span>
                <h2 className="mt-5 text-2xl font-semibold">{v.title}</h2>
                <p className="mt-2 leading-relaxed text-muted">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-3xl font-semibold leading-tight sm:text-5xl">One team for your <span className="text-brand">entire digital journey.</span></h2>
          </Reveal>
          <Reveal delay={0.1} className="space-y-5 text-lg leading-relaxed text-muted">
            <p>Many businesses juggle separate vendors for design, development and marketing. The result is mixed messages, missed opportunities and wasted budget.</p>
            <p>At DM Worx Global, strategists, designers, developers and marketers work together from the start, so every website, app and campaign supports the same goals and speaks with one voice.</p>
          </Reveal>
        </div>
      </section>
      <WhyChoose />
      <Process />
      <FinalCTA />
    </>
  );
}
