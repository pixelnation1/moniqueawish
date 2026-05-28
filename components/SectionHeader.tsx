type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const titleColor = light ? "text-white" : "text-[#3D1B5F]";
  const descColor = light ? "text-[#F8F3EA]/90" : "text-[#505050]";

  return (
    <div className={`max-w-3xl ${alignClass}`}>
      {eyebrow && (
        <p
          className={`mb-3 text-xs font-medium tracking-[0.32em] uppercase ${
            light ? "text-[#F2C66D]" : "text-[#5B2C83]"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-balance text-2xl font-semibold leading-snug tracking-tight sm:text-3xl md:text-5xl lg:text-[3.25rem] ${titleColor}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`prose-width mt-4 max-w-[36rem] text-balance text-sm leading-relaxed sm:mt-6 md:text-base ${descColor} ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
