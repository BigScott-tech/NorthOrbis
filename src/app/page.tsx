import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  Bot,
  CalendarClock,
  CheckCircle2,
  Gauge,
  Globe2,
  MapPin,
  PhoneCall,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Target,
  Wrench
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FinalCta } from "@/components/final-cta";
import { HeroVisual } from "@/components/hero-visual";
import { PricingCard } from "@/components/pricing-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { TrustStrip } from "@/components/trust-strip";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { caseStudies, markets, pricingTiers, processSteps } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "AI-Powered HVAC Marketing Agency",
  description:
    "NorthOrbis AIMA helps HVAC contractors win more booked jobs through AI-augmented social media, paid ads, content, and lead systems."
});

const problems = [
  {
    icon: CalendarClock,
    title: "Seasonal demand spikes arrive before campaigns are ready",
    text: "By the time the heat wave hits, generic agencies are still waiting on creative approvals and vague reports."
  },
  {
    icon: AlertTriangle,
    title: "Cheap leads drain office time",
    text: "Low-quality forms, missed calls, and weak follow-up hide the true cost of marketing waste."
  },
  {
    icon: SearchCheck,
    title: "Local competitors are buying attention every day",
    text: "Homeowners compare reviews, speed, financing, and trust signals before they ever call."
  }
];

const advantages = [
  {
    icon: Bot,
    title: "AI-assisted market intelligence",
    text: "Faster creative testing, campaign diagnostics, lead-quality patterning, and reporting summaries."
  },
  {
    icon: Wrench,
    title: "HVAC-specific execution",
    text: "Repair, replacement, maintenance, IAQ, heat pump, and seasonal demand campaigns built by service type."
  },
  {
    icon: ShieldCheck,
    title: "Human strategy stays in control",
    text: "AI gives leverage. Senior marketing judgment keeps the positioning, offer, and economics sharp."
  }
];

const proofStats = [
  { value: "90-day", label: "growth roadmap" },
  { value: "24/7", label: "lead-path visibility" },
  { value: "5", label: "priority markets" },
  { value: "3x", label: "faster creative cycles" }
];

