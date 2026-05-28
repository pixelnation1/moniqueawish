"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { CTA } from "@/lib/cta";
import { donationImpactStats } from "@/lib/site";

export function FeaturedDonationSection() {
  return (
    <section className="donation-feature-bg relative overflow-hidden px-4 py-14 sm:px-5 sm:py-20 md:px-8 md:py-32">
      <div className="section-glow left-[5%] top-[20%] h-56 w-56 bg-[#F2C66D]/50" />
      <div className="section-glow right-[8%] bottom-[10%] h-64 w-64 bg-[#5B2C83]/20" />
      <FadeIn className="relative mx-auto max-w-5xl text-center">
        <p className="mb-3 text-xs font-medium tracking-[0.32em] text-[#5B2C83] uppercase">
          Make a Difference Today
        </p>
        <h2 className="text-balance text-2xl font-semibold leading-snug tracking-tight text-[#3D1B5F] sm:text-3xl md:text-5xl lg:text-[3.25rem]">
          Your Kindness Creates Real Impact
        </h2>
        <p className="prose-width mx-auto mt-6 text-balance leading-relaxed text-[#4E4E4E]">
          Every donation helps provide meals, school supplies, holiday support, emergency assistance, and hope
          for families throughout the Emporia community.
        </p>

        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="mt-10 inline-block"
        >
          <Link
            href="/donate"
            className="inline-flex w-full max-w-sm items-center justify-center rounded-full bg-[#D4A017] px-8 py-3.5 text-sm font-semibold text-[#3D1B5F] shadow-xl shadow-[#D4A017]/40 transition-all duration-300 hover:bg-[#F2C66D] sm:w-auto sm:px-10 sm:py-4 sm:text-base"
          >
            {CTA.donateLarge}
          </Link>
        </motion.div>
        <p className="mx-auto mt-4 max-w-md text-sm text-[#5B2C83]/90">{CTA.donateMicrocopy}</p>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-4 md:grid-cols-4 md:gap-6">
          {donationImpactStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-[#5B2C83]/12 bg-white/85 px-4 py-5 shadow-md backdrop-blur-sm"
            >
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                tone="brand"
                className="text-2xl md:text-3xl"
              />
              <p className="mt-1 text-xs text-[#5B2C83] md:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
