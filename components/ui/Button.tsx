import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline";

const variants: Record<Variant, string> = {
  primary:
    "bg-[#D4A017] text-[#3D1B5F] shadow-lg shadow-[#D4A017]/30 hover:bg-[#F2C66D] hover:-translate-y-0.5",
  secondary:
    "border border-[#5B2C83]/25 bg-white/80 text-[#5B2C83] hover:bg-[#E8DDF5]/60 hover:-translate-y-0.5",
  outline:
    "border border-[#5B2C83]/24 bg-white/75 text-[#5B2C83] hover:bg-[#E8DDF5] hover:-translate-y-0.5",
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
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5B2C83]";

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
