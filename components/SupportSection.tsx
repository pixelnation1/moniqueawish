"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/Button";

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
    <section className={`px-5 py-20 md:px-8 md:py-28 ${className}`}>
      <div className="mx-auto max-w-7xl">
        {showHeader && (
          <SectionHeader
            eyebrow="How We Help"
            title="Support That Feels Human"
            description="Behind every program is a family—and behind every family is a community ready to help."
          />
        )}
        <div className={`grid items-center gap-12 lg:grid-cols-2 ${showHeader ? "mt-14" : ""}`}>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65 }}
            className="relative overflow-hidden rounded-3xl border border-[#5B2C83]/12 shadow-xl shadow-[#3D1B5F]/12"
          >
            <Image
              src="/images/help.png"
              alt="Monique-A-Wish volunteers offering hands-on help to families in need"
              width={900}
              height={900}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-auto w-full object-contain bg-gradient-to-br from-[#F8F3EA] to-[#E8DDF5]/50"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#3D1B5F]/15 via-transparent to-transparent" />
          </motion.div>

          <div className="space-y-5">
            {supportPoints.map((point, index) => (
              <motion.article
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl border border-[#5B2C83]/10 bg-white p-6 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
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
              <Button href="/programs">View Programs</Button>
              <Link href="/contact" className="inline-flex items-center text-sm font-semibold text-[#5B2C83] hover:underline">
                Volunteer with us →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
