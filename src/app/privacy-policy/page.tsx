import { Legal } from "@/components/ui/Legal";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How DM Worx Global collects, uses and protects your personal information.",
  path: "/privacy-policy",
});

export default function Privacy() {
  return (
    <Legal title="Privacy Policy" updated="November 2026">
      <p>{site.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;) respects your privacy. This policy explains what information we collect through this website and how we use it.</p>
      <h2>Information we collect</h2>
      <ul>
        <li>Details you provide through our contact form, such as your name, email, phone number, company and project information.</li>
        <li>Basic technical data such as browser type, device and pages visited, if analytics tools are enabled.</li>
      </ul>
      <h2>How we use information</h2>
      <ul>
        <li>To respond to your inquiries and provide requested services.</li>
        <li>To improve our website, services and communication.</li>
        <li>To meet legal and security obligations.</li>
      </ul>
      <h2>Sharing</h2>
      <p>We do not sell your personal information. We may share it with trusted service providers who help us operate our business, under appropriate confidentiality obligations, or where required by law.</p>
      <h2>Cookies &amp; analytics</h2>
      <p>This site stores your light/dark theme preference in your browser. If analytics or advertising tools are added, this policy will be updated to describe them.</p>
      <h2>Data retention &amp; security</h2>
      <p>We keep information only as long as needed for the purposes above and use reasonable safeguards to protect it.</p>
      <h2>Your rights</h2>
      <p>Depending on where you live, you may have rights to access, correct or delete your personal information. To make a request, contact us at <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
      <h2>Contact</h2>
      <p>{site.name}, {site.address.street}, {site.address.city}, {site.address.region} {site.address.zip}. Email: <a href={`mailto:${site.email}`}>{site.email}</a>. Phone: <a href={site.phoneHref}>{site.phone}</a>.</p>
    </Legal>
  );
}
