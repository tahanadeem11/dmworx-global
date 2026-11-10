import { FinalCTA } from "@/components/sections/FinalCTA";
import { PageHero } from "@/components/ui/PageHero";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Portfolio",
  description: "Websites delivered by DM Worx Global: BCR Construction (Concord, CA), Countryside Paradise (Colbert, WA) and Final Touch (CA).",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title={<>Digital experiences built to <span className="text-brand-anim">make an impact.</span></>}
        text="Live websites delivered for real businesses. Visit any project to see it in action."
      />
      <section className="pb-12">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-16 px-5 sm:px-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.slug} p={p} detailed />
          ))}
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
