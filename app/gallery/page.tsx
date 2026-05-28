import { GalleryPageContent } from "@/components/gallery/GalleryPageContent";
import { pageSeo } from "@/lib/seo";

export const metadata = pageSeo.gallery;

export default function GalleryPage() {
  return <GalleryPageContent />;
}
