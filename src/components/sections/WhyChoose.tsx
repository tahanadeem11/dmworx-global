import { Gauge, MessagesSquare, PenTool, Puzzle, ShieldCheck, Users } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SplitHeading } from "@/components/ui/SplitHeading";

const points = [
  { icon: Puzzle, title: "Tailored business solutions", text: "No templates. Every solution is shaped around your goals." },
  { icon: PenTool, title: "Creative & technical expertise", text: "Designers, developers and marketers under one roof." },
  { icon: Users, title: "User-focused development", text: "Experiences built around how real people use them." },
  { icon: Gauge, title: "Strategic digital execution", text: "Clear plans, disciplined delivery, measurable direction." },
  { icon: MessagesSquare, title: "Reliable communication", text: "Regular updates and honest answers throughout." },
  { icon: ShieldCheck, title: "Scalable solutions", text: "Foundations that grow without costly rebuilds." },
];

export function WhyChoose() {
  return (
    <section className="band-blue relative overflow-hidden py-24 sm:py-36">
      <div className="orb -right-20 top-10 h-96 w-96 bg-purple" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Reveal y={16}>
            <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-electric">
              <span className="bg-brand h-px w-8" aria-hidden /> Why DM Worx Global
            </span>
          </Reveal>
          <SplitHeading className="mt-5 text-[clamp(2.1rem,5vw,3.6rem)] font-semibold leading-[1.04]">
            More Than Services. A <span className="text-brand">Digital Growth Partner.</span>
          </SplitHeading>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted">
              We work as an extension of your team, combining strategy, design and engineering to build digital experiences that last.
            </p>
          </Reveal>

          {/* central orbit visual */}
          <Reveal delay={0.15}>
            <div className="relative mx-auto mt-14 grid aspect-square max-w-[19rem] place-items-center" aria-hidden>
              <div className="spin-slow absolute inset-0 rounded-full border border-dashed border-electric/40" />
              <div className="spin-slow absolute inset-9 rounded-full border border-line" style={{ animationDirection: "reverse", animationDuration: "26s" }} />
              <div className="bg-brand relative grid h-28 w-28 place-items-center rounded-full shadow-[0_0_70px_rgba(8,123,255,0.45)]">
                <span className="font-display text-3xl font-bold text-white">DM</span>
              </div>
              {[0, 72, 144, 216, 288].map((deg) => (
                <span key={deg} className="bg-brand absolute h-3 w-3 rounded-full shadow-[0_0_14px_rgba(8,123,255,0.8)]" style={{ transform: `rotate(${deg}deg) translateY(-9.5rem)` }} />
              ))}
            </div>
          </Reveal>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2">
          {points.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 0.06} className={i % 2 ? "sm:translate-y-10" : ""}>
              <div className="card spot grad-border group h-full rounded-3xl p-6">
                <p.icon className="h-7 w-7 text-electric transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110" aria-hidden />
                <h3 className="mt-5 font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
