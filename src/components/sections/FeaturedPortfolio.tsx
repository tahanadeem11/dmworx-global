import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/data/content";

export function FeaturedPortfolio() {
  const [a, b, c] = projects;
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Portfolio"
          title={<>Digital Experiences Built to <span className="text-brand">Make an Impact.</span></>}
          text="Real websites we have delivered for businesses across the United States."
        />
        <div className="grid gap-x-8 gap-y-14 md:grid-cols-2">
          <ProjectCard p={a} tall />
          <div className="space-y-14 md:pt-24">
            <ProjectCard p={b} />
            <ProjectCard p={c} />
          </div>
        </div>
        <div className="mt-16 text-center">
          <Button href="/portfolio" variant="ghost">View All Projects</Button>
        </div>
      </div>
    </section>
  );
}
