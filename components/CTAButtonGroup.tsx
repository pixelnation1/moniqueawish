import { Button } from "@/components/ui/Button";
import { CTA } from "@/lib/cta";

type CTAButtonGroupProps = {
  primaryHref?: string;
  secondaryHref?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  primaryMicrocopy?: string;
  secondaryMicrocopy?: string;
  showSecondary?: boolean;
  primaryClassName?: string;
  layout?: "row" | "stack";
  className?: string;
};

export function CTAButtonGroup({
  primaryHref = "/donate",
  secondaryHref = "/contact",
  primaryLabel = CTA.donatePrimary,
  secondaryLabel = CTA.involvedPrimary,
  primaryMicrocopy = CTA.donateMicrocopy,
  secondaryMicrocopy = CTA.involvedMicrocopy,
  showSecondary = true,
  primaryClassName = "",
  layout = "row",
  className = "",
}: CTAButtonGroupProps) {
  const flexClass =
    layout === "stack"
      ? "flex w-full flex-col items-stretch gap-3 sm:gap-5"
      : "flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-8 md:gap-10";

  return (
    <div className={`${flexClass} ${className}`}>
      <div className="flex w-full flex-col gap-2 sm:w-auto">
        <Button href={primaryHref} className={`w-full sm:w-auto ${primaryClassName}`}>
          {primaryLabel}
        </Button>
        {primaryMicrocopy && (
          <p className="max-w-xs text-xs leading-relaxed text-[#5B2C83]/85">{primaryMicrocopy}</p>
        )}
      </div>
      {showSecondary && (
        <div className="flex w-full flex-col gap-2 sm:w-auto">
          <Button href={secondaryHref} variant="secondary" className="w-full sm:w-auto">
            {secondaryLabel}
          </Button>
          {secondaryMicrocopy && (
            <p className="max-w-xs text-xs leading-relaxed text-[#5B2C83]/85">{secondaryMicrocopy}</p>
          )}
        </div>
      )}
    </div>
  );
}
