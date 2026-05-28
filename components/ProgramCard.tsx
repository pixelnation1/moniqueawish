"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type ProgramCardProps = {
  title: string;
  description: string;
  image: string;
  index?: number;
  href?: string;
};

export function ProgramCard({
  title,
  description,
  image,
  index = 0,
  href = "/programs",
}: ProgramCardProps) {
  return (
    <Link href={href} className="block cursor-pointer">
      <motion.article
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ y: -10, transition: { duration: 0.3 } }}
        className="group overflow-hidden rounded-3xl border border-[#5B2C83]/14 bg-white shadow-lg shadow-[#3D1B5F]/10 transition-all duration-300 ease-out hover:border-[#5B2C83]/22 hover:shadow-2xl hover:shadow-[#3D1B5F]/14"
      >
        <div className="relative h-44 overflow-hidden rounded-t-2xl sm:h-52 md:h-56 md:rounded-t-3xl">
          <Image
            src={image}
            alt={`${title} community support event by Monique-A-Wish`}
            fill
            sizes="(max-width: 1024px) 100vw, 33vw"
            className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.06]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#3D1B5F]/35 via-[#3D1B5F]/8 to-[#F2C66D]/5" />
        </div>
      <div className="p-4 sm:p-6">
        <div className="mb-3 inline-flex size-9 items-center justify-center rounded-full bg-[#E8DDF5] text-[#5B2C83] sm:mb-4 sm:size-10">
          <span aria-hidden>❤</span>
        </div>
        <h3 className="text-xl text-[#3D1B5F] sm:text-2xl">{title}</h3>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#4D4D4D] sm:mt-4 sm:leading-7">{description}</p>
        <span className="mt-4 inline-flex min-h-10 items-center rounded-full border border-[#5B2C83]/22 px-4 py-2 text-sm font-semibold text-[#5B2C83] transition group-hover:bg-[#E8DDF5] sm:mt-6">
            Learn More
          </span>
        </div>
      </motion.article>
    </Link>
  );
}
