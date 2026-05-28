import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { CTA } from "@/lib/cta";

type GetHelpBannerProps = {
  className?: string;
  compact?: boolean;
};

export function GetHelpBanner({ className = "", compact = false }: GetHelpBannerProps) {
  return (
    <section
      className={`rounded-2xl border border-[#5B2C83]/12 bg-gradient-to-br from-[#E8DDF5]/80 to-[#F8F3EA] px-5 py-8 text-center shadow-md sm:rounded-3xl sm:px-8 sm:py-10 ${className}`}
    >
      <p className="text-xs font-medium tracking-[0.28em] text-[#5B2C83] uppercase">For Families</p>
      <h2 className="mt-3 text-balance text-xl font-semibold text-[#3D1B5F] sm:text-2xl">
        {compact ? "Need Support?" : "Need Support for Your Family?"}
      </h2>
      <p className="prose-width mx-auto mt-3 text-sm leading-relaxed text-[#4A4A4A] sm:text-base">
        {compact
          ? "Request holiday, school, emergency, or community support with dignity and care."
          : "If your family needs holiday assistance, school supplies, emergency essentials, or community resources, we are here to listen."}
      </p>
      <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Button href="/get-help">{CTA.getHelp}</Button>
        <Link
          href={`mailto:contact@moniqueawish.org`}
          className="text-sm font-semibold text-[#5B2C83] underline underline-offset-2 hover:text-[#D4A017]"
        >
          Email us directly
        </Link>
      </div>
    </section>
  );
}
