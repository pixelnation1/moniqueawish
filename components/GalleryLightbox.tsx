"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type GalleryItem = { src: string; alt: string };

export function GalleryLightbox({ images }: { images: readonly GalleryItem[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") setActiveIndex((i) => (i === null ? 0 : (i + 1) % images.length));
      if (e.key === "ArrowLeft")
        setActiveIndex((i) => (i === null ? 0 : (i - 1 + images.length) % images.length));
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [activeIndex, close, images.length]);

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {images.map((item, index) => (
          <motion.button
            key={`${item.src}-${index}`}
            type="button"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.02 }}
            onClick={() => setActiveIndex(index)}
            className="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-2xl border border-white/70 shadow-lg shadow-[#5B2C83]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#5B2C83]"
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={900}
              height={700}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#3D1B5F]/35 via-transparent to-transparent" />
          </motion.button>
        ))}
      </div>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#2A123F]/90 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-5 top-5 rounded-full border border-white/30 px-3 py-1 text-sm text-white"
            aria-label="Close lightbox"
          >
            Close
          </button>
          <div className="relative max-h-[85vh] max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={images[activeIndex].src}
              alt={images[activeIndex].alt}
              width={1400}
              height={1000}
              className="max-h-[85vh] w-auto rounded-2xl object-contain shadow-2xl"
            />
            <p className="mt-4 text-center text-sm text-[#F8F3EA]/90">{images[activeIndex].alt}</p>
          </div>
        </div>
      )}
    </>
  );
}
