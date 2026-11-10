import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

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
        <div className="bg-brand-2 relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] px-6 py-20 text-center text-white sm:px-16">
          <div className="dot-grid absolute inset-0 opacity-40" aria-hidden />
          <div className="orb -left-24 -top-24 h-80 w-80 bg-white" style={{ opacity: 0.25 }} aria-hidden />
          <div className="orb -bottom-24 -right-24 h-80 w-80 bg-cyan" style={{ opacity: 0.5 }} aria-hidden />
          <svg className="spin-slow absolute -right-24 top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 opacity-20" viewBox="0 0 100 100" aria-hidden>
            <circle cx="50" cy="50" r="48" fill="none" stroke="#fff" strokeWidth="0.4" strokeDasharray="1 3" />
            <circle cx="50" cy="50" r="34" fill="none" stroke="#fff" strokeWidth="0.4" />
          </svg>
          <div className="relative">
            <h2 className="mx-auto max-w-3xl text-4xl font-semibold leading-[1.05] sm:text-6xl">{title}</h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-white/80">{text}</p>
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
