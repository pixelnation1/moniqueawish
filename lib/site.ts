export const SITE = {
  name: "Monique-A-Wish",
  tagline: "Infinity gifts of love to those in need",
  email: "contact@moniqueawish.org",
  location: "Emporia, KS 66801",
  logo: "/images/moniquelogo.jpg",
  heroImage: "/images/moniquexmas.jpg",
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Our Story", href: "/our-story" },
  { label: "Impact", href: "/impact" },
  { label: "Programs", href: "/programs" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
] as const;

export const impactStats = [
  { label: "Families Helped", value: 1250, suffix: "+" },
  { label: "Years Serving Community", value: 9, suffix: "+" },
  { label: "Community Programs", value: 12, suffix: "" },
  { label: "Year-Round Support", value: 365, suffix: " Days", display: "365 Days" },
] as const;

export const donationImpactStats = [
  { label: "Families Helped", value: 1250, suffix: "+" },
  { label: "Children Supported", value: 2100, suffix: "+" },
  { label: "Community Volunteers", value: 180, suffix: "+" },
  { label: "Holiday Gifts Delivered", value: 3200, suffix: "+" },
] as const;

export const programs = [
  {
    title: "Christmas Celebration",
    description:
      "Bringing joy and dignity to families during the holiday season through gifts, meals, and shared celebration.",
    image: "/images/moniquexmas.jpg",
    href: "/programs/christmas-celebration",
  },
  {
    title: "Back-to-School Support",
    description:
      "Equipping students with backpacks, school supplies, and encouragement so every child starts with confidence.",
    image: "/images/backtoschool.png",
    href: "/programs/back-to-school-support",
  },
  {
    title: "Emergency Assistance",
    description:
      "Providing urgent relief for families facing unexpected hardship through direct aid and partner resources.",
    image: "/images/emergancyservices.png",
    href: "/programs/emergency-assistance",
  },
] as const;

export const brandImages = {
  community: "/images/community.png",
  together: "/images/together.png",
  hope: "/images/hope.png",
  help: "/images/help.png",
} as const;

export const galleryFilters = [
  { id: "all", label: "All" },
  { id: "christmas", label: "Christmas Celebration" },
  { id: "back-to-school", label: "Back-to-School Support" },
  { id: "emergency", label: "Emergency Assistance" },
  { id: "community", label: "Community Events" },
  { id: "volunteers", label: "Volunteers" },
] as const;

export type GalleryFilterId = (typeof galleryFilters)[number]["id"];
export type GalleryCategory = Exclude<GalleryFilterId, "all">;

export const galleryItems = [
  {
    id: "christmas-1",
    src: "/images/moniquexmas.jpg",
    alt: "Monique-A-Wish Christmas celebration with families and volunteers gathered in joy",
    category: "christmas",
  },
  {
    id: "christmas-2",
    src: "/images/moniquexmas.jpg",
    alt: "Holiday gift distribution bringing warmth to children and parents",
    category: "christmas",
  },
  {
    id: "christmas-3",
    src: "/images/moniquexmas.jpg",
    alt: "Organized gift room filled with care for Emporia families at Christmas",
    category: "christmas",
  },
  {
    id: "back-to-school-1",
    src: "/images/backtoschool.png",
    alt: "Back-to-school backpacks and supplies prepared for students in need",
    category: "back-to-school",
  },
  {
    id: "back-to-school-2",
    src: "/images/backtoschool.png",
    alt: "Students receiving encouragement and supplies for a confident school year",
    category: "back-to-school",
  },
  {
    id: "emergency-1",
    src: "/images/emergancyservices.png",
    alt: "Emergency assistance supplies ready for families facing sudden hardship",
    category: "emergency",
  },
  {
    id: "emergency-2",
    src: "/images/emergancyservices.png",
    alt: "Community relief items distributed with compassion during urgent need",
    category: "emergency",
  },
  {
    id: "community-1",
    src: "/images/community.png",
    alt: "Monique-A-Wish community volunteers and families united in service",
    category: "community",
  },
  {
    id: "community-2",
    src: "/images/together.png",
    alt: "Supporters standing together at a Monique-A-Wish outreach event",
    category: "community",
  },
  {
    id: "community-3",
    src: "/images/hope.png",
    alt: "A hopeful moment honoring Monique-A-Wish mission of compassion",
    category: "community",
  },
  {
    id: "community-4",
    src: "/images/moniquelogo.jpg",
    alt: "Monique-A-Wish logo representing legacy, love, and community purpose",
    category: "community",
  },
  {
    id: "volunteers-1",
    src: "/images/help.png",
    alt: "Volunteers providing hands-on help to families in need",
    category: "volunteers",
  },
  {
    id: "volunteers-2",
    src: "/images/help.png",
    alt: "Dedicated volunteers sorting and distributing support with care",
    category: "volunteers",
  },
] as const;

export const galleryImages = galleryItems.map(({ src, alt }) => ({ src, alt }));

export const galleryStorySections = [
  {
    id: "donations",
    title: "More Than Donations",
    description:
      "Every image reflects real moments—families welcomed, children celebrated, and neighbors showing up with open hearts. This work is personal, local, and driven by love.",
    insertAfter: 4,
  },
  {
    id: "dignity",
    title: "Serving Families With Dignity",
    description:
      "We believe support should feel respectful and warm. Our events are designed so families feel seen, valued, and celebrated—not just assisted.",
    insertAfter: 8,
  },
  {
    id: "community",
    title: "Built by Community Support",
    description:
      "Monique-A-Wish is powered by volunteers, donors, and partners across Emporia. Together, we turn remembrance into lasting hope for families in need.",
    insertAfter: 12,
  },
] as const;

export const galleryImpactStats = [
  { label: "Years Serving Community", value: 9, suffix: "+" },
  { label: "Families Helped", value: 1250, suffix: "+" },
  { label: "Volunteers Involved", value: 180, suffix: "+" },
  { label: "Annual Programs", value: 12, suffix: "" },
] as const;

export const timeline = [
  {
    year: "2015",
    title: "A Promise Born from Love",
    description:
      "After losing Monique, her father made a vow to transform grief into meaningful action for families in need.",
  },
  {
    year: "2017",
    title: "First Community Christmas Drive",
    description:
      "The inaugural holiday celebration brought gifts, warmth, and hope to local families facing hardship.",
  },
  {
    year: "2020",
    title: "Year-Round Support Expands",
    description:
      "Programs grew beyond the holidays to include back-to-school and emergency assistance throughout the year.",
  },
  {
    year: "Today",
    title: "A Growing Movement of Compassion",
    description:
      "Monique-A-Wish continues serving Emporia and surrounding communities with dignity, care, and consistency.",
  },
] as const;

export const testimonials = [
  {
    quote:
      "When we needed help most, Monique-A-Wish showed up with kindness—not just supplies, but real compassion.",
    author: "Community Parent",
  },
  {
    quote:
      "Our children felt seen and celebrated. That moment of joy stayed with our family long after the event.",
    author: "Local Family",
  },
  {
    quote:
      "Volunteering here reminded me how one act of love can ripple through an entire community.",
    author: "Volunteer Partner",
  },
] as const;

export const storyTimeline = [
  {
    title: "Founded in Memory of Monique",
    description:
      "Monique-A-Wish began as a promise to honor a beloved daughter and keep her spirit alive through acts of love.",
  },
  {
    title: "Helping a Few Families First",
    description:
      "What started as helping a small number of families revealed how deeply our community needed compassionate support.",
  },
  {
    title: "An Annual Christmas Celebration",
    description:
      "The mission grew into a cherished holiday gathering—gifts, meals, and moments of joy for families across Emporia.",
  },
  {
    title: "Year-Round Support",
    description:
      "Programs expanded to back-to-school assistance and emergency aid, serving families beyond the holiday season.",
  },
  {
    title: "Growing for the Future",
    description:
      "Today we are preparing for broader reach and grant opportunities to sustain and expand our community impact.",
  },
] as const;

export const missionValues = [
  {
    title: "Compassion",
    description: "We meet families with warmth, empathy, and care in every interaction.",
    icon: "💜",
  },
  {
    title: "Dignity",
    description: "Every family deserves to be seen, respected, and celebrated—not just helped.",
    icon: "✨",
  },
  {
    title: "Community",
    description: "Neighbors, volunteers, and partners unite to multiply hope across Emporia.",
    icon: "🤝",
  },
  {
    title: "Hope",
    description: "We believe love can outlast loss and light the way through hard seasons.",
    icon: "🕯️",
  },
  {
    title: "Service",
    description: "Practical support delivered consistently—from holidays to everyday emergencies.",
    icon: "🎁",
  },
  {
    title: "Legacy",
    description: "Monique's memory lives on in every gift given and every family served.",
    icon: "♾️",
  },
] as const;

export const storyQuotes = [
  {
    quote: "We're not rich folks. This is all from the heart.",
    attribution: "Founder, Monique-A-Wish",
  },
  {
    quote: "This all started with my daughter, Monique.",
    attribution: "Founder, Monique-A-Wish",
  },
] as const;

export const donationTiers = [
  { amount: "$25", title: "Warm Welcome", description: "Provides essentials for one child during outreach events." },
  { amount: "$75", title: "Family Support", description: "Helps supply food, gifts, and care packages for a family." },
  { amount: "$150", title: "Program Champion", description: "Sponsors participation in a full community program." },
  { amount: "$500", title: "Legacy Partner", description: "Funds expanded outreach and year-round emergency aid." },
] as const;
