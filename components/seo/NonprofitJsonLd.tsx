import { nonprofitJsonLd } from "@/lib/seo";

export function NonprofitJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(nonprofitJsonLd) }}
    />
  );
}
