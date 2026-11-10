import { Legal } from "@/components/ui/Legal";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Terms & Conditions",
  description: "The terms that apply to your use of the DM Worx Global website and services.",
  path: "/terms-and-conditions",
});

export default function Terms() {
  return (
    <Legal title="Terms & Conditions" updated="November 2026">
      <p>By using this website you agree to these terms. Services we provide to clients are governed by a separate written agreement or proposal.</p>
      <h2>Use of the website</h2>
      <p>You agree to use the site lawfully and not to interfere with its operation or attempt to gain unauthorised access.</p>
      <h2>Intellectual property</h2>
      <p>Content on this site, including text, graphics, logos and design, belongs to {site.name} or its licensors and may not be reproduced without permission.</p>
      <h2>Services &amp; proposals</h2>
      <p>Descriptions of services on this site are for information and do not constitute a binding offer. Scope, pricing, timelines and deliverables are defined in project agreements.</p>
      <h2>No guarantees</h2>
      <p>Digital marketing results, including search rankings and advertising performance, depend on many factors outside our control. We do not guarantee specific outcomes.</p>
      <h2>Limitation of liability</h2>
      <p>To the maximum extent permitted by law, {site.name} is not liable for indirect or consequential losses arising from your use of this website.</p>
      <h2>Links to other sites</h2>
      <p>This site may link to third-party websites. We are not responsible for their content or practices.</p>
      <h2>Changes</h2>
      <p>We may update these terms from time to time. Continued use of the site means you accept the updated terms.</p>
      <h2>Contact</h2>
      <p>Questions? Email <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
    </Legal>
  );
}
