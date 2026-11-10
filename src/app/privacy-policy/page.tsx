import Link from "next/link";
import { Bullets, Callout, Legal, Sec } from "@/components/ui/Legal";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How DM WORX LLC collects, uses, shares and protects your personal information, including SMS/text messaging consent.",
  path: "/privacy-policy",
});

const rights = ["Access personal info", "Correct inaccurate data", "Request data deletion", "Opt-out of marketing", "Data portability", "Withdraw consent"];

export default function Privacy() {
  const a = site.address;
  return (
    <Legal
      current="/privacy-policy"
      title="Privacy Policy"
      subtitle="How we collect, use, and protect your personal information."
      updated="March 20, 2026"
    >
      <Sec title="Introduction">
        <p>
          DM WORX LLC (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our digital marketing services.
        </p>
        <p>By using our services, you agree to the collection and use of information in accordance with this policy.</p>
      </Sec>

      <Sec title="Information We Collect">
        <Bullets
          items={[
            "Personal information you provide (name, email, phone number)",
            "Business information for service delivery",
            "Website usage data and analytics",
            "Communication records and preferences",
            "Payment and billing information",
          ]}
        />
      </Sec>

      <Sec title="How We Use Your Information">
        <Bullets
          items={[
            "To provide and improve our digital marketing services",
            "To communicate about your projects and account",
            "To process payments and manage billing",
            "To send marketing communications (with your consent)",
            "To comply with legal obligations",
          ]}
        />
      </Sec>

      <Sec title="Information Protection">
        <Bullets
          items={[
            "SSL encryption for all data transmission",
            "Secure servers and regular security updates",
            "Limited access to authorized personnel only",
            "Regular backups and data protection measures",
            "Compliance with industry security standards",
          ]}
        />
      </Sec>

      <Sec title="Information Sharing">
        <p>
          We do not sell your personal information. Information is shared only with your explicit consent, with third-party service providers under strict agreements, for legal requirements or court orders, or in the case of business transfers (with notice).
        </p>
      </Sec>

      <Sec title="SMS / Text Messaging Communications">
        <p>
          DM WORX LLC may offer SMS/text messaging communications to individuals who opt in, including appointment reminders, project updates, billing notices, and marketing messages related to our digital marketing services.
        </p>
        <Callout>
          <strong>No Sharing of Mobile Opt-In Data:</strong> Mobile phone numbers and mobile opt-in consent collected for SMS/text messaging purposes are not shared, sold, rented, or disclosed to any third parties or affiliates for their own marketing or promotional purposes. Mobile opt-in data is used solely by DM WORX LLC to deliver the SMS communications you have consented to receive, and is never shared with third-party providers outside of our SMS delivery platform for any purpose other than sending the messages you requested.
        </Callout>
        <h3 className="pt-2 text-lg font-semibold text-fg">How We Obtain Consent</h3>
        <p>We obtain your consent to receive SMS messages in one or more of the following ways:</p>
        <Bullets
          items={[
            <>
              <strong className="text-fg">Web form opt-in:</strong> By submitting a contact form, quote request, or sign-up form on our website that includes a clear SMS consent checkbox or statement, which you must affirmatively check or agree to before submitting.
            </>,
            <>
              <strong className="text-fg">Verbal opt-in:</strong> When speaking with a DM WORX LLC representative by phone, we will read the following script and obtain your explicit verbal agreement before enrolling you in SMS communications: &ldquo;Do I have your permission to send you text messages regarding [appointment reminders / project updates / promotions] from DM WORX LLC? Message and data rates may apply, message frequency varies, and you can reply STOP at any time to opt out.&rdquo; Verbal consent is documented and dated at the time it is obtained.
            </>,
          ]}
        />
        <h3 className="pt-2 text-lg font-semibold text-fg">Call-to-Action / Opt-In Disclosure</h3>
        <p>
          At the point of opt-in (web form or verbal script above), you will be informed that: message and data rates may apply; message frequency may vary; you can reply STOP to a text message at any time to opt out of future messages; you can reply HELP for assistance; and your consent to receive SMS messages is not a condition of purchasing any goods or services from DM WORX LLC.
        </p>
        <h3 className="pt-2 text-lg font-semibold text-fg">Opting Out</h3>
        <p>
          You may opt out of SMS communications at any time by replying &ldquo;STOP&rdquo; to any message you receive from us, or by contacting us directly using the information in the Contact Us section below. Once you opt out, we will send one final confirmation message and then cease sending further texts unless you opt back in.
        </p>
      </Sec>

      <Sec title="Billing, Cancellations & Dispute Records">
        <p>
          We retain billing, contract, project-approval and communication records for the services we deliver. Cancellation requests (which must be made in writing by email or text message) and refund decisions are handled under our <Link href="/cancellation-refund-policy">Cancellation &amp; Refund Policy</Link>.
        </p>
        <p>
          If a payment is disputed or charged back through your bank or card issuer, we may share the relevant records with the issuing bank or payment processor, including your name, billing details, signed agreements, proof of services rendered, correspondence, and a copy of our Cancellation &amp; Refund Policy, solely to respond to and resolve that dispute.
        </p>
      </Sec>

      <Sec title="Your Rights">
        <p>You have the following rights regarding your personal information:</p>
        <ul className="flex flex-wrap gap-2">
          {rights.map((r) => (
            <li key={r} className="card rounded-full px-4 py-2 text-sm font-medium text-fg">{r}</li>
          ))}
        </ul>
      </Sec>

      <Sec title="Contact Us">
        <p>
          DM WORX LLC, {a.street}, {a.city}, {a.region} {a.zip}
          <br />
          Email: <a href={`mailto:${site.email}`}>{site.email}</a>
          <br />
          Phone: <a href={site.phoneHref}>{site.phone}</a>
        </p>
      </Sec>
    </Legal>
  );
}
