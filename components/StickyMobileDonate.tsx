"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CTA } from "@/lib/cta";

const DONATE_PATH = "/donate";

export function StickyMobileDonate() {
  const pathname = usePathname();

  if (pathname === DONATE_PATH) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex justify-end p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pr-[max(0.75rem,env(safe-area-inset-right))] lg:hidden">
      <Link
        href={DONATE_PATH}
        className="pointer-events-auto inline-flex min-h-11 max-w-[calc(100vw-1.5rem)] items-center justify-center gap-2 rounded-full bg-[#D4A017] px-4 py-3 text-sm font-semibold text-[#3D1B5F] shadow-lg shadow-[#3D1B5F]/20 ring-1 ring-[#3D1B5F]/10 transition-all duration-300 ease-out hover:scale-[1.03] hover:bg-[#F2C66D] hover:shadow-xl hover:shadow-[#D4A017]/35 active:scale-[0.97] touch-manipulation"
        aria-label={`${CTA.donateMobileSticky} — donate to Monique-A-Wish`}
      >
        <span
          className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#3D1B5F]/10 text-base leading-none"
          aria-hidden
        >
          ❤
        </span>
        <span className="truncate">{CTA.donateMobileSticky}</span>
      </Link>
    </div>
  );
}
