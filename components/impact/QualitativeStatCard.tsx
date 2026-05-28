"use client";

import { motion } from "framer-motion";

type QualitativeStatCardProps = {
  display: string;
  label: string;
  hint?: string;
  icon?: string;
  index?: number;
  variant?: "light" | "brand" | "cream";
};

const variantStyles = {
  light: {
    card: "border-white/20 bg-white/10 text-white backdrop-blur",
    display: "text-white",
    label: "text-[#F8F3EA]/92",
    hint: "text-[#F8F3EA]/75",
    iconBg: "bg-[#F2C66D]/20 text-[#F2C66D]",
  },
  brand: {
    card: "border-[#5B2C83]/12 bg-white shadow-lg shadow-[#3D1B5F]/8",
    display: "text-[#3D1B5F]",
    label: "text-[#5B2C83]",
    hint: "text-[#4A4A4A]/85",
    iconBg: "bg-[#E8DDF5] text-[#5B2C83]",
  },
  cream: {
    card: "border-[#D4A017]/25 bg-[#FFFDF9] shadow-md",
    display: "text-[#3D1B5F]",
    label: "text-[#5B2C83]",
    hint: "text-[#4A4A4A]/85",
    iconBg: "bg-[#F2C66D]/25 text-[#3D1B5F]",
  },
};

export function QualitativeStatCard({
  display,
  label,
  hint,
  icon = "✦",
  index = 0,
  variant = "light",
}: QualitativeStatCardProps) {
  const styles = variantStyles[variant];

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className={`h-full rounded-2xl border p-5 transition-shadow duration-300 sm:p-6 ${styles.card} hover:shadow-xl`}
    >
      <div
        className={`mb-4 inline-flex size-10 items-center justify-center rounded-full text-lg sm:size-11 ${styles.iconBg}`}
        aria-hidden
      >
        {icon}
      </div>
      <p className={`text-2xl font-semibold leading-tight sm:text-3xl ${styles.display}`}>{display}</p>
      <p className={`mt-2 text-sm font-medium ${styles.label}`}>{label}</p>
      {hint && <p className={`mt-2 text-xs leading-relaxed ${styles.hint}`}>{hint}</p>}
    </motion.article>
  );
}
