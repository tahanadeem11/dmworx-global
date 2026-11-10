import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SplitHeading } from "@/components/ui/SplitHeading";

export function FinalCTA({
  title = "Ready to Build Something Extraordinary?",
  text = "Let's turn your vision into a digital experience that moves your business forward.",
  primary = ["Start Your Project", "/contact"],
  secondary = ["Contact Our Team", "/contact"],
}: {
  title?: string;
  text?: string;
  primary?: [string, string];
  secondary?: [string, string];
}) {
  return (
    <section className="px-5 py-20 sm:px-8 sm:py-28">
      <Reveal>
        <div className="scope-dark relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] px-6 py-24 text-center sm:px-16" style={{ boxShadow: "var(--shadow-lg)" }}>
          <div className="bg-brand-2 absolute inset-0 opacity-90" aria-hidden />
          <div className="dot-grid absolute inset-0 opacity-40" aria-hidden />
          <div className="orb -left-24 -top-24 h-96 w-96 bg-white" style={{ opacity: 0.22 }} aria-hidden />
          <div className="orb -bottom-24 -right-24 h-96 w-96 bg-cyan" style={{ opacity: 0.5 }} aria-hidden />
          <svg className="spin-slow absolute -right-24 top-1/2 h-[30rem] w-[30rem] -translate-y-1/2 opacity-25" viewBox="0 0 100 100" aria-hidden>
            <circle cx="50" cy="50" r="48" fill="none" stroke="#fff" strokeWidth="0.4" strokeDasharray="1 3" />
            <circle cx="50" cy="50" r="34" fill="none" stroke="#fff" strokeWidth="0.4" />
            <circle cx="84" cy="50" r="1.6" fill="#fff" />
          </svg>
          <svg className="spin-slow absolute -left-32 top-1/2 h-[26rem] w-[26rem] -translate-y-1/2 opacity-20" viewBox="0 0 100 100" aria-hidden style={{ animationDirection: "reverse" }}>
            <circle cx="50" cy="50" r="40" fill="none" stroke="#fff" strokeWidth="0.4" strokeDasharray="2 4" />
          </svg>
          <div className="relative text-white">
            <SplitHeading className="mx-auto max-w-3xl text-[clamp(2.2rem,6vw,4.6rem)] font-semibold leading-[1.02]">{title}</SplitHeading>
            <p className="mx-auto mt-6 max-w-xl text-lg text-white/80">{text}</p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button href={primary[1]} variant="light">{primary[0]}</Button>
              <Button href={secondary[1]} variant="ghost" className="!border-white/40 !bg-white/10 !text-white">{secondary[0]}</Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
