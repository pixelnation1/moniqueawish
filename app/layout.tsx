import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { StickyMobileDonate } from "@/components/StickyMobileDonate";
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
  title: {
    default: "Monique-A-Wish | Turning Grief Into Hope",
    template: "%s | Monique-A-Wish",
  },
  description:
    "Monique-A-Wish supports families in need through compassion, community programs, and year-round giving initiatives in Emporia, Kansas.",
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
