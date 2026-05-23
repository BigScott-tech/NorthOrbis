import { Instagram, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";
import { navItems, site } from "@/lib/content";
import { Logo } from "@/components/logo";
import { Container } from "@/components/ui/container";

const legalLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" }
];

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com", icon: Linkedin },
  { label: "Instagram", href: "https://www.instagram.com", icon: Instagram },
  { label: "YouTube", href: "https://www.youtube.com", icon: Youtube }
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <Container className="py-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-md text-sm leading-7 text-steel">
              AI-augmented marketing systems for HVAC contractors that need sharper creative, cleaner tracking,
              and more predictable booked-job opportunities.
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-steel transition hover:border-gold/60 hover:text-gold"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase text-gold">Company</h3>
            <div className="mt-4 grid gap-3">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="text-sm text-steel transition hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase text-gold">Contact</h3>
            <div className="mt-4 grid gap-3 text-sm text-steel">
              <Link href={`mailto:${site.email}`} className="transition hover:text-white">
                {site.email}
              </Link>
              <Link href={`tel:${site.phone.replace(/\D/g, "")}`} className="transition hover:text-white">
                {site.phone}
              </Link>
              <Link href="/audit" className="font-semibold text-gold transition hover:text-gold-soft">
                Request a free HVAC marketing audit
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-steel sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <div className="flex gap-5">
            {legalLinks.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
