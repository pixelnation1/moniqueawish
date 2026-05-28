import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { GetHelpForm } from "@/components/get-help/GetHelpForm";
import { getHelpProcessSteps, getHelpSupportTypes, SITE } from "@/lib/site";

export function GetHelpPageContent() {
  return (
    <>
      <PageHero
        eyebrow="Get Help"
        title="Support for Families When It Matters Most"
        description="If your family needs help with holiday support, school supplies, emergency essentials, or community resources, Monique-A-Wish is here to listen and connect you with support when possible."
      />

      <section className="bg-[#FFFDF9] px-4 py-12 sm:px-5 sm:py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            title="Types of Support"
            description="We offer several pathways of care for families in Emporia, Kansas and surrounding communities—subject to program availability."
          />
          <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {getHelpSupportTypes.map((type) => (
              <article
                key={type.title}
                className="flex h-full flex-col rounded-2xl border border-[#5B2C83]/12 bg-white p-5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-6"
              >
                <span className="text-2xl" aria-hidden>
                  {type.icon}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-[#3D1B5F]">{type.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[#4A4A4A]">{type.description}</p>
                {"href" in type && (
                  <Link
                    href={type.href}
                    className="mt-4 text-sm font-semibold text-[#5B2C83] hover:text-[#D4A017]"
                  >
                    Learn about this program →
                  </Link>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-section-lavender px-4 py-12 sm:px-5 sm:py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-4xl">
          <SectionHeader
            title="How the Process Works"
            description="A simple, dignified path—so you know what to expect when reaching out."
          />
          <ol className="mt-8 space-y-4 sm:mt-12">
            {getHelpProcessSteps.map((item) => (
              <li
                key={item.step}
                className="flex gap-4 rounded-2xl border border-[#5B2C83]/10 bg-white/90 p-5 shadow-sm sm:gap-5 sm:p-6"
              >
                <span
                  className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#D4A017] text-sm font-bold text-[#3D1B5F]"
                  aria-hidden
                >
                  {item.step}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-[#3D1B5F]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#4A4A4A]">{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-5 sm:py-16 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-12">
          <div>
            <SectionHeader align="left" title="Request Help" />
            <blockquote className="mt-6 rounded-2xl border-l-4 border-[#D4A017] bg-[#F8F3EA] px-5 py-4 text-sm leading-relaxed text-[#3D1B5F] italic sm:text-base">
              We understand asking for help can be difficult. Every request is handled with care, dignity,
              and respect.
            </blockquote>
            <div className="mt-8 rounded-2xl border border-[#5B2C83]/12 bg-gradient-to-br from-[#3D1B5F] to-[#5B2C83] p-6 text-white shadow-lg">
              <h3 className="text-lg font-semibold text-[#F2C66D]">Need urgent help?</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#F8F3EA]/92">
                Contact Monique-A-Wish directly for time-sensitive needs.
              </p>
              <a
                href={`mailto:${SITE.email}`}
                className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-[#F2C66D] underline underline-offset-4 hover:text-white"
              >
                {SITE.email}
              </a>
            </div>
          </div>
          <GetHelpForm />
        </div>
      </section>
    </>
  );
}
