"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeader } from "@/components/SectionHeader";
import { CTABlock } from "@/components/CTABlock";
import { LogoDisplay } from "@/components/LogoDisplay";
import { CTAButtonGroup } from "@/components/CTAButtonGroup";
import { SectionDivider } from "@/components/SectionDivider";
import { DecorativeAccents } from "@/components/DecorativeAccents";
import { StoryQuote } from "@/components/our-story/StoryQuote";
import { storyTimeline, missionValues, storyQuotes } from "@/lib/site";
import { CTA } from "@/lib/cta";

const fadeEase = [0.22, 1, 0.36, 1] as const;

export function OurStoryPageContent() {
  return (
    <>
      {/* Documentary Hero */}
      <section className="story-hero-bg relative overflow-hidden px-4 pb-14 pt-6 sm:px-5 sm:pb-20 sm:pt-10 md:px-8 md:pb-28 md:pt-14">
        <DecorativeAccents variant="hero" />
        <div className="section-glow left-[-100px] top-12 h-64 w-64 bg-[#F2C66D]/40" />
        <div className="section-glow right-[-80px] top-32 h-72 w-72 bg-[#E8DDF5]/70" />
        <div className="relative mx-auto max-w-5xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: fadeEase }}
            className="mb-4 text-xs font-medium tracking-[0.32em] text-[#5B2C83] uppercase"
          >
            Our Story
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: fadeEase }}
            className="text-balance text-[1.75rem] font-semibold leading-snug tracking-tight text-[#3D1B5F] sm:text-4xl md:text-6xl lg:text-7xl"
          >
            A Father&apos;s Promise. A Community&apos;s Purpose.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease: fadeEase }}
            className="prose-width mx-auto mt-5 text-balance text-base leading-relaxed text-[#4E4E4E] sm:mt-8 md:text-lg"
          >
            Monique-A-Wish began as a way to honor Monique&apos;s memory and has grown into a
            community-driven mission bringing hope, dignity, and support to families in need.
          </motion.p>
        </div>
      </section>

      <SectionDivider />

      {/* Founder Story */}
      <section className="bg-[#FFFDF9] px-4 py-14 sm:px-5 sm:py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-8 sm:gap-12 lg:grid-cols-2 lg:items-center lg:gap-14">
          <FadeIn>
            <div className="relative flex min-h-[240px] items-center justify-center rounded-2xl border border-[#D4A017]/24 bg-white/80 px-4 py-8 shadow-xl shadow-[#5B2C83]/12 sm:min-h-[320px] sm:rounded-3xl sm:px-6 sm:py-10 md:min-h-[360px]">
              <div className="founder-logo-halo absolute inset-0 rounded-3xl" />
              <LogoDisplay size="centerpiece" />
              <div className="pointer-events-none absolute inset-4 rounded-2xl border border-[#F2C66D]/55" />
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <SectionHeader
              align="left"
              eyebrow="The Beginning"
              title="Founded in Love, Built for Families"
              description="A father's promise became a movement—and a community answered the call."
            />
            <div className="mt-8 space-y-5 leading-relaxed text-[#4A4A4A]">
              <p>
                Monique-A-Wish was founded in memory of Monique—a daughter whose light continues to
                inspire every act of service we offer. What began in grief became a mission rooted in
                love, remembrance, and a deep desire to give back to families walking difficult paths.
              </p>
              <p>
                From the start, this work has never been about wealth or status. It has been about
                heart—showing up for neighbors with the same compassion we would want for our own loved
                ones.
              </p>
              <p>
                Today, Monique-A-Wish helps families through{" "}
                <strong className="font-semibold text-[#3D1B5F]">Christmas celebrations</strong>,{" "}
                <strong className="font-semibold text-[#3D1B5F]">back-to-school support</strong>, and{" "}
                <strong className="font-semibold text-[#3D1B5F]">emergency assistance</strong>—programs
                designed to restore dignity and hope when it matters most.
              </p>
            </div>
            <Link
              href="/programs"
              className="mt-8 inline-flex text-sm font-semibold text-[#5B2C83] transition hover:text-[#D4A017]"
            >
              Explore our programs →
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Quotes */}
      <section className="bg-section-lavender px-4 py-14 sm:px-5 sm:py-20 md:px-8 md:py-28">
        <FadeIn className="mx-auto max-w-4xl">
          <SectionHeader
            eyebrow="In Their Words"
            title="A Mission From the Heart"
            description="These words capture the spirit behind everything we do."
          />
          <div className="mt-10 space-y-6 sm:mt-14 sm:space-y-8">
            {storyQuotes.map((item, idx) => (
              <FadeIn key={item.quote} delay={idx * 0.1}>
                <StoryQuote quote={item.quote} attribution={item.attribution} featured={idx === 0} />
              </FadeIn>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Warm imagery interlude */}
      <section className="relative px-4 py-10 sm:px-5 sm:py-12 md:px-8">
        <FadeIn className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] shadow-2xl shadow-[#3D1B5F]/15">
          <div className="hero-overlay pointer-events-none absolute inset-0 z-10 rounded-[2rem]" />
          <Image
            src="/images/together.png"
            alt="Monique-A-Wish families and volunteers united in community support"
            width={1400}
            height={700}
            className="h-[280px] w-full object-cover object-center md:h-[380px]"
          />
        </FadeIn>
      </section>

      {/* Timeline */}
      <section className="bg-[#F8F3EA] px-4 py-14 sm:px-5 sm:py-20 md:px-8 md:py-28">
        <FadeIn className="mx-auto max-w-3xl">
          <SectionHeader
            eyebrow="Our Journey"
            title="From One Act of Love to a Growing Mission"
            description="Each chapter of our story has been written by families, volunteers, and a community that believes in showing up."
          />
          <ol className="relative mt-10 space-y-0 sm:mt-16">
            {storyTimeline.map((item, idx) => (
              <FadeIn key={item.title} delay={idx * 0.08}>
                <li className="relative border-l-2 border-[#D4A017]/50 pb-8 pl-8 last:pb-0 sm:pb-12 sm:pl-10">
                  <span
                    className="absolute -left-[9px] top-1 flex size-4 rounded-full bg-[#D4A017] ring-4 ring-[#F8F3EA]"
                    aria-hidden
                  />
                  <p className="text-xs font-semibold tracking-[0.2em] text-[#5B2C83] uppercase">
                    Chapter {idx + 1}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-[#3D1B5F] md:text-2xl">{item.title}</h3>
                  <p className="prose-width mt-3 text-sm leading-relaxed text-[#4A4A4A] md:text-base">
                    {item.description}
                  </p>
                </li>
              </FadeIn>
            ))}
          </ol>
        </FadeIn>
      </section>

      {/* Mission Values */}
      <section className="px-4 py-14 sm:px-5 sm:py-20 md:px-8 md:py-28">
        <FadeIn className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="What Guides Us"
            title="Our Mission Values"
            description="These principles shape every program, every gift, and every moment we share with families."
          />
          <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {missionValues.map((value, idx) => (
              <FadeIn key={value.title} delay={idx * 0.06}>
                <article className="h-full rounded-2xl border border-[#5B2C83]/12 bg-white p-5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-7">
                  <span className="text-2xl" aria-hidden>
                    {value.icon}
                  </span>
                  <h3 className="mt-4 text-xl font-semibold text-[#3D1B5F]">{value.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#4A4A4A]">{value.description}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Why It Matters */}
      <section className="bg-section-lavender px-4 py-14 sm:px-5 sm:py-20 md:px-8 md:py-28">
        <FadeIn className="mx-auto max-w-4xl text-center">
          <SectionHeader
            eyebrow="Why It Matters"
            title="More Than Items—Moments That Matter"
            description="Monique-A-Wish is not just about giving things. It is about creating experiences where families feel seen, supported, and celebrated."
          />
          <div className="mt-10 space-y-6 text-left leading-relaxed text-[#4A4A4A] md:text-center">
            <p>
              A wrapped gift at Christmas. A backpack before the first day of school. Emergency supplies
              when crisis arrives unannounced—these are practical helps, but they carry something deeper:
              the message that someone cares.
            </p>
            <p>
              For grant partners, donors, and volunteers alike, our work represents accountable,
              community-rooted service with a clear origin story and a lasting purpose. We are proud to
              serve Emporia with transparency, compassion, and a commitment to grow responsibly.
            </p>
          </div>
          <div className="mt-12 flex justify-center">
            <CTAButtonGroup layout="row" />
          </div>
        </FadeIn>
      </section>

      <CTABlock
        title="Help Carry Monique's Legacy Forward"
        description="Every gift, every volunteer hour, and every shared story keeps Monique's memory alive—and brings hope to families who need it most."
        primaryLabel={CTA.donatePrimary}
        secondaryLabel={CTA.involvedPrimary}
      />
    </>
  );
}
