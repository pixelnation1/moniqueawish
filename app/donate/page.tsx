import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { CTABlock } from "@/components/CTABlock";
import { CTAButtonGroup } from "@/components/CTAButtonGroup";
import { DonationImpactStats } from "@/components/DonationImpactStats";
import {
  WhyFamiliesNeedSupport,
  HowDonationHelps,
  CommunityImpactTrust,
} from "@/components/TrustSections";
import { donationTiers } from "@/lib/site";
import { CTA } from "@/lib/cta";
import { pageSeo } from "@/lib/seo";

export const metadata = pageSeo.donate;

const reasonsToGive = [
  {
    title: "Local families count on us",
    text: "Your gift stays in the Emporia community—supporting neighbors, not distant causes.",
  },
  {
    title: "Programs that meet real needs",
    text: "From Christmas celebrations to back-to-school and emergency aid, we show up year-round.",
  },
  {
    title: "Dignity in every interaction",
    text: "Families are welcomed with respect, warmth, and care—not judgment.",
  },
];

export default function DonatePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#F8F3EA] px-4 pb-12 pt-4 sm:px-5 sm:pb-16 sm:pt-8 md:px-8 md:pb-24 md:pt-12">
        <div className="section-glow left-[-80px] top-10 h-52 w-52 bg-[#F2C66D]/45" />
        <div className="section-glow right-[-60px] top-24 h-56 w-56 bg-[#E8DDF5]/70" />
        <div className="relative mx-auto grid max-w-7xl gap-8 sm:gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 text-xs font-medium tracking-[0.32em] text-[#5B2C83] uppercase">
              Give With Heart
            </p>
            <h1 className="text-balance text-2xl font-semibold leading-snug text-[#3D1B5F] sm:text-4xl md:text-5xl lg:text-6xl">
              Your Gift Turns Grief Into Hope
            </h1>
            <p className="prose-width mt-6 leading-relaxed text-[#4E4E4E]">
              When you give to Monique-A-Wish, you are not just making a donation—you are telling a family
              in Emporia that they matter, that their community sees them, and that hope is still possible.
            </p>
            <div className="mt-10">
              <CTAButtonGroup
                primaryLabel={CTA.donateLarge}
                showSecondary
                layout="stack"
              />
            </div>
            <p className="mt-6 text-xs text-[#5B2C83]/80">{CTA.trustLine}</p>
          </div>
          <div className="relative overflow-hidden rounded-[2rem] border border-[#5B2C83]/12 shadow-2xl shadow-[#3D1B5F]/20">
            <div className="hero-overlay absolute inset-0 z-10 rounded-[2rem]" />
            <Image
              src="/images/moniquexmas.jpg"
              alt="Donate to Monique-A-Wish — community giving and holiday support for Emporia, Kansas families"
              width={1200}
              height={900}
              priority
              className="h-[240px] w-full object-cover object-center sm:h-[320px] md:h-[440px]"
            />
          </div>
        </div>
      </section>

      <WhyFamiliesNeedSupport />

      <DonationImpactStats />

      <HowDonationHelps />

      <section className="px-4 py-12 sm:px-5 sm:py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Reasons to Give"
            title="Why Your Support Matters"
            description="Every gift—large or small—creates a ripple of hope in our community."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {reasonsToGive.map((reason) => (
              <article
                key={reason.title}
                className="rounded-2xl border border-[#D4A017]/25 bg-white p-6 shadow-md"
              >
                <h3 className="text-lg font-semibold text-[#3D1B5F]">{reason.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#4A4A4A]">{reason.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8F3EA] px-4 py-12 sm:px-5 sm:py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            title="Choose Your Impact"
            description="Select a giving level that fits your heart. Every amount helps a family feel seen and supported."
          />
          <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {donationTiers.map((tier) => (
              <article
                key={tier.title}
                className="flex flex-col rounded-2xl border border-[#5B2C83]/14 bg-white p-5 shadow-lg transition-all duration-300 sm:p-6 hover:-translate-y-1 hover:shadow-xl"
              >
                <p className="text-xl font-semibold text-[#D4A017] sm:text-2xl">{tier.amount}</p>
                <h3 className="mt-2 text-lg text-[#3D1B5F] sm:text-xl">{tier.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[#4A4A4A]">{tier.description}</p>
                <a
                  href={`mailto:contact@moniqueawish.org?subject=Donation%20-%20${encodeURIComponent(tier.title)}`}
                  className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full border border-[#5B2C83]/22 px-4 py-2.5 text-sm font-semibold text-[#5B2C83] transition hover:bg-[#E8DDF5] touch-manipulation"
                >
                  Give at this level →
                </a>
              </article>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-[#5B2C83]">
            Ready to give? Email{" "}
            <a href="mailto:contact@moniqueawish.org" className="font-semibold underline">
              contact@moniqueawish.org
            </a>{" "}
            and we will guide you through the process with care.
          </p>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-5 sm:py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-4xl rounded-2xl border border-[#D4A017]/30 bg-gradient-to-br from-[#FFFDF9] to-[#E8DDF5] p-6 text-center shadow-lg sm:rounded-3xl sm:p-8 md:p-12">
          <SectionHeader
            title="Monthly Giving"
            description="Sustain year-round support with a recurring gift. Monthly donors help us plan ahead and respond when families need us most."
          />
          <div className="mt-8 flex justify-center">
            <CTAButtonGroup
              primaryLabel="Become a Monthly Donor"
              primaryHref="mailto:contact@moniqueawish.org?subject=Monthly%20Giving"
              showSecondary={false}
              primaryMicrocopy="Set up recurring support that keeps hope alive all year."
            />
          </div>
        </div>
      </section>

      <CommunityImpactTrust />

      <CTABlock
        title="Every Gift Honors Monique's Memory"
        description="Thank you for helping us bring love, light, and practical support to families across our community."
        primaryLabel={CTA.donatePrimary}
      />
    </>
  );
}
