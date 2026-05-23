import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase text-gold">404</p>
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">This page is off the route.</h1>
          <p className="mt-5 text-lg leading-8 text-steel">
            The page you requested is not available. Head back to the main site or request a free audit.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/" className={buttonVariants()}>
              Back Home
            </Link>
            <Link href="/audit" className={buttonVariants({ variant: "outline" })}>
              Get Free Audit
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
