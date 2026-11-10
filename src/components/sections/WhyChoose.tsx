import { Gauge, MessagesSquare, PenTool, Puzzle, ShieldCheck, Users } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

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
    <section className="relative overflow-hidden bg-alt py-24 sm:py-32">
      <div className="orb -right-40 top-10 h-96 w-96 bg-purple" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-electric">
            <span className="h-px w-8 bg-brand" aria-hidden /> Why DM Worx Global
          </span>
          <h2 className="mt-4 text-4xl font-semibold leading-[1.05] sm:text-5xl">
            More Than Services. A <span className="text-brand">Digital Growth Partner.</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            We work as an extension of your team, combining strategy, design and engineering to build digital experiences that last.
          </p>

          {/* central visual */}
          <div className="relative mx-auto mt-12 grid aspect-square max-w-xs place-items-center" aria-hidden>
            <div className="spin-slow absolute inset-0 rounded-full border border-dashed border-electric/40" />
            <div className="spin-slow absolute inset-8 rounded-full border border-line" style={{ animationDirection: "reverse" }} />
            <div className="bg-brand grid h-28 w-28 place-items-center rounded-full shadow-[0_0_60px_rgba(8,123,255,0.5)]">
              <span className="font-display text-3xl font-bold text-white">DM</span>
            </div>
            {[0, 72, 144, 216, 288].map((deg) => (
              <span
                key={deg}
                className="absolute h-3 w-3 rounded-full bg-brand"
                style={{ transform: `rotate(${deg}deg) translateY(-8.5rem)` }}
              />
            ))}
          </div>
        </Reveal>

        <ul className="grid gap-4 sm:grid-cols-2">
          {points.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 0.06} className={i % 2 ? "sm:translate-y-8" : ""}>
              <div className="grad-border group h-full rounded-3xl bg-solid p-6">
                <p.icon className="h-7 w-7 text-electric transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6" aria-hidden />
                <h3 className="mt-4 font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
