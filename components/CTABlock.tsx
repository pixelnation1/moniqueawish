"use client";

import { FadeIn } from "@/components/FadeIn";
import { DecorativeAccents } from "@/components/DecorativeAccents";
import { CTAButtonGroup } from "@/components/CTAButtonGroup";
import { CTA } from "@/lib/cta";

type CTABlockProps = {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  showTrustLine?: boolean;
};

export function CTABlock({
  title = "Be the Reason Someone Smiles Today",
  description = "Join us in transforming remembrance into meaningful support for families who need compassion, resources, and a community that never looks away.",
  primaryLabel = CTA.donatePrimary,
  primaryHref = "/donate",
  secondaryLabel = CTA.involvedPrimary,
  secondaryHref = "/contact",
  showTrustLine = true,
}: CTABlockProps) {
  return (
    <section className="warm-cta-bg relative overflow-hidden px-4 py-14 sm:px-5 sm:py-20 md:px-8 md:py-36">
      <DecorativeAccents />
      <div className="section-glow left-[12%] top-[16%] h-44 w-44 bg-[#F2C66D]/55" />
      <div className="section-glow right-[8%] top-[34%] h-48 w-48 bg-[#5B2C83]/28" />
      <FadeIn className="relative mx-auto max-w-4xl text-center">
        <p className="mb-3 text-xs font-medium tracking-[0.32em] text-[#5B2C83] uppercase">Take Action</p>
        <h2 className="text-balance text-2xl font-semibold leading-snug tracking-tight text-[#3D1B5F] sm:text-3xl md:text-5xl lg:text-[3.25rem]">
          {title}
        </h2>
        <p className="prose-width mx-auto mt-4 text-balance text-sm leading-relaxed text-[#4F4F4F] sm:mt-6 md:text-base">
          {description}
        </p>
        <div className="mt-6 flex justify-center sm:mt-10">
          <CTAButtonGroup
            primaryLabel={primaryLabel}
            primaryHref={primaryHref}
            secondaryLabel={secondaryLabel}
            secondaryHref={secondaryHref}
            layout="row"
          />
        </div>
        {showTrustLine && (
          <p className="mx-auto mt-6 max-w-lg text-xs leading-relaxed text-[#5B2C83]/75 sm:mt-8">{CTA.trustLine}</p>
        )}
      </FadeIn>
    </section>
  );
}
