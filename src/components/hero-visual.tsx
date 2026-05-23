"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, PhoneCall } from "lucide-react";
import Image from "next/image";

const signalBars = ["h-8", "h-14", "h-10", "h-20", "h-16", "h-24", "h-12"];

export function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto max-w-xl lg:max-w-none"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-white/10 bg-graphite shadow-panel sm:aspect-[5/4] lg:aspect-[4/5]">
        <Image
          src="/images/hvac-inspection.jpg"
          alt="HVAC technician inspecting an outdoor condenser unit"
          fill
          priority
          className="object-cover"
          sizes="(min-width: 1024px) 46vw, 92vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
        <div className="absolute bottom-5 left-5 right-5 rounded-lg border border-white/10 bg-black/76 p-4 backdrop-blur">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm text-steel">AIMA lead signal</p>
              <p className="mt-1 text-2xl font-semibold text-white">Replacement demand rising</p>
            </div>
            <span className="grid h-12 w-12 place-items-center rounded-lg bg-gold text-obsidian">
              <ArrowUpRight className="h-5 w-5" />
            </span>
          </div>
          <div className="mt-4 flex items-end gap-2">
            {signalBars.map((height, index) => (
              <span key={index} className={`${height} flex-1 rounded-sm bg-gradient-to-t from-gold/30 to-gold`} />
            ))}
          </div>
        </div>
      </div>
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-3 top-8 hidden w-56 rounded-lg border border-gold/30 bg-black/90 p-4 shadow-gold backdrop-blur sm:block"
      >
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-gold/15 text-gold">
            <PhoneCall className="h-4 w-4" />
          </span>
          <div>
            <p className="text-sm text-steel">Booked call path</p>
            <p className="font-semibold text-white">Tracked end-to-end</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-3 top-24 hidden w-60 rounded-lg border border-white/10 bg-white/10 p-4 backdrop-blur sm:block"
      >
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 text-signal" />
          <div>
            <p className="font-semibold text-white">Seasonal campaigns ready</p>
            <p className="mt-1 text-sm leading-6 text-steel">Repair, replacement, tune-up, and IAQ demand mapped by market.</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
