import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { CTABlock } from "@/components/CTABlock";
import { GalleryLightbox } from "@/components/GalleryLightbox";
import { galleryImages } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "View moments from Monique-A-Wish community events, holiday celebrations, and outreach across Emporia, Kansas.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Moments of Hope & Community"
        description="A visual story of generosity, connection, and the families we are honored to serve."
      />

      <section className="px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            title="Community Event Photos"
            description="Click any image to view it larger. Use arrow keys to browse in the lightbox."
          />
          <div className="mt-12">
            <GalleryLightbox images={galleryImages} />
          </div>
        </div>
      </section>

      <CTABlock
        secondaryLabel="View Programs"
        secondaryHref="/programs"
      />
    </>
  );
}
