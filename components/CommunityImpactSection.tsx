"use client";

import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { IMAGE_SIZES } from "@/lib/images";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";

const impactCards = [
  {
    image: "/images/community.png",
    alt: "Monique-A-Wish community volunteers and families united at an outreach event in Emporia, Kansas",
    title: "Strength in Community",
    description:
      "Neighbors, volunteers, and partners come together to lift families with practical support, shared meals, and moments of genuine connection.",
    reverse: false,
  },
  {
    image: "/images/together.png",
    alt: "Families and supporters standing together at a Monique-A-Wish community event in Emporia, KS",
    title: "Together We Give More",
    description:
      "When our community stands united, every gift goes further—turning collective compassion into lasting hope for families across Emporia.",
    reverse: true,
  },
] as const;

export function CommunityImpactSection() {
  return (
    <section className="relative overflow-hidden bg-section-lavender px-4 py-14 sm:px-5 sm:py-20 md:px-8 md:py-32">
      <div className="section-glow right-[-60px] top-20 h-48 w-48 bg-[#E8DDF5]/60" />
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
        <SectionHeader
          eyebrow="Community Impact"
          title="Love in Action Across Emporia"
          description="Real faces, real families, and real moments of care—powered by a community that refuses to look away."
        />
        </motion.div>
        <div className="mt-10 space-y-8 sm:mt-16 sm:space-y-12 md:space-y-16">
          {impactCards.map((card, index) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group grid items-center gap-0 overflow-hidden rounded-2xl border border-[#5B2C83]/12 bg-white shadow-lg shadow-[#3D1B5F]/8 transition-all duration-300 hover:shadow-xl sm:rounded-3xl md:gap-12 lg:grid-cols-2"
            >
              <div
                className={`image-skeleton relative aspect-[4/3] overflow-hidden lg:aspect-auto lg:min-h-[340px] ${
                  card.reverse ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <OptimizedImage
                  src={card.image}
                  alt={card.alt}
                  fill
                  sizes={IMAGE_SIZES.impactSplit}
                  loading="lazy"
                  className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#3D1B5F]/30 via-[#3D1B5F]/5 to-[#F2C66D]/8" />
              </div>
              <div
                className={`px-5 py-6 sm:px-6 sm:pb-8 lg:px-10 lg:py-8 ${card.reverse ? "lg:order-1" : "lg:order-2"}`}
              >
                <div className="mb-3 inline-flex size-10 items-center justify-center rounded-full bg-[#E8DDF5] text-base text-[#5B2C83] sm:mb-4 sm:size-11 sm:text-lg">
                  <span aria-hidden>✦</span>
                </div>
                <h3 className="text-xl text-[#3D1B5F] sm:text-2xl md:text-3xl">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#4A4A4A] sm:mt-4 sm:leading-7 md:text-base">{card.description}</p>
                <Link
                  href="/impact"
                  className="mt-6 inline-flex text-sm font-semibold text-[#5B2C83] transition hover:text-[#D4A017]"
                >
                  See our impact →
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
