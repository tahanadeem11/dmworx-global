import { FAQ } from "@/components/sections/FAQ";
import { FeaturedPortfolio } from "@/components/sections/FeaturedPortfolio";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Hero } from "@/components/sections/Hero";
import { Impact } from "@/components/sections/Impact";
import { Pricing } from "@/components/sections/Pricing";
import { Process } from "@/components/sections/Process";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { Testimonials } from "@/components/sections/Testimonials";
import { TrustValue } from "@/components/sections/TrustValue";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { homeFaqs } from "@/data/content";
import { orgJsonLd, faqJsonLd, JsonLd } from "@/lib/seo";

export default function Home() {
  return (
    <>
      <JsonLd data={[orgJsonLd(), faqJsonLd(homeFaqs)]} />
      <Hero />
      <TrustValue />
      <Pricing />
      <ServicesOverview />
      <WhyChoose />
      <Process />
      <FeaturedPortfolio />
      <Impact />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}
