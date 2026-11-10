import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePage, serviceIndex } from "@/components/services/ServicePage";
import { getService, services } from "@/data/services";
import { faqJsonLd, JsonLd, pageMetadata, serviceJsonLd } from "@/lib/seo";

// All slugs are prerendered via generateStaticParams, so opt out of the dev-only instant-navigation insight.
export const instant = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return pageMetadata({ title: s.title, description: s.heroText, path: `/services/${s.slug}` });
}

export default async function Page({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();
  return (
    <>
      <JsonLd data={[serviceJsonLd(s.title, s.heroText, `/services/${s.slug}`), faqJsonLd(s.faqs)]} />
      <ServicePage service={s} index={serviceIndex(slug)} />
    </>
  );
}
