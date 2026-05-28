import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const SITE_URL = "https://www.moniqueawish.org";

export const DEFAULT_TITLE = "Monique-A-Wish | Helping Families in Emporia, KS";

export const DEFAULT_DESCRIPTION =
  "Monique-A-Wish is a nonprofit organization in Emporia, Kansas helping families through holiday support, back-to-school assistance, emergency aid, and community care.";

export const OG_IMAGE_PATH = SITE.heroImage;
export const OG_IMAGE_ALT =
  "Monique-A-Wish volunteers providing holiday assistance and community care to families in Emporia, Kansas";

const KEYWORDS = [
  "Emporia Kansas nonprofit",
  "Emporia KS family support",
  "holiday assistance Emporia",
  "back-to-school support Kansas",
  "emergency assistance Emporia KS",
  "community care nonprofit",
  "Monique-A-Wish",
  "family assistance Emporia",
] as const;

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  /** Use for homepage — full title without template suffix */
  absoluteTitle?: boolean;
  imagePath?: string;
  imageAlt?: string;
};

export function buildPageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
  imagePath = OG_IMAGE_PATH,
  imageAlt = OG_IMAGE_ALT,
}: PageMetaInput): Metadata {
  const canonical = `${SITE_URL}${path === "/" ? "" : path}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords: [...KEYWORDS],
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: canonical,
      siteName: SITE.name,
      title: absoluteTitle ? title : `${title} | ${SITE.name}`,
      description,
      images: [
        {
          url: imagePath,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: absoluteTitle ? title : `${title} | ${SITE.name}`,
      description,
      images: [imagePath],
    },
  };
}

export const homeMetadata = buildPageMetadata({
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  path: "/",
  absoluteTitle: true,
});

export const pageSeo = {
  ourStory: buildPageMetadata({
    title: "Our Story",
    description:
      "Learn how Monique-A-Wish became an Emporia, Kansas nonprofit honoring Monique through family support, holiday assistance, and year-round community care.",
    path: "/our-story",
    imagePath: SITE.logo,
    imageAlt: "Monique-A-Wish logo — nonprofit serving families in Emporia, Kansas",
  }),
  impact: buildPageMetadata({
    title: "Community Impact",
    description:
      "See how Monique-A-Wish serves Emporia, KS families through holiday support, back-to-school programs, emergency assistance, and transparent community impact.",
    path: "/impact",
  }),
  programs: buildPageMetadata({
    title: "Programs",
    description:
      "Explore Monique-A-Wish programs in Emporia, Kansas: Christmas holiday assistance, back-to-school support, and emergency family aid.",
    path: "/programs",
  }),
  gallery: buildPageMetadata({
    title: "Gallery",
    description:
      "Photos of Monique-A-Wish community outreach in Emporia, KS — holiday celebrations, back-to-school support, emergency assistance, and volunteers.",
    path: "/gallery",
  }),
  contact: buildPageMetadata({
    title: "Contact",
    description:
      "Contact Monique-A-Wish in Emporia, Kansas about donations, volunteering, partnerships, and family support programs.",
    path: "/contact",
  }),
  getHelp: buildPageMetadata({
    title: "Get Help",
    description:
      "Request family support from Monique-A-Wish in Emporia, Kansas — holiday assistance, back-to-school supplies, emergency aid, and community resource connections.",
    path: "/get-help",
  }),
  donate: buildPageMetadata({
    title: "Donate",
    description:
      "Donate to Monique-A-Wish and help Emporia, KS families with holiday assistance, back-to-school supplies, emergency aid, and community care.",
    path: "/donate",
  }),
  christmas: buildPageMetadata({
    title: "Christmas Celebration",
    description:
      "Holiday assistance in Emporia, Kansas — gifts, meals, and Christmas celebration support for families through Monique-A-Wish.",
    path: "/programs/christmas-celebration",
  }),
  backToSchool: buildPageMetadata({
    title: "Back-to-School Support",
    description:
      "Back-to-school support for Emporia, KS students — backpacks, supplies, and encouragement from Monique-A-Wish.",
    path: "/programs/back-to-school-support",
    imagePath: "/images/backtoschool.png",
    imageAlt: "Back-to-school supplies and backpacks for Emporia, Kansas students from Monique-A-Wish",
  }),
  emergency: buildPageMetadata({
    title: "Emergency Assistance",
    description:
      "Emergency assistance for families in Emporia, Kansas — urgent aid, essentials, and compassionate support from Monique-A-Wish.",
    path: "/programs/emergency-assistance",
    imagePath: "/images/emergancyservices.png",
    imageAlt: "Emergency assistance supplies for families in Emporia, Kansas through Monique-A-Wish",
  }),
} as const;

export const nonprofitJsonLd = {
  "@context": "https://schema.org",
  "@type": "NonprofitOrganization",
  name: SITE.name,
  url: SITE_URL,
  logo: `${SITE_URL}${SITE.logo}`,
  image: `${SITE_URL}${SITE.heroImage}`,
  description: DEFAULT_DESCRIPTION,
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Emporia",
    addressRegion: "KS",
    postalCode: "66801",
    addressCountry: "US",
  },
  areaServed: {
    "@type": "City",
    name: "Emporia",
    containedInPlace: {
      "@type": "State",
      name: "Kansas",
    },
  },
  knowsAbout: [
    "holiday assistance",
    "back-to-school support",
    "emergency family assistance",
    "community care",
  ],
} as const;
