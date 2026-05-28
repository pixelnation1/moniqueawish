"use client";

import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeader } from "@/components/SectionHeader";
import { FounderPortrait } from "@/components/founder/FounderPortrait";
import { FOUNDER } from "@/lib/site";

const visionPoints = [
  {
    title: "Vision for the organization",
    text: "Monique-A-Wish exists to turn remembrance into action—helping Emporia families feel seen, supported, and celebrated through programs built on compassion and dignity.",
  },
  {
    title: "Long-term community mission",
    text: "Founder John Scott envisions a nonprofit that grows responsibly alongside the community—expanding outreach while keeping every gift personal, every event welcoming, and every family treated with respect.",
  },
  {
    title: "Sustainable support and outreach",
    text: "Through volunteer power, transparent stewardship, and partnerships, the mission is to build year-round capacity for holiday, school, and emergency assistance that families can count on.",
  },
] as const;

export function FounderVisionSection() {
  return (
    <section className="relative overflow-hidden bg-[#FFFDF9] px-4 py-12 sm:px-5 sm:py-16 md:px-8 md:py-20">
      <div className="section-glow right-[-80px] top-16 h-56 w-56 bg-[#E8DDF5]/60" />
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
        <FadeIn>
          <FounderPortrait />
        </FadeIn>
        <FadeIn delay={0.1}>
          <SectionHeader
            align="left"
            eyebrow="Founder Leadership"
            title="A Vision Carried Forward with Care"
            description={`${FOUNDER.name} continues to guide Monique-A-Wish with a focus on sustainable community impact and faithful service to families in need.`}
          />
          <ul className="mt-8 space-y-6">
            {visionPoints.map((point) => (
              <li
                key={point.title}
                className="rounded-2xl border border-[#5B2C83]/10 bg-white p-5 shadow-sm sm:p-6"
              >
                <h3 className="text-base font-semibold text-[#3D1B5F] sm:text-lg">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4A4A4A] sm:text-base">{point.text}</p>
              </li>
            ))}
          </ul>
          <Link
            href="/our-story"
            className="mt-8 inline-flex text-sm font-semibold text-[#5B2C83] transition hover:text-[#D4A017]"
          >
            Learn more about our story →
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
