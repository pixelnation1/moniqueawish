"use client";

import Image, { type ImageProps } from "next/image";
import { useCallback, useState } from "react";
import { getBlurDataURL, optimizedSrc } from "@/lib/images";

type OptimizedImageProps = Omit<ImageProps, "src" | "placeholder" | "blurDataURL"> & {
  src: string;
  /** Use original path key for blur lookup when src is already optimized */
  blurSrc?: string;
  fadeIn?: boolean;
  useBlur?: boolean;
};

export function OptimizedImage({
  src,
  blurSrc,
  alt,
  className = "",
  fadeIn = true,
  useBlur = true,
  onLoad,
  ...props
}: OptimizedImageProps) {
  const [loaded, setLoaded] = useState(false);
  const resolvedSrc = optimizedSrc(src);
  const blurKey = blurSrc ?? src;
  const blurDataURL = useBlur ? getBlurDataURL(blurKey) : undefined;

  const handleLoad = useCallback(
    (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
      setLoaded(true);
      onLoad?.(event);
    },
    [onLoad],
  );

  const fadeClass = fadeIn ? (loaded ? "opacity-100" : "opacity-0") : "opacity-100";

  return (
    <Image
      src={resolvedSrc}
      alt={alt}
      placeholder={blurDataURL ? "blur" : "empty"}
      blurDataURL={blurDataURL}
      onLoad={handleLoad}
      className={`transition-opacity duration-500 ease-out ${fadeClass} ${className}`.trim()}
      {...props}
    />
  );
}
