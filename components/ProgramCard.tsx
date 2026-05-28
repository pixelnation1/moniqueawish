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
        transition={{ duration: 0.6, delay: index * 0.12 }}
        whileHover={{ y: -8 }}
        className="group overflow-hidden rounded-3xl border border-[#5B2C83]/14 bg-white shadow-lg shadow-[#3D1B5F]/8 transition-shadow hover:shadow-xl hover:shadow-[#3D1B5F]/12"
      >
        <div className="relative h-56 overflow-hidden rounded-t-3xl">
          <Image
            src={image}
            alt={`${title} community support event by Monique-A-Wish`}
            fill
            sizes="(max-width: 1024px) 100vw, 33vw"
            className="object-cover object-center transition duration-500 group-hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#3D1B5F]/30 via-[#3D1B5F]/10 to-transparent" />
        </div>
        <div className="p-6">
          <div className="mb-4 inline-flex size-10 items-center justify-center rounded-full bg-[#E8DDF5] text-[#5B2C83]">
            <span aria-hidden>❤</span>
          </div>
          <h3 className="text-2xl text-[#3D1B5F]">{title}</h3>
          <p className="mt-4 text-sm leading-7 text-[#4D4D4D]">{description}</p>
          <span className="mt-6 inline-flex rounded-full border border-[#5B2C83]/22 px-4 py-2 text-sm font-semibold text-[#5B2C83] transition group-hover:bg-[#E8DDF5]">
            Learn More
          </span>
        </div>
      </motion.article>
    </Link>
  );
}
