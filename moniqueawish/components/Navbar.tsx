"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { navLinks, SITE } from "@/lib/site";
import { LogoDisplay } from "@/components/LogoDisplay";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="glass-nav fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <motion.div whileHover={{ y: -1, scale: 1.01 }} transition={{ duration: 0.25 }}>
          <Link href="/" className="group flex items-center gap-3">
            <LogoDisplay size="nav" priority glow />
            <div className="leading-tight">
              <p className="font-semibold tracking-wide text-[#3D1B5F]">{SITE.name}</p>
              <p className="text-[10px] text-[#5B2C83]/85 sm:text-[11px]">{SITE.tagline}</p>
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

        <div className="flex items-center gap-3">
          <Link
            href="/donate"
            className="hidden rounded-full bg-[#D4A017] px-5 py-2 text-sm font-semibold text-[#3D1B5F] shadow-lg shadow-[#D4A017]/25 transition hover:-translate-y-0.5 hover:bg-[#F2C66D] md:inline-flex"
          >
            Donate
          </Link>
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label="Toggle navigation menu"
            onClick={() => setMenuOpen((state) => !state)}
            className="inline-flex size-10 items-center justify-center rounded-full border border-[#5B2C83]/20 text-[#5B2C83] lg:hidden"
          >
            <span className="text-lg" aria-hidden>
              {menuOpen ? "✕" : "☰"}
            </span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-nav"
          className="border-t border-[#5B2C83]/12 bg-[#FFFDF9]/95 px-5 py-4 backdrop-blur lg:hidden"
          aria-label="Mobile"
        >
          <div className="flex flex-col gap-4 text-sm text-[#3D1B5F]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={pathname === link.href ? "font-semibold text-[#5B2C83]" : ""}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/donate"
              onClick={() => setMenuOpen(false)}
              className="mt-1 inline-flex w-fit rounded-full bg-[#D4A017] px-4 py-2 font-semibold text-[#3D1B5F]"
            >
              Donate
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
