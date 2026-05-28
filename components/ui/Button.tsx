import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline";

const variants: Record<Variant, string> = {
  primary:
    "bg-[#D4A017] text-[#3D1B5F] shadow-lg shadow-[#D4A017]/35 hover:bg-[#F2C66D] hover:-translate-y-1 hover:shadow-xl hover:shadow-[#D4A017]/45 active:translate-y-0",
  secondary:
    "border border-[#5B2C83]/25 bg-white/90 text-[#5B2C83] shadow-sm hover:border-[#5B2C83]/40 hover:bg-[#E8DDF5]/70 hover:-translate-y-1 hover:shadow-md active:translate-y-0",
  outline:
    "border border-[#5B2C83]/28 bg-white/80 text-[#5B2C83] shadow-sm hover:border-[#D4A017]/50 hover:bg-[#E8DDF5] hover:-translate-y-1 hover:shadow-md active:translate-y-0",
};

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  type = "button",
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex min-h-11 items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 ease-out touch-manipulation focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5B2C83] sm:px-7 sm:py-3.5";

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
