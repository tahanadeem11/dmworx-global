import Link from "next/link";
import { Clause, Legal, Sec } from "@/components/ui/Legal";
import { Reveal } from "@/components/ui/Reveal";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Cancellation & Refund Policy",
  description: "DM WORX LLC cancellation and refund policy: written notice requirements, SEO cooperation, design stages, chargebacks and disputes.",
  path: "/cancellation-refund-policy",
});

const stats = [
  ["15 days", "Written notice required to cancel"],
  ["30 days", "Notice for special event-based deals"],
  ["30 days", "Inactive projects become non-refundable"],
];

export default function CancellationRefund() {
  return (
    <Legal
      current="/cancellation-refund-policy"
      title="Cancellation & Refund Policy"
      subtitle="Clear terms for cancelling services and how refunds are handled."
      updated="March 20, 2026"
    >
      <ul className="grid gap-3 sm:grid-cols-3">
        {stats.map(([n, l], i) => (
          <Reveal as="li" key={l} delay={i * 0.08}>
            <div className="card grad-border h-full rounded-2xl p-5 text-center">
              <div className="text-brand font-display text-4xl font-bold">{n}</div>
              <p className="mt-2 text-sm text-muted">{l}</p>
            </div>
          </Reveal>
        ))}
      </ul>

      <p className="leading-relaxed text-muted">
        By purchasing or subscribing to services from DM WORX LLC, clients acknowledge and agree to the terms below. They apply together with our <Link href="/terms-and-conditions">Terms of Use</Link> and <Link href="/privacy-policy">Privacy Policy</Link>.
      </p>

      <Sec title="1. General Refund Policy">
        <p className="font-medium text-fg">Because of the nature of our work, refunds are not available.</p>
        <Clause title="No Refunds">Due to the nature of our work, refunds are not available.</Clause>
        <Clause title="SEO & Digital Marketing Services">Although SEO and other digital marketing services are non-refundable, clients may request cancellation with at least 15 days written notice.</Clause>
      </Sec>

      <Sec title="2. Cancellation & Notice">
        <p className="font-medium text-fg">Written notice 15 days in advance, or pay one month of service.</p>
        <Clause title="Discontinuing Services">
          Clients have the right to discontinue services at any time; however, if the contract is terminated within an ongoing month, no refunds will be issued. A written notice via email or text message is required for cancellation 15 days prior to the cancellation of service, or pay a cancellation fee equal to one month of service. While future billing will stop, partial refunds will not be provided.
        </Clause>
        <Clause title="Special Event-Based Services">
          Cancellations for special event-based services coordinated by our sales team are not accepted. These are exclusive, time-sensitive deals requiring a minimum of 30 days’ notice for withdrawal.
        </Clause>
      </Sec>

      <Sec title="3. SEO Strategy & Client Cooperation">
        <p className="font-medium text-fg">Refunds depend on following our recommended approach and giving us access.</p>
        <Clause title="Recommendations & Approvals">
          Refunds will not be granted if the client disregards DM WORX LLC’s recommendations and approvals regarding SEO strategies (White Hat only), including research techniques, content modifications, keyword enhancement, website evaluation, connectivity, and structure.
        </Clause>
        <Clause title="Other Agencies or Independent Changes">
          No reimbursement will be given if the client hires another SEO agency during our contract period or independently implements SEO changes on their website or Google listings.
        </Clause>
        <Clause title="Website Access & Status">
          If the client does not provide the necessary website access for SEO implementation or if the website is inactive or malfunctioning, no refunds will be processed.
        </Clause>
      </Sec>

      <Sec title="4. Design & Project Stages">
        <p className="font-medium text-fg">Approved mock-ups and inactive projects are not refundable.</p>
        <Clause title="Approved Mock-Ups">Once mock-up designs are approved and the project enters the testing phase, refunds will not be issued.</Clause>
        <Clause title="Inactive or On-Hold Projects">Refunds will not be provided for projects that have been inactive or on hold for more than 30 days.</Clause>
      </Sec>

      <Sec title="5. Chargebacks & Disputes">
        <p className="font-medium text-fg">We document that services and this policy were provided.</p>
        <Clause title="Chargebacks">
          Customer understands and agrees that in the event the customer initiates a chargeback and/or merchant dispute with their issuing bank for the service they have received and in fact owe payment for, and the customer is successful in recovering the disputed funds that would otherwise be owed to the business, we will make every effort to provide documentation to the issuing bank that the customer did receive, any and all services, including this policy.
        </Clause>
      </Sec>
    </Legal>
  );
}
