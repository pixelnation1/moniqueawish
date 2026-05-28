"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";

const impactCards = [
  {
    image: "/images/community.png",
    alt: "Monique-A-Wish volunteers and families united in community outreach",
    title: "Strength in Community",
    description:
      "Neighbors, volunteers, and partners come together to lift families with practical support, shared meals, and moments of genuine connection.",
    reverse: false,
  },
  {
    image: "/images/together.png",
    alt: "Families and supporters standing together at a Monique-A-Wish event",
    title: "Together We Give More",
    description:
      "When our community stands united, every gift goes further—turning collective compassion into lasting hope for families across Emporia.",
    reverse: true,
  },
] as const;

export function CommunityImpactSection() {
  return (
    <section className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Community Impact"
          title="Love in Action Across Emporia"
          description="Real faces, real families, and real moments of care—powered by a community that refuses to look away."
        />
        <div className="mt-14 space-y-10 md:space-y-14">
          {impactCards.map((card, index) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, delay: index * 0.1 }}
              className="group grid items-center gap-8 overflow-hidden rounded-3xl border border-[#5B2C83]/12 bg-white shadow-lg shadow-[#3D1B5F]/8 md:gap-12 lg:grid-cols-2"
            >
              <div
                className={`relative aspect-[4/3] overflow-hidden lg:aspect-auto lg:min-h-[340px] ${
                  card.reverse ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <Image
                  src={card.image}
                  alt={card.alt}
                  width={900}
                  height={675}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#3D1B5F]/25 via-transparent to-[#F2C66D]/10" />
              </div>
              <div
                className={`px-6 pb-8 lg:px-10 lg:py-8 ${card.reverse ? "lg:order-1" : "lg:order-2"}`}
              >
                <div className="mb-4 inline-flex size-11 items-center justify-center rounded-full bg-[#E8DDF5] text-lg text-[#5B2C83]">
                  <span aria-hidden>✦</span>
                </div>
                <h3 className="text-2xl text-[#3D1B5F] md:text-3xl">{card.title}</h3>
                <p className="mt-4 text-sm leading-8 text-[#4A4A4A] md:text-base">{card.description}</p>
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
