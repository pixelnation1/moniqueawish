"use client";

import { FadeIn } from "@/components/FadeIn";
import { SectionHeader } from "@/components/SectionHeader";
import { communityPartnerPlaceholders } from "@/lib/site";
import { motion } from "framer-motion";

export function CommunityPartnersSection() {
  return (
    <section className="bg-section-lavender px-4 py-14 sm:px-5 sm:py-20 md:px-8 md:py-28">
      <FadeIn className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Partnerships"
          title="Community Partners Make This Possible"
          description="Monique-A-Wish is strengthened by neighbors, businesses, faith communities, and donors. Partner logos and names will be featured here as formal collaborations are confirmed."
        />
        <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {communityPartnerPlaceholders.map((partner, idx) => (
            <motion.article
              key={partner.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="flex h-full flex-col rounded-2xl border border-dashed border-[#5B2C83]/25 bg-white/90 p-5 text-center shadow-sm sm:p-6"
            >
              <div className="mx-auto mb-4 flex h-14 w-full max-w-[12rem] items-center justify-center rounded-xl bg-[#E8DDF5]/60 text-xs font-semibold tracking-wide text-[#5B2C83]/70 uppercase">
                Partner placeholder
              </div>
              <h3 className="text-lg font-semibold text-[#3D1B5F]">{partner.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[#4A4A4A]">{partner.description}</p>
            </motion.article>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed text-[#5B2C83]/70 sm:text-sm">
          Interested in partnering?{" "}
          <a href="/contact" className="font-semibold text-[#5B2C83] underline underline-offset-2">
            Contact us
          </a>{" "}
          to explore sponsorship, in-kind support, or volunteer collaboration.
        </p>
      </FadeIn>
    </section>
  );
}
