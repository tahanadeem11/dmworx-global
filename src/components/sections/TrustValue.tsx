import { Compass, HeartHandshake, Lightbulb, Rocket, Wrench } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const pillars = [
  { icon: Compass, title: "Digital Expertise", text: "Specialists across development, search, social and paid media working as one team." },
  { icon: Lightbulb, title: "Creative Execution", text: "Ideas shaped into design and content that feel distinctive and on-brand." },
  { icon: Rocket, title: "Business-Focused Strategy", text: "Every decision tied to your goals, not vanity metrics." },
  { icon: Wrench, title: "Scalable Solutions", text: "Foundations built to grow as your business and audience do." },
  { icon: HeartHandshake, title: "Long-Term Support", text: "A partner who stays involved after launch." },
];

export function TrustValue() {
  return (
    <section className="relative bg-alt py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Who we are"
          title={<>Your <span className="text-brand">Digital Growth</span> Partner.</>}
          text="DM Worx Global combines technology, creativity and digital strategy to help businesses succeed online, from first idea to long-term growth."
        />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {pillars.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 0.07}>
              <div className="grad-border group h-full rounded-3xl bg-solid p-6 transition-transform duration-300 hover:-translate-y-1.5">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-2 text-white transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                  <p.icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.text}</p>
                <span className="mt-5 block h-1 w-10 rounded-full bg-brand transition-all duration-500 group-hover:w-full" aria-hidden />
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
