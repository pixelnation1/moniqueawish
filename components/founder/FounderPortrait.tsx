import Image from "next/image";
import { FOUNDER } from "@/lib/site";
import { getBlurDataURL, IMAGE_SIZES } from "@/lib/images";

type FounderPortraitProps = {
  className?: string;
  priority?: boolean;
};

export function FounderPortrait({ className = "", priority = false }: FounderPortraitProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-[#5B2C83]/12 bg-white shadow-xl shadow-[#3D1B5F]/12 sm:rounded-3xl ${className}`.trim()}
    >
      <div className="image-skeleton relative mx-auto aspect-[3/4] w-full max-w-xs sm:max-w-none">
        <Image
          src={FOUNDER.image}
          alt={`${FOUNDER.name}, founder of Monique-A-Wish nonprofit in Emporia, Kansas`}
          fill
          sizes={IMAGE_SIZES.founderPortrait}
          priority={priority}
          placeholder="blur"
          blurDataURL={getBlurDataURL(FOUNDER.image)}
          className="object-cover object-top"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#3D1B5F]/15 via-transparent to-[#F2C66D]/5" />
      </div>
      <p className="border-t border-[#5B2C83]/8 bg-[#F8F3EA]/90 px-4 py-3 text-center text-sm font-medium text-[#3D1B5F]">
        {FOUNDER.name}
        <span className="mt-0.5 block text-xs font-normal tracking-wide text-[#5B2C83] uppercase">
          {FOUNDER.title}, Monique-A-Wish
        </span>
      </p>
    </div>
  );
}
