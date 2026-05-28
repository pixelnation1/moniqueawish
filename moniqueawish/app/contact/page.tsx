import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { ContactForm } from "@/components/ContactForm";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Monique-A-Wish in Emporia, Kansas. Reach out about donations, volunteering, or community partnerships.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We Would Love to Hear From You"
        description="Whether you want to volunteer, partner with us, or learn more about our mission—we are here to connect."
      />

      <section className="px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader align="left" title="Get in Touch" />
            <ul className="mt-8 space-y-4 text-sm text-[#4A4A4A]">
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
                aria-label="Map placeholder for Emporia, Kansas"
              >
                Map — Emporia, KS 66801
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <section className="bg-[#F8F3EA] px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeader
            title="Volunteer Inquiry"
            description="Share your availability and interests—we will follow up with opportunities to serve at events and year-round initiatives."
          />
          <p className="mt-6 text-sm text-[#4A4A4A]">
            Use the contact form above and select &ldquo;Volunteer&rdquo; as your inquiry type.
          </p>
        </div>
      </section>
    </>
  );
}
