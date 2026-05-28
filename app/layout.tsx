import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { StickyMobileDonate } from "@/components/StickyMobileDonate";
import { NonprofitJsonLd } from "@/components/seo/NonprofitJsonLd";
import { DEFAULT_DESCRIPTION, DEFAULT_TITLE, OG_IMAGE_ALT, OG_IMAGE_PATH, SITE_URL } from "@/lib/seo";
import { SITE } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE.name}`,
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE_URL }],
  creator: SITE.name,
  publisher: SITE.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE.name,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: OG_IMAGE_PATH,
        width: 1200,
        height: 630,
        alt: OG_IMAGE_ALT,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [OG_IMAGE_PATH],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col overflow-x-hidden bg-[#FFFDF9] text-[#2B2B2B]">
        <NonprofitJsonLd />
        <Navbar />
        <PageTransition>
          <main className="flex-1 overflow-x-clip pb-[calc(4.5rem+env(safe-area-inset-bottom))] pt-[4.25rem] sm:pb-[calc(5rem+env(safe-area-inset-bottom))] sm:pt-[4.5rem] lg:pb-0 lg:pt-[5.5rem]">
            {children}
          </main>
        </PageTransition>
        <StickyMobileDonate />
        <Footer />
      </body>
    </html>
  );
}
