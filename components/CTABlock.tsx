import { Button } from "@/components/ui/Button";

type CTABlockProps = {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function CTABlock({
  title = "Be the Reason Someone Smiles Today",
  description = "Join us in transforming remembrance into meaningful support for families who need compassion, resources, and a community that never looks away.",
  primaryLabel = "Donate Now",
  primaryHref = "/donate",
  secondaryLabel = "Volunteer",
  secondaryHref = "/contact",
}: CTABlockProps) {
  return (
    <section className="warm-cta-bg relative px-5 py-24 md:px-8 md:py-32">
      <div className="section-glow left-[12%] top-[16%] h-44 w-44 bg-[#F2C66D]/55" />
      <div className="section-glow right-[8%] top-[34%] h-48 w-48 bg-[#5B2C83]/28" />
      <div className="relative mx-auto max-w-4xl text-center">
        <h2 className="text-balance text-3xl text-[#3D1B5F] md:text-5xl">{title}</h2>
        <p className="mx-auto mt-6 max-w-2xl text-balance text-sm leading-8 text-[#4F4F4F] md:text-base">
          {description}
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Button href={primaryHref}>{primaryLabel}</Button>
          <Button href={secondaryHref} variant="outline">
            {secondaryLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
