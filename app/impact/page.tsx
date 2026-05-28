import { PageHero } from "@/components/PageHero";
import { ImpactPageContent } from "@/components/impact/ImpactPageContent";
import { pageSeo } from "@/lib/seo";

export const metadata = pageSeo.impact;

export default function ImpactPage() {
  return (
    <>
      <PageHero
        dark
        eyebrow="Our Impact"
        title="Hope Measured in Lives Touched"
        description="Every gift, volunteer hour, and partnership helps Emporia, Kansas families experience dignity, joy, and stability throughout the year."
      />
      <ImpactPageContent />
    </>
  );
}
