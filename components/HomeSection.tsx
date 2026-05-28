import type { ReactNode } from "react";
import { SectionDivider } from "@/components/SectionDivider";
import { DecorativeAccents } from "@/components/DecorativeAccents";

type BgVariant = "cream" | "lavender" | "white" | "warm" | "impact" | "none";

const bgMap: Record<BgVariant, string> = {
  cream: "bg-section-cream",
  lavender: "bg-section-lavender",
  white: "bg-[#FFFDF9]",
  warm: "hope-section-bg",
  impact: "impact-bg text-white",
  none: "",
};

type HomeSectionProps = {
  children: ReactNode;
  bg?: BgVariant;
  dividerTop?: boolean;
  dividerBottom?: boolean;
  className?: string;
  accents?: boolean;
  id?: string;
};

export function HomeSection({
  children,
  bg = "white",
  dividerTop = false,
  dividerBottom = false,
  className = "",
  accents = false,
  id,
}: HomeSectionProps) {
  return (
    <>
      {dividerTop && <SectionDivider />}
      <section
        id={id}
        className={`relative px-4 py-14 sm:px-5 sm:py-16 md:px-8 md:py-32 ${bgMap[bg]} ${className}`}
      >
        {accents && <DecorativeAccents />}
        <div className="relative">{children}</div>
      </section>
      {dividerBottom && <SectionDivider />}
    </>
  );
}
