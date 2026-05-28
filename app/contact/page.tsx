import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { ContactForm } from "@/components/ContactForm";
import { SITE } from "@/lib/site";
import { pageSeo } from "@/lib/seo";

export const metadata = pageSeo.contact;

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We Would Love to Hear From You"
        description="Reach out about donations, volunteering, or partnerships—Monique-A-Wish serves families in Emporia, Kansas with holiday, school, and emergency support."
      />

      <section className="px-4 py-12 sm:px-5 sm:py-16 md:px-8 md:py-20">
        <div className="mx-auto grid min-w-0 max-w-6xl gap-8 sm:gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader align="left" title="Get in Touch" />
            <ul className="mt-6 space-y-4 text-sm leading-relaxed text-[#4A4A4A] sm:mt-8">
              <li>
                <span className="font-semibold text-[#3D1B5F]">Email</span>
                <br />
                <a href={`mailto:${SITE.email}`} className="text-[#5B2C83] hover:underline">
                  {SITE.email}
                </a>
              </li>
              <li>
                <span className="font-semibold text-[#3D1B5F]">Location</span>
                <br />
                {SITE.location}
              </li>
            </ul>

            <div className="mt-10 overflow-hidden rounded-2xl border border-[#5B2C83]/14 bg-[#E8DDF5]/40">
              <div
                className="flex h-56 items-center justify-center bg-gradient-to-br from-[#E8DDF5] to-[#F8F3EA] text-sm text-[#5B2C83]"
                role="img"
                aria-label="Map placeholder for Monique-A-Wish in Emporia, Kansas 66801"
              >
                Map — Emporia, KS 66801
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <section className="bg-[#F8F3EA] px-4 py-12 sm:px-5 sm:py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeader
            title="Volunteer Inquiry"
            description="Share your availability and interests—we will follow up with opportunities to serve at events and year-round initiatives in Emporia, KS."
          />
          <p className="mt-6 text-sm text-[#4A4A4A]">
            Use the contact form above and select &ldquo;Volunteer&rdquo; as your inquiry type.
          </p>
        </div>
      </section>
    </>
  );
}
