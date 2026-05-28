import { GetHelpPageContent } from "@/components/get-help/GetHelpPageContent";
import { pageSeo } from "@/lib/seo";

export const metadata = pageSeo.getHelp;

export default function GetHelpPage() {
  return <GetHelpPageContent />;
}
