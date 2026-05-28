"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { CTA } from "@/lib/cta";

export function HopeSection() {
  return (
    <section className="hope-section-bg relative overflow-hidden px-4 py-14 sm:px-5 sm:py-20 md:px-8 md:py-32">
      <div className="section-glow left-[8%] top-[20%] h-52 w-52 bg-[#F2C66D]/45" />
      <div className="section-glow right-[10%] bottom-[15%] h-56 w-56 bg-[#E8DDF5]/60" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-8 sm:gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 text-xs tracking-[0.28em] text-[#5B2C83] uppercase">A Message of Hope</p>
          <h2 className="text-balance text-2xl font-semibold leading-snug tracking-tight text-[#3D1B5F] sm:text-3xl md:text-5xl lg:text-[3.25rem]">
            Hope Is What We Leave Behind
          </h2>
          <p className="prose-width mt-4 max-w-xl text-balance text-sm leading-relaxed text-[#4A4A4A] sm:mt-6 sm:text-base">
            In memory of Monique, we believe that even in life&apos;s darkest seasons, love can still light the way.
            Every program, every gift, and every volunteer hour is a promise that families will never walk alone.
          </p>
          <blockquote className="mt-6 border-l-4 border-[#D4A017] pl-4 text-sm text-[#3D1B5F] italic sm:mt-8 sm:pl-5 sm:text-base">
            &ldquo;Turning grief into hope—one smile, one family, one community at a time.&rdquo;
          </blockquote>
          <div className="mt-8">
            <Button href="/donate">{CTA.donatePrimary}</Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative"
        >
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-[#F2C66D]/35 to-[#5B2C83]/20 blur-xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/60 shadow-2xl shadow-[#3D1B5F]/20">
            <Image
              src="/images/hope.png"
              alt="Inspirational moment of hope from the Monique-A-Wish community"
              width={900}
              height={900}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-auto w-full object-contain bg-[#FFFDF9]/80 p-2"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
