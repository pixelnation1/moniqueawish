import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "@/components/SectionHeader";
import { CTABlock } from "@/components/CTABlock";
import { CTAButtonGroup } from "@/components/CTAButtonGroup";
import { DonateBanner } from "@/components/DonateBanner";
import { GetHelpBanner } from "@/components/get-help/GetHelpBanner";
import { CTA } from "@/lib/cta";
import { pageSeo } from "@/lib/seo";

export const metadata = pageSeo.christmas;

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
      <section className="relative bg-[#F8F3EA] px-4 pb-12 pt-4 sm:px-5 sm:pb-16 sm:pt-6 md:px-8 md:pb-20 md:pt-10">
        <div className="section-glow left-[-80px] top-8 h-48 w-48 bg-[#F2C66D]/40" />
        <div className="section-glow right-[-60px] top-20 h-56 w-56 bg-[#E8DDF5]/70" />
        <div className="relative mx-auto grid max-w-7xl gap-8 sm:gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 text-xs tracking-[0.28em] text-[#5B2C83] uppercase sm:mb-4">Programs</p>
            <h1 className="text-2xl font-semibold leading-snug text-[#3D1B5F] sm:text-4xl md:text-5xl">Christmas Celebration</h1>
            <p className="mt-3 text-lg font-medium leading-snug text-[#5B2C83] sm:mt-4 sm:text-2xl md:text-3xl">
              Creating Holiday Memories Filled With Love, Dignity, and Joy
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[#4E4E4E] sm:mt-6 sm:text-base sm:leading-8">
              Monique-A-Wish brings families together during the holiday season through gifts, meals, games,
              decorations, visits with Santa, and a room full of carefully organized support created with love.
            </p>
            <div className="mt-8">
              <CTAButtonGroup layout="stack" />
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-[#5B2C83]/12 shadow-xl shadow-[#3D1B5F]/15 sm:rounded-[2rem] sm:shadow-2xl">
            <Image
              src="/images/moniquexmas.jpg"
              alt="Christmas Celebration holiday assistance for Emporia, Kansas families at Monique-A-Wish"
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
            description="A full holiday experience designed to honor every family with care, celebration, and practical support."
          />
          <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {provides.map((item) => (
              <article
                key={item.label}
                className="rounded-2xl border border-[#5B2C83]/12 bg-white p-6 text-center shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                <span className="text-3xl" aria-hidden>
                  {item.icon}
                </span>
                <h3 className="mt-4 text-base font-semibold text-[#3D1B5F]">{item.label}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8F3EA] px-4 py-12 sm:px-5 sm:py-16 md:px-8 md:py-20">
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

      <section className="px-4 py-12 sm:px-5 sm:py-16 md:px-8 md:py-20">
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

      <section className="bg-[#F8F3EA] px-4 py-10 sm:px-5 sm:py-14 md:px-8">
        <div className="mx-auto max-w-4xl">
          <GetHelpBanner compact />
        </div>
      </section>

      <DonateBanner
        title="Help Create a Christmas Memory"
        description="Your generosity fills the room with gifts, warmth, and the kind of holiday magic every child and family deserves."
      />

      <CTABlock
        title="Help Create a Christmas Memory"
        description="Your generosity fills the room with gifts, warmth, and the kind of holiday magic every child and family deserves."
        primaryLabel={CTA.donatePrimary}
        secondaryLabel={CTA.involvedPrimary}
      />
    </>
  );
}
