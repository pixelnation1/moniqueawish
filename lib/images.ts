import imageMeta from "@/lib/image-meta.json";

export type ImageMetaEntry = {
  original: string;
  webp: string;
  width: number;
  height: number;
  blurDataURL: string;
  hasAlpha: boolean;
};

export const IMAGE_META = imageMeta as Record<string, ImageMetaEntry>;

/** Brand-toned fallback blur when meta is missing */
export const FALLBACK_BLUR =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAD0lEQVQYV2NkYGD4z0AEYBxVSFUAAP3eA/0sQ8fMAAAAAElFTkSuQmCC";

/** Responsive size presets */
export const IMAGE_SIZES = {
  hero: "(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1400px",
  programCard: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px",
  galleryGrid: "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 400px",
  impactSplit: "(max-width: 1024px) 100vw, 50vw",
  logoNav: "48px",
  logoFooter: "44px",
  logoCenterpiece: "(max-width: 768px) 220px, 320px",
  content: "(max-width: 1024px) 100vw, 900px",
} as const;

function basenameFromPath(src: string): string {
  const match = src.match(/\/images\/([^./]+)/);
  return match?.[1] ?? src;
}

export function getImageMeta(src: string): ImageMetaEntry | undefined {
  return IMAGE_META[basenameFromPath(src)];
}

/** Prefer WebP; fall back to original path */
export function optimizedSrc(src: string): string {
  const meta = getImageMeta(src);
  return meta?.webp ?? src;
}

export function getBlurDataURL(src: string): string {
  return getImageMeta(src)?.blurDataURL ?? FALLBACK_BLUR;
}

export function getImageDimensions(src: string): { width: number; height: number } {
  const meta = getImageMeta(src);
  return meta ? { width: meta.width, height: meta.height } : { width: 1200, height: 800 };
}

/** Program card and detail page images — always use original paths */
export const PROGRAM_IMAGES = {
  christmas: "/images/moniquexmas.jpg",
  backToSchool: "/images/backtoschool.png",
  emergency: "/images/emergancyservices.png",
} as const;

/** Central paths — WebP preferred at runtime via optimizedSrc */
export const IMAGES = {
  logo: optimizedSrc("/images/moniquelogo.jpg"),
  hero: optimizedSrc("/images/moniquexmas.jpg"),
  community: optimizedSrc("/images/community.png"),
  together: optimizedSrc("/images/together.png"),
  hope: optimizedSrc("/images/hope.png"),
  help: optimizedSrc("/images/help.png"),
  backToSchool: optimizedSrc(PROGRAM_IMAGES.backToSchool),
  emergency: optimizedSrc(PROGRAM_IMAGES.emergency),
} as const;
