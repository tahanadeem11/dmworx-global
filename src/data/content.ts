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
  location: string;
  url: string;
  services: string[];
  description: string;
  highlights: string[];
  hue: [string, string];
  /** true when full case-study details have not been supplied yet */
  detailsPending?: boolean;
  image?: { src: string; alt: string; position?: string };
};

// Live client websites. Details are taken from each public website; confirm the "services" delivered per project.
export const projects: Project[] = [
  {
    slug: "bcr-construction",
    name: "BCR Construction Corporation",
    industry: "Concrete & Construction",
    location: "Concord, CA",
    url: "https://bcrconstructioncorp.com/",
    services: ["Website Development"],
    description:
      "A conversion-focused website for a licensed concrete contractor serving Concord, California: concrete construction, foundation repair, driveway paving, slabs, waterproofing, drainage and retaining walls.",
    highlights: [
      "Dedicated service pages for each core trade",
      "Trust signals: licensed & insured, transparent pricing, on-time delivery",
      "Local search focus on Concord, CA",
      "Project gallery and customer testimonials",
    ],
    hue: ["#4338f5", "#087bff"],
    image: { src: "/images/portfolio/bcr-construction.webp", alt: "BCR Construction crew on a residential concrete job site in Concord, CA", position: "50% 40%" },
  },
  {
    slug: "countryside-paradise",
    name: "Countryside Paradise",
    industry: "Wedding & Event Venue",
    location: "Colbert, WA",
    url: "https://countrysideparadise.com/",
    services: ["Website Development"],
    description:
      "A warm, inviting website for a countryside wedding and event venue near Spokane, showcasing the indoor barn, outdoor lawn and pool for weddings, receptions, baby and bridal showers, work parties and family reunions.",
    highlights: [
      "Event-type pages: weddings, receptions, showers, work parties, reunions",
      "Venue photography, guest reviews and a Schedule a Visit call to action",
      "Serving Spokane, Mead and Deer Park",
      "Click-to-call enquiries",
    ],
    hue: ["#7026d9", "#4338f5"],
    image: { src: "/images/portfolio/countryside-paradise.webp", alt: "Countryside Paradise indoor barn venue set for a wedding reception", position: "50% 50%" },
  },
  {
    slug: "final-touch",
    name: "Final Touch",
    industry: "California business",
    location: "California",
    url: "https://finaltouchca.com/",
    services: ["Website Development"],
    description: "A live website delivered for Final Touch. Full project details and results are being prepared.",
    highlights: ["Full case study coming soon"],
    hue: ["#a020f0", "#087bff"],
    detailsPending: true,
  },
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

export type Plan = {
  id: string;
  name: string;
  tagline: string;
  price: number;
  cta: string;
  popular?: boolean;
  inherits?: string;
  features: string[];
};

export const plans: Plan[] = [
  {
    id: "basic",
    name: "Basic",
    tagline: "Launch your local presence and start ranking.",
    price: 249,
    cta: "Start Basic",
    features: [
      "GBP Listing Management",
      "Keyword Research",
      "On-Page SEO",
      "On-Page Keyword Optimization",
      "Technical SEO",
      "NAP Citations",
      "Social Media Management",
    ],
  },
  {
    id: "silver",
    name: "Silver",
    tagline: "Everything in Basic plus key growth essentials.",
    price: 499,
    cta: "Go Silver",
    popular: true,
    inherits: "Everything in Basic",
    features: [
      "GBP Account Creation & Management",
      "NAP Consistency Audit",
      "Business Directory Listings",
      "Business Card & QR Code",
      "Business Flyer Design",
      "YouTube Brand Video",
    ],
  },
  {
    id: "gold",
    name: "Gold",
    tagline: "Full-scale dominance across every channel.",
    price: 699,
    cta: "Go Gold",
    inherits: "Everything in Silver",
    features: [
      "In-Depth SEO & Content Strategy",
      "Local Citations & Press",
      "Social Media Ads Management",
      "Advanced Analytics Dashboard",
      "Business Toolkit Suite",
      "Priority Support",
    ],
  },
];
