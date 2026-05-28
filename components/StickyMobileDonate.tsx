"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CTA } from "@/lib/cta";

export function StickyMobileDonate() {
  const pathname = usePathname();
  if (pathname === "/donate") return null;

  return (
    <Link
      href="/donate"
      className="fixed bottom-4 right-4 z-40 flex max-w-[calc(100vw-2rem)] items-center justify-center gap-1.5 rounded-full bg-[#D4A017] px-4 py-3 text-xs font-semibold text-[#3D1B5F] shadow-lg shadow-[#3D1B5F]/20 transition-all duration-300 hover:bg-[#F2C66D] active:scale-95 touch-manipulation sm:px-5 sm:text-sm md:hidden"
      aria-label={CTA.donatePrimary}
    >
      <span aria-hidden className="text-sm">
        ❤
      </span>
      <span className="truncate">{CTA.donatePrimary}</span>
    </Link>
  );
}
