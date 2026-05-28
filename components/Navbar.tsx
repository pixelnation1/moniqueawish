"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks, SITE } from "@/lib/site";
import { CTA } from "@/lib/cta";
import { LogoDisplay } from "@/components/LogoDisplay";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const closeOnPopState = () => setMenuOpen(false);
    window.addEventListener("popstate", closeOnPopState);
    return () => window.removeEventListener("popstate", closeOnPopState);
  }, []);

  return (
    <header className="glass-nav fixed inset-x-0 top-0 z-[60]">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-5 sm:py-4 md:px-8">
        <motion.div whileHover={{ y: -1, scale: 1.01 }} transition={{ duration: 0.25 }}>
          <Link href="/" className="group flex min-w-0 items-center gap-2.5 sm:gap-3" onClick={() => setMenuOpen(false)}>
            <LogoDisplay size="nav" priority glow />
            <div className="min-w-0 leading-tight">
              <p className="truncate text-sm font-semibold tracking-wide text-[#3D1B5F] sm:text-base">
                {SITE.name}
              </p>
              <p className="hidden text-[10px] text-[#5B2C83]/85 sm:block sm:text-[11px]">{SITE.tagline}</p>
            </div>
          </Link>
        </motion.div>

        <nav className="hidden items-center gap-6 text-sm font-medium text-[#3D1B5F] lg:flex" aria-label="Main">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors hover:text-[#5B2C83] ${
                  active ? "text-[#5B2C83] underline decoration-[#D4A017] decoration-2 underline-offset-4" : ""
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Link
            href="/donate"
            className="hidden rounded-full bg-[#D4A017] px-5 py-2 text-sm font-semibold text-[#3D1B5F] shadow-lg shadow-[#D4A017]/25 transition hover:-translate-y-0.5 hover:bg-[#F2C66D] md:inline-flex"
          >
            {CTA.donateNav}
          </Link>
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setMenuOpen((state) => !state)}
            className="inline-flex size-11 min-h-11 min-w-11 items-center justify-center rounded-full border border-[#5B2C83]/20 text-[#5B2C83] touch-manipulation lg:hidden"
          >
            <span className="text-lg" aria-hidden>
              {menuOpen ? "✕" : "☰"}
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[70] bg-[#2A123F]/40 backdrop-blur-sm lg:hidden"
              aria-label="Close menu overlay"
              onClick={() => setMenuOpen(false)}
            />
            <motion.nav
              id="mobile-nav"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-x-0 top-[3.25rem] z-[80] max-h-[calc(100dvh-3.25rem)] overflow-y-auto overscroll-contain border-t border-[#5B2C83]/12 bg-[#FFFDF9] px-4 py-5 shadow-xl sm:top-[4.25rem] sm:max-h-[calc(100dvh-4.25rem)] lg:hidden"
              aria-label="Mobile"
            >
            <div className="mx-auto flex max-w-lg flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-xl px-4 py-3.5 text-base font-medium touch-manipulation ${
                    pathname === link.href
                      ? "bg-[#E8DDF5]/80 text-[#3D1B5F]"
                      : "text-[#3D1B5F] active:bg-[#F8F3EA]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/donate"
                onClick={() => setMenuOpen(false)}
                className="mt-3 flex min-h-12 items-center justify-center rounded-full bg-[#D4A017] px-5 py-3.5 text-center text-sm font-semibold text-[#3D1B5F] shadow-lg shadow-[#D4A017]/30 touch-manipulation"
              >
                {CTA.donatePrimary}
              </Link>
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="flex min-h-12 items-center justify-center rounded-full border border-[#5B2C83]/25 bg-white px-5 py-3.5 text-center text-sm font-semibold text-[#5B2C83] touch-manipulation"
              >
                {CTA.involvedPrimary}
              </Link>
            </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
