import { FinalCTA } from "@/components/sections/FinalCTA";
import { ServiceGrid } from "@/components/sections/ServicesOverview";
import { PageHero } from "@/components/ui/PageHero";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Digital Services",
  description: "Website and app development, SEO, social media, PPC, branding, design, video, hosting and digital marketing packages from DM Worx Global.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={<>Everything your business needs to <span className="text-brand-anim">grow digitally.</span></>}
        text="Thirteen specialist services, one coordinated team. Choose a single service or combine them into a complete growth plan."
      />
      <section className="pb-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <ServiceGrid />
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
