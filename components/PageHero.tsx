import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  dark?: boolean;
};

export function PageHero({ eyebrow, title, description, children, dark = false }: PageHeroProps) {
  return (
    <section
      className={`relative px-4 pb-12 pt-4 sm:px-5 sm:pb-16 sm:pt-8 md:px-8 md:pb-20 ${
        dark ? "impact-bg text-white" : "bg-[#F8F3EA]"
      }`}
    >
      {!dark && (
        <>
          <div className="section-glow left-[-80px] top-8 h-48 w-48 bg-[#F2C66D]/40" />
          <div className="section-glow right-[-60px] top-20 h-56 w-56 bg-[#E8DDF5]/70" />
        </>
      )}
      <div className="relative mx-auto max-w-4xl text-center">
        {eyebrow && (
          <p
            className={`mb-4 text-xs tracking-[0.28em] uppercase ${
              dark ? "text-[#F2C66D]" : "text-[#5B2C83]"
            }`}
          >
            {eyebrow}
          </p>
        )}
        <h1 className={`text-balance text-3xl font-semibold leading-snug sm:text-4xl md:text-5xl lg:text-6xl ${dark ? "text-white" : "text-[#3D1B5F]"}`}>
          {title}
        </h1>
        {description && (
          <p
            className={`mx-auto mt-6 max-w-2xl text-balance text-base leading-8 ${
              dark ? "text-[#F8F3EA]/90" : "text-[#4E4E4E]"
            }`}
          >
            {description}
          </p>
        )}
        {children && <div className="mt-8 flex flex-wrap justify-center gap-4">{children}</div>}
      </div>
    </section>
  );
}
