"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/AnimatedCounter";

type StatCardProps = {
  label: string;
  value: number;
  suffix?: string;
  display?: string;
  index?: number;
};

export function StatCard({ label, value, suffix, display, index = 0 }: StatCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur sm:p-6"
    >
      <div className="mb-4 inline-flex size-10 items-center justify-center rounded-full bg-[#F2C66D]/20 text-[#F2C66D] sm:mb-5 sm:size-11">
        <span aria-hidden>✨</span>
      </div>
      <AnimatedCounter value={value} suffix={suffix} display={display} />
      <p className="mt-2 text-sm text-[#F8F3EA]/92">{label}</p>
    </motion.article>
  );
}
