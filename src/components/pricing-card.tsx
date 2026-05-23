import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Tier = {
  name: string;
  price: string;
  subtitle: string;
  features: string[];
  cta: string;
  featured?: boolean;
};

export function PricingCard({ tier }: { tier: Tier }) {
  return (
    <div
      className={cn(
        "relative flex h-full flex-col rounded-lg border bg-white/[0.035] p-6",
        tier.featured ? "border-gold/60 shadow-gold" : "border-white/10"
      )}
    >
      {tier.featured ? (
        <span className="mb-4 w-fit rounded-lg bg-gold px-3 py-1 text-xs font-bold text-obsidian">Most requested</span>
      ) : null}
      <h3 className="text-2xl font-semibold text-white">{tier.name}</h3>
      <p className="mt-3 text-3xl font-semibold text-gradient-gold">{tier.price}</p>
      <p className="mt-4 text-sm leading-7 text-steel">{tier.subtitle}</p>
      <div className="mt-6 grid gap-3">
        {tier.features.map((feature) => (
          <div key={feature} className="flex gap-3 text-sm text-platinum">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
            <span>{feature}</span>
          </div>
        ))}
      </div>
      <Link
        href="/audit"
        className={buttonVariants({
          variant: tier.featured ? "primary" : "outline",
          className: "mt-8 w-full"
        })}
      >
        {tier.cta}
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
