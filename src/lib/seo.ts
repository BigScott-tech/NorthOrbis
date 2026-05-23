import type { Metadata } from "next";
import { site } from "@/lib/content";

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
};

export function createMetadata({ title, description, path = "" }: MetadataInput): Metadata {
  const url = `${site.url}${path}`;

  return {
    title: `${title} | ${site.name}`,
    description,
    metadataBase: new URL(site.url),
    alternates: {
      canonical: url
    },
    icons: {
      icon: [
        { url: "/sitemage/favicon.ico", type: "image/x-icon" },
        { url: "/favicon.ico", type: "image/x-icon" }
      ],
      apple: [
        { url: "/sitemage/NorthOrbis-removebg-preview.png", type: "image/png" }
      ]
    },
    openGraph: {
      title: `${title} | ${site.name}`,
      description,
      url,
      siteName: site.name,
      type: "website",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: `${site.name} premium HVAC marketing`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${site.name}`,
      description,
      images: ["/opengraph-image"]
    }
  };
}
