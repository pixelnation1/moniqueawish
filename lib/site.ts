export const SITE = {
  name: "Monique-A-Wish",
  tagline: "Infinity gifts of love to those in need",
  email: "contact@moniqueawish.org",
  location: "Emporia, KS 66801",
  logo: "/images/moniquelogo.jpg",
  heroImage: "/images/moniquexmas.jpg",
} as const;

export const getHelpSupportTypes = [
  {
    title: "Christmas Celebration Support",
    description:
      "Holiday gifts, meals, and celebration support for families during the Christmas season.",
    icon: "🎄",
    href: "/programs/christmas-celebration",
  },
  {
    title: "Back-to-School Support",
    description: "Backpacks, school supplies, and encouragement for students starting the school year.",
    icon: "📚",
    href: "/programs/back-to-school-support",
  },
  {
    title: "Emergency Assistance",
    description: "Urgent help with essentials, resources, and compassionate connection during crisis.",
    icon: "🆘",
    href: "/programs/emergency-assistance",
  },
  {
    title: "Community Resource Connections",
    description:
      "Guidance connecting your family to local resources and community support when available.",
    icon: "🤝",
  },
] as const;

export const getHelpProcessSteps = [
  {
    step: 1,
    title: "Reach out",
    description: "Contact Monique-A-Wish by email or through the request form below.",
  },
  {
    step: 2,
    title: "Share what support is needed",
    description: "Tell us about your situation and the type of help your family is seeking.",
  },
  {
    step: 3,
    title: "Monique-A-Wish reviews available resources",
    description: "Our team reviews current programs, supplies, and community capacity.",
  },
  {
    step: 4,
    title: "The team follows up when possible",
    description: "We respond with care when support can be offered—timing depends on availability.",
  },
] as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Our Story", href: "/our-story" },
  { label: "Impact", href: "/impact" },
  { label: "Programs", href: "/programs" },
  { label: "Get Help", href: "/get-help" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
] as const;

/** Shown beneath impact stat grids — honest tracking disclaimer */
export const IMPACT_DISCLAIMER =
  "Impact numbers will continue to be updated as Monique-A-Wish grows and tracks annual outreach.";

export const TRANSPARENCY_MATTERS_COPY =
  "Every gift helps support families through programs focused on holiday assistance, school support, emergency needs, and community care.";

/** Homepage & impact overview — qualitative displays, not fabricated counts */
export const homepageImpactStats = [
  {
    display: "13+",
    label: "Years Serving the Community",
    hint: "A growing legacy of local outreach in Emporia and surrounding areas",
    icon: "🕯️",
  },
  {
    display: "Ongoing",
    label: "Families Supported Each Year",
    hint: "Support expands season by season with volunteers and donors",
    icon: "🏠",
  },
  {
    display: "Annual",
    label: "Holiday Support Provided",
    hint: "Gifts, meals, and celebration for families during Christmas",
    icon: "🎁",
  },
  {
    display: "Year-Round",
    label: "Community Care",
    hint: "Holiday, school, emergency, and ongoing support for local families",
    icon: "💜",
  },
] as const;

export const trustPillars = [
  {
    title: "Community-rooted mission",
    description:
      "Monique-A-Wish was born in Emporia and stays focused on neighbors helping neighbors—with transparency and heart.",
    icon: "🌾",
  },
  {
    title: "Direct support for families",
    description:
      "Contributions and volunteer time go toward practical help families can feel: supplies, meals, gifts, and encouragement.",
    icon: "🤲",
  },
  {
    title: "Volunteer-powered programs",
    description:
      "Events and outreach are strengthened by volunteers who donate time, sorting, setup, and welcome at every gathering.",
    icon: "🙌",
  },
  {
    title: "Built in memory of Monique",
    description:
      "Every act of service honors a beloved daughter and keeps her spirit alive through love in action.",
    icon: "♾️",
  },
  {
    title: "Focused on dignity, hope, and care",
    description:
      "Families are welcomed with respect—never judgment—so support feels warm, human, and hopeful.",
    icon: "✨",
  },
] as const;

export const programImpactBreakdown = [
  {
    title: "Christmas Celebration",
    description:
      "Annual holiday outreach bringing gifts, meals, and joyful gathering to families facing hardship.",
    href: "/programs/christmas-celebration",
    icon: "🎄",
  },
  {
    title: "Back-to-School Support",
    description:
      "Backpacks, supplies, and encouragement so students start the school year prepared and confident.",
    href: "/programs/back-to-school-support",
    icon: "📚",
  },
  {
    title: "Emergency Assistance",
    description:
      "Responsive aid for urgent needs—essentials, resources, and compassionate connection in crisis moments.",
    href: "/programs/emergency-assistance",
    icon: "🆘",
  },
] as const;

export const transparencyPoints = [
  "Programs and direct family support are the priority for donations and in-kind gifts.",
  "Volunteers and community partners help keep outreach personal and cost-effective.",
  "We welcome questions about how gifts support holiday, school, emergency, and year-round care.",
  "As outreach grows, we are building clearer annual reporting for donors and grant partners.",
] as const;

export const volunteerImpactItems = [
  {
    title: "Event day volunteers",
    description:
      "Setup, greeting families, distributing gifts and supplies, and creating a welcoming atmosphere at celebrations.",
  },
  {
    title: "Donation sorting & prep",
    description:
      "Organizing donated items, preparing backpacks, and ensuring families receive thoughtful, ready-to-go support.",
  },
  {
    title: "Community ambassadors",
    description:
      "Sharing the mission, connecting families to resources, and inviting neighbors to give time or support.",
  },
] as const;

export const communityPartnerPlaceholders = [
  {
    title: "Local Businesses",
    description:
      "Placeholder for sponsors who provide supplies, event support, or in-kind resources for families.",
  },
  {
    title: "Churches & Faith Groups",
    description:
      "Placeholder for faith communities who volunteer, donate, and help spread the word with compassion.",
  },
  {
    title: "Volunteers",
    description:
      "The heartbeat of our mission—neighbors who show up with hands, hearts, and time.",
  },
  {
    title: "Community Donors",
    description:
      "Individuals and families whose gifts—large or small—keep programs possible year after year.",
  },
  {
    title: "Future Grant Partners",
    description:
      "Placeholder for foundations and grants that can help scale outreach responsibly as we grow.",
  },
] as const;

/** Qualitative highlights for donate/gallery — no fabricated totals */
export const outreachHighlights = [
  { display: "Local", label: "Families Served", hint: "Emporia-area outreach" },
  { display: "Volunteer", label: "Powered Events", hint: "Community hands at work" },
  { display: "3", label: "Core Programs", hint: "Holiday, school, emergency" },
  { display: "Growing", label: "Community Reach", hint: "Expanding with support" },
] as const;

/** @deprecated Use homepageImpactStats — kept for gradual migration */
export const impactStats = homepageImpactStats;

export const donationImpactStats = outreachHighlights;
export const galleryImpactStats = outreachHighlights;

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
