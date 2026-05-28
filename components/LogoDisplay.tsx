import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { IMAGE_SIZES } from "@/lib/images";

type LogoSize = "nav" | "footer" | "hero" | "centerpiece";

const sizeMap: Record<
  LogoSize,
  { container: string; width: number; height: number; sizes: string }
> = {
  nav: { container: "w-11 sm:w-12", width: 320, height: 320, sizes: IMAGE_SIZES.logoNav },
  footer: { container: "w-10 sm:w-11", width: 280, height: 280, sizes: IMAGE_SIZES.logoFooter },
  hero: { container: "w-[180px] sm:w-[220px]", width: 480, height: 480, sizes: IMAGE_SIZES.logoCenterpiece },
  centerpiece: {
    container: "w-[220px] sm:w-[280px] md:w-[320px]",
    width: 640,
    height: 640,
    sizes: IMAGE_SIZES.logoCenterpiece,
  },
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
  const { container, width, height, sizes } = sizeMap[size];
  const glowClass = glow
    ? footerGlow
      ? "logo-soft-glow footer-logo-glow"
      : "logo-soft-glow"
    : "";

  return (
    <div className={`relative shrink-0 ${container} ${glowClass} ${className}`}>
      <OptimizedImage
        src="/images/moniquelogo.jpg"
        alt="Monique-A-Wish logo — Emporia, Kansas nonprofit serving local families"
        width={width}
        height={height}
        sizes={sizes}
        priority={priority}
        fadeIn={!priority}
        className="h-auto w-full object-contain drop-shadow-[0_8px_18px_rgba(61,27,95,0.22)]"
      />
    </div>
  );
}
