export const site = {
  name: "NorthOrbis AIMA",
  shortName: "NorthOrbis",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://northorbis.com",
  description:
    "AI-augmented social media marketing, paid advertising, content, and lead generation for HVAC contractors.",
  email: "growth@northorbis.com",
  phone: "+1 (888) 430-2742"
};

export const navItems = [
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" }
];

export const markets = ["United States", "United Kingdom", "Germany", "Dubai / UAE", "High-value local markets"];

export const pricingTiers = [
  {
    name: "Starter",
    price: "From $1,500/mo",
    subtitle: "For HVAC teams that need consistent local visibility and cleaner lead capture.",
    features: [
      "Local social media calendar and posting",
      "Google Business Profile optimization",
      "Monthly short-form content plan",
      "Review generation workflow",
      "Lead form and call tracking setup",
      "Monthly performance report"
    ],
    cta: "Start with Starter"
  },
  {
    name: "Growth",
    price: "From $3,500/mo",
    subtitle: "For contractors ready to turn Meta and Google into a managed booked-job engine.",
    features: [
      "Everything in Starter",
      "Meta and Google paid acquisition management",
      "AI-assisted ad creative testing",
      "Seasonal campaign buildouts",
      "Landing page optimization",
      "Weekly optimization and insights"
    ],
    cta: "Scale with Growth",
    featured: true
  },
  {
    name: "Premium",
    price: "Custom",
    subtitle: "For multi-location or high-ticket HVAC companies that need deeper AI systems.",
    features: [
      "Everything in Growth",
      "Multi-market campaign architecture",
      "AI lead scoring and routing support",
      "CRM and automation consulting",
      "Content production direction",
      "Executive strategy reviews"
    ],
    cta: "Build a Premium Plan"
  }
];

export const serviceGroups = [
  {
    title: "Paid Acquisition",
    summary: "Meta, Google, and retargeting campaigns built around emergency repair, replacement, maintenance, and seasonal demand.",
    items: ["Offer strategy", "Audience and geo targeting", "Creative testing", "Budget pacing", "Conversion tracking"]
  },
  {
    title: "Social Media Management",
    summary: "A professional, local, trustworthy presence that keeps your HVAC brand visible before homeowners need you.",
    items: ["Content calendar", "Reels and shorts direction", "Seasonal posts", "Review highlights", "Community engagement"]
  },
  {
    title: "Content & Creative",
    summary: "Human strategy plus AI-assisted production for faster creative cycles without sounding generic.",
    items: ["Ad copy", "Creative briefs", "Landing page copy", "Offer angles", "Before/after storytelling"]
  },
  {
    title: "Lead Systems",
    summary: "Tracking, forms, routing, and follow-up flows designed to protect speed-to-lead and booked appointments.",
    items: ["Call tracking", "Lead forms", "CRM handoff", "Follow-up automation", "Lead quality reporting"]
  },
  {
    title: "Local SEO Support",
    summary: "Foundational local authority work for HVAC searches, map-pack visibility, and reputation strength.",
    items: ["GBP optimization", "Service area alignment", "Review workflows", "Local landing pages", "On-page recommendations"]
  },
  {
    title: "AI Intelligence Layer",
    summary: "AI systems that help spot waste, accelerate creative learning, and surface next-best actions for campaigns.",
    items: ["Campaign diagnostics", "Lead pattern review", "Creative variation", "Forecasting support", "Reporting summaries"]
  }
];

export const processSteps = [
  {
    title: "Audit",
    description: "We map your market, offers, ad accounts, social presence, tracking, and lead handling bottlenecks."
  },
  {
    title: "Strategy",
    description: "We build a 90-day HVAC demand plan around service mix, seasonality, margins, and local competition."
  },
  {
    title: "Build",
    description: "Campaigns, content, landing pages, tracking, and reporting are assembled into one measurable system."
  },
  {
    title: "Launch",
    description: "We deploy with tight quality checks across tracking, creative, targeting, forms, and call paths."
  },
  {
    title: "Optimize",
    description: "Human strategists and AI-assisted diagnostics identify winners, waste, and market shifts faster."
  },
  {
    title: "Scale",
    description: "Budgets and offers expand only where the data supports better lead quality and booked-job volume."
  }
];

