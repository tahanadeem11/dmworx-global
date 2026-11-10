export type Item = { title: string; text: string };
export type Faq = { q: string; a: string };

export type VisualId =
  | "map"
  | "search"
  | "browser"
  | "phone"
  | "social"
  | "design"
  | "ads"
  | "cart"
  | "brand"
  | "video"
  | "maintenance"
  | "hosting"
  | "packages";

export type Service = {
  slug: string;
  title: string;
  short: string;
  icon: string; // key in components/ui/icons.ts
  visual: VisualId;
  size: "lg" | "md" | "sm"; // layout weight in the overview grid
  heroHeadline: string;
  heroAccent: string; // part of headline rendered with the brand gradient
  heroText: string;
  introTitle: string;
  intro: string[];
  problems: Item[];
  offers: Item[];
  benefits: Item[];
  approach: Item[];
  whyUs: Item[];
  faqs: Faq[];
  related: string[]; // slugs of related services
};

export const services: Service[] = [
  {
    slug: "google-business-profile",
    title: "Google Business Profile",
    short: "Show up where local customers are searching: on Google Maps and local search results.",
    icon: "map-pin",
    visual: "map",
    size: "md",
    heroHeadline: "Be the business people find",
    heroAccent: "nearby.",
    heroText:
      "We set up, optimize and manage your Google Business Profile so customers can find, trust and contact you the moment they search locally.",
    introTitle: "Your storefront on Google",
    intro: [
      "For most local customers, the first impression of your business happens on Google Maps or in the local results, before they ever visit your website. A complete, active profile is often the deciding factor.",
      "DM Worx Global builds and maintains profiles that are accurate, engaging and aligned with how people actually search for your services in your area.",
    ],
    problems: [
      { title: "Invisible in local searches", text: "Incomplete or unverified profiles rarely appear in the local pack where customers look first." },
      { title: "Outdated business information", text: "Wrong hours, phone numbers or addresses send customers to competitors." },
      { title: "Unanswered reviews", text: "Ignored feedback signals poor service and weakens trust before a customer calls." },
      { title: "Duplicate or suspended listings", text: "Policy mistakes and duplicate profiles can remove you from search entirely." },
    ],
    offers: [
      { title: "Profile creation & verification", text: "Claiming, setting up and verifying your listing correctly the first time." },
      { title: "Category & attribute optimization", text: "Choosing the primary and secondary categories that match real customer intent." },
      { title: "Photos, posts & offers", text: "Regular updates that keep your profile active and engaging." },
      { title: "Review management", text: "Guidance on collecting reviews and professional responses to all feedback." },
      { title: "Services & products setup", text: "Structured service and product listings with clear descriptions." },
      { title: "Insights reporting", text: "Plain-language reports on calls, direction requests and profile views." },
    ],
    benefits: [
      { title: "Higher local visibility", text: "Appear more consistently for 'near me' and location-based searches." },
      { title: "More direct contact", text: "Calls, messages and direction requests straight from search results." },
      { title: "Stronger trust", text: "Complete profiles with real reviews and photos reassure new customers." },
      { title: "Low-cost lead source", text: "Local profile traffic doesn't depend on ad spend." },
    ],
    approach: [
      { title: "Audit", text: "Review your current listing, citations and competitors in your area." },
      { title: "Optimize", text: "Correct data, refine categories and complete every available section." },
      { title: "Activate", text: "Publish posts, photos and offers on a consistent schedule." },
      { title: "Monitor", text: "Track insights, respond to reviews and refine monthly." },
    ],
    whyUs: [
      { title: "Local-search focus", text: "We optimize around how customers in your area really search." },
      { title: "Policy-aware", text: "We follow Google's guidelines to keep your listing safe." },
      { title: "Clear reporting", text: "You always know what changed and what it delivered." },
    ],
    faqs: [
      { q: "How long does verification take?", a: "It depends on Google's verification method for your business type. We guide you through each step and handle the paperwork." },
      { q: "Can you fix a suspended profile?", a: "We can review the likely cause and prepare a reinstatement request, though final decisions rest with Google." },
      { q: "Do you write review responses?", a: "Yes. We draft professional responses in your brand voice for your approval or manage them on your behalf." },
    ],
    related: ["search-engine-optimization", "website-development", "digital-marketing-packages"],
  },
  {
    slug: "search-engine-optimization",
    title: "Search Engine Optimization",
    short: "Earn lasting organic visibility with technical SEO, strategic content and authority building.",
    icon: "search",
    visual: "search",
    size: "lg",
    heroHeadline: "Get found by customers who are already",
    heroAccent: "searching.",
    heroText:
      "Technical excellence, search-focused content and ethical link building, combined into an SEO strategy built for sustainable growth, not shortcuts.",
    introTitle: "Visibility that compounds",
    intro: [
      "Search engine optimization connects your business with people actively looking for what you offer. Unlike paid campaigns, well-built SEO keeps working long after the work is done.",
      "We combine technical health, content strategy and authority building into a roadmap tailored to your market, competitors and goals.",
    ],
    problems: [
      { title: "Great site, no traffic", text: "Without search-focused structure and content, even beautiful websites go unseen." },
      { title: "Technical issues holding you back", text: "Slow pages, crawl errors and poor mobile experience quietly suppress rankings." },
      { title: "Content that misses intent", text: "Pages written without keyword research rarely match what customers search for." },
      { title: "No way to measure progress", text: "Rankings and traffic without context can't guide business decisions." },
    ],
    offers: [
      { title: "Technical SEO audit", text: "Crawlability, indexation, speed, structured data and Core Web Vitals review." },
      { title: "Keyword & intent research", text: "Target terms mapped to the customer journey and commercial value." },
      { title: "On-page optimization", text: "Titles, headings, internal links and content aligned with search intent." },
      { title: "Content strategy", text: "Editorial plans and pages designed to earn rankings and conversions." },
      { title: "Link building & authority", text: "Ethical outreach and digital PR that earns reputable backlinks." },
      { title: "Reporting & analytics", text: "Dashboards tying organic performance to leads and revenue." },
    ],
    benefits: [
      { title: "Sustainable traffic", text: "Organic visibility that builds over time instead of ending with a budget." },
      { title: "Qualified visitors", text: "People arriving with real intent to buy or enquire." },
      { title: "Brand credibility", text: "Ranking well signals authority in your category." },
      { title: "Better site experience", text: "SEO improvements also make your site faster and easier to use." },
    ],
    approach: [
      { title: "Discover", text: "Understand your business, audience, competitors and current search presence." },
      { title: "Plan", text: "Prioritize technical fixes, keywords and content in a clear roadmap." },
      { title: "Execute", text: "Implement optimizations, publish content and earn authority." },
      { title: "Refine", text: "Measure, learn and adjust every month based on data." },
    ],
    whyUs: [
      { title: "White-hat only", text: "Techniques that follow search engine guidelines and protect your site." },
      { title: "Built for business goals", text: "We optimize for leads and revenue, not vanity rankings." },
      { title: "Technical and creative", text: "Developers and content strategists working on the same plan." },
    ],
    faqs: [
      { q: "How long until SEO shows results?", a: "SEO is a long-term investment. Early technical wins can appear sooner, while competitive rankings typically take months. We set realistic expectations after the audit." },
      { q: "Do you guarantee first-page rankings?", a: "No reputable agency can. We commit to transparent work, clear reporting and strategies built to improve visibility." },
      { q: "Can you work with our existing website?", a: "Yes. We can optimize your current site or recommend changes if the platform limits performance." },
    ],
    related: ["website-development", "google-business-profile", "digital-marketing-packages"],
  },
  {
    slug: "website-development",
    title: "Website Development",
    short: "Fast, secure, conversion-focused websites designed and engineered around your business.",
    icon: "globe",
    visual: "browser",
    size: "lg",
    heroHeadline: "Websites engineered to",
    heroAccent: "perform.",
    heroText:
      "Custom-designed, responsive and fast websites built with modern technology, turning visitors into customers and your brand into an experience.",
    introTitle: "More than a good-looking site",
    intro: [
      "Your website is your hardest-working salesperson. It has to load quickly, communicate clearly, build trust and guide visitors toward action on every device.",
      "We design and develop bespoke websites on modern frameworks, with clean code, strong SEO foundations and room to grow.",
    ],
    problems: [
      { title: "Slow, dated website", text: "Visitors leave within seconds if pages are slow or look untrustworthy." },
      { title: "Poor mobile experience", text: "Most traffic is mobile. Layouts that don't adapt lose customers." },
      { title: "Low conversion", text: "Unclear messaging and weak calls to action leave enquiries on the table." },
      { title: "Hard to update", text: "Rigid platforms make simple content changes slow and expensive." },
    ],
    offers: [
      { title: "UX & UI design", text: "Research-led layouts and visual design aligned to your brand." },
      { title: "Custom development", text: "Next.js and modern web stacks for speed, security and flexibility." },
      { title: "CMS integration", text: "Easy content editing without developer involvement." },
      { title: "SEO-ready build", text: "Semantic markup, metadata and performance baked in from day one." },
      { title: "Integrations", text: "Forms, CRMs, analytics, payments and third-party tools." },
      { title: "Accessibility & performance", text: "Inclusive design and excellent Core Web Vitals." },
    ],
    benefits: [
      { title: "A stronger first impression", text: "Professional design that reflects the quality of your business." },
      { title: "More enquiries", text: "Structure and messaging designed to convert." },
      { title: "Built to scale", text: "Add pages, features and integrations without rebuilding." },
      { title: "Easier to maintain", text: "Clean code and clear documentation." },
    ],
    approach: [
      { title: "Brief & strategy", text: "Goals, audience, content and sitemap agreed up front." },
      { title: "Design", text: "Wireframes and visual design reviewed with you." },
      { title: "Build", text: "Responsive development with regular previews." },
      { title: "Launch & support", text: "Testing, launch and ongoing improvements." },
    ],
    whyUs: [
      { title: "Design and engineering together", text: "One team from concept to deployment." },
      { title: "Performance obsessed", text: "Speed and usability measured, not assumed." },
      { title: "Clear communication", text: "Milestones, previews and honest timelines." },
    ],
    faqs: [
      { q: "How long does a website take?", a: "Timelines depend on size and complexity. We provide a detailed schedule after the discovery phase." },
      { q: "Will I be able to edit the site myself?", a: "Yes. We can integrate a CMS so you can manage content without code." },
      { q: "Do you provide hosting and maintenance?", a: "We offer domain, hosting and maintenance services so everything lives in one place." },
    ],
    related: ["ecommerce-development", "website-maintenance", "search-engine-optimization"],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    short: "Intuitive iOS and Android applications that put your business in your customers' pockets.",
    icon: "smartphone",
    visual: "phone",
    size: "md",
    heroHeadline: "Mobile apps people actually",
    heroAccent: "love to use.",
    heroText:
      "From concept to app store launch, we design and build secure, high-performance mobile applications for iOS and Android.",
    introTitle: "Your product, always within reach",
    intro: [
      "A great app is simple, fast and solves a clear problem. It requires careful product thinking, thoughtful design and solid engineering.",
      "We help you validate the idea, define the right features and ship an app that's ready to grow with your users.",
    ],
    problems: [
      { title: "Unclear product scope", text: "Too many features at launch delay release and overwhelm users." },
      { title: "Separate iOS and Android costs", text: "Duplicating effort across platforms inflates budgets." },
      { title: "Poor performance & UX", text: "Clunky apps are quickly uninstalled." },
      { title: "No plan after launch", text: "Apps need updates, monitoring and support to stay relevant." },
    ],
    offers: [
      { title: "Product discovery", text: "Workshops to define users, features and a realistic MVP." },
      { title: "UI/UX design", text: "Intuitive flows and polished interfaces for mobile." },
      { title: "Cross-platform apps", text: "One codebase for iOS and Android where it fits your goals." },
      { title: "Native development", text: "Platform-specific builds when performance demands it." },
      { title: "API & backend", text: "Secure back-end services and integrations." },
      { title: "Store launch & updates", text: "App Store and Google Play submission, then ongoing releases." },
    ],
    benefits: [
      { title: "Direct customer engagement", text: "Notifications and personalised experiences." },
      { title: "Faster time to market", text: "An MVP approach to launch and learn quickly." },
      { title: "Better retention", text: "Convenient, repeatable experiences keep users coming back." },
      { title: "Scalable foundation", text: "Architecture ready for new features." },
    ],
    approach: [
      { title: "Discover", text: "Define the problem, audience and MVP." },
      { title: "Design", text: "Prototype and test the experience." },
      { title: "Develop", text: "Build in iterative sprints with demos." },
      { title: "Launch & grow", text: "Publish, monitor and improve." },
    ],
    whyUs: [
      { title: "Product mindset", text: "We challenge scope to protect your budget and timeline." },
      { title: "Security-minded", text: "Careful handling of user data and authentication." },
      { title: "Ongoing partnership", text: "We stay involved after launch." },
    ],
    faqs: [
      { q: "Should I build native or cross-platform?", a: "It depends on your features, budget and performance needs. We'll recommend the best approach after discovery." },
      { q: "Do you handle app store submission?", a: "Yes, including assets, descriptions and compliance requirements." },
      { q: "Can you add features to an existing app?", a: "Yes. We can review the codebase and extend or modernise it." },
    ],
    related: ["website-development", "branding", "graphic-designing"],
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    short: "Strategy, content and community management that turn followers into loyal customers.",
    icon: "share",
    visual: "social",
    size: "md",
    heroHeadline: "Social media that builds",
    heroAccent: "real connections.",
    heroText:
      "Strategic content, consistent presence and community engagement across the platforms where your audience spends time.",
    introTitle: "Be part of the conversation",
    intro: [
      "Social media is where brands earn attention, trust and loyalty. It takes a clear voice, consistent creative and an understanding of each platform.",
      "We plan, create and manage content that reflects your brand and supports your business goals.",
    ],
    problems: [
      { title: "Inconsistent posting", text: "Sporadic activity makes it hard to build an audience." },
      { title: "Content that doesn't resonate", text: "Generic posts get scrolled past." },
      { title: "No clear strategy", text: "Platforms chosen by habit rather than where your customers are." },
      { title: "Limited time", text: "Running a business leaves little room for daily content." },
    ],
    offers: [
      { title: "Social strategy", text: "Platform selection, audience insight and content pillars." },
      { title: "Content creation", text: "Graphics, short video and copy aligned to your brand." },
      { title: "Content calendar", text: "Planned, scheduled posting for consistency." },
      { title: "Community management", text: "Replying to comments and messages." },
      { title: "Paid social support", text: "Boost top-performing content to reach more people." },
      { title: "Performance reporting", text: "Engagement and growth tracked against goals." },
    ],
    benefits: [
      { title: "Stronger brand awareness", text: "Stay visible to your audience." },
      { title: "Deeper engagement", text: "Build a community around your brand." },
      { title: "Customer insight", text: "Learn directly from audience interaction." },
      { title: "Support for other channels", text: "Social content fuels campaigns, SEO and email." },
    ],
    approach: [
      { title: "Listen", text: "Research audience, competitors and platforms." },
      { title: "Plan", text: "Define content themes and a publishing rhythm." },
      { title: "Create & publish", text: "Produce and schedule on-brand content." },
      { title: "Engage & measure", text: "Respond, analyse and improve." },
    ],
    whyUs: [
      { title: "Creative and analytical", text: "Designers and strategists in one team." },
      { title: "Brand-first", text: "Content that feels like you." },
      { title: "Consistent delivery", text: "Reliable publishing schedule." },
    ],
    faqs: [
      { q: "Which platforms should we be on?", a: "We recommend platforms based on where your target audience is active." },
      { q: "Will I approve posts before publishing?", a: "Yes. We share content calendars for approval." },
      { q: "Can you manage paid social too?", a: "Yes, as part of social campaigns or alongside our PPC service." },
    ],
    related: ["graphic-designing", "video-animation", "pay-per-click-advertising"],
  },
  {
    slug: "graphic-designing",
    title: "Graphic Designing",
    short: "Distinctive visuals for print and digital that communicate clearly and look exceptional.",
    icon: "palette",
    visual: "design",
    size: "sm",
    heroHeadline: "Design that makes your message",
    heroAccent: "impossible to miss.",
    heroText:
      "Marketing creatives, presentations, packaging and digital assets crafted with precision and consistency.",
    introTitle: "Clear visuals, confident brands",
    intro: [
      "Good design simplifies complexity and makes people feel something. It builds recognition and signals professionalism.",
      "Our designers create cohesive visual assets across every touchpoint, always grounded in your brand guidelines.",
    ],
    problems: [
      { title: "Inconsistent visuals", text: "Materials that don't look related dilute your brand." },
      { title: "DIY design limits", text: "Templates can feel generic or off-brand." },
      { title: "Slow turnaround", text: "Waiting on design slows campaigns." },
      { title: "Files not ready for use", text: "Wrong formats and sizes cause production problems." },
    ],
    offers: [
      { title: "Marketing collateral", text: "Brochures, flyers, banners and posters." },
      { title: "Social & ad creatives", text: "Sized and optimised for every platform." },
      { title: "Presentations & decks", text: "Clear, polished slides for pitches and reports." },
      { title: "Packaging & print", text: "Print-ready artwork with correct specifications." },
      { title: "Infographics", text: "Complex information made simple." },
      { title: "Design systems", text: "Reusable templates for your team." },
    ],
    benefits: [
      { title: "Consistent identity", text: "Everything looks like one brand." },
      { title: "Higher engagement", text: "Strong visuals earn more attention." },
      { title: "Time saved", text: "Ready-to-use files in the right formats." },
      { title: "Professional credibility", text: "Quality design builds trust." },
    ],
    approach: [
      { title: "Brief", text: "Understand purpose, audience and requirements." },
      { title: "Concept", text: "Explore directions and present options." },
      { title: "Refine", text: "Iterate with your feedback." },
      { title: "Deliver", text: "Export final files in every needed format." },
    ],
    whyUs: [
      { title: "Detail-oriented", text: "Careful typography, spacing and colour." },
      { title: "Fast turnaround", text: "Efficient process for ongoing needs." },
      { title: "Brand-consistent", text: "Guidelines guide every piece." },
    ],
    faqs: [
      { q: "How many revisions are included?", a: "We agree on revision rounds in the project scope so expectations are clear." },
      { q: "Will I own the final files?", a: "Yes. Final artwork and source files can be delivered on completion, per the agreement." },
      { q: "Can you work from our existing guidelines?", a: "Absolutely. We follow your brand guidelines or help create them." },
    ],
    related: ["branding", "social-media-marketing", "video-animation"],
  },
  {
    slug: "pay-per-click-advertising",
    title: "Pay Per Click Advertising",
    short: "Data-driven paid campaigns on Google and social platforms that reach the right people.",
    icon: "target",
    visual: "ads",
    size: "md",
    heroHeadline: "Paid campaigns that put your budget to",
    heroAccent: "work.",
    heroText:
      "Strategic PPC campaigns across search, display and social. Built to reach high-intent audiences and measured against real business outcomes.",
    introTitle: "Reach customers at the right moment",
    intro: [
      "PPC puts your offer in front of people who are actively searching or perfectly matched to your audience, with total control over budget and targeting.",
      "We build, test and optimise campaigns continuously, so every dollar works harder over time.",
    ],
    problems: [
      { title: "Budget wasted on poor clicks", text: "Broad targeting attracts people who never convert." },
      { title: "Weak ad creative", text: "Generic ads are ignored." },
      { title: "Landing pages that don't convert", text: "Traffic means little without a clear next step." },
      { title: "Unclear tracking", text: "Without conversion tracking, you can't tell what's working." },
    ],
    offers: [
      { title: "Search campaigns", text: "Google Ads built around high-intent keywords." },
      { title: "Social advertising", text: "Meta, LinkedIn and more with precise targeting." },
      { title: "Display & remarketing", text: "Reconnect with visitors who didn't convert." },
      { title: "Ad creative & copy", text: "Messages and visuals tested for performance." },
      { title: "Landing page optimisation", text: "Pages aligned with each campaign." },
      { title: "Conversion tracking", text: "Accurate measurement of leads and sales." },
    ],
    benefits: [
      { title: "Immediate visibility", text: "Reach your audience as soon as campaigns launch." },
      { title: "Controlled spend", text: "Set budgets and adjust any time." },
      { title: "Measurable results", text: "Clear data on cost, clicks and conversions." },
      { title: "Precise targeting", text: "Reach the right location, audience and intent." },
    ],
    approach: [
      { title: "Research", text: "Audience, keywords and competitor analysis." },
      { title: "Build", text: "Structure campaigns, ads and tracking." },
      { title: "Test", text: "Run experiments on copy, audiences and bids." },
      { title: "Optimise", text: "Scale what works and cut what doesn't." },
    ],
    whyUs: [
      { title: "Transparent spend", text: "You own your ad accounts and see where budget goes." },
      { title: "Conversion focus", text: "We optimise for leads and sales, not clicks." },
      { title: "Constant testing", text: "Ongoing experiments keep performance improving." },
    ],
    faqs: [
      { q: "What budget do I need?", a: "It varies by industry and goals. We'll recommend a starting budget after reviewing your market." },
      { q: "Do I own the ad accounts?", a: "Yes. Accounts remain in your name; we work within them." },
      { q: "How often will I get reports?", a: "We agree a reporting rhythm, typically monthly, with check-ins as needed." },
    ],
    related: ["search-engine-optimization", "social-media-marketing", "digital-marketing-packages"],
  },
  {
    slug: "ecommerce-development",
    title: "E-commerce Development",
    short: "Online stores built to showcase products beautifully and make buying effortless.",
    icon: "shopping-cart",
    visual: "cart",
    size: "lg",
    heroHeadline: "Online stores designed to",
    heroAccent: "sell.",
    heroText:
      "High-performance e-commerce websites with seamless checkout, secure payments and product experiences that turn browsers into buyers.",
    introTitle: "Make buying effortless",
    intro: [
      "Successful online stores combine merchandising, usability, speed and trust. Small friction points in the buying journey can cost significant revenue.",
      "We build e-commerce platforms that are easy to manage, simple to shop and prepared to grow with your catalogue.",
    ],
    problems: [
      { title: "Abandoned carts", text: "Complicated checkouts push customers away." },
      { title: "Slow product pages", text: "Heavy images and scripts hurt conversion and SEO." },
      { title: "Difficult catalogue management", text: "Updating products shouldn't need a developer." },
      { title: "Trust concerns", text: "Shoppers hesitate without clear policies and secure payment." },
    ],
    offers: [
      { title: "Store design & UX", text: "Product discovery, filtering and mobile-first layouts." },
      { title: "Platform development", text: "Custom or platform-based builds suited to your needs." },
      { title: "Payment & shipping setup", text: "Secure gateways and flexible delivery options." },
      { title: "Product & inventory management", text: "Tools to keep your catalogue organised." },
      { title: "Integrations", text: "ERP, accounting, email and analytics." },
      { title: "SEO & performance", text: "Optimised product pages and fast loading." },
    ],
    benefits: [
      { title: "Higher conversion", text: "Streamlined journeys from browse to buy." },
      { title: "Operational efficiency", text: "Manage orders and stock in one place." },
      { title: "Customer confidence", text: "Secure, transparent checkout." },
      { title: "Room to grow", text: "Add products, markets and channels." },
    ],
    approach: [
      { title: "Plan", text: "Catalogue, customer journey and platform choice." },
      { title: "Design", text: "Product pages, cart and checkout flows." },
      { title: "Build & integrate", text: "Develop and connect payments, shipping and tools." },
      { title: "Launch & optimise", text: "Test, launch and improve conversion." },
    ],
    whyUs: [
      { title: "Conversion-minded design", text: "Every step is built to reduce friction." },
      { title: "Secure by default", text: "Payment security and data protection built in." },
      { title: "Ongoing support", text: "Help with updates and growth." },
    ],
    faqs: [
      { q: "Which e-commerce platform do you recommend?", a: "We recommend based on catalogue size, budget, integrations and growth plans." },
      { q: "Can you migrate my existing store?", a: "Yes. We can migrate products, customers and orders where the platforms allow." },
      { q: "Do you set up payment gateways?", a: "Yes. We configure the gateways available in your region." },
    ],
    related: ["website-development", "pay-per-click-advertising", "website-maintenance"],
  },
  {
    slug: "branding",
    title: "Branding",
    short: "Brand identities and strategies that define who you are and make you unforgettable.",
    icon: "sparkles",
    visual: "brand",
    size: "md",
    heroHeadline: "A brand that's built to be",
    heroAccent: "remembered.",
    heroText:
      "Strategy, naming guidance, logo and visual identity systems that express your values and set you apart.",
    introTitle: "Identity with intention",
    intro: [
      "Your brand is more than a logo. It's the promise you make and the feeling people have when they interact with your business.",
      "We help you define positioning, voice and visual identity into a system your whole team can use confidently.",
    ],
    problems: [
      { title: "Blending in", text: "Similar-looking competitors make differentiation hard." },
      { title: "Unclear positioning", text: "Customers can't tell what makes you different." },
      { title: "Inconsistent presentation", text: "Mixed logos, colours and tone erode trust." },
      { title: "Outgrown identity", text: "A brand that no longer reflects who you are." },
    ],
    offers: [
      { title: "Brand strategy", text: "Positioning, audience, values and messaging." },
      { title: "Logo design", text: "Distinctive marks in flexible formats." },
      { title: "Visual identity", text: "Colour, typography, imagery and graphic language." },
      { title: "Brand guidelines", text: "Clear rules for consistent application." },
      { title: "Tone of voice", text: "How your brand speaks across channels." },
      { title: "Brand rollout", text: "Applying identity to web, print and social." },
    ],
    benefits: [
      { title: "Clear differentiation", text: "Stand apart in a crowded market." },
      { title: "Consistency", text: "A unified experience everywhere." },
      { title: "Trust and recognition", text: "Professional identity builds confidence." },
      { title: "Internal alignment", text: "Everyone understands the brand." },
    ],
    approach: [
      { title: "Discover", text: "Workshops to understand your business and audience." },
      { title: "Define", text: "Positioning and brand platform." },
      { title: "Design", text: "Identity concepts and refinement." },
      { title: "Deliver", text: "Final assets and guidelines." },
    ],
    whyUs: [
      { title: "Strategy first", text: "Design decisions rooted in positioning." },
      { title: "Collaborative", text: "You're involved at every step." },
      { title: "Applied thinking", text: "Identities that work in real-world use." },
    ],
    faqs: [
      { q: "Do you offer rebranding?", a: "Yes. We can evolve an existing identity or create a new one." },
      { q: "What files will I receive?", a: "Logo files in multiple formats, colour and type specifications, and brand guidelines." },
      { q: "How long does branding take?", a: "It depends on scope. A timeline is agreed after the discovery stage." },
    ],
    related: ["graphic-designing", "website-development", "video-animation"],
  },
  {
    slug: "video-animation",
    title: "Video & Animation",
    short: "Explainer videos, motion graphics and animation that explain ideas and hold attention.",
    icon: "clapperboard",
    visual: "video",
    size: "sm",
    heroHeadline: "Stories that move your audience",
    heroAccent: "to act.",
    heroText:
      "Motion graphics, explainers and brand animations that simplify your message and make it memorable.",
    introTitle: "Motion that communicates",
    intro: [
      "Video is one of the most effective ways to explain products, share stories and engage audiences across platforms.",
      "Our team handles scripting, storyboarding, design and animation, delivering polished videos ready for your channels.",
    ],
    problems: [
      { title: "Complex ideas, short attention", text: "Long text rarely explains products as quickly as video." },
      { title: "Low-quality video", text: "Poor production harms credibility." },
      { title: "No video strategy", text: "Videos made without a purpose rarely perform." },
      { title: "Wrong formats", text: "Different platforms need different sizes and lengths." },
    ],
    offers: [
      { title: "Explainer videos", text: "Clear stories about your product or service." },
      { title: "Motion graphics", text: "Animated visuals for ads, social and presentations." },
      { title: "Logo animation", text: "Dynamic intros and brand stings." },
      { title: "Social video", text: "Short, vertical and square formats." },
      { title: "Scripting & storyboarding", text: "Strong concepts before production." },
      { title: "Editing & sound design", text: "Polished pacing, music and audio." },
    ],
    benefits: [
      { title: "Faster understanding", text: "Visual stories simplify complex ideas." },
      { title: "Higher engagement", text: "Motion draws and holds attention." },
      { title: "Versatile assets", text: "Use across web, social and sales." },
      { title: "Brand personality", text: "Express tone and style in motion." },
    ],
    approach: [
      { title: "Concept", text: "Goals, audience and script." },
      { title: "Storyboard", text: "Visual plan and style frames." },
      { title: "Animate", text: "Design, animation and sound." },
      { title: "Deliver", text: "Final cuts in all required formats." },
    ],
    whyUs: [
      { title: "End-to-end production", text: "Script to final export in one team." },
      { title: "On-brand motion", text: "Animation consistent with your identity." },
      { title: "Platform-ready", text: "Formats optimised for each channel." },
    ],
    faqs: [
      { q: "How long should my video be?", a: "It depends on the platform and purpose. We'll recommend lengths during scripting." },
      { q: "Do you provide voiceovers?", a: "We can arrange voiceover and music as part of production." },
      { q: "Can you animate my existing logo?", a: "Yes. We can create logo reveals and animated brand assets." },
    ],
    related: ["social-media-marketing", "branding", "graphic-designing"],
  },
  {
    slug: "website-maintenance",
    title: "Website Maintenance",
    short: "Keep your website secure, fast and up to date with proactive monitoring and support.",
    icon: "wrench",
    visual: "maintenance",
    size: "sm",
    heroHeadline: "A website that stays secure, fast and",
    heroAccent: "up to date.",
    heroText:
      "Regular updates, backups, monitoring and support so your website works properly and your team can focus on the business.",
    introTitle: "Peace of mind, built in",
    intro: [
      "Websites need ongoing care. Outdated software, missed backups and slow pages create security and reputation risks.",
      "We handle the routine work, from updates and monitoring to content changes and fixes, so issues are prevented rather than repaired.",
    ],
    problems: [
      { title: "Security vulnerabilities", text: "Outdated plugins and libraries are common entry points for attacks." },
      { title: "Unexpected downtime", text: "Problems found late cost visitors and revenue." },
      { title: "No reliable backups", text: "Recovering after a failure is hard without recent backups." },
      { title: "Small changes pile up", text: "Content edits and fixes wait for someone with time." },
    ],
    offers: [
      { title: "Updates & patches", text: "Core, plugin and dependency updates." },
      { title: "Backups", text: "Scheduled backups with tested restore." },
      { title: "Uptime & security monitoring", text: "Alerts for downtime and threats." },
      { title: "Performance checks", text: "Speed and Core Web Vitals reviews." },
      { title: "Content updates", text: "Text, image and page changes." },
      { title: "Support & reports", text: "Responsive help and monthly summaries." },
    ],
    benefits: [
      { title: "Reduced risk", text: "Fewer security and stability issues." },
      { title: "Consistent performance", text: "A site that stays fast." },
      { title: "Time saved", text: "No need to manage technical upkeep." },
      { title: "Quick recovery", text: "Backups and monitoring limit downtime." },
    ],
    approach: [
      { title: "Assess", text: "Review your site's current health." },
      { title: "Stabilise", text: "Fix urgent issues and set up backups." },
      { title: "Maintain", text: "Perform scheduled updates and monitoring." },
      { title: "Report", text: "Share what was done and recommendations." },
    ],
    whyUs: [
      { title: "Proactive, not reactive", text: "We find problems before visitors do." },
      { title: "Developers on call", text: "Real engineers handle your support requests." },
      { title: "Clear plans", text: "Simple scopes so you know what's covered." },
    ],
    faqs: [
      { q: "Can you maintain a site you didn't build?", a: "Usually yes, after a review of the platform and codebase." },
      { q: "What if my site goes down?", a: "Monitoring alerts us quickly and we work to restore service from backups or by fixing the issue." },
      { q: "Are content changes included?", a: "Plans can include a set amount of content updates. Details depend on the plan you choose." },
    ],
    related: ["domain-and-hosting", "website-development", "search-engine-optimization"],
  },
  {
    slug: "domain-and-hosting",
    title: "Domain & Hosting",
    short: "Reliable domains and hosting set up correctly so your website is always online.",
    icon: "server",
    visual: "hosting",
    size: "sm",
    heroHeadline: "A solid foundation for everything you",
    heroAccent: "put online.",
    heroText:
      "Domain registration, DNS, SSL, email and fast, secure hosting, configured properly and managed for you.",
    introTitle: "The infrastructure behind your brand",
    intro: [
      "Your domain is your online identity and hosting is the engine that keeps your site running. Poor choices lead to slow pages, downtime and security gaps.",
      "We handle registration, configuration and ongoing management so your infrastructure is dependable and fully under your control.",
    ],
    problems: [
      { title: "Slow, unreliable hosting", text: "Cheap shared servers can hurt speed and uptime." },
      { title: "Confusing DNS & email setup", text: "Misconfiguration breaks websites and email delivery." },
      { title: "Expired domains", text: "Missed renewals can mean losing your name." },
      { title: "Missing security basics", text: "No SSL or protection harms trust and rankings." },
    ],
    offers: [
      { title: "Domain registration & transfers", text: "Find, register and manage your domain name." },
      { title: "Managed hosting", text: "Fast, secure hosting suited to your website." },
      { title: "SSL certificates", text: "HTTPS configured and renewed." },
      { title: "Business email setup", text: "Professional email on your domain." },
      { title: "DNS management", text: "Correct records for site, email and services." },
      { title: "Migration", text: "Move your site with minimal downtime." },
    ],
    benefits: [
      { title: "Dependable uptime", text: "Infrastructure chosen for reliability." },
      { title: "Faster websites", text: "Hosting that supports performance." },
      { title: "Professional email", text: "Addresses that match your domain." },
      { title: "One accountable partner", text: "Everything managed in one place." },
    ],
    approach: [
      { title: "Review", text: "Understand your site and requirements." },
      { title: "Configure", text: "Set up domain, DNS, SSL and hosting." },
      { title: "Migrate", text: "Move content and email safely." },
      { title: "Manage", text: "Renewals, monitoring and support." },
    ],
    whyUs: [
      { title: "You stay in control", text: "Domains registered in your name." },
      { title: "Clear communication", text: "Renewal reminders and plain-English guidance." },
      { title: "Integrated with your site", text: "Hosting aligned to how your site is built." },
    ],
    faqs: [
      { q: "Will I own my domain?", a: "Yes. Domains are registered in your name or your organisation's." },
      { q: "Can you move my website to your hosting?", a: "Yes. We plan migrations to minimise downtime." },
      { q: "Do you set up business email?", a: "Yes. We can configure professional email on your domain." },
    ],
    related: ["website-maintenance", "website-development", "ecommerce-development"],
  },
  {
    slug: "digital-marketing-packages",
    title: "Digital Marketing Packages",
    short: "Bundled marketing services combined into clear packages that fit your goals and budget.",
    icon: "layers",
    visual: "packages",
    size: "md",
    heroHeadline: "Integrated marketing, packaged for",
    heroAccent: "growth.",
    heroText:
      "Combine SEO, social, paid media, design and web support into one coordinated plan managed by a single team.",
    introTitle: "One team, one strategy",
    intro: [
      "Marketing works best when channels support each other. Packages bring services together under a shared strategy, so your message and data stay aligned.",
      "We tailor each package to your goals, stage and budget, and adjust it as your business grows.",
    ],
    problems: [
      { title: "Disconnected channels", text: "Separate vendors often work without a shared plan." },
      { title: "Unclear budget allocation", text: "It's hard to know where to invest first." },
      { title: "Too many moving parts", text: "Managing multiple agencies takes valuable time." },
      { title: "Inconsistent reporting", text: "Different reports make it hard to see the whole picture." },
    ],
    offers: [
      { title: "Strategy & planning", text: "A roadmap across your chosen channels." },
      { title: "SEO & content", text: "Organic growth foundations." },
      { title: "Paid media management", text: "Search and social advertising." },
      { title: "Social media management", text: "Content and community support." },
      { title: "Design & creative", text: "Assets for every campaign." },
      { title: "Unified reporting", text: "One view of performance across channels." },
    ],
    benefits: [
      { title: "Coordinated results", text: "Channels reinforce each other." },
      { title: "Simplified management", text: "One point of contact." },
      { title: "Flexible scaling", text: "Add or adjust services over time." },
      { title: "Better budget use", text: "Invest where it matters most." },
    ],
    approach: [
      { title: "Consult", text: "Understand your goals and current marketing." },
      { title: "Customise", text: "Build a package around your needs." },
      { title: "Launch", text: "Roll out channels in priority order." },
      { title: "Review", text: "Report and adapt regularly." },
    ],
    whyUs: [
      { title: "Full-service capability", text: "Strategy, creative and technology in-house." },
      { title: "Tailored, not templated", text: "Packages shaped to your business." },
      { title: "Accountable reporting", text: "Clear metrics tied to goals." },
    ],
    faqs: [
      { q: "Can I customise a package?", a: "Yes. Packages are starting points that we tailor to your needs." },
      { q: "Is there a minimum commitment?", a: "Terms depend on the package. We'll outline them clearly in your proposal." },
      { q: "Can I upgrade later?", a: "Yes. You can add services or move to a larger package as you grow." },
    ],
    related: ["search-engine-optimization", "social-media-marketing", "pay-per-click-advertising"],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
