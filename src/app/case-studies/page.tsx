import { ArrowRight, BarChart3, CheckCircle2, ClipboardCheck, Target } from "lucide-react";
import Link from "next/link";
import { FinalCta } from "@/components/final-cta";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { caseStudies } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "HVAC Marketing Case Studies",
  description:
    "Representative NorthOrbis AIMA HVAC marketing case study models for replacement demand, maintenance contracts, and premium installation positioning."
});

const benchmarks = [
  {
    icon: Target,
    title: "Lead quality",
    text: "Qualified appointment potential, service fit, urgency, geography, and close-rate feedback."
  },
  {
    icon: BarChart3,
    title: "Cost efficiency",
    text: "Spend allocation by service type, channel, market, creative, and lead outcome."
  },
  {
    icon: ClipboardCheck,
    title: "Operational readiness",
    text: "Speed-to-lead, CRM routing, review capture, and sales follow-up consistency."
  }
];

export default function CaseStudiesPage() {
  return (
    <>
      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <Reveal className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase text-gold">Case Studies</p>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.08] text-white sm:text-6xl">
              HVAC growth scenarios built around real owner priorities.
            </h1>
            <p className="mt-6 text-lg leading-8 text-steel">
              These representative campaign models show how NorthOrbis structures strategy for different HVAC markets,
              service mixes, and revenue goals.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/audit" className={buttonVariants({ size: "lg" })}>
                Get Free Audit
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/process" className={buttonVariants({ variant: "outline", size: "lg" })}>
                See Our Process
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="What we measure"
            title="The right scorecard changes the entire campaign."
            description="HVAC marketing must connect spend to lead quality, booking behavior, and local positioning."
            align="center"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {benchmarks.map(({ icon: Icon, title, text }, index) => (
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
          <div className="grid gap-6">
            {caseStudies.map((study, index) => (
              <Reveal key={study.title} delay={index * 0.06} className="rounded-lg border border-white/10 bg-white/[0.035] p-6 sm:p-8">
                <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
                  <div>
                    <p className="text-sm font-semibold text-gold">{study.market}</p>
                    <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">{study.title}</h2>
                    <p className="mt-5 text-sm font-semibold uppercase text-steel">Challenge</p>
                    <p className="mt-2 text-base leading-8 text-platinum">{study.challenge}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase text-steel">NorthOrbis approach</p>
                    <p className="mt-2 text-base leading-8 text-steel">{study.approach}</p>
                    <div className="mt-6 grid gap-3 sm:grid-cols-3">
                      {study.metrics.map((metric) => (
                        <div key={metric} className="rounded-lg border border-gold/20 bg-gold/10 p-4">
                          <CheckCircle2 className="h-5 w-5 text-gold" />
                          <p className="mt-3 text-sm font-semibold leading-6 text-white">{metric}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <FinalCta
        title="Want to see what this would look like for your HVAC company?"
        description="Request a free audit and we will map the highest-leverage campaigns for your service area and growth stage."
      />
    </>
  );
}
