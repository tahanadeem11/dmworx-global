import type { Faq } from "./services";

export const homeFaqs: Faq[] = [
  { q: "What services does DM Worx Global offer?", a: "We provide website and mobile app development, e-commerce, SEO, Google Business Profile optimisation, social media marketing, paid advertising, branding, graphic design, video and animation, website maintenance, domain and hosting, and bundled digital marketing packages." },
  { q: "How long does a typical project take?", a: "Timelines depend on scope and complexity. After an initial consultation we provide a clear schedule with milestones so you always know what to expect." },
  { q: "How much does a project cost?", a: "Every business is different, so we quote based on your goals and requirements. Share your project details through our contact form and we'll respond with a tailored proposal." },
  { q: "Can you build a website that's easy for us to update?", a: "Yes. We can integrate a content management system so your team can edit pages, images and posts without writing code." },
  { q: "How does SEO work and when will we see results?", a: "SEO combines technical improvements, relevant content and authority building. It's a long-term investment: some improvements appear quickly, while competitive rankings typically develop over months." },
  { q: "Do you offer ongoing digital marketing support?", a: "Yes. We offer monthly packages covering SEO, social media, paid campaigns, design and reporting, tailored to your goals." },
  { q: "Do you provide website maintenance after launch?", a: "Yes. Maintenance plans cover updates, backups, monitoring, security checks and support so your site stays healthy." },
  { q: "How will we communicate during a project?", a: "You'll have a clear point of contact, regular progress updates and scheduled reviews, so there are no surprises." },
  { q: "How do we get started?", a: "Send us a message through the contact form or call us. We'll set up a discovery conversation to understand your goals and recommend the best next steps." },
];

export type Project = {
  slug: string;
  name: string;
  industry: string;
  services: string[];
  description: string;
  hue: [string, string];
  placeholder: boolean;
};

// PLACEHOLDER PROJECTS: replace with real, verified case studies.
export const projects: Project[] = [
  { slug: "project-one", name: "Project Name One", industry: "Industry / Sector", services: ["Website Development", "SEO"], description: "A real case study will appear here: the brief, what we built, and the outcome.", hue: ["#a020f0", "#4338f5"], placeholder: true },
  { slug: "project-two", name: "Project Name Two", industry: "Industry / Sector", services: ["Branding", "Graphic Designing"], description: "A real case study will appear here: the brief, what we built, and the outcome.", hue: ["#4338f5", "#08bfea"], placeholder: true },
  { slug: "project-three", name: "Project Name Three", industry: "Industry / Sector", services: ["Mobile App Development"], description: "A real case study will appear here: the brief, what we built, and the outcome.", hue: ["#7026d9", "#087bff"], placeholder: true },
  { slug: "project-four", name: "Project Name Four", industry: "Industry / Sector", services: ["E-commerce Development", "PPC"], description: "A real case study will appear here: the brief, what we built, and the outcome.", hue: ["#087bff", "#08bfea"], placeholder: true },
  { slug: "project-five", name: "Project Name Five", industry: "Industry / Sector", services: ["Social Media Marketing"], description: "A real case study will appear here: the brief, what we built, and the outcome.", hue: ["#a020f0", "#087bff"], placeholder: true },
  { slug: "project-six", name: "Project Name Six", industry: "Industry / Sector", services: ["Video & Animation"], description: "A real case study will appear here: the brief, what we built, and the outcome.", hue: ["#4338f5", "#a020f0"], placeholder: true },
];

export const testimonialSlots = [
  { service: "Website Development" },
  { service: "Digital Marketing" },
  { service: "Branding" },
];

export const process = [
  { n: "01", title: "Discover", text: "Understand the business, goals, audience, and requirements." },
  { n: "02", title: "Strategize", text: "Develop a clear strategy and customized project roadmap." },
  { n: "03", title: "Create", text: "Design, develop, implement, and refine the solution." },
  { n: "04", title: "Grow", text: "Launch, monitor, optimize, and support continued growth." },
];
