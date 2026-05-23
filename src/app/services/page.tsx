import {
  ArrowRight,
  BarChart3,
  Bot,
  Megaphone,
  MessageSquareText,
  MousePointerClick,
  Search,
  Workflow
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FinalCta } from "@/components/final-cta";
import { PricingCard } from "@/components/pricing-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { TrustStrip } from "@/components/trust-strip";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { pricingTiers, serviceGroups } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "HVAC Marketing Services",
  description:
    "Explore NorthOrbis AIMA services for HVAC contractors: paid ads, social media management, content, lead systems, local SEO, and AI intelligence."
});

const icons = [MousePointerClick, MessageSquareText, Megaphone, Workflow, Search, Bot];

const stack = [
  "Campaign strategy",
  "Meta and Google ads",
  "Short-form content direction",
  "Landing page recommendations",
  "Call and form tracking",
  "Google Business Profile support",
  "Review generation workflows",
  "AI-assisted diagnostics",
  "Weekly or monthly reporting"
];

export default function ServicesPage() {
  return (
    <>
      <section className="py-16 sm:py-20 lg:py-24">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <Reveal>
            <p className="text-sm font-semibold uppercase text-gold">Services</p>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.08] text-white sm:text-6xl">
              HVAC marketing services built as one measurable growth system.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-steel">
              From social content to paid acquisition and lead routing, NorthOrbis connects the work that creates
              demand with the systems that convert it into booked opportunities.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/audit" className={buttonVariants({ size: "lg" })}>
                Get Free Audit
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact" className={buttonVariants({ variant: "outline", size: "lg" })}>
                Book Strategy Call
              </Link>
            </div>
          </Reveal>
          <Reveal className="relative overflow-hidden rounded-lg border border-white/10 bg-graphite" delay={0.08}>
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/hvac-coil.jpg"
                alt="Close-up HVAC equipment inspection"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 44vw, 92vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-lg border border-white/10 bg-black/75 p-4 backdrop-blur">
                <p className="text-sm text-steel">Service architecture</p>
                <p className="mt-1 text-2xl font-semibold text-white">Demand, trust, tracking, follow-up.</p>
              </div>
            </div>
          </Reveal>
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
            eyebrow="Capabilities"
            title="Everything your HVAC growth engine needs, aligned around booked jobs."
            description="Each service can stand alone, but the best results come from connecting strategy, creative, media, and response systems."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {serviceGroups.map((service, index) => {
              const Icon = icons[index] ?? BarChart3;
              return (
                <Reveal key={service.title} delay={index * 0.05} className="rounded-lg border border-white/10 bg-white/[0.035] p-6">
                  <span className="grid h-12 w-12 place-items-center rounded-lg bg-gold/10 text-gold">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h2 className="mt-5 text-xl font-semibold text-white">{service.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-steel">{service.summary}</p>
                  <div className="mt-5 grid gap-2">
                    {service.items.map((item) => (
                      <span key={item} className="text-sm text-platinum">
                        {item}
                      </span>
                    ))}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeading
            eyebrow="Operating stack"
            title="The practical work behind stronger lead flow."
            description="A premium HVAC marketing system needs more than isolated ads. It needs clear offers, conversion paths, feedback loops, and owner-readable reporting."
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {stack.map((item, index) => (
              <Reveal key={item} delay={index * 0.04} className="flex items-center gap-3 rounded-lg border border-white/10 bg-black/35 p-4">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-gold text-sm font-bold text-obsidian">
                  {index + 1}
                </span>
                <span className="text-sm font-semibold text-platinum">{item}</span>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Pricing"
            title="Clear tiers for different growth stages."
            description="Ad spend is separate. Every plan starts with an audit so the recommendation fits your market, capacity, and service mix."
            align="center"
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {pricingTiers.map((tier) => (
              <PricingCard key={tier.name} tier={tier} />
            ))}
          </div>
        </Container>
      </section>

      <FinalCta
        title="Find out which service mix fits your HVAC market."
        description="We will review your local visibility, ad opportunities, tracking gaps, offer structure, and lead path."
      />
    </>
  );
}
