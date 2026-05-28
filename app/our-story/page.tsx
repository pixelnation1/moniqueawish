import type { Metadata } from "next";
import { OurStoryPageContent } from "@/components/our-story/OurStoryPageContent";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Discover how Monique-A-Wish began in memory of Monique and grew into a community-driven mission of hope, dignity, and support in Emporia, Kansas.",
};

export default function OurStoryPage() {
  return <OurStoryPageContent />;
}
