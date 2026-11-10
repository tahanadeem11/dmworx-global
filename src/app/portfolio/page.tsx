import { FinalCTA } from "@/components/sections/FinalCTA";
import { PageHero } from "@/components/ui/PageHero";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Portfolio",
  description: "Selected websites, apps, branding and marketing projects by DM Worx Global.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title={<>Digital experiences built to <span className="text-brand-anim">make an impact.</span></>}
        text="The projects below are clearly labelled placeholders showing the layout. Verified case studies will replace them."
      />
      <section className="pb-12">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-16 px-5 sm:px-8 md:grid-cols-2">
          {projects.map((p, i) => (
            <div key={p.slug} className={i % 2 ? "md:mt-20" : ""}>
              <ProjectCard p={p} tall={i % 3 === 0} />
            </div>
          ))}
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
