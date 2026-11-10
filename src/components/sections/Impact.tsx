import { Eye, LineChart, MousePointerClick, Repeat } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const values = [
  { icon: Eye, title: "Be seen", text: "Stronger visibility across search, maps, social and paid channels." },
  { icon: MousePointerClick, title: "Be chosen", text: "Clear messaging and experiences that turn interest into enquiries." },
  { icon: LineChart, title: "Be measured", text: "Reporting that connects activity to real business outcomes." },
  { icon: Repeat, title: "Keep improving", text: "Continuous testing and optimisation after launch." },
];

export function Impact() {
  return (
    <section className="scope-dark edge-fade relative overflow-hidden py-28 sm:py-40">
      <div className="orb -left-20 top-0 h-96 w-96 bg-purple" aria-hidden />
      <div className="orb -right-20 bottom-0 h-96 w-96 bg-electric" aria-hidden />
      <div className="dot-grid absolute inset-0 opacity-50" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Results & impact"
          title={<>Digital transformation that <span className="text-brand">delivers value.</span></>}
          text="We focus on outcomes that matter to your business. Verified performance figures will be shared here as case studies are published."
        />
        <ul className="grid gap-px overflow-hidden rounded-[1.75rem] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal as="li" key={v.title} delay={i * 0.08}>
              <div className="spot h-full bg-band p-8 transition-colors">
                <v.icon className="h-8 w-8 text-cyan" aria-hidden />
                <h3 className="mt-8 text-2xl font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
