"use client";

import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeader } from "@/components/SectionHeader";
import { FounderPortrait } from "@/components/founder/FounderPortrait";
import { FounderQuoteCard } from "@/components/founder/FounderQuoteCard";

export function FounderStorySection() {
  return (
    <section className="bg-[#FFFDF9] px-4 py-14 sm:px-5 sm:py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 sm:gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-start lg:gap-14">
        <FadeIn className="lg:sticky lg:top-24">
          <FounderPortrait priority />
        </FadeIn>
        <div className="space-y-8 sm:space-y-10">
          <FadeIn delay={0.08}>
            <SectionHeader
              align="left"
              eyebrow="Founder"
              title="Founded with Love and Purpose"
              description="John Scott helped build and lead Monique-A-Wish—a mission born from remembrance and sustained through community care."
            />
            <div className="mt-8 space-y-5 text-sm leading-relaxed text-[#4A4A4A] sm:text-base sm:leading-8">
              <p>
                <strong className="font-semibold text-[#3D1B5F]">John Scott</strong> helped build and
                lead Monique-A-Wish as a way to honor his daughter Monique&apos;s memory and to serve
                families across Emporia with the same compassion he would want for his own loved ones.
              </p>
              <p>
                What began as a father&apos;s promise has grown into a community-rooted nonprofit—guided
                by volunteers, donors, and neighbors who believe every family deserves dignity, practical
                support, and someone willing to show up when life gets hard.
              </p>
              <p>
                Under John&apos;s leadership, the mission has remained clear: help families through{" "}
                <strong className="font-semibold text-[#3D1B5F]">holiday assistance</strong>,{" "}
                <strong className="font-semibold text-[#3D1B5F]">back-to-school support</strong>, and{" "}
                <strong className="font-semibold text-[#3D1B5F]">emergency aid</strong>—always with
                warmth, respect, and the heart of a community that cares.
              </p>
            </div>
            <Link
              href="/impact"
              className="mt-8 inline-flex text-sm font-semibold text-[#5B2C83] transition hover:text-[#D4A017]"
            >
              See our community impact →
            </Link>
          </FadeIn>
          <FadeIn delay={0.14}>
            <FounderQuoteCard variant="light" />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
