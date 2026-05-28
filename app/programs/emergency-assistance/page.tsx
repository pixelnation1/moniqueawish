import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "@/components/SectionHeader";
import { CTABlock } from "@/components/CTABlock";
import { CTAButtonGroup } from "@/components/CTAButtonGroup";
import { DonateBanner } from "@/components/DonateBanner";
import { CTA } from "@/lib/cta";

export const metadata: Metadata = {
  title: "Emergency Assistance",
  description:
    "Monique-A-Wish provides urgent support to families in Emporia, Kansas facing unexpected hardship through essential items, direct aid, and community resources.",
};

const provides = [
  { icon: "🍎", label: "Emergency food support" },
  { icon: "👕", label: "Clothing and basic essentials" },
  { icon: "🧴", label: "Hygiene and household items" },
  { icon: "🔗", label: "Resource connections" },
  { icon: "🏠", label: "Short-term family support" },
] as const;

const helpOptions = [
  "Donate emergency supplies",
  "Sponsor a family",
  "Volunteer with sorting or distribution",
  "Share the program with families in need",
] as const;

export default function EmergencyAssistancePage() {
  return (
    <>
      <section className="relative bg-[#F8F3EA] px-4 pb-12 pt-4 sm:px-5 sm:pb-16 sm:pt-6 md:px-8 md:pb-20 md:pt-10">
        <div className="section-glow left-[-80px] top-8 h-48 w-48 bg-[#F2C66D]/40" />
        <div className="section-glow right-[-60px] top-20 h-56 w-56 bg-[#E8DDF5]/70" />
        <div className="relative mx-auto grid max-w-7xl gap-8 sm:gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 text-xs tracking-[0.28em] text-[#5B2C83] uppercase sm:mb-4">Programs</p>
            <h1 className="text-2xl font-semibold leading-snug text-[#3D1B5F] sm:text-4xl md:text-5xl">Emergency Assistance</h1>
            <p className="mt-3 text-lg leading-snug text-[#5B2C83] sm:mt-4 sm:text-2xl md:text-3xl">
              Helping Families When Life Hits Hard
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[#4E4E4E] sm:mt-6 sm:text-base sm:leading-8">
              Monique-A-Wish provides urgent support to families facing unexpected hardship by helping connect
              them with essential items, direct aid, and community resources when they need it most.
            </p>
            <div className="mt-8">
              <CTAButtonGroup layout="stack" />
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-[#5B2C83]/12 shadow-xl shadow-[#3D1B5F]/15 sm:rounded-[2rem] sm:shadow-2xl">
            <Image
              src="/images/emergancyservices.png"
              alt="Monique-A-Wish emergency assistance supplies and support for families in crisis"
              width={900}
              height={700}
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-[220px] w-full object-cover object-center sm:h-auto sm:max-h-[420px]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#3D1B5F]/20 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-5 sm:py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            title="What This Program Provides"
            description="Practical relief and compassionate connections when families face sudden crisis."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {provides.map((item) => (
              <article
                key={item.label}
                className="rounded-2xl border border-[#5B2C83]/12 bg-white p-6 text-center shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                <span className="text-3xl" aria-hidden>
                  {item.icon}
                </span>
                <p className="mt-4 font-semibold text-[#3D1B5F]">{item.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8F3EA] px-4 py-12 sm:px-5 sm:py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-3xl">
          <SectionHeader title="Why It Matters" />
          <p className="mt-8 text-center leading-8 text-[#4A4A4A]">
            Emergencies can happen fast—a job loss, a medical crisis, a sudden expense—and families often need
            help right away. In those moments, dignity and compassion matter just as much as the supplies
            themselves.
          </p>
          <p className="mt-6 text-center leading-8 text-[#4A4A4A]">
            Monique-A-Wish stands beside families with immediate support and resource connections so they can
            breathe, regroup, and take the next step forward. No one should face a crisis alone.
          </p>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-5 sm:py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-4xl">
          <SectionHeader
            title="How You Can Help"
            description="Your generosity and time can make an immediate difference for a family in crisis."
          />
          <ul className="mt-10 space-y-4">
            {helpOptions.map((option) => (
              <li
                key={option}
                className="flex items-start gap-4 rounded-2xl border border-[#5B2C83]/10 bg-white px-6 py-4 shadow-sm"
              >
                <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-[#E8DDF5] text-sm text-[#5B2C83]">
                  ✓
                </span>
                <span className="text-[#4A4A4A]">{option}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-center text-sm text-[#5B2C83]">
            Questions?{" "}
            <Link href="/contact" className="font-semibold underline hover:text-[#D4A017]">
              Contact us
            </Link>{" "}
            to donate supplies, sponsor a family, or volunteer.
          </p>
        </div>
      </section>

      <DonateBanner
        title="Be There When a Family Needs Help Most"
        description="Your support delivers urgent relief, restores hope, and reminds families that their community cares."
      />

      <CTABlock
        title="Be There When a Family Needs Help Most"
        description="Your support delivers urgent relief, restores hope, and reminds families that their community cares."
        primaryLabel={CTA.donatePrimary}
        secondaryLabel={CTA.involvedPrimary}
      />
    </>
  );
}
