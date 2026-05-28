import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "@/components/SectionHeader";
import { CTABlock } from "@/components/CTABlock";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Back-to-School Support",
  description:
    "Monique-A-Wish provides backpacks, school supplies, and encouragement so students in Emporia, Kansas start the school year with confidence.",
};

const provides = [
  { icon: "🎒", label: "Backpacks" },
  { icon: "✏️", label: "School supplies" },
  { icon: "📚", label: "Basic classroom essentials" },
  { icon: "💜", label: "Encouragement and community support" },
] as const;

const helpOptions = [
  "Donate supplies",
  "Sponsor a student",
  "Volunteer during distribution events",
  "Share the program with families in need",
] as const;

export default function BackToSchoolSupportPage() {
  return (
    <>
      <section className="relative bg-[#F8F3EA] px-5 pb-16 pt-6 md:px-8 md:pb-20 md:pt-10">
        <div className="section-glow left-[-80px] top-8 h-48 w-48 bg-[#F2C66D]/40" />
        <div className="section-glow right-[-60px] top-20 h-56 w-56 bg-[#E8DDF5]/70" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 text-xs tracking-[0.28em] text-[#5B2C83] uppercase">Programs</p>
            <h1 className="text-4xl text-[#3D1B5F] md:text-5xl">Back-to-School Support</h1>
            <p className="mt-4 text-2xl leading-snug text-[#5B2C83] md:text-3xl">
              Helping Students Start the School Year With Confidence
            </p>
            <p className="mt-6 leading-8 text-[#4E4E4E]">
              Monique-A-Wish helps provide backpacks, school supplies, and encouragement to students and
              families who need extra support at the start of the school year.
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
              src="/images/backtoschool.png"
              alt="Monique-A-Wish back-to-school supplies and backpacks for students"
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
            description="Everything a student needs to walk into the classroom feeling ready and supported."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
            School supplies can be a real financial burden for families already working hard to make ends meet.
            When children lack the basics—backpacks, notebooks, pencils, and more—they may feel unprepared
            before the first bell even rings.
          </p>
          <p className="mt-6 text-center leading-8 text-[#4A4A4A]">
            Monique-A-Wish steps in so every child can start the year feeling prepared, confident, and cared
            for. A filled backpack is more than supplies—it is a message that their community believes in them.
          </p>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-4xl">
          <SectionHeader
            title="How You Can Help"
            description="There are many ways to support students and families through this program."
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
            to donate supplies or volunteer.
          </p>
        </div>
      </section>

      <CTABlock
        title="Help a Child Start Strong"
        description="Your generosity puts supplies in students' hands and hope in their hearts at the start of every school year."
        primaryLabel="Donate Now"
        primaryHref="/donate"
        secondaryLabel="Get Involved"
        secondaryHref="/contact"
      />
    </>
  );
}
