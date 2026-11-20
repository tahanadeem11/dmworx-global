export const site = {
  name: "DM Worx Global",
  url: "https://www.dmworxglobal.com", // TODO: confirm production domain
  tagline: "Transforming Ideas Into Powerful Digital Experiences.",
  description:
    "DM Worx Global is a digital solutions and technology agency delivering websites, mobile apps, SEO, digital marketing and branding that help businesses grow.",
  email: "info@dmworxglobal.com",
  phone: "+1 (267) 633 4508",
  phoneHref: "tel:+12676334508",
  address: {
    street: "418 Broadway, Ste 4186",
    city: "Albany",
    region: "NY",
    zip: "12207",
    country: "US",
  },
  // Social URLs are placeholders until the real profiles are supplied.
  socials: [
    { label: "LinkedIn", url: null as string | null },
    { label: "Instagram", url: null as string | null },
    { label: "Facebook", url: null as string | null },
    { label: "X", url: null as string | null },
  ],
};

export const mainNav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services", dropdown: true },
  { label: "Pricing", href: "/#pricing" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];
