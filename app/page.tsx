import { HomePageContent } from "@/components/HomePageContent";
import { homeMetadata } from "@/lib/seo";

export const metadata = homeMetadata;

export default function HomePage() {
  return <HomePageContent />;
}
