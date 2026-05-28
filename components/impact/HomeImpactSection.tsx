"use client";

import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeader } from "@/components/SectionHeader";
import { QualitativeStatCard } from "@/components/impact/QualitativeStatCard";
import { ImpactDisclaimer } from "@/components/impact/ImpactDisclaimer";
import { homepageImpactStats } from "@/lib/site";

export function HomeImpactSection() {
  return (
    <section className="impact-bg px-4 py-14 text-white sm:px-5 sm:py-20 md:px-8 md:py-32">
      <FadeIn className="mx-auto max-w-7xl">
        <SectionHeader
          light
          eyebrow="Our Impact"
          title="Serving Families With Consistency and Care"
          description="Monique-A-Wish has spent more than a decade showing up for Emporia families—through holidays, school seasons, emergencies, and everyday needs."
        />
        <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 xl:grid-cols-4">
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
        <div className="mt-8 text-center sm:mt-10">
          <Link
            href="/impact"
            className="text-sm font-semibold text-[#F2C66D] underline decoration-[#D4A017] decoration-2 underline-offset-4 transition hover:text-[#F2C66D]/90"
          >
            Explore our full impact →
          </Link>
        </div>
      </FadeIn>
    </section>
  );
}
