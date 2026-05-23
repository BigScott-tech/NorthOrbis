import { ArrowRight, CalendarCheck } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function FinalCta({
  title = "Ready to make your HVAC marketing more predictable?",
  description = "Get a focused audit of your social presence, paid media opportunities, tracking gaps, and local market positioning.",
  primaryHref = "/audit",
  primaryLabel = "Get Free Audit"
}: {
  title?: string;
  description?: string;
  primaryHref?: string;
  primaryLabel?: string;
}) {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-lg border border-gold/30 bg-black px-6 py-10 shadow-gold sm:px-10 lg:px-12">
          <div className="absolute inset-x-0 top-0 h-px bg-gold-line" />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-lg bg-gold/10 px-3 py-2 text-sm font-semibold text-gold-soft">
                <CalendarCheck className="h-4 w-4" />
                Strategy-led, AI-accelerated
              </div>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-steel">{description}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link href={primaryHref} className={buttonVariants({ size: "lg" })}>
                {primaryLabel}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact" className={buttonVariants({ variant: "outline", size: "lg" })}>
                Book Strategy Call
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
