import { ArrowRight, BrainCircuit, Globe2, ShieldCheck, Wrench } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FinalCta } from "@/components/final-cta";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { markets } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About",
  description:
    "Learn about NorthOrbis AIMA, an AI-augmented intelligent marketing agency serving HVAC contractors in high-value markets."
});

const principles = [
  {
    icon: Wrench,
    title: "Trade-specific thinking",
    text: "We build around HVAC buying behavior: urgency, trust, financing, comfort, seasonal demand, and local reputation."
  },
  {
    icon: BrainCircuit,
    title: "AI with human control",
    text: "AI accelerates research, creative testing, and analysis. Strategy, positioning, and business judgment stay human."
  },
  {
    icon: ShieldCheck,
    title: "Accountable growth",
    text: "We care about appointment potential, quote quality, booked jobs, and speed-to-lead. Not vanity metrics."
  },
  {
    icon: Globe2,
    title: "Global perspective",
    text: "We adapt proven acquisition principles to the United States, United Kingdom, Germany, UAE, and other premium markets."
  }
];

export default function AboutPage() {
  return (
    <>
      <section className="py-16 sm:py-20 lg:py-24">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <Reveal>
            <p className="text-sm font-semibold uppercase text-gold">About NorthOrbis AIMA</p>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.08] text-white sm:text-6xl">
              A premium AI-powered SMMA for HVAC owners who want serious growth.
            </h1>
            <p className="mt-6 text-lg leading-8 text-steel">
              NorthOrbis AIMA exists for contractors who are tired of generic agency retainers, inconsistent lead
              quality, and reports that do not explain what to do next.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/audit" className={buttonVariants({ size: "lg" })}>
                Get Free Audit
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/services" className={buttonVariants({ variant: "outline", size: "lg" })}>
                Explore Services
              </Link>
            </div>
          </Reveal>
          <Reveal className="relative overflow-hidden rounded-lg border border-white/10 bg-graphite" delay={0.08}>
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/hvac-inspection.jpg"
                alt="Professional HVAC inspection in a residential market"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 44vw, 92vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="Positioning"
            title="AIMA means AI-Augmented Intelligent Marketing Agency."
            description="The model is simple: combine senior human strategy with AI systems that make marketing faster, more precise, and more measurable."
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {principles.map(({ icon: Icon, title, text }, index) => (
              <Reveal key={title} delay={index * 0.06} className="rounded-lg border border-white/10 bg-white/[0.035] p-6">
                <Icon className="h-8 w-8 text-gold" />
                <h2 className="mt-5 text-xl font-semibold text-white">{title}</h2>
                <p className="mt-3 text-sm leading-7 text-steel">{text}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="rounded-lg border border-white/10 bg-white/[0.035] p-6 sm:p-8">
            <SectionHeading
              eyebrow="Markets"
              title="Local market execution with global reach."
              description="HVAC is local, but winning principles travel. We tailor each strategy to buyer behavior, geography, service mix, regulation, climate, and competitive density."
            />
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {markets.map((market) => (
                <span key={market} className="rounded-lg border border-gold/20 bg-gold/10 px-4 py-3 text-sm font-semibold text-gold-soft">
                  {market}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <FinalCta
        title="Bring a sharper operating system to your HVAC growth."
        description="We will show where your current marketing is leaking attention, spend, or lead quality."
      />
    </>
  );
}
