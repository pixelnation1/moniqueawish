import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { CTABlock } from "@/components/CTABlock";
import { ProgramCard } from "@/components/ProgramCard";
import { Button } from "@/components/ui/Button";
import { DonateBanner } from "@/components/DonateBanner";
import { SupportSection } from "@/components/SupportSection";
import { CTA } from "@/lib/cta";
import { programs } from "@/lib/site";
import { pageSeo } from "@/lib/seo";

export const metadata = pageSeo.programs;

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        title="Support That Meets Real Needs"
        description="From holiday assistance to year-round emergency aid, our Emporia, KS programs are designed with empathy and delivered with consistency."
      />

      <section className="px-4 py-12 sm:px-5 sm:py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-3">
            {programs.map((program, idx) => (
              <ProgramCard
                key={program.title}
                title={program.title}
                description={program.description}
                image={program.image}
                href={"href" in program ? program.href : "/contact"}
                index={idx}
              />
            ))}
          </div>
        </div>
      </section>

      <SupportSection className="border-t border-[#5B2C83]/8 bg-white" />

      <section className="bg-[#F8F3EA] px-4 py-12 sm:px-5 sm:py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeader
            title="Volunteer Opportunities"
            description="Join us in serving families across Emporia, Kansas. Whether you help at events, donate supplies, or spread the word—your time makes a difference."
          />
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/contact">{CTA.involvedPrimary}</Button>
            <Button href="/donate" variant="secondary">
              {CTA.donatePrimary}
            </Button>
          </div>
        </div>
      </section>

      <DonateBanner />

      <CTABlock />
    </>
  );
}
