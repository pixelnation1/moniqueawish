"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/SectionHeader";
import { CTABlock } from "@/components/CTABlock";
import { ProgramCard } from "@/components/ProgramCard";
import { StatCard } from "@/components/StatCard";
import { CommunityImpactSection } from "@/components/CommunityImpactSection";
import { HopeSection } from "@/components/HopeSection";
import { SupportSection } from "@/components/SupportSection";
import { impactStats, programs } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="relative px-5 pb-20 pt-6 md:px-8 md:pt-10">
        <div className="section-glow left-[-120px] top-16 h-64 w-64 bg-[#F2C66D]/50" />
        <div className="section-glow right-[-100px] top-40 h-72 w-72 bg-[#E8DDF5]/80" />
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-5 text-xs tracking-[0.28em] text-[#5B2C83] uppercase">
              Turning grief into hope
            </p>
            <h1 className="text-balance text-4xl leading-tight text-[#2B2B2B] md:text-6xl">
              Turning Loss Into Love for Families in Need
            </h1>
            <p className="mt-6 max-w-xl text-balance text-base leading-8 text-[#4E4E4E] md:text-lg">
              Monique-A-Wish was born from love and remembrance. We honor Monique&apos;s legacy by lifting
              families through compassion, practical support, and a community that shows up all year long.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button href="/donate">Donate Now</Button>
              <Button href="/programs" variant="secondary">
                Get Involved
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="relative"
          >
            <div className="hero-overlay absolute inset-0 rounded-[2rem] border border-white/25" />
            <Image
              src="/images/moniquexmas.jpg"
              alt="Monique-A-Wish volunteers bringing holiday support to families"
              width={1400}
              height={1000}
              priority
              className="h-[440px] w-full rounded-[2rem] object-cover shadow-2xl shadow-[#3D1B5F]/30 transition duration-500 hover:scale-[1.02] md:h-[540px]"
            />
          </motion.div>
        </div>
      </section>

      <CommunityImpactSection />

      <HopeSection />

      <SupportSection className="bg-[#F8F3EA]" />

      <section className="px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Our Mission"
            title="Compassion That Shows Up"
            description="We exist to help families in need through community programs, year-round giving, and the enduring promise that love can outlast loss."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
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
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-[#5B2C83]/12 bg-white/80 p-6 shadow-sm"
              >
                <h3 className="text-xl text-[#3D1B5F]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#4A4A4A]">{item.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/our-story" className="text-sm font-semibold text-[#5B2C83] hover:underline">
              Read our full story →
            </Link>
          </div>
        </div>
      </section>

      <section className="impact-bg px-5 py-20 text-white md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            light
            title="Impact That Lasts All Year"
            description="Every contribution supports ongoing initiatives that restore stability, joy, and hope for families in need."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
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
          <div className="mt-10 text-center">
            <Link
              href="/impact"
              className="text-sm font-semibold text-[#F2C66D] underline decoration-[#D4A017] underline-offset-4"
            >
              Explore our full impact →
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            title="Featured Programs"
            description="Designed with empathy and delivered with consistency, our programs support families from the holidays to everyday emergencies."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {programs.map((program, idx) => (
              <ProgramCard key={program.title} {...program} index={idx} />
            ))}
          </div>
        </div>
      </section>

      <CTABlock />
    </>
  );
}
