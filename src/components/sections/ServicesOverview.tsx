import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getIcon } from "@/components/ui/icons";
import { services, type Service } from "@/data/services";

const span: Record<Service["size"], string> = {
  lg: "sm:col-span-2",
  md: "",
  sm: "",
};

export function ServiceGrid() {
  return (
    <ul className="grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-flow-dense lg:grid-cols-4">
      {services.map((s, i) => {
        const Icon = getIcon(s.icon);
        const big = s.size === "lg";
        return (
          <Reveal as="li" key={s.slug} delay={(i % 4) * 0.06} className={span[s.size]}>
            <Link
              href={`/services/${s.slug}`}
              className={`grad-border group relative flex h-full flex-col overflow-hidden rounded-3xl p-6 transition duration-300 hover:-translate-y-1.5 ${
                big ? "bg-brand-2 text-white" : "bg-solid"
              }`}
            >
              {big ? (
                <div className="dot-grid absolute inset-0 opacity-40" aria-hidden />
              ) : (
                <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-brand opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-25" aria-hidden />
              )}
              <span className={`relative grid h-12 w-12 place-items-center rounded-2xl ${big ? "bg-white/20 backdrop-blur" : "bg-brand-2 text-white"}`}>
                <Icon className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="relative mt-6 text-xl font-semibold">{s.title}</h3>
              <p className={`relative mt-2 text-sm leading-relaxed ${big ? "text-white/80" : "text-muted"} ${s.size === "sm" ? "line-clamp-3" : ""}`}>
                {s.short}
              </p>
              <span className={`relative mt-auto flex items-center gap-1 pt-6 text-sm font-semibold ${big ? "text-white" : "text-electric"}`}>
                Explore Service
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1" aria-hidden />
              </span>
            </Link>
          </Reveal>
        );
      })}
    </ul>
  );
}

export function ServicesOverview() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Our services"
          title={<>Everything Your Business Needs to <span className="text-brand">Grow Digitally.</span></>}
          text="Comprehensive digital solutions designed to strengthen your brand, improve your online visibility, and accelerate business growth."
        />
        <ServiceGrid />
      </div>
    </section>
  );
}
