import { ArrowRight, CheckCircle2, Clock, Gauge, LineChart, Rocket, SearchCheck } from "lucide-react";
import Link from "next/link";
import { FinalCta } from "@/components/final-cta";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { processSteps } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Process",
  description:
    "See the NorthOrbis AIMA process for HVAC marketing: audit, strategy, build, launch, optimize, and scale."
});

const timeline = [
  { label: "Week 1", text: "Audit, tracking review, market map, offer diagnosis." },
  { label: "Weeks 2-3", text: "Campaign build, content direction, landing page guidance, reporting setup." },
  { label: "Weeks 4-6", text: "Launch, validate lead paths, control spend, identify early winners." },
  { label: "Weeks 7-12", text: "Optimize creative, improve lead quality, expand budgets where justified." }
];

const icons = [SearchCheck, LineChart, Gauge, Rocket, Clock, CheckCircle2];

export default function ProcessPage() {
  return (
    <>
      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <Reveal className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase text-gold">Process</p>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.08] text-white sm:text-6xl">
              A calm, disciplined growth process for busy HVAC owners.
            </h1>
            <p className="mt-6 text-lg leading-8 text-steel">
              We start with the business reality, build the right acquisition system, and optimize around signals your
              team can act on.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/audit" className={buttonVariants({ size: "lg" })}>
                Get Free Audit
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/services" className={buttonVariants({ variant: "outline", size: "lg" })}>
                View Services
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Six stages"
            title="From messy marketing inputs to a measurable HVAC growth engine."
            description="The sequence is designed to reduce waste before scaling spend."
            align="center"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, index) => {
              const Icon = icons[index] ?? CheckCircle2;
              return (
                <Reveal key={step.title} delay={index * 0.05} className="rounded-lg border border-white/10 bg-white/[0.035] p-6">
                  <div className="flex items-center justify-between gap-4">
                    <span className="grid h-12 w-12 place-items-center rounded-lg bg-gold/10 text-gold">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-sm font-bold text-gold">0{index + 1}</span>
                  </div>
                  <h2 className="mt-5 text-xl font-semibold text-white">{step.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-steel">{step.description}</p>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeading
            eyebrow="First 90 days"
            title="Designed to create signal quickly, then scale responsibly."
            description="The first 90 days should produce clarity: which offers attract the right leads, where spend is wasted, and what needs to change operationally."
          />
          <div className="grid gap-4">
            {timeline.map((item, index) => (
              <Reveal key={item.label} delay={index * 0.06} className="rounded-lg border border-white/10 bg-black/35 p-5">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
                  <span className="w-28 rounded-lg bg-gold px-3 py-2 text-center text-sm font-bold text-obsidian">
                    {item.label}
                  </span>
                  <p className="text-sm leading-7 text-platinum">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <FinalCta
        title="Start with the audit. Scale only after the signal is clear."
        description="We will diagnose your current marketing system and map the highest-leverage next moves."
      />
    </>
  );
}
