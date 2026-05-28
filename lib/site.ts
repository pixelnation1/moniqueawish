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

export const galleryImages = [
  { src: "/images/community.png", alt: "Monique-A-Wish community volunteers and families united in service" },
  { src: "/images/together.png", alt: "Supporters standing together at a Monique-A-Wish outreach event" },
  { src: "/images/hope.png", alt: "A hopeful moment honoring Monique-A-Wish's mission of compassion" },
  { src: "/images/help.png", alt: "Volunteers providing hands-on help to families in need" },
  { src: "/images/moniquexmas.jpg", alt: "Monique-A-Wish holiday community gathering and gift distribution" },
  { src: "/images/moniquexmas.jpg", alt: "Families receiving gifts and warm support during the holidays" },
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

export const donationTiers = [
  { amount: "$25", title: "Warm Welcome", description: "Provides essentials for one child during outreach events." },
  { amount: "$75", title: "Family Support", description: "Helps supply food, gifts, and care packages for a family." },
  { amount: "$150", title: "Program Champion", description: "Sponsors participation in a full community program." },
  { amount: "$500", title: "Legacy Partner", description: "Funds expanded outreach and year-round emergency aid." },
] as const;
