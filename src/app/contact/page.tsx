import { CalendarCheck, Mail, MapPin, PhoneCall, ShieldCheck } from "lucide-react";
import { LeadForm } from "@/components/forms/lead-form";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Container } from "@/components/ui/container";
import { site } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Contact NorthOrbis AIMA to discuss AI-powered HVAC marketing, paid ads, social media management, and lead generation."
});

const contactCards = [
  {
    icon: Mail,
    title: "Email",
    text: site.email
  },
  {
    icon: PhoneCall,
    title: "Phone",
    text: site.phone
  },
  {
    icon: MapPin,
    title: "Markets",
    text: "US, UK, Germany, UAE, and premium service areas"
  }
];

const expectations = [
  "A short review of your current marketing assets",
  "A discussion around service mix, market, and capacity",
  "Clear next steps if there is a strong strategic fit"
];

export default function ContactPage() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <SectionHeading
              eyebrow="Contact"
              title="Tell us where your HVAC growth is stuck."
              description="Share the essentials and we will come prepared with practical questions about your market, offers, tracking, and lead quality."
            />
            <div className="mt-8 grid gap-4">
              {contactCards.map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex gap-4 rounded-lg border border-white/10 bg-white/[0.035] p-5">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-gold/10 text-gold">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h2 className="font-semibold text-white">{title}</h2>
                    <p className="mt-1 text-sm leading-7 text-steel">{text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-lg border border-gold/25 bg-gold/10 p-5">
              <div className="flex items-center gap-3">
                <CalendarCheck className="h-5 w-5 text-gold" />
                <h2 className="font-semibold text-white">What happens next</h2>
              </div>
              <div className="mt-4 grid gap-3">
                {expectations.map((item) => (
                  <p key={item} className="flex gap-3 text-sm leading-7 text-platinum">
                    <ShieldCheck className="mt-1 h-4 w-4 shrink-0 text-gold" />
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="rounded-lg border border-white/10 bg-white/[0.035] p-5 sm:p-7">
            <h2 className="text-2xl font-semibold text-white">Book a strategy conversation</h2>
            <p className="mt-3 text-sm leading-7 text-steel">
              Give us enough context to make the first conversation useful.
            </p>
            <LeadForm formType="contact" className="mt-6" />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
