"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeader } from "@/components/SectionHeader";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { donationImpactStats } from "@/lib/site";

type DonationImpactStatsProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
};

export function DonationImpactStats({
  eyebrow = "Your Impact",
  title = "Hope, Measured in Lives Touched",
  description = "Behind every number is a family, a child, and a community standing together in Emporia.",
}: DonationImpactStatsProps) {
  return (
    <section className="bg-section-lavender px-4 py-14 sm:px-5 sm:py-20 md:px-8 md:py-28">
      <FadeIn className="mx-auto max-w-7xl">
        <SectionHeader eyebrow={eyebrow} title={title} description={description} />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {donationImpactStats.map((stat, idx) => (
            <motion.article
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-[#5B2C83]/12 bg-white p-6 text-center shadow-lg transition-shadow hover:shadow-xl"
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} tone="brand" />
              <p className="mt-2 text-sm text-[#5B2C83]">{stat.label}</p>
            </motion.article>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
