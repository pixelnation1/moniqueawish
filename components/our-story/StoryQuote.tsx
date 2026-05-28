type StoryQuoteProps = {
  quote: string;
  attribution?: string;
  featured?: boolean;
};

export function StoryQuote({ quote, attribution, featured = false }: StoryQuoteProps) {
  return (
    <figure
      className={`relative overflow-hidden rounded-2xl px-8 py-10 md:px-10 md:py-12 ${
        featured
          ? "bg-gradient-to-br from-[#3D1B5F] to-[#5B2C83] shadow-xl shadow-[#3D1B5F]/25"
          : "bg-gradient-to-br from-[#4C2574] to-[#3D1B5F] shadow-lg shadow-[#3D1B5F]/20"
      }`}
    >
      <div className="gold-divider mb-6 h-px w-16 opacity-90" />
      <div className="absolute left-0 top-0 h-full w-1 bg-[#D4A017]/80" aria-hidden />
      <blockquote className="relative text-balance text-xl leading-relaxed text-[#FFFDF9] md:text-2xl">
        &ldquo;{quote}&rdquo;
      </blockquote>
      {attribution && (
        <figcaption className="mt-6 text-sm font-medium tracking-wide text-[#F2C66D]">
          — {attribution}
        </figcaption>
      )}
      <div className="gold-divider mt-6 h-px w-12 opacity-60" />
    </figure>
  );
}
