'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  const [hasImageError, setHasImageError] = useState(false);

  return (
    <Link href="/" className={cn("group inline-flex items-center gap-3", className)} aria-label="NorthOrbis AIMA home">
      {hasImageError ? (
        <span className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-lg border border-gold/40 bg-black">
          <span className="absolute h-8 w-8 rotate-45 rounded-sm border border-gold/70" />
          <span className="absolute h-4 w-4 rotate-45 rounded-sm bg-gold shadow-gold transition group-hover:scale-110" />
          <span className="absolute inset-x-1 top-1 h-px bg-gold/70" />
          <span className="absolute inset-x-1 bottom-1 h-px bg-gold/40" />
        </span>
      ) : (
        <span className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-lg border border-gold/40 bg-black">
          <Image
            src="/sitemage/NorthOrbis-removebg-preview.png"
            alt="NorthOrbis logo"
            width={40}
            height={40}
            className="h-full w-full object-contain"
            onError={() => setHasImageError(true)}
          />
        </span>
      )}
      <span className="leading-none">
        <span className="block text-base font-semibold text-white">NorthOrbis</span>
        <span className="block text-xs font-semibold text-gold">AIMA</span>
      </span>
    </Link>
  );
}
