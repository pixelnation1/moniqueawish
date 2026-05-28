import { SectionHeader } from "@/components/SectionHeader";
import { TRANSPARENCY_MATTERS_COPY, transparencyPoints } from "@/lib/site";

type TransparencyMattersSectionProps = {
  align?: "center" | "left";
  showBullets?: boolean;
};

export function TransparencyMattersSection({
  align = "center",
  showBullets = true,
}: TransparencyMattersSectionProps) {
  return (
    <div className="mx-auto max-w-4xl">
      <SectionHeader
        align={align}
        eyebrow="Transparency Matters"
        title="Every Gift Supports Real Families"
        description={TRANSPARENCY_MATTERS_COPY}
      />
      {showBullets && (
        <ul
          className={`mt-8 space-y-3 text-sm leading-relaxed text-[#4A4A4A] ${
            align === "center" ? "mx-auto max-w-2xl text-left sm:text-center" : ""
          }`}
        >
          {transparencyPoints.map((point) => (
            <li key={point} className="flex gap-2 sm:justify-center">
              <span className="shrink-0 text-[#D4A017]" aria-hidden>
                •
              </span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
