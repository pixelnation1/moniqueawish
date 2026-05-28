"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeader } from "@/components/SectionHeader";
import { CTABlock } from "@/components/CTABlock";
import { GalleryExperience } from "@/components/gallery/GalleryExperience";
import { DecorativeAccents } from "@/components/DecorativeAccents";
import { SectionDivider } from "@/components/SectionDivider";
import { galleryImpactStats } from "@/lib/site";
import { CTA } from "@/lib/cta";
import { StatCard } from "@/components/StatCard";

export function GalleryPageContent() {
  return (
    <>
      <section className="gallery-hero-bg relative overflow-hidden px-4 pb-12 pt-6 sm:px-5 sm:pb-16 sm:pt-10 md:px-8 md:pb-24 md:pt-14">
        <DecorativeAccents variant="hero" />
        <div className="section-glow left-[-80px] top-12 h-56 w-56 bg-[#F2C66D]/45" />
        <div className="section-glow right-[-60px] top-24 h-64 w-64 bg-[#E8DDF5]/70" />
        <div className="relative mx-auto max-w-4xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-xs font-medium tracking-[0.32em] text-[#5B2C83] uppercase"
          >
            Gallery
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="text-balance text-2xl font-semibold leading-snug tracking-tight text-[#3D1B5F] sm:text-4xl md:text-6xl"
          >
            Moments of Hope, Community, and Love
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.14 }}
            className="prose-width mx-auto mt-5 text-balance leading-relaxed text-[#4E4E4E] sm:mt-8 md:text-lg"
          >
            Every photo tells the story of families, volunteers, and supporters coming together to make
            a difference.
          </motion.p>
        </div>
      </section>

      <SectionDivider />

      <section className="bg-[#FFFDF9] px-4 py-12 sm:px-5 sm:py-16 md:px-8 md:py-24">
        <FadeIn className="mx-auto max-w-7xl">
          <SectionHeader
            title="Community in Action"
            description="Browse by program or explore everything. Tap any image to view it full size."
          />
          <div className="mt-8 sm:mt-12">
            <GalleryExperience />
          </div>
        </FadeIn>
      </section>

      <section className="impact-bg px-4 py-14 text-white sm:px-5 sm:py-20 md:px-8 md:py-28">
        <FadeIn className="mx-auto max-w-7xl">
          <SectionHeader
            light
            eyebrow="Our Reach"
            title="Impact You Can See"
            description="These moments are made possible by donors, volunteers, and neighbors who believe in Emporia families."
          />
          <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 xl:grid-cols-4">
            {galleryImpactStats.map((stat, idx) => (
              <StatCard
                key={stat.label}
                label={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                index={idx}
              />
            ))}
          </div>
        </FadeIn>
      </section>

      <CTABlock
        title="Be Part of the Story"
        description="Your generosity and time help create the moments captured here—and the hope that continues long after each event ends."
        primaryLabel={CTA.donatePrimary}
        secondaryLabel={CTA.volunteerPrimary}
        secondaryHref="/contact"
      />
    </>
  );
}
