import { BadgeCheck, LockKeyhole, ShieldCheck } from "lucide-react";

const platforms = ["Meta Ads", "Google Ads", "GBP", "GA4", "Claude", "ChatGPT", "HubSpot"];
const trust = [
  { label: "Lead data protected", icon: LockKeyhole },
  { label: "GDPR-aware workflows", icon: ShieldCheck },
  { label: "No long-term lock-in", icon: BadgeCheck }
];

export function TrustStrip() {
  return (
    <div className="grid gap-4 rounded-lg border border-white/10 bg-white/[0.035] p-4 lg:grid-cols-[1fr_auto] lg:items-center">
      <div className="flex flex-wrap gap-2">
        {platforms.map((platform) => (
          <span
            key={platform}
            className="rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm font-semibold text-platinum"
          >
            {platform}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {trust.map(({ label, icon: Icon }) => (
          <span key={label} className="inline-flex items-center gap-2 rounded-lg bg-gold/10 px-3 py-2 text-sm text-gold-soft">
            <Icon className="h-4 w-4" />
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
