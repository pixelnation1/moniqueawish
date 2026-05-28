"use client";

import { FadeIn } from "@/components/FadeIn";
import { CTAButtonGroup } from "@/components/CTAButtonGroup";
import { CTA } from "@/lib/cta";

export function ImpactGrowthCTA() {
  return (
    <section className="warm-cta-bg relative overflow-hidden px-4 py-14 sm:px-5 sm:py-20 md:px-8 md:py-28">
      <div className="section-glow left-[10%] top-[20%] h-40 w-40 bg-[#F2C66D]/50" />
      <div className="section-glow right-[8%] bottom-[15%] h-44 w-44 bg-[#5B2C83]/20" />
      <FadeIn className="relative mx-auto max-w-3xl text-center">
        <p className="mb-3 text-xs font-medium tracking-[0.32em] text-[#5B2C83] uppercase">Join the Mission</p>
        <h2 className="text-balance text-2xl font-semibold leading-snug tracking-tight text-[#3D1B5F] sm:text-3xl md:text-4xl">
          {CTA.impactGrowthTitle}
        </h2>
        <p className="prose-width mx-auto mt-4 text-sm leading-relaxed text-[#4F4F4F] sm:mt-6 sm:text-base">
          Your generosity and partnership help us serve more families with dignity—during the holidays and
          throughout the year.
        </p>
        <div className="mt-8 flex justify-center sm:mt-10">
          <CTAButtonGroup
            primaryLabel={CTA.donatePrimary}
            primaryHref="/donate"
            secondaryLabel={CTA.partnerPrimary}
            secondaryHref="/contact"
            layout="row"
          />
        </div>
      </FadeIn>
    </section>
  );
}
