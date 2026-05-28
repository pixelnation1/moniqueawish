"use client";

import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeader } from "@/components/SectionHeader";
import { QualitativeStatCard } from "@/components/impact/QualitativeStatCard";
import { ImpactDisclaimer } from "@/components/impact/ImpactDisclaimer";
import { TransparencyMattersSection } from "@/components/impact/TransparencyMattersSection";
import { FounderVisionSection } from "@/components/founder/FounderVisionSection";
import { CommunityPartnersSection } from "@/components/impact/CommunityPartnersSection";
import { ImpactGrowthCTA } from "@/components/impact/ImpactGrowthCTA";
import {
  homepageImpactStats,
  programImpactBreakdown,
  volunteerImpactItems,
  timeline,
  testimonials,
  transparencyPoints,
} from "@/lib/site";

export function ImpactPageContent() {
  return (
    <>
      <section className="impact-bg px-4 py-12 text-white sm:px-5 sm:py-16 md:px-8 md:py-20">
        <FadeIn className="mx-auto max-w-7xl">
          <SectionHeader
            light
            eyebrow="Community Impact"
            title="A Mission Measured in Presence, Not Just Numbers"
            description="Monique-A-Wish shows up for Emporia families through holiday celebrations, school support, emergency aid, and year-round care—powered by volunteers and community generosity."
          />
          <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 xl:grid-cols-4">
            {homepageImpactStats.map((stat, idx) => (
              <QualitativeStatCard
                key={stat.label}
                display={stat.display}
                label={stat.label}
                hint={stat.hint}
                icon={stat.icon}
                index={idx}
                variant="light"
              />
            ))}
          </div>
          <ImpactDisclaimer className="mt-8 sm:mt-10" light />
        </FadeIn>
      </section>

      <section className="px-4 py-12 sm:px-5 sm:py-16 md:px-8 md:py-20">
        <FadeIn className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Programs"
            title="Program Impact Breakdown"
            description="Each initiative addresses a real need—with dignity, consistency, and local heart."
          />
          <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-6 lg:grid-cols-3">
            {programImpactBreakdown.map((program) => (
              <Link
                key={program.title}
                href={program.href}
                className="group flex h-full flex-col rounded-2xl border border-[#5B2C83]/12 bg-[#F8F3EA] p-5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#5B2C83]/22 hover:shadow-lg sm:p-6"
              >
                <span className="text-2xl" aria-hidden>
                  {program.icon}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-[#3D1B5F] group-hover:text-[#5B2C83]">
                  {program.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[#4A4A4A]">{program.description}</p>
                <span className="mt-4 text-sm font-semibold text-[#5B2C83]">Learn more →</span>
              </Link>
            ))}
          </div>
        </FadeIn>
      </section>

      <section className="bg-[#F8F3EA] px-4 py-12 sm:px-5 sm:py-16 md:px-8 md:py-20">
        <FadeIn className="mx-auto max-w-4xl">
          <TransparencyMattersSection />
        </FadeIn>
      </section>

      <section className="px-4 py-12 sm:px-5 sm:py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-4xl rounded-2xl border border-[#5B2C83]/14 bg-white p-6 shadow-lg sm:rounded-3xl sm:p-8 md:p-10">
          <SectionHeader
            align="left"
            eyebrow="Stewardship"
            title="Donation Transparency"
            description="Your generosity fuels direct community impact. We are committed to responsible stewardship and clear communication as our outreach grows."
          />
          <ul className="mt-6 space-y-3 text-sm leading-relaxed text-[#4A4A4A]">
            {transparencyPoints.map((point) => (
              <li key={point} className="flex gap-2">
                <span className="shrink-0 text-[#D4A017]" aria-hidden>
                  •
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-section-lavender px-4 py-12 sm:px-5 sm:py-16 md:px-8 md:py-20">
        <FadeIn className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Volunteers"
            title="Volunteer Impact"
            description="Hands and hearts across Emporia make every program possible—from setup to the moment a family feels welcomed."
          />
          <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-6 md:grid-cols-3">
            {volunteerImpactItems.map((item) => (
              <article
                key={item.title}
                className="h-full rounded-2xl border border-[#5B2C83]/12 bg-white p-5 shadow-md sm:p-6"
              >
                <h3 className="text-lg font-semibold text-[#3D1B5F]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#4A4A4A]">{item.description}</p>
              </article>
            ))}
          </div>
        </FadeIn>
      </section>

      <section className="px-4 py-12 sm:px-5 sm:py-16 md:px-8 md:py-20">
        <FadeIn className="mx-auto max-w-3xl">
          <SectionHeader
            eyebrow="Our Journey"
            title="Annual Growth Timeline"
            description="From a promise born in grief to a growing movement of compassion—each chapter reflects community support and expanding outreach."
          />
          <ol className="relative mt-10 space-y-0 sm:mt-14">
            {timeline.map((item) => (
              <li
                key={item.year}
                className="relative border-l-2 border-[#D4A017]/50 pb-8 pl-8 last:pb-0 sm:pb-12 sm:pl-10"
              >
                <span
                  className="absolute -left-[9px] top-1 flex size-4 rounded-full bg-[#D4A017] ring-4 ring-[#FFFDF9]"
                  aria-hidden
                />
                <p className="text-xs font-semibold tracking-[0.2em] text-[#5B2C83] uppercase">{item.year}</p>
                <h3 className="mt-2 text-lg font-semibold text-[#3D1B5F] sm:text-xl">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4A4A4A]">{item.description}</p>
              </li>
            ))}
          </ol>
        </FadeIn>
      </section>

      <section className="bg-[#F8F3EA] px-4 py-12 sm:px-5 sm:py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeader title="Voices from Our Community" />
          <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <blockquote
                key={t.author}
                className="rounded-2xl border border-[#D4A017]/30 bg-white p-5 shadow-sm sm:p-6"
              >
                <p className="text-sm leading-relaxed text-[#4A4A4A]">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-4 text-sm font-semibold text-[#5B2C83]">— {t.author}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <FounderVisionSection />

      <CommunityPartnersSection />
      <ImpactGrowthCTA />
    </>
  );
}
