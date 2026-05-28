import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { CTABlock } from "@/components/CTABlock";
import { ProgramCard } from "@/components/ProgramCard";
import { Button } from "@/components/ui/Button";
import { SupportSection } from "@/components/SupportSection";
import { programs } from "@/lib/site";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Explore Monique-A-Wish programs including Christmas Celebration, Back-to-School Support, and Emergency Assistance.",
};

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        title="Support That Meets Real Needs"
        description="From holiday joy to year-round relief, our programs are designed with empathy and delivered with consistency."
      />

      <section className="px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-3">
            {programs.map((program, idx) => (
              <ProgramCard key={program.title} {...program} index={idx} href="/contact" />
            ))}
          </div>
        </div>
      </section>

      <SupportSection className="border-t border-[#5B2C83]/8 bg-white" />

      <section className="bg-[#F8F3EA] px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeader
            title="Volunteer Opportunities"
            description="Join us in serving families across Emporia. Whether you can help at events, donate supplies, or spread the word—your time makes a difference."
          />
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/contact">Volunteer With Us</Button>
            <Button href="/donate" variant="secondary">
              Make a Donation
            </Button>
          </div>
        </div>
      </section>

      <CTABlock />
    </>
  );
}
