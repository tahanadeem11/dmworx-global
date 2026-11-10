import Link from "next/link";
import { Bullets, Clause, Legal, Sec } from "@/components/ui/Legal";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Terms of Use",
  description: "DM WORX LLC terms of use: Google Optimization package inclusions, refund, dispute and chargeback policy, definitions and proper use of services.",
  path: "/terms-and-conditions",
});

const included: [string, string][] = [
  ["Google My Business (GMB) Optimization", "Comprehensive profile setup including categories, keywords, services, photos, and descriptions tailored for Google's ranking algorithm."],
  ["Social Media Management", "Full management of your brand presence across major platforms (Facebook, Instagram, LinkedIn, etc.) to build credibility and trust."],
  ["Local Citations (200+ Directory Submissions)", "Manual listings and verification across 200+ high-authority directories to strengthen local SEO signals."],
  ["Backlink Building", "Acquisition of high-quality backlinks from relevant and trusted websites to improve domain authority and rankings."],
  ["Article Writing & Publishing", "Professionally written, optimized articles that showcase your services and expertise for better organic visibility."],
  ["Blog Posting", "Regular SEO-focused blog content published on your website or partner sites to support ongoing engagement and authority."],
  ["NAP Consistency (Name, Address, Phone)", "Verification of consistent business information across all online properties for optimal local rankings."],
  ["Review Management Assistance", "Strategic support for generating, managing, and responding to customer reviews to enhance reputation."],
  ["Dedicated Technical Support Representative", "Assigned expert to monitor performance, handle updates, and provide proactive communication."],
];

const refund: [string, string, React.ReactNode][] = [
  ["Non-Refundable Services", "", "All recurring services, including SEO retainers, Google Optimization, social media management, online advertising, website maintenance, and similar digital marketing subscriptions, are strictly non-refundable once payment is received, regardless of work commencement."],
  ["Project-Based Services", "", <>Subject to the Cancellation &amp; Additional Refund Terms below, partial refunds may be considered only if a written request is submitted to <a href={`mailto:${site.email}`}>{site.email}</a> within 48 hours of payment and no substantial work has begun. Substantial work includes resource assignment, third-party purchases, deliverable creation, or logged project time.</>],
  ["Work Commencement & Acceptance", "", "Client payment authorizes DM WORX LLC to begin work. Approval of deliverables (email, signed scope, or platform acknowledgment) constitutes acceptance for the related milestone."],
  ["Custom Agreements Prevail", "", "If a signed agreement specifies different refund or guarantee terms, those written terms supersede this policy."],
  ["Refund Request Process", "", <>All refund requests must be emailed to <a href={`mailto:${site.email}`}>{site.email}</a> and include client contact details, invoice number, payment receipt, and the reason for the request. Responses are provided within ten (10) business days.</>],
  ["Chargebacks and Disputes", "", "Filing a chargeback or payment dispute without prior contact is prohibited. DM WORX LLC will contest chargebacks made in bad faith and may suspend services, pursue collections, and seek damages including legal fees."],
  ["Evidence and Audit Rights", "", "The company may maintain records such as communications, IP addresses, deliverables, and activity logs. Clients agree these records are admissible for dispute resolution."],
  ["Special Promotions & Guarantees", "", "Any special refund or satisfaction guarantees apply only when explicitly stated in writing and signed by both an authorized representative of DM WORX LLC and the client."],
  ["Governing Law & Venue", "", "This policy is governed by the laws of the Commonwealth of Pennsylvania. Disputes must be filed in state or federal courts located in Chester County, Pennsylvania."],
  ["Indemnity & Remedies", "", "Clients agree to indemnify DM WORX LLC, its employees, and agents from losses or fees arising from policy breaches. Failure to enforce any provision does not waive the company's rights."],
];

const additional: [string, string][] = [
  ["No Refunds", "Due to the nature of our work, refunds are not available."],
  ["SEO & Digital Marketing Services", "Although SEO and other digital marketing services are non-refundable, clients may request cancellation with at least 15 days written notice."],
  ["Discontinuing Services", "Clients have the right to discontinue services at any time; however, if the contract is terminated within an ongoing month, no refunds will be issued. A written notice via email or text message is required for cancellation 15 days prior to the cancellation of service, or pay a cancellation fee equal to one month of service. While future billing will stop, partial refunds will not be provided."],
  ["Special Event-Based Services", "Cancellations for special event-based services coordinated by our sales team are not accepted. These are exclusive, time-sensitive deals requiring a minimum of 30 days’ notice for withdrawal."],
  ["Recommendations & Approvals", "Refunds will not be granted if the client disregards DM WORX LLC’s recommendations and approvals regarding SEO strategies (White Hat only), including research techniques, content modifications, keyword enhancement, website evaluation, connectivity, and structure."],
  ["Other Agencies or Independent Changes", "No reimbursement will be given if the client hires another SEO agency during our contract period or independently implements SEO changes on their website or Google listings."],
  ["Website Access & Status", "If the client does not provide the necessary website access for SEO implementation or if the website is inactive or malfunctioning, no refunds will be processed."],
  ["Approved Mock-Ups", "Once mock-up designs are approved and the project enters the testing phase, refunds will not be issued."],
  ["Inactive or On-Hold Projects", "Refunds will not be provided for projects that have been inactive or on hold for more than 30 days."],
  ["Chargebacks", "Customer understands and agrees that in the event the customer initiates a chargeback and/or merchant dispute with their issuing bank for the service they have received and in fact owe payment for, and the customer is successful in recovering the disputed funds that would otherwise be owed to the business, we will make every effort to provide documentation to the issuing bank that the customer did receive, any and all services, including this policy."],
];

