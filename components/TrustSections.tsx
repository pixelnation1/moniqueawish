import { SectionHeader } from "@/components/SectionHeader";
import { CTAButtonGroup } from "@/components/CTAButtonGroup";

export function WhyFamiliesNeedSupport() {
  return (
    <section className="bg-[#F8F3EA] px-4 py-12 sm:px-5 sm:py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeader
          eyebrow="The Need"
          title="Why Families Need Support"
          description="Life does not pause for hardship—and neither should compassion."
        />
        <div className="mt-8 space-y-5 text-center leading-relaxed text-[#4A4A4A]">
          <p>
            A lost job, an unexpected bill, a child starting school without supplies, or a holiday season
            without gifts—these moments can overwhelm families who are already doing their best.
          </p>
          <p>
            In Emporia and surrounding communities, many families quietly carry burdens no one should face
            alone. Monique-A-Wish exists to meet them with dignity, warmth, and practical help—before hope
            feels out of reach.
          </p>
        </div>
      </div>
    </section>
  );
}

export function HowDonationHelps() {
  const items = [
    {
      title: "Holiday Joy",
      text: "Gifts, meals, and celebrations that help children and parents feel seen during Christmas.",
    },
    {
      title: "School Readiness",
      text: "Backpacks and supplies so students start the year confident and prepared.",
    },
    {
      title: "Emergency Relief",
      text: "Food, essentials, and resource connections when crisis strikes without warning.",
    },
    {
      title: "Year-Round Care",
      text: "Consistent community support that reminds families they are not forgotten.",
    },
  ];

  return (
    <section className="px-4 py-12 sm:px-5 sm:py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Your Gift at Work"
          title="How Your Donation Helps"
          description="Every dollar flows into real programs that serve real families in our community."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {items.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-[#5B2C83]/12 bg-white p-6 shadow-md"
            >
              <h3 className="text-lg font-semibold text-[#3D1B5F]">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#4A4A4A]">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CommunityImpactTrust() {
  return (
    <section className="bg-section-lavender px-4 py-12 sm:px-5 sm:py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <SectionHeader
          eyebrow="Community Impact"
          title="Together, We Multiply Hope"
          description="Monique-A-Wish is powered by volunteers, donors, and neighbors who believe Emporia's families deserve to feel supported."
        />
        <p className="prose-width mx-auto mt-8 leading-relaxed text-[#4A4A4A]">
          From organized gift rooms to back-to-school drives and emergency outreach, our work is built on
          relationships—not transactions. When you give, you join a community that shows up with love,
          consistency, and respect.
        </p>
        <div className="mt-10 flex justify-center">
          <CTAButtonGroup layout="row" />
        </div>
      </div>
    </section>
  );
}
