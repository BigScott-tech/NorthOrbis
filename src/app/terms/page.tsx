import { Container } from "@/components/ui/container";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Terms of Service",
  description: "NorthOrbis AIMA terms of service placeholder."
});

export default function TermsPage() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container className="max-w-4xl">
        <p className="text-sm font-semibold uppercase text-gold">Legal</p>
        <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Terms of Service</h1>
        <div className="mt-8 space-y-6 text-base leading-8 text-steel">
          <p>
            These placeholder terms should be reviewed by qualified counsel before launch. The content on this website
            is provided for general business information and does not create a client relationship until a written
            agreement is signed.
          </p>
          <p>
            Replace this page with final terms covering service scope, payments, intellectual property, confidentiality,
            limitations of liability, acceptable use, governing law, and dispute resolution.
          </p>
        </div>
      </Container>
    </section>
  );
}
