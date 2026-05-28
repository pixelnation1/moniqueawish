"use client";

import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeader } from "@/components/SectionHeader";
import { DecorativeAccents } from "@/components/DecorativeAccents";
import { FounderPortrait } from "@/components/founder/FounderPortrait";
import { FounderQuoteCard } from "@/components/founder/FounderQuoteCard";
import { FOUNDER } from "@/lib/site";

export function HomeFounderSection() {
  return (
    <section className="relative overflow-hidden bg-section-cream px-4 py-14 sm:px-5 sm:py-20 md:px-8 md:py-28">
      <DecorativeAccents variant="section" />
      <div className="section-glow left-[-80px] bottom-8 h-48 w-48 bg-[#E8DDF5]/70" />
      <div className="section-glow right-[-60px] top-12 h-56 w-56 bg-[#F2C66D]/30" />
      <FadeIn className="relative mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Leadership"
          title="Built Through Community Leadership"
          description={FOUNDER.homeLeadershipCopy}
        />
        <div className="mt-10 grid items-start gap-8 sm:mt-14 sm:gap-10 lg:grid-cols-[minmax(0,280px)_1fr] lg:gap-12 xl:grid-cols-[minmax(0,320px)_1fr]">
          <FounderPortrait />
          <div className="space-y-6">
            <FounderQuoteCard />
            <p className="text-sm leading-relaxed text-[#4A4A4A] sm:text-base">
              From holiday celebrations to year-round emergency support, Monique-A-Wish reflects the
              values John Scott set at the beginning—service rooted in love, remembrance, and a
              community that refuses to let families walk alone.
            </p>
            <Link
              href="/our-story"
              className="inline-flex text-sm font-semibold text-[#5B2C83] transition hover:text-[#D4A017]"
            >
              Read John&apos;s story →
            </Link>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
