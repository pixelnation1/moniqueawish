"use client";

import { FadeIn } from "@/components/FadeIn";
import { SectionHeader } from "@/components/SectionHeader";
import { trustPillars } from "@/lib/site";
import { motion } from "framer-motion";

export function TrustPillarsSection() {
  return (
    <section className="bg-[#FFFDF9] px-4 py-14 sm:px-5 sm:py-20 md:px-8 md:py-28">
      <FadeIn className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Credibility"
          title="Why Supporters Trust Monique-A-Wish"
          description="Our mission is local, transparent, and rooted in love—built to earn the confidence of families, donors, and community partners."
        />
        <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {trustPillars.map((pillar, idx) => (
            <motion.article
              key={pillar.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              className="h-full rounded-2xl border border-[#5B2C83]/12 bg-white p-5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-6"
            >
              <span className="text-2xl" aria-hidden>
                {pillar.icon}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-[#3D1B5F]">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#4A4A4A]">{pillar.description}</p>
            </motion.article>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
