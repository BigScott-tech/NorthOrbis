import { ArrowRight, Clock } from "lucide-react";
import Link from "next/link";
import { FinalCta } from "@/components/final-cta";
import { Reveal } from "@/components/reveal";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { blogPosts } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "HVAC Marketing Blog",
  description:
    "Read NorthOrbis AIMA insights on AI-powered HVAC marketing, seasonal campaigns, paid ads, local visibility, and lead quality."
});

export default function BlogPage() {
  return (
    <>
      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <Reveal className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase text-gold">Blog</p>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.08] text-white sm:text-6xl">
              Clear thinking for HVAC owners who want better marketing decisions.
            </h1>
            <p className="mt-6 text-lg leading-8 text-steel">
              Practical articles on AI, paid media, local search, seasonal campaigns, and lead quality.
            </p>
            <div className="mt-8 flex justify-center">
              <Link href="/audit" className={buttonVariants({ size: "lg" })}>
                Get Free Audit
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-5 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <Reveal key={post.slug} delay={index * 0.06}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col rounded-lg border border-white/10 bg-white/[0.035] p-6 transition hover:border-gold/50 hover:bg-white/[0.055]"
                >
                  <p className="text-sm font-semibold text-gold">{post.category}</p>
                  <h2 className="mt-4 text-2xl font-semibold text-white transition group-hover:text-gold-soft">{post.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-steel">{post.description}</p>
                  <div className="mt-6 flex items-center gap-3 text-sm text-steel">
                    <Clock className="h-4 w-4 text-gold" />
                    <span>{new Date(post.date).toLocaleDateString("en", { month: "long", day: "numeric", year: "numeric" })}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-gold">
                    Read article
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <FinalCta
        title="Turn the insight into an HVAC growth plan."
        description="Request a free audit and we will identify the biggest leverage points in your market."
      />
    </>
  );
}
