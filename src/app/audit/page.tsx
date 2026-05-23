import { ArrowRight, CheckCircle2, Gauge, Map, MousePointerClick, SearchCheck, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { LeadForm } from "@/components/forms/lead-form";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Free HVAC Marketing Audit",
  description:
    "Request a free HVAC marketing audit from NorthOrbis AIMA covering social presence, ads, local visibility, tracking, and lead quality."
});

const auditItems = [
  {
    icon: SearchCheck,
    title: "Local visibility scan",
    text: "Google Business Profile, service-area signals, review posture, and competitor positioning."
  },
  {
    icon: MousePointerClick,
    title: "Paid media opportunity",
    text: "Where Meta and Google campaigns could capture repair, replacement, tune-up, or IAQ demand."
  },
  {
    icon: Gauge,
    title: "Lead-path diagnosis",
    text: "Forms, calls, landing pages, tracking, routing, and speed-to-lead risk."
  },
  {
    icon: Map,
    title: "90-day action map",
    text: "A prioritized plan based on market timing, service mix, capacity, and likely ROI leverage."
  }
];

const assurances = ["No generic template report", "No obligation", "Built for HVAC business owners"];

export default function AuditPage() {
  return (
    <>
      <section className="py-16 sm:py-20 lg:py-24">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-start">
          <Reveal>
            <p className="text-sm font-semibold uppercase text-gold">Free HVAC Marketing Audit</p>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.08] text-white sm:text-6xl">
              See where your HVAC marketing is leaking leads, trust, and ad spend.
            </h1>
            <p className="mt-6 text-lg leading-8 text-steel">
              We will review your social presence, paid acquisition opportunity, local visibility, and lead path so you
              can see the highest-leverage next moves before committing to a plan.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#audit-form" className={buttonVariants({ size: "lg" })}>
                Request My Audit
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link href="/process" className={buttonVariants({ variant: "outline", size: "lg" })}>
                See Process
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {assurances.map((item) => (
                <span key={item} className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.035] px-4 py-3 text-sm font-semibold text-platinum">
                  <ShieldCheck className="h-4 w-4 text-gold" />
                  {item}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08} className="rounded-lg border border-gold/30 bg-white/[0.035] p-5 shadow-gold sm:p-7" id="audit-form">
            <h2 className="text-2xl font-semibold text-white">Request your free audit</h2>
            <p className="mt-3 text-sm leading-7 text-steel">
              The more specific you are, the sharper the review will be.
            </p>
            <LeadForm formType="audit" className="mt-6" />
          </Reveal>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <Reveal className="relative overflow-hidden rounded-lg border border-white/10 bg-graphite">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/hvac-diagnostics.jpg"
                alt="HVAC diagnostics audit and maintenance work"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 92vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="What is included"
              title="A practical audit built for action, not filler."
              description="You will get a clear view of what to fix first, what to test next, and where AI-assisted execution can improve speed or accuracy."
            />
            <div className="mt-8 grid gap-4">
              {auditItems.map(({ icon: Icon, title, text }, index) => (
                <Reveal key={title} delay={index * 0.06} className="flex gap-4 rounded-lg border border-white/10 bg-white/[0.035] p-5">
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

      <section className="pb-16 sm:pb-20">
        <Container>
          <div className="rounded-lg border border-white/10 bg-black p-6 sm:p-8">
            <div className="grid gap-4 md:grid-cols-3">
              {["Better offer clarity", "Cleaner tracking", "Stronger lead quality"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-signal" />
                  <span className="font-semibold text-white">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
