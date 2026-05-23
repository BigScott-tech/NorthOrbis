import { Container } from "@/components/ui/container";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description: "NorthOrbis AIMA privacy policy placeholder."
});

export default function PrivacyPage() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container className="max-w-4xl">
        <p className="text-sm font-semibold uppercase text-gold">Legal</p>
        <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Privacy Policy</h1>
        <div className="mt-8 space-y-6 text-base leading-8 text-steel">
          <p>
            This placeholder privacy policy should be reviewed by qualified counsel before launch. NorthOrbis AIMA
            collects information submitted through contact and audit forms for the purpose of responding to business
            inquiries and providing marketing services.
          </p>
          <p>
            Replace this page with your final policy covering data collection, analytics, advertising pixels, CRM
            storage, retention, user rights, international transfers, and contact details for privacy requests.
          </p>
        </div>
      </Container>
    </section>
  );
}