const whyChoose = [
  "We speak to HVAC owners about booked jobs, not vanity engagement.",
  "Campaigns are built around margins, seasonality, service area, and capacity.",
  "Every plan includes tracking hygiene so decisions are based on real signal.",
  "The brand stays premium while the response path stays direct and measurable."
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-lg border border-gold/30 bg-gold/10 px-3 py-2 text-sm font-semibold text-gold-soft">
                <Sparkles className="h-4 w-4" />
                AI-Augmented Intelligent Marketing Agency for HVAC
              </div>
              <h1 className="mt-6 text-4xl font-semibold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
                AI-powered HVAC marketing that turns attention into booked jobs.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-steel">
                NorthOrbis AIMA combines senior marketing strategy with advanced AI systems to help residential and
                light commercial HVAC contractors win better leads, stronger local visibility, and more efficient ad
                spend.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/audit" className={buttonVariants({ size: "lg" })}>
                  Get Free HVAC Marketing Audit
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/contact" className={buttonVariants({ variant: "outline", size: "lg" })}>
                  Book Strategy Call
                </Link>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {proofStats.map((stat) => (
                  <div key={stat.label} className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
                    <p className="text-2xl font-semibold text-gradient-gold">{stat.value}</p>
                    <p className="mt-1 text-sm text-steel">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <HeroVisual />
        </Container>
      </section>

      <section className="pb-12">
        <Container>
          <TrustStrip />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="The HVAC marketing problem"
            title="Most agencies are too generic for a trade where timing, trust, and speed decide the sale."
            description="HVAC owners do not need prettier dashboards. They need qualified demand, clean follow-up, and campaigns that move with the market."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {problems.map(({ icon: Icon, title, text }, index) => (
              <Reveal key={title} delay={index * 0.08} className="rounded-lg border border-white/10 bg-white/[0.035] p-6">
                <Icon className="h-8 w-8 text-gold" />
                <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-steel">{text}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal className="relative overflow-hidden rounded-lg border border-white/10 bg-graphite">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/hvac-diagnostics.jpg"
                alt="HVAC technician using diagnostics gauges"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 42vw, 92vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="The AIMA advantage"
              title="Human strategy, AI speed, and HVAC-specific execution in one operating system."
              description="We use AI to compress research, creative testing, reporting, and campaign diagnostics, then apply human judgment to the offer, audience, market, and economics."
            />
            <div className="mt-8 grid gap-4">
              {advantages.map(({ icon: Icon, title, text }) => (
                <Reveal key={title} className="flex gap-4 rounded-lg border border-white/10 bg-white/[0.035] p-5">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-gold/10 text-gold">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-white">{title}</h3>
                    <p className="mt-1 text-sm leading-7 text-steel">{text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Service tiers"
              title="Choose the level of growth infrastructure your HVAC business needs."
              description="Every tier is designed to make social, paid ads, content, and lead tracking work as one system."
            />
            <Link href="/services" className={buttonVariants({ variant: "outline" })}>
              View All Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {pricingTiers.map((tier) => (
              <PricingCard key={tier.name} tier={tier} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Results and social proof"
            title="Built around the numbers HVAC owners actually care about."
            description="NorthOrbis focuses on booked calls, quote quality, cost efficiency, review velocity, and local market share signals."
            align="center"
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {caseStudies.map((study, index) => (
              <Reveal key={study.title} delay={index * 0.08} className="rounded-lg border border-white/10 bg-white/[0.035] p-6">
                <p className="text-sm font-semibold text-gold">{study.market}</p>
                <h3 className="mt-3 text-xl font-semibold text-white">{study.title}</h3>
                <p className="mt-3 text-sm leading-7 text-steel">{study.approach}</p>
                <div className="mt-5 grid gap-2">
                  {study.metrics.map((metric) => (
                    <span key={metric} className="inline-flex items-center gap-2 text-sm text-platinum">
                      <CheckCircle2 className="h-4 w-4 text-signal" />
                      {metric}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <SectionHeading
            eyebrow="Why NorthOrbis"
            title="Premium execution for owners who want clarity, speed, and accountability."
            description="Your agency should understand the difference between a tune-up lead and a high-ticket replacement opportunity. That context changes everything."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {whyChoose.map((item, index) => (
              <Reveal key={item} delay={index * 0.06} className="rounded-lg border border-white/10 bg-white/[0.035] p-5">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-gold/10 text-gold">
                  {index === 0 ? <Target className="h-5 w-5" /> : null}
                  {index === 1 ? <Gauge className="h-5 w-5" /> : null}
                  {index === 2 ? <BarChart3 className="h-5 w-5" /> : null}
                  {index === 3 ? <PhoneCall className="h-5 w-5" /> : null}
                </span>
                <p className="mt-4 text-sm leading-7 text-platinum">{item}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Process snapshot"
            title="A clear 90-day path from audit to scalable acquisition."
            description="No vague retainers. We define the opportunity, build the system, launch carefully, and optimize against business outcomes."
            align="center"
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {processSteps.slice(0, 6).map((step, index) => (
              <Reveal key={step.title} delay={index * 0.05} className="rounded-lg border border-white/10 bg-white/[0.035] p-5">
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-gold text-sm font-bold text-obsidian">
                    {index + 1}
                  </span>
                  <h3 className="font-semibold text-white">{step.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-7 text-steel">{step.description}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 rounded-lg border border-white/10 bg-white/[0.035] p-6 sm:p-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-lg bg-gold/10 px-3 py-2 text-sm font-semibold text-gold-soft">
                <Globe2 className="h-4 w-4" />
                Global reach, local understanding
              </div>
              <h2 className="mt-5 text-3xl font-semibold text-white">Built for high-value HVAC markets.</h2>
              <p className="mt-4 text-sm leading-7 text-steel">
                We adapt the campaign mix to service area density, seasonality, consumer behavior, and market maturity.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {markets.map((market) => (
                <span key={market} className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-black/35 px-4 py-3 text-sm font-semibold text-platinum">
                  <MapPin className="h-4 w-4 text-gold" />
                  {market}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