export const caseStudies = [
  {
    market: "Residential HVAC / Arizona",
    title: "Summer replacement demand engine",
    challenge: "A contractor needed to reduce dependence on referrals during peak cooling season.",
    approach: "Built replacement-focused Meta campaigns, Google search capture, GBP review prompts, and a faster estimate landing page.",
    metrics: ["42% lower estimated CPL target", "3 seasonal offer angles", "2-market expansion model"]
  },
  {
    market: "Light commercial HVAC / UK",
    title: "Maintenance contract pipeline",
    challenge: "A service team wanted more predictable commercial maintenance inquiries.",
    approach: "Segmented LinkedIn-style creative, retargeting, Google search terms, and proof-led landing page messaging.",
    metrics: ["14-day nurture flow", "6 intent segments", "CRM-ready lead routing"]
  },
  {
    market: "Premium residential HVAC / Dubai",
    title: "High-value installation positioning",
    challenge: "A premium installer needed to communicate trust, speed, and technical quality in a competitive market.",
    approach: "Reframed offers around comfort outcomes, warranty confidence, and rapid response for villa communities.",
    metrics: ["Luxury-market creative suite", "Geo-cluster targeting", "Quote-quality scoring"]
  }
];

export const blogPosts = [
  {
    slug: "ai-hvac-marketing-advantage",
    title: "How AI Changes HVAC Marketing Without Replacing Human Strategy",
    description: "A practical look at where AI improves speed, testing, and reporting for HVAC growth teams.",
    date: "2026-05-10",
    readTime: "5 min read",
    category: "AI Marketing",
    body: [
      {
        heading: "The real advantage is learning speed",
        paragraphs: [
          "HVAC marketing is seasonal, local, and unforgiving. When a heat wave hits, slow creative cycles and weak tracking cost real booked jobs. AI helps teams generate structured campaign angles, summarize performance signals, and find patterns faster.",
          "The best use of AI is not handing your brand to a machine. It is giving skilled strategists better leverage so more tests can be launched, measured, and improved."
        ]
      },
      {
        heading: "Where it matters most",
        paragraphs: [
          "AI-assisted campaign diagnostics can compare offer performance, flag weak lead quality, and help convert technician knowledge into content. That matters because homeowners do not buy HVAC services like fashion products. They need trust, speed, financing clarity, and proof that the contractor can solve the problem.",
          "NorthOrbis uses AI as an intelligence layer across paid media, social content, reporting, and lead handling while keeping positioning and strategy human-led."
        ]
      }
    ]
  },
  {
    slug: "seasonal-hvac-campaign-calendar",
    title: "The HVAC Seasonal Campaign Calendar Owners Should Actually Use",
    description: "Plan ahead for tune-ups, emergency demand, replacements, indoor air quality, and maintenance agreements.",
    date: "2026-04-22",
    readTime: "6 min read",
    category: "Growth Strategy",
    body: [
      {
        heading: "Demand does not arrive politely",
        paragraphs: [
          "HVAC demand spikes with weather, but the contractors who win are already in market before the rush. Spring and fall are ideal for tune-ups and maintenance plans. Peak heat and cold seasons need emergency repair and replacement campaigns ready to move.",
          "A strong calendar connects offers, creative, budgets, and landing pages before the season starts."
        ]
      },
      {
        heading: "Match the offer to the moment",
        paragraphs: [
          "Maintenance campaigns should emphasize prevention and comfort. Replacement campaigns should emphasize financing, energy savings, warranties, and fast estimates. Emergency repair campaigns need speed, trust, and local availability.",
          "When each campaign has a clear job, the data becomes easier to read and the budget becomes easier to defend."
        ]
      }
    ]
  },
  {
    slug: "hvac-lead-quality-vs-lead-volume",
    title: "Lead Volume Is Not Enough: How HVAC Owners Should Judge Campaign Quality",
    description: "Why booked jobs, response speed, and revenue potential matter more than vanity CPL reports.",
    date: "2026-03-18",
    readTime: "4 min read",
    category: "Lead Generation",
    body: [
      {
        heading: "Cheap leads can be expensive",
        paragraphs: [
          "A low cost per lead looks good in a report until the office wastes hours chasing poor-fit inquiries. HVAC campaigns should be judged by booked appointments, service type, revenue potential, and close-rate feedback.",
          "That means tracking has to connect ads, forms, calls, and CRM outcomes wherever possible."
        ]
      },
      {
        heading: "Build for booked jobs",
        paragraphs: [
          "Better lead quality starts with better offers, tighter service-area targeting, stronger qualification fields, and faster follow-up. The goal is not more noise. The goal is more profitable opportunities your team can actually service.",
          "NorthOrbis builds reporting around decisions owners can act on, not dashboards nobody has time to interpret."
        ]
      }
    ]
  }
];
