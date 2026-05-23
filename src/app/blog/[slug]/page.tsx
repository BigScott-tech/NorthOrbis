import { ArrowLeft, Clock } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FinalCta } from "@/components/final-cta";
import { Container } from "@/components/ui/container";
import { blogPosts } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return createMetadata({
      title: "Article",
      description: "NorthOrbis AIMA HVAC marketing article."
    });
  }

  return createMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <article className="py-16 sm:py-20 lg:py-24">
        <Container className="max-w-4xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-gold transition hover:text-gold-soft">
            <ArrowLeft className="h-4 w-4" />
            Back to blog
          </Link>
          <p className="mt-8 text-sm font-semibold uppercase text-gold">{post.category}</p>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.08] text-white sm:text-6xl">{post.title}</h1>
          <p className="mt-6 text-lg leading-8 text-steel">{post.description}</p>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-steel">
            <Clock className="h-4 w-4 text-gold" />
            <span>{new Date(post.date).toLocaleDateString("en", { month: "long", day: "numeric", year: "numeric" })}</span>
            <span>{post.readTime}</span>
          </div>
          <div className="mt-12 space-y-10">
            {post.body.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl font-semibold text-white">{section.heading}</h2>
                <div className="mt-4 space-y-5">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-base leading-8 text-steel">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </Container>
      </article>
      <FinalCta />
    </>
  );
}
