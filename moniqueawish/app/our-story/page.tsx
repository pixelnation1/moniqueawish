import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { CTABlock } from "@/components/CTABlock";
import { LogoDisplay } from "@/components/LogoDisplay";
import { Button } from "@/components/ui/Button";
import { timeline } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Discover how Monique-A-Wish began in memory of Monique and grew into a community movement of compassion in Emporia, Kansas.",
};

export default function OurStoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title={"A Father's Promise. A Community's Purpose."}
        description="Monique-A-Wish was created in memory of Monique to help families in need through compassion, support, and year-round giving."
      >
        <Button href="/donate">Support Our Mission</Button>
        <Button href="/contact" variant="secondary">
          Get in Touch
        </Button>
      </PageHero>

      <section className="px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative flex min-h-[380px] items-center justify-center rounded-3xl border border-[#D4A017]/24 bg-white/75 px-6 py-10 shadow-xl shadow-[#5B2C83]/12">
            <div className="founder-logo-halo absolute inset-0 rounded-3xl" />
            <LogoDisplay size="centerpiece" />
            <div className="pointer-events-none absolute inset-4 rounded-2xl border border-[#F2C66D]/55" />
          </div>
          <div>
            <p className="text-balance leading-8 text-[#4A4A4A]">
              After losing his daughter Monique, her father chose to turn heartbreak into action. What began as
              one act of kindness grew into a nonprofit movement dedicated to helping families navigate
              life&apos;s hardest moments with dignity and care.
            </p>
            <blockquote className="mt-8 rounded-2xl border border-[#D4A017]/35 bg-[#F8F3EA] p-6 text-[#3D1B5F] shadow-sm">
              &ldquo;Monique&apos;s memory reminds us that love can still do incredible things. Every family we
              serve is part of that promise.&rdquo;
            </blockquote>
            <p className="mt-6 text-sm tracking-wide text-[#5B2C83] uppercase">
              Built with compassion. Sustained by community.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F3EA] px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-4xl">
          <SectionHeader
            eyebrow={"Monique's Legacy"}
            title="Love That Lives On"
            description="Her spirit continues through every gift given, every meal shared, and every family welcomed with open arms."
          />
          <p className="mt-8 text-center leading-8 text-[#4A4A4A]">
            Monique-A-Wish is more than a charity—it is a living tribute. We believe remembrance should inspire
            action, and that a single promise made in grief can become a beacon of hope for an entire community.
          </p>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-3xl">
          <SectionHeader eyebrow="Timeline" title="How We Grew Together" />
          <ol className="relative mt-12 space-y-10 border-l border-[#D4A017]/40 pl-8">
            {timeline.map((item) => (
              <li key={item.year} className="relative">
                <span className="absolute -left-[2.35rem] top-1 flex size-4 rounded-full bg-[#D4A017] ring-4 ring-[#FFFDF9]" />
                <p className="text-sm font-semibold tracking-wide text-[#5B2C83]">{item.year}</p>
                <h3 className="mt-1 text-xl text-[#3D1B5F]">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-[#4A4A4A]">{item.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-4xl rounded-3xl border border-[#5B2C83]/14 bg-white p-8 shadow-lg md:p-12">
          <SectionHeader
            align="left"
            title="Our Community Mission"
            description="We serve Emporia and surrounding communities with programs that meet real needs—holiday celebrations, school support, and emergency assistance delivered with warmth and respect."
          />
          <p className="mt-6 leading-8 text-[#4A4A4A]">
            Whether you donate, volunteer, or simply spread the word, you become part of Monique&apos;s legacy.
            Together, we turn grief into hope—one family at a time.
          </p>
          <Link href="/programs" className="mt-6 inline-block text-sm font-semibold text-[#5B2C83] hover:underline">
            View our programs →
          </Link>
        </div>
      </section>

      <CTABlock />
    </>
  );
}
