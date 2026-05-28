"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/Button";
import { CTA } from "@/lib/cta";

const supportPoints = [
  {
    icon: "🎁",
    title: "Holiday & Seasonal Giving",
    text: "Christmas celebrations and seasonal outreach bring joy, gifts, and dignity to families during meaningful moments.",
  },
  {
    icon: "📚",
    title: "Education & Essentials",
    text: "Back-to-school support ensures children arrive prepared with supplies, encouragement, and confidence.",
  },
  {
    icon: "🤝",
    title: "Emergency Relief",
    text: "When crisis strikes, we respond with urgent aid—connecting families to resources and compassionate care.",
  },
] as const;

type SupportSectionProps = {
  showHeader?: boolean;
  className?: string;
};

export function SupportSection({ showHeader = true, className = "" }: SupportSectionProps) {
  return (
    <section className={`relative overflow-hidden px-4 py-14 sm:px-5 sm:py-20 md:px-8 md:py-32 ${className}`}>
      <div className="mx-auto max-w-7xl">
        {showHeader && (
          <SectionHeader
            eyebrow="How We Help"
            title="Support That Feels Human"
            description="Behind every program is a family—and behind every family is a community ready to help."
          />
        )}
        <div className={`grid items-center gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-14 ${showHeader ? "mt-10 sm:mt-16" : ""}`}>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65 }}
            className="group relative max-w-full overflow-hidden rounded-2xl border border-[#5B2C83]/12 shadow-xl shadow-[#3D1B5F]/12 transition-shadow duration-300 sm:rounded-3xl hover:shadow-2xl"
          >
            <Image
              src="/images/help.png"
              alt="Monique-A-Wish volunteers offering hands-on help to families in need"
              width={900}
              height={900}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-auto w-full object-contain bg-gradient-to-br from-[#F8F3EA] to-[#E8DDF5]/50 transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#3D1B5F]/20 via-transparent to-[#F2C66D]/5" />
          </motion.div>

          <div className="space-y-5">
            {supportPoints.map((point, index) => (
              <motion.article
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl border border-[#5B2C83]/10 bg-white p-5 shadow-md transition-all duration-300 sm:p-6 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex gap-4">
                  <span
                    className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#E8DDF5] text-xl"
                    aria-hidden
                  >
                    {point.icon}
                  </span>
                  <div>
                    <h3 className="text-lg text-[#3D1B5F] md:text-xl">{point.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-[#4A4A4A]">{point.text}</p>
                  </div>
                </div>
              </motion.article>
            ))}
            <div className="flex flex-wrap gap-4 pt-2">
              <Button href="/donate">{CTA.donatePrimary}</Button>
              <Link href="/contact" className="inline-flex items-center text-sm font-semibold text-[#5B2C83] hover:underline">
                {CTA.involvedPrimary} →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
