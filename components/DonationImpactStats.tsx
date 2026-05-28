"use client";

import { FadeIn } from "@/components/FadeIn";
import { SectionHeader } from "@/components/SectionHeader";
import { QualitativeStatCard } from "@/components/impact/QualitativeStatCard";
import { ImpactDisclaimer } from "@/components/impact/ImpactDisclaimer";
import { outreachHighlights } from "@/lib/site";

type DonationImpactStatsProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
};

export function DonationImpactStats({
  eyebrow = "Your Impact",
  title = "Hope, Measured in Community Action",
  description = "Your gift joins a local movement of volunteers, donors, and neighbors serving Emporia families with care.",
}: DonationImpactStatsProps) {
  return (
    <section className="bg-section-lavender px-4 py-14 sm:px-5 sm:py-20 md:px-8 md:py-28">
      <FadeIn className="mx-auto max-w-7xl">
        <SectionHeader eyebrow={eyebrow} title={title} description={description} />
        <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 xl:grid-cols-4">
          {outreachHighlights.map((stat, idx) => (
            <QualitativeStatCard
              key={stat.label}
              display={stat.display}
              label={stat.label}
              hint={stat.hint}
              index={idx}
              variant="brand"
            />
          ))}
        </div>
        <ImpactDisclaimer className="mt-8 sm:mt-10" />
      </FadeIn>
    </section>
  );
}
