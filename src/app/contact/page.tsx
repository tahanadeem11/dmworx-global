import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/ui/ContactForm";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact Us",
  description: "Talk to DM Worx Global about your website, app, SEO, marketing or branding project. Call, email or send an inquiry.",
  path: "/contact",
});

export default function ContactPage() {
  const a = site.address;
  const items = [
    { icon: Phone, label: "Phone", node: <a href={site.phoneHref} className="hover:text-electric">{site.phone}</a> },
    { icon: Mail, label: "Email", node: <a href={`mailto:${site.email}`} className="break-all hover:text-electric">{site.email}</a> },
    { icon: MapPin, label: "Office", node: <address className="not-italic">{a.street}<br />{a.city}, {a.region} {a.zip}</address> },
    { icon: Clock, label: "Response time", node: <span>We reply to every inquiry as soon as we can.</span> },
  ];
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Let&apos;s build something <span className="text-brand-anim">extraordinary.</span></>}
        text="Tell us about your project, or reach out directly. We'd love to hear from you."
      />
      <section className="pb-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <ul className="space-y-4">
              {items.map((i) => (
                <li key={i.label} className="flex gap-4 card spot rounded-3xl p-5">
                  <span className="bg-brand-2 grid h-11 w-11 shrink-0 place-items-center rounded-2xl text-white"><i.icon className="h-5 w-5" aria-hidden /></span>
                  <div><div className="text-xs font-semibold uppercase tracking-widest text-muted">{i.label}</div><div className="mt-1 font-medium">{i.node}</div></div>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="card grad-border rounded-[2rem] p-6 sm:p-10">
              <h2 className="mb-6 text-2xl font-semibold">Start your project</h2>
              <ContactForm id="contact" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
