import type { Metadata } from "next";
import { GalleryPageContent } from "@/components/gallery/GalleryPageContent";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Explore moments of hope from Monique-A-Wish—Christmas celebrations, back-to-school support, emergency assistance, and community volunteers in Emporia, Kansas.",
};

export default function GalleryPage() {
  return <GalleryPageContent />;
}
