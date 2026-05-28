type DecorativeAccentsProps = {
  variant?: "hero" | "section";
};

export function DecorativeAccents({ variant = "section" }: DecorativeAccentsProps) {
  if (variant === "hero") {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="accent-butterfly absolute left-[6%] top-[18%] h-16 w-16 opacity-40" />
        <div className="accent-orb absolute right-[12%] top-[28%] h-24 w-24 bg-[#E8DDF5]/50" />
        <div className="accent-orb absolute bottom-[20%] left-[20%] h-32 w-32 bg-[#F2C66D]/25" />
      </div>
    );
  }

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="accent-butterfly absolute right-[8%] top-[12%] h-12 w-12 opacity-30" />
      <div className="accent-orb absolute bottom-[10%] left-[5%] h-20 w-20 bg-[#E8DDF5]/40" />
    </div>
  );
}
