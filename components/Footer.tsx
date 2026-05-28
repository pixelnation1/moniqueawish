import Link from "next/link";
import { navLinks, SITE } from "@/lib/site";
import { LogoDisplay } from "@/components/LogoDisplay";

export function Footer() {
  return (
    <footer className="bg-[#2A123F] px-5 py-14 text-[#F8F3EA] md:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <LogoDisplay size="footer" footerGlow glow />
            <div>
              <p className="text-xl font-semibold">
                Monique<span className="text-[#F2C66D]">-A-Wish</span>
              </p>
              <p className="mt-0.5 text-[11px] text-[#F8F3EA]/80">{SITE.tagline}</p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-7 text-[#F8F3EA]/82">
            Turning grief into hope through compassionate support, community programs, and year-round giving.
          </p>
        </div>
        <div>
          <h3 className="text-base text-[#F2C66D]">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm text-[#F8F3EA]/85">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-[#F2C66D]">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/donate" className="hover:text-[#F2C66D]">
                Donate
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-base text-[#F2C66D]">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm text-[#F8F3EA]/85">
            <li>
              <a href={`mailto:${SITE.email}`} className="hover:text-[#F2C66D]">
                {SITE.email}
              </a>
            </li>
            <li>{SITE.location}</li>
          </ul>
        </div>
        <div>
          <h3 className="text-base text-[#F2C66D]">Stay Connected</h3>
          <form className="mt-4" action="#" method="post">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Email for updates"
              className="w-full rounded-full border border-white/20 bg-white/8 px-4 py-2 text-sm placeholder:text-[#F8F3EA]/50 focus:outline-none focus:ring-2 focus:ring-[#F2C66D]"
            />
            <button
              type="submit"
              className="mt-3 w-full rounded-full bg-[#D4A017] px-4 py-2 text-sm font-semibold text-[#3D1B5F] transition hover:bg-[#F2C66D]"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-center text-xs text-[#F8F3EA]/60">
        © {new Date().getFullYear()} Monique-A-Wish. All rights reserved.
      </p>
    </footer>
  );
}