export default function Terms() {
  const a = site.address;
  return (
    <Legal
      current="/terms-and-conditions"
      title="Terms of Use"
      subtitle="Legal terms, service inclusions, and our refund policy."
      updated="March 20, 2026"
    >
      <Sec title="Google Optimization Package Includes">
        <ol className="grid gap-3 sm:grid-cols-2">
          {included.map(([t, d], i) => (
            <li key={t} className="card flex gap-4 rounded-2xl p-5">
              <span className="bg-brand-2 grid h-9 w-9 shrink-0 place-items-center rounded-full font-display text-sm font-bold text-white">{i + 1}</span>
              <div>
                <h3 className="font-semibold text-fg">{t}</h3>
                <p className="mt-1 text-sm leading-relaxed">{d}</p>
              </div>
            </li>
          ))}
        </ol>
      </Sec>

      <Sec title="Refund, Dispute & Chargeback Policy">
        <p>By purchasing or subscribing to services from DM WORX LLC (&ldquo;Company&rdquo;), clients acknowledge and agree to the following terms:</p>
        <div className="space-y-3">
          {refund.map(([t, , body], i) => (
            <Clause key={t} n={i + 1} title={t}>{body}</Clause>
          ))}
        </div>
      </Sec>

      <Sec title="Cancellation & Additional Refund Terms">
        <p>
          The following terms also apply and prevail where they are stricter than the items above. The complete text is available on our <Link href="/cancellation-refund-policy">Cancellation &amp; Refund Policy</Link> page.
        </p>
        <div className="space-y-3">
          {additional.map(([t, body], i) => (
            <Clause key={t} n={11 + i} title={t}>{body}</Clause>
          ))}
        </div>
      </Sec>

      <Sec title="Definitions">
        <p>Unless the context otherwise requires, any word, term, or expression used in these Terms of Use shall be construed according to its ordinary meaning. This shall be without prejudice to the following:</p>
        <Bullets
          items={[
            <><strong className="text-fg">&ldquo;Cookies&rdquo;</strong> shall mean a bundle of data sent from a web server to a browser and stored on the hard drive of the computer from which the browser is being accessed.</>,
            <><strong className="text-fg">&ldquo;Company&rdquo;</strong> shall mean DM WORX LLC, located at {a.street}, {a.city}, {a.region} {a.zip}.</>,
            <><strong className="text-fg">&ldquo;Personal Data&rdquo;</strong> shall have the same meaning as attributed to it by applicable data protection laws, including but not limited to the General Data Protection Regulation (GDPR).</>,
            <><strong className="text-fg">&ldquo;Services&rdquo;</strong> shall mean the provision of any services provided by the Company, including but not limited to digital marketing, SEO, Google Ads management, social media marketing, website design, and local business optimization.</>,
            <><strong className="text-fg">&ldquo;User&rdquo; or &ldquo;Users&rdquo;</strong> shall mean anyone making use of the Services provided by the Company and/or anyone accessing the Website of the Company for whatever purpose.</>,
            <><strong className="text-fg">&ldquo;Website&rdquo;</strong> shall mean the website operated by the Company and having the following URL: <a href={site.url}>{site.url}</a></>,
          ]}
        />
      </Sec>

      <Sec title="Proper Use of Services">
        <p>Users agree to use the Services only for lawful purposes. In particular, Users agree not to:</p>
        <Bullets
          items={[
            "Use any obscene, threatening, offensive, or defamatory materials;",
            "Violate any law, regulation, or intellectual property rights;",
            "Impersonate another individual or entity;",
            "Transmit unsolicited promotions or spam;",
            "Introduce harmful software or disrupt the Company’s systems;",
            "Collect or store personal data about other users without consent.",
          ]}
        />
      </Sec>

      <Sec title="Disclaimer of Warranties">
        <p>DM WORX LLC makes no warranties regarding the accuracy, reliability, legality, or functionality of its Services or Website. All services are provided on an “as is” basis.</p>
      </Sec>
    </Legal>
  );
}
