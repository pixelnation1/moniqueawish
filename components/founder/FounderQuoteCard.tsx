import { FOUNDER } from "@/lib/site";

type FounderQuoteCardProps = {
  quote?: string;
  attribution?: string;
  variant?: "light" | "brand";
  className?: string;
};

export function FounderQuoteCard({
  quote = FOUNDER.quote,
  attribution = `${FOUNDER.name}, ${FOUNDER.title}`,
  variant = "brand",
  className = "",
}: FounderQuoteCardProps) {
  const isLight = variant === "light";

  return (
    <figure
      className={`relative overflow-hidden rounded-2xl px-6 py-8 sm:rounded-3xl sm:px-8 sm:py-10 ${
        isLight
          ? "border border-[#5B2C83]/12 bg-white shadow-md shadow-[#3D1B5F]/8"
          : "bg-gradient-to-br from-[#3D1B5F] to-[#5B2C83] shadow-lg shadow-[#3D1B5F]/20"
      } ${className}`.trim()}
    >
      <div
        className={`gold-divider mb-5 h-px w-12 ${isLight ? "opacity-70" : "opacity-90"}`}
        aria-hidden
      />
      <blockquote
        className={`font-[family-name:var(--font-playfair)] text-balance text-lg leading-relaxed sm:text-xl md:text-2xl ${
          isLight ? "text-[#3D1B5F]" : "text-[#FFFDF9]"
        }`}
      >
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption
        className={`mt-5 text-sm font-semibold tracking-wide ${
          isLight ? "text-[#5B2C83]" : "text-[#F2C66D]"
        }`}
      >
        — {attribution}
      </figcaption>
    </figure>
  );
}
