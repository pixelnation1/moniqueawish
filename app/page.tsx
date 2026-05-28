"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { CTAButtonGroup } from "@/components/CTAButtonGroup";
import { FeaturedDonationSection } from "@/components/FeaturedDonationSection";
import { SectionHeader } from "@/components/SectionHeader";
import { CTABlock } from "@/components/CTABlock";
import { ProgramCard } from "@/components/ProgramCard";
import { StatCard } from "@/components/StatCard";
import { CommunityImpactSection } from "@/components/CommunityImpactSection";
import { HopeSection } from "@/components/HopeSection";
import { SupportSection } from "@/components/SupportSection";
import { FadeIn } from "@/components/FadeIn";
import { HomeSection } from "@/components/HomeSection";
import { DecorativeAccents } from "@/components/DecorativeAccents";
import { SectionDivider } from "@/components/SectionDivider";
import { impactStats, programs } from "@/lib/site";

const missionItems = [
  {
    title: "Remember",
    text: "Honor Monique's spirit by keeping her memory alive in every act of service.",
  },
  {
    title: "Support",
    text: "Provide practical relief, dignity, and encouragement when families need it most.",
  },
  {
    title: "Unite",
    text: "Bring neighbors, volunteers, and partners together to multiply hope across Emporia.",
  },
] as const;

export default function HomePage() {
  const reducedMotion = useReducedMotion();
  const fadeUp = reducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 28 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
      };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#FFFDF9] px-4 pb-14 pt-4 sm:px-5 sm:pb-20 sm:pt-6 md:px-8 md:pb-32 md:pt-12">
        <DecorativeAccents variant="hero" />
        <div className="section-glow left-[-120px] top-16 h-64 w-64 bg-[#F2C66D]/50" />
        <div className="section-glow right-[-100px] top-40 h-72 w-72 bg-[#E8DDF5]/80" />
        <div className="relative mx-auto grid max-w-7xl gap-8 sm:gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-14">
          <motion.div {...fadeUp}>
            <p className="mb-4 text-xs font-medium tracking-[0.32em] text-[#5B2C83] uppercase">
              Turning grief into hope
            </p>
            <h1 className="text-balance text-[1.75rem] font-semibold leading-[1.15] tracking-tight text-[#2B2B2B] sm:text-4xl md:text-6xl lg:text-7xl">
              Turning Loss Into Love for Families in Need
            </h1>
            <p className="prose-width mt-5 max-w-xl text-balance text-base leading-relaxed text-[#4E4E4E] sm:mt-8 md:text-lg">
              Monique-A-Wish was born from love and remembrance. We honor Monique&apos;s legacy by lifting
              families through compassion, practical support, and a community that shows up all year long.
            </p>
            <CTAButtonGroup secondaryHref="/programs" />
          </motion.div>

          <motion.div
            {...(reducedMotion
              ? {}
              : {
                  initial: { opacity: 0, scale: 0.97 },
                  animate: { opacity: 1, scale: 1 },
                  transition: { duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] },
                })}
            className="relative"
          >
            <div className="hero-overlay absolute inset-0 z-10 rounded-[2rem] border border-white/25" />
            <Image
              src="/images/moniquexmas.jpg"
              alt="Monique-A-Wish volunteers bringing holiday support to families"
              width={1400}
              height={1000}
              priority
              className="h-[260px] w-full max-w-full rounded-2xl object-cover object-center shadow-xl shadow-[#3D1B5F]/25 transition-transform duration-700 ease-out sm:h-[360px] sm:rounded-[2rem] md:h-[540px] md:shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      <CommunityImpactSection />

      <SectionDivider />

      <HopeSection />

      <SectionDivider />

      <FeaturedDonationSection />

      <SectionDivider />

      <SupportSection className="bg-section-cream !py-14 sm:!py-20 md:!py-32" />

      <SectionDivider />

      {/* Mission */}
      <HomeSection bg="white" accents>
        <FadeIn className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Our Mission"
            title="Compassion That Shows Up"
            description="We exist to help families in need through community programs, year-round giving, and the enduring promise that love can outlast loss."
          />
          <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-6 md:grid-cols-3">
            {missionItems.map((item, idx) => (
              <FadeIn key={item.title} delay={idx * 0.08}>
                <article className="h-full rounded-2xl border border-[#5B2C83]/12 bg-white/90 p-7 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <h3 className="text-xl font-semibold text-[#3D1B5F]">{item.title}</h3>
                  <p className="prose-width mt-4 text-sm leading-relaxed text-[#4A4A4A]">{item.text}</p>
                </article>
              </FadeIn>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/our-story"
              className="text-sm font-semibold text-[#5B2C83] transition hover:text-[#D4A017]"
            >
              Read our full story →
            </Link>
          </div>
        </FadeIn>
      </HomeSection>

      <SectionDivider />

      {/* Impact */}
      <HomeSection bg="impact" className="!text-white">
        <FadeIn className="mx-auto max-w-7xl">
          <SectionHeader
            light
            eyebrow="Our Impact"
            title="Impact That Lasts All Year"
            description="Every contribution supports ongoing initiatives that restore stability, joy, and hope for families in need."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {impactStats.map((stat, idx) => (
              <StatCard
                key={stat.label}
                label={stat.label}
                value={stat.value}
                suffix={"suffix" in stat ? stat.suffix : ""}
                display={"display" in stat ? stat.display : undefined}
                index={idx}
              />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/impact"
              className="text-sm font-semibold text-[#F2C66D] underline decoration-[#D4A017] decoration-2 underline-offset-4 transition hover:text-[#F2C66D]/90"
            >
              Explore our full impact →
            </Link>
          </div>
        </FadeIn>
      </HomeSection>

      <SectionDivider />

      {/* Programs */}
      <HomeSection bg="lavender" accents>
        <FadeIn className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Programs"
            title="Featured Programs"
            description="Designed with empathy and delivered with consistency, our programs support families from the holidays to everyday emergencies."
          />
          <div className="mt-10 grid gap-5 sm:mt-14 sm:gap-8 lg:grid-cols-3">
            {programs.map((program, idx) => (
              <ProgramCard
                key={program.title}
                title={program.title}
                description={program.description}
                image={program.image}
                href={"href" in program ? program.href : "/programs"}
                index={idx}
              />
            ))}
          </div>
        </FadeIn>
      </HomeSection>

      <CTABlock />
    </>
  );
}
