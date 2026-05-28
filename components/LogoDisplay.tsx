import Image from "next/image";

type LogoSize = "nav" | "footer" | "hero" | "centerpiece";

const sizeMap: Record<LogoSize, { container: string; width: number; height: number }> = {
  nav: { container: "w-11 sm:w-12", width: 320, height: 320 },
  footer: { container: "w-10 sm:w-11", width: 280, height: 280 },
  hero: { container: "w-[180px] sm:w-[220px]", width: 480, height: 480 },
  centerpiece: { container: "w-[220px] sm:w-[280px] md:w-[320px]", width: 640, height: 640 },
};

type LogoDisplayProps = {
  size?: LogoSize;
  priority?: boolean;
  className?: string;
  glow?: boolean;
  footerGlow?: boolean;
};

export function LogoDisplay({
  size = "nav",
  priority = false,
  className = "",
  glow = true,
  footerGlow = false,
}: LogoDisplayProps) {
  const { container, width, height } = sizeMap[size];
  const glowClass = glow
    ? footerGlow
      ? "logo-soft-glow footer-logo-glow"
      : "logo-soft-glow"
    : "";

  return (
    <div className={`relative shrink-0 ${container} ${glowClass} ${className}`}>
      <Image
        src="/images/moniquelogo.jpg"
        alt="Monique-A-Wish logo"
        width={width}
        height={height}
        priority={priority}
        className="h-auto w-full object-contain drop-shadow-[0_8px_18px_rgba(61,27,95,0.22)]"
      />
    </div>
  );
}
