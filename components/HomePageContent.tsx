"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { IMAGE_SIZES } from "@/lib/images";
import { CTAButtonGroup } from "@/components/CTAButtonGroup";
import { Button } from "@/components/ui/Button";
import { GetHelpBanner } from "@/components/get-help/GetHelpBanner";
import { FeaturedDonationSection } from "@/components/FeaturedDonationSection";
import { SectionHeader } from "@/components/SectionHeader";
import { CTABlock } from "@/components/CTABlock";
import { ProgramCard } from "@/components/ProgramCard";
import { HomeImpactSection } from "@/components/impact/HomeImpactSection";
import { TrustPillarsSection } from "@/components/impact/TrustPillarsSection";
import { CommunityImpactSection } from "@/components/CommunityImpactSection";
import { HopeSection } from "@/components/HopeSection";
import { SupportSection } from "@/components/SupportSection";
import { FadeIn } from "@/components/FadeIn";
import { HomeSection } from "@/components/HomeSection";
import { DecorativeAccents } from "@/components/DecorativeAccents";
import { HomeFounderSection } from "@/components/founder/HomeFounderSection";
import { SectionDivider } from "@/components/SectionDivider";
import { CTA } from "@/lib/cta";
import { programs } from "@/lib/site";

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

export function HomePageContent() {
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
      <section className="relative overflow-hidden bg-[#FFFDF9] px-4 pb-14 pt-4 sm:px-5 sm:pb-20 sm:pt-6 md:px-8 md:pb-32 md:pt-12">
        <DecorativeAccents variant="hero" />
        <div className="section-glow left-[-120px] top-16 h-64 w-64 bg-[#F2C66D]/50" />
        <div className="section-glow right-[-100px] top-40 h-72 w-72 bg-[#E8DDF5]/80" />
        <div className="relative mx-auto grid max-w-7xl gap-8 sm:gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-14">
          <motion.div {...fadeUp}>
            <p className="mb-4 text-xs font-medium tracking-[0.32em] text-[#5B2C83] uppercase">
              Emporia, Kansas nonprofit
            </p>
            <h1 className="text-balance text-[1.75rem] font-semibold leading-[1.15] tracking-tight text-[#2B2B2B] sm:text-4xl md:text-6xl lg:text-7xl">
              Turning Loss Into Love for Families in Need
            </h1>
            <p className="prose-width mt-5 max-w-xl text-balance text-base leading-relaxed text-[#4E4E4E] sm:mt-8 md:text-lg">
              Monique-A-Wish is a community nonprofit in Emporia, KS providing holiday assistance,
              back-to-school support, emergency aid, and year-round family care in memory of Monique.
            </p>
            <CTAButtonGroup secondaryHref="/programs" />
            <div className="mt-5">
              <Button href="/get-help" variant="secondary" className="w-full sm:w-auto">
                {CTA.getHelp}
              </Button>
            </div>
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
            <div className="image-skeleton relative h-[260px] overflow-hidden rounded-2xl sm:h-[360px] sm:rounded-[2rem] md:h-[540px]">
              <OptimizedImage
                src="/images/moniquexmas.jpg"
                alt="Monique-A-Wish holiday assistance event serving families in Emporia, Kansas"
                fill
                sizes={IMAGE_SIZES.hero}
                priority
                fadeIn={false}
                className="object-cover object-center shadow-xl shadow-[#3D1B5F]/25 md:shadow-2xl"
              />
            </div>
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

      <HomeSection bg="white" accents>
        <FadeIn className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Our Mission"
            title="Compassion That Shows Up"
            description="We exist to help families in Emporia, Kansas through community programs, year-round giving, and the enduring promise that love can outlast loss."
          />
          <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-6 md:grid-cols-3">
            {missionItems.map((item, idx) => (
              <FadeIn key={item.title} delay={idx * 0.08}>
                <article className="h-full rounded-2xl border border-[#5B2C83]/12 bg-white/90 p-5 shadow-md transition-all duration-300 sm:p-7 hover:-translate-y-1 hover:shadow-lg">
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

      <HomeImpactSection />

      <SectionDivider />

      <TrustPillarsSection />

      <SectionDivider />

      <section className="px-4 py-10 sm:px-5 sm:py-14 md:px-8">
        <div className="mx-auto max-w-4xl">
          <GetHelpBanner />
        </div>
      </section>

      <SectionDivider />

      <HomeSection bg="lavender" accents>
        <FadeIn className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Programs"
            title="Featured Programs"
            description="Holiday assistance, back-to-school support, and emergency aid for Emporia, KS families—delivered with empathy and consistency."
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

      <SectionDivider />

      <HomeFounderSection />

      <CTABlock />
    </>
  );
}
