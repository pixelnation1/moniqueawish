import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { CTABlock } from "@/components/CTABlock";
import { Button } from "@/components/ui/Button";
import { donationTiers } from "@/lib/site";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support Monique-A-Wish with a one-time or monthly gift. Help families in Emporia, Kansas through compassionate community programs.",
};

export default function DonatePage() {
  return (
    <>
      <section className="relative px-5 pb-8 pt-6 md:px-8">
        <div className="section-glow left-[-80px] top-10 h-52 w-52 bg-[#F2C66D]/45" />
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 text-xs tracking-[0.28em] text-[#5B2C83] uppercase">Give Hope</p>
            <h1 className="text-balance text-4xl text-[#3D1B5F] md:text-5xl">
              Your Gift Turns Grief Into Hope
            </h1>
            <p className="mt-6 leading-8 text-[#4E4E4E]">
              Every donation helps Monique-A-Wish serve families with holiday celebrations, school support,
              and emergency assistance—delivered with dignity and love.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="mailto:contact@moniqueawish.org">Start Giving</Button>
              <Button href="/contact" variant="secondary">
                Ask a Question
              </Button>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[2rem] shadow-2xl shadow-[#3D1B5F]/20">
            <div className="hero-overlay absolute inset-0 z-10 rounded-[2rem]" />
            <Image
              src="/images/moniquexmas.jpg"
              alt="Monique-A-Wish community giving event"
              width={1200}
              height={900}
              className="h-[360px] w-full object-cover md:h-[420px]"
            />
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            title="Choose Your Impact"
            description="Select a giving level that fits your heart. Every amount helps a family feel seen and supported."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {donationTiers.map((tier) => (
              <article
                key={tier.title}
                className="rounded-2xl border border-[#5B2C83]/14 bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
              >
                <p className="text-2xl font-semibold text-[#D4A017]">{tier.amount}</p>
                <h3 className="mt-2 text-xl text-[#3D1B5F]">{tier.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#4A4A4A]">{tier.description}</p>
                <a
                  href="mailto:contact@moniqueawish.org?subject=Donation%20Inquiry"
                  className="mt-5 inline-flex text-sm font-semibold text-[#5B2C83] hover:underline"
                >
                  Give at this level →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8F3EA] px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-4xl">
          <SectionHeader
            title="Sponsorship Opportunities"
            description="Businesses and community partners can sponsor programs, events, or supply drives—creating visible impact while honoring Monique's legacy."
          />
          <p className="mt-8 text-center text-sm leading-7 text-[#4A4A4A]">
            Contact us at{" "}
            <a href="mailto:contact@moniqueawish.org" className="font-semibold text-[#5B2C83]">
              contact@moniqueawish.org
            </a>{" "}
            to discuss sponsorship packages tailored to your organization.
          </p>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-4xl rounded-3xl border border-[#D4A017]/30 bg-gradient-to-br from-[#FFFDF9] to-[#E8DDF5] p-8 text-center shadow-lg md:p-12">
          <SectionHeader
            title="Monthly Giving"
            description="Sustain year-round support with a recurring gift. Monthly donors help us plan ahead and respond when families need us most."
          />
          <div className="mt-8">
            <Button href="mailto:contact@moniqueawish.org?subject=Monthly%20Giving">
              Become a Monthly Donor
            </Button>
          </div>
        </div>
      </section>

      <CTABlock
        title="Every Gift Honors Monique's Memory"
        description="Thank you for helping us bring love, light, and practical support to families across our community."
      />
    </>
  );
}
