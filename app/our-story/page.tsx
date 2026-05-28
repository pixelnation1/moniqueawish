import { OurStoryPageContent } from "@/components/our-story/OurStoryPageContent";
import { pageSeo } from "@/lib/seo";

export const metadata = pageSeo.ourStory;

export default function OurStoryPage() {
  return <OurStoryPageContent />;
}
