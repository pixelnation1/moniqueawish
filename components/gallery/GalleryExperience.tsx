"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  galleryFilters,
  galleryItems,
  galleryStorySections,
  type GalleryFilterId,
  type GalleryCategory,
} from "@/lib/site";

type GalleryItem = (typeof galleryItems)[number];

function categoryLabel(category: GalleryCategory): string {
  const map: Record<GalleryCategory, string> = {
    christmas: "Christmas Celebration",
    "back-to-school": "Back-to-School Support",
    emergency: "Emergency Assistance",
    community: "Community Events",
    volunteers: "Volunteers",
  };
  return map[category];
}

type GridEntry =
  | { kind: "image"; item: GalleryItem; lightboxIndex: number }
  | { kind: "story"; title: string; description: string };

export function GalleryExperience() {
  const [filter, setFilter] = useState<GalleryFilterId>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = useMemo(() => {
    if (filter === "all") return [...galleryItems];
    return galleryItems.filter((item) => item.category === filter);
  }, [filter]);

  const gridEntries = useMemo((): GridEntry[] => {
    const entries: GridEntry[] = [];
    filteredItems.forEach((item, lightboxIndex) => {
      entries.push({ kind: "image", item, lightboxIndex });
      if (filter === "all") {
        const story = galleryStorySections.find((s) => s.insertAfter === lightboxIndex + 1);
        if (story) {
          entries.push({
            kind: "story",
            title: story.title,
            description: story.description,
          });
        }
      }
    });
    return entries;
  }, [filteredItems, filter]);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goNext = useCallback(() => {
    setLightboxIndex((i) => (i === null ? 0 : (i + 1) % filteredItems.length));
  }, [filteredItems.length]);

  const goPrev = useCallback(() => {
    setLightboxIndex((i) => (i === null ? 0 : (i - 1 + filteredItems.length) % filteredItems.length));
  }, [filteredItems.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightboxIndex, closeLightbox, goNext, goPrev]);

  const activeItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <>
      <div className="mb-6 flex flex-wrap justify-center gap-1.5 sm:mb-10 sm:gap-2 md:gap-3" role="tablist" aria-label="Gallery filters">
        {galleryFilters.map((f) => (
          <button
            key={f.id}
            type="button"
            role="tab"
            aria-selected={filter === f.id}
            onClick={() => {
              setFilter(f.id);
              setLightboxIndex(null);
            }}
            className={`min-h-10 rounded-full px-3 py-2 text-[11px] font-semibold transition-all duration-300 touch-manipulation sm:px-4 sm:text-xs md:text-sm ${
              filter === f.id
                ? "bg-[#5B2C83] text-white shadow-md shadow-[#5B2C83]/25"
                : "border border-[#5B2C83]/20 bg-white text-[#5B2C83] hover:border-[#5B2C83]/40 hover:bg-[#E8DDF5]/50"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
        {gridEntries.map((entry, idx) =>
          entry.kind === "story" ? (
            <motion.div
              key={`story-${entry.title}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="col-span-2 rounded-xl border border-[#D4A017]/30 bg-gradient-to-br from-[#3D1B5F] to-[#5B2C83] p-5 shadow-xl sm:rounded-2xl sm:p-8 lg:col-span-3"
            >
              <div className="gold-divider mb-3 h-px w-12 opacity-80 sm:mb-4" />
              <h3 className="text-lg font-semibold text-[#F2C66D] sm:text-xl md:text-2xl">{entry.title}</h3>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#F8F3EA]/92 md:text-base">
                {entry.description}
              </p>
            </motion.div>
          ) : (
            <motion.button
              key={entry.item.id}
              type="button"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: (idx % 6) * 0.04, duration: 0.45 }}
              onClick={() => setLightboxIndex(entry.lightboxIndex)}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-white/80 shadow-md shadow-[#5B2C83]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5B2C83] sm:rounded-2xl sm:shadow-lg"
            >
              <Image
                src={entry.item.src}
                alt={entry.item.alt}
                fill
                loading="lazy"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#3D1B5F]/45 via-transparent to-transparent" />
              <span className="pointer-events-none absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-[#5B2C83]">
                {categoryLabel(entry.item.category)}
              </span>
            </motion.button>
          ),
        )}
      </div>

      {filteredItems.length === 0 && (
        <p className="py-12 text-center text-[#5B2C83]">No images in this category yet.</p>
      )}

      <AnimatePresence>
        {activeItem && lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#1a0a2e]/95 p-3 pb-20 backdrop-blur-md sm:p-4 sm:pb-4"
            role="dialog"
            aria-modal="true"
            aria-label="Image lightbox"
            onClick={closeLightbox}
          >
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute right-3 top-3 z-10 flex min-h-11 min-w-11 items-center justify-center rounded-full border border-white/30 bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-white/25 touch-manipulation sm:right-4 sm:top-4"
              aria-label="Close lightbox"
            >
              Close
            </button>

            <motion.div
              key={activeItem.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-5xl px-2 sm:px-12 md:px-16"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={activeItem.src}
                alt={activeItem.alt}
                width={1400}
                height={1000}
                className="mx-auto max-h-[55vh] w-full rounded-lg object-contain shadow-2xl sm:max-h-[75vh] sm:w-auto sm:rounded-xl"
                priority
              />
              <p className="mt-3 line-clamp-3 px-2 text-center text-xs text-[#F8F3EA]/90 sm:mt-4 sm:text-sm">
                {activeItem.alt}
              </p>
              <p className="mt-1 text-center text-[10px] text-[#F2C66D] sm:text-xs">
                {categoryLabel(activeItem.category)} · {lightboxIndex + 1} of {filteredItems.length}
              </p>
            </motion.div>

            {filteredItems.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    goPrev();
                  }}
                  className="absolute bottom-4 left-4 z-10 flex size-12 items-center justify-center rounded-full border border-white/30 bg-white/15 text-2xl text-white backdrop-blur transition hover:bg-white/25 touch-manipulation md:bottom-auto md:left-6 md:top-1/2 md:-translate-y-1/2"
                  aria-label="Previous image"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    goNext();
                  }}
                  className="absolute bottom-4 right-4 z-10 flex size-12 items-center justify-center rounded-full border border-white/30 bg-white/15 text-2xl text-white backdrop-blur transition hover:bg-white/25 touch-manipulation md:bottom-auto md:right-6 md:top-1/2 md:-translate-y-1/2"
                  aria-label="Next image"
                >
                  ›
                </button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
