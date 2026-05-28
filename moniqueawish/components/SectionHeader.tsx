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
          className={`mb-4 text-xs tracking-[0.28em] uppercase ${
            light ? "text-[#F2C66D]" : "text-[#5B2C83]"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2 className={`text-balance text-3xl md:text-5xl ${titleColor}`}>{title}</h2>
      {description && (
        <p className={`mt-5 text-balance text-sm leading-7 md:text-base ${descColor}`}>
          {description}
        </p>
      )}
    </div>
  );
}
