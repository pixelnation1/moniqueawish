import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { CTABlock } from "@/components/CTABlock";
import { StatCard } from "@/components/StatCard";
import { impactStats, testimonials } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impact",
  description:
    "See how Monique-A-Wish supports families through measurable impact, community outreach, and transparent giving.",
};

export default function ImpactPage() {
  return (
    <>
      <PageHero
        dark
        eyebrow="Our Impact"
        title="Hope Measured in Lives Touched"
        description="Every gift, volunteer hour, and partnership helps families experience dignity, joy, and stability throughout the year."
      />

      <section className="impact-bg px-4 py-12 sm:px-5 sm:py-16 text-white md:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            light
            title="By the Numbers"
            description="These figures represent real families, real moments, and real change in our community."
          />
          <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-2 xl:grid-cols-4">
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
        </div>
      </section>

      <section className="px-4 py-12 sm:px-5 sm:py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            title="Families Helped"
            description="From holiday celebrations to emergency aid, we walk alongside families with compassion—not just transactions."
          />
          <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-6 md:grid-cols-3">
            {[
              "Holiday gift and meal distributions for families facing hardship.",
              "Back-to-school supplies so children start the year prepared and confident.",
              "Emergency assistance for unexpected crises—utilities, essentials, and more.",
            ].map((text) => (
              <article
                key={text}
                className="rounded-2xl border border-[#5B2C83]/12 bg-[#F8F3EA] p-5 sm:p-6"
              >
                <p className="text-sm leading-7 text-[#4A4A4A]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8F3EA] px-4 py-12 sm:px-5 sm:py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeader title="Voices from Our Community" />
          <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <blockquote
                key={t.author}
                className="rounded-2xl border border-[#D4A017]/30 bg-white p-5 shadow-sm sm:p-6"
              >
                <p className="text-sm leading-7 text-[#4A4A4A]">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-4 text-sm font-semibold text-[#5B2C83]">— {t.author}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-5 sm:py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-4xl">
          <SectionHeader
            title="Community Outreach"
            description="We partner with local organizations, schools, and volunteers to extend our reach and ensure support reaches those who need it most."
          />
        </div>
      </section>

      <section className="bg-[#F8F3EA] px-4 py-12 sm:px-5 sm:py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-4xl rounded-2xl border border-[#5B2C83]/14 bg-white p-6 sm:rounded-3xl sm:p-8 md:p-10">
          <SectionHeader
            align="left"
            title="Donation Transparency"
            description="Your generosity fuels direct community impact. We are committed to responsible stewardship and clear communication about how contributions support families."
          />
          <ul className="mt-6 space-y-3 text-sm leading-7 text-[#4A4A4A]">
            <li>• Programs and direct family support receive priority allocation.</li>
            <li>• Volunteers reduce overhead by donating time and in-kind resources.</li>
            <li>• We welcome questions about our mission and use of funds at any time.</li>
          </ul>
        </div>
      </section>

      <CTABlock
        title="Help Us Reach More Families"
        description="Your support expands outreach, strengthens programs, and brings hope to neighbors who need it most."
        primaryLabel="Help a Family Today"
        primaryHref="/donate"
        secondaryLabel="Become Part of the Mission"
      />
    </>
  );
}
