import { IMPACT_DISCLAIMER } from "@/lib/site";

type ImpactDisclaimerProps = {
  className?: string;
  light?: boolean;
};

export function ImpactDisclaimer({ className = "", light = false }: ImpactDisclaimerProps) {
  return (
    <p
      className={`mx-auto max-w-2xl text-center text-xs leading-relaxed sm:text-sm ${
        light ? "text-[#F8F3EA]/80" : "text-[#5B2C83]/75"
      } ${className}`}
      role="note"
    >
      {IMPACT_DISCLAIMER}
    </p>
  );
}
