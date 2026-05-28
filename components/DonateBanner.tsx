import { CTAButtonGroup } from "@/components/CTAButtonGroup";
import { SectionHeader } from "@/components/SectionHeader";

type DonateBannerProps = {
  title?: string;
  description?: string;
};

export function DonateBanner({
  title = "Help Us Reach More Families",
  description = "Your gift brings meals, supplies, and hope to neighbors who need it most—right here in Emporia.",
}: DonateBannerProps) {
  return (
    <section className="border-y border-[#5B2C83]/10 bg-gradient-to-br from-[#F8F3EA] to-[#E8DDF5]/40 px-4 py-12 sm:px-5 sm:py-16 md:px-8 md:py-20">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center md:flex-row md:items-center md:justify-between md:gap-8 md:text-left">
        <SectionHeader align="left" title={title} description={description} />
        <CTAButtonGroup layout="stack" />
      </div>
    </section>
  );
}
