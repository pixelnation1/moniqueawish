import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "@/components/SectionHeader";
import { CTABlock } from "@/components/CTABlock";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Christmas Celebration",
  description:
    "Monique-A-Wish creates holiday memories filled with love, dignity, and joy through gifts, meals, and family celebration in Emporia, Kansas.",
};

const provides = [
  { icon: "🎁", label: "Christmas gifts for children" },
  { icon: "👕", label: "Clothing and essentials" },
  { icon: "🍽️", label: "Holiday meals" },
  { icon: "🎲", label: "Games and family activities" },
  { icon: "🎅", label: "Visits with Santa" },
  { icon: "💝", label: "Parent gift packages and family night support" },
] as const;

const helpOptions = [
  "Sponsor a family",
  "Donate gifts or essentials",
  "Volunteer during the event",
  "Help organize and distribute gifts",
  "Share the program with families in need",
] as const;

export default function ChristmasCelebrationPage() {
  return (
    <>
      <section className="relative bg-[#F8F3EA] px-5 pb-16 pt-6 md:px-8 md:pb-20 md:pt-10">
        <div className="section-glow left-[-80px] top-8 h-48 w-48 bg-[#F2C66D]/40" />
        <div className="section-glow right-[-60px] top-20 h-56 w-56 bg-[#E8DDF5]/70" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 text-xs tracking-[0.28em] text-[#5B2C83] uppercase">Programs</p>
            <h1 className="text-4xl text-[#3D1B5F] md:text-5xl">Christmas Celebration</h1>
            <p className="mt-4 text-2xl leading-snug text-[#5B2C83] md:text-3xl">
              Creating Holiday Memories Filled With Love, Dignity, and Joy
            </p>
            <p className="mt-6 leading-8 text-[#4E4E4E]">
              Monique-A-Wish brings families together during the holiday season through gifts, meals, games,
              decorations, visits with Santa, and a room full of carefully organized support created with love.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/donate">Donate Now</Button>
              <Button href="/contact" variant="secondary">
                Get Involved
              </Button>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[2rem] border border-[#5B2C83]/12 shadow-2xl shadow-[#3D1B5F]/15">
            <Image
              src="/images/moniquexmas.jpg"
              alt="Monique-A-Wish Christmas Celebration bringing holiday joy to families and children"
              width={900}
              height={700}
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-auto w-full object-cover object-center"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#3D1B5F]/20 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            title="What This Program Provides"
            description="A full holiday experience designed to honor every family with care, celebration, and practical support."
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

      <section className="bg-[#F8F3EA] px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-3xl">
          <SectionHeader title="Why It Matters" />
          <p className="mt-8 text-center leading-8 text-[#4A4A4A]">
            The Christmas Celebration is more than gift distribution. It is a gathering where families feel
            seen, celebrated, and surrounded by a community that cares—where children experience wonder and
            parents feel supported during a season that can bring both joy and stress.
          </p>
          <p className="mt-6 text-center leading-8 text-[#4A4A4A]">
            Every detail—from organized gift rooms to shared meals and time with Santa—is prepared with love,
            so families leave with memories that last long after the holidays end.
          </p>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-4xl">
          <SectionHeader
            title="How You Can Help"
            description="Join us in creating a Christmas experience that families will remember with gratitude and joy."
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
            to sponsor a family, donate gifts, or volunteer at the event.
          </p>
        </div>
      </section>

      <CTABlock
        title="Help Create a Christmas Memory"
        description="Your generosity fills the room with gifts, warmth, and the kind of holiday magic every child and family deserves."
        primaryLabel="Donate Now"
        primaryHref="/donate"
        secondaryLabel="Get Involved"
        secondaryHref="/contact"
      />
    </>
  );
}
