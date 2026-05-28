"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

type AnimatedCounterProps = {
  value: number;
  suffix?: string;
  display?: string;
  duration?: number;
  tone?: "light" | "brand";
  className?: string;
};

const toneClasses = {
  light: "text-white",
  brand: "text-[#3D1B5F]",
};

export function AnimatedCounter({
  value,
  suffix = "",
  display,
  duration = 1.8,
  tone = "light",
  className = "",
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);
  const colorClass = toneClasses[tone];

  useEffect(() => {
    if (!inView || display) return;

    let start = 0;
    const step = Math.ceil(value / (duration * 60));
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [inView, value, duration, display]);

  if (display) {
    return (
      <span ref={ref} className={`text-2xl font-semibold sm:text-3xl ${colorClass} ${className}`}>
        {display}
      </span>
    );
  }

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      className={`text-2xl font-semibold sm:text-3xl ${colorClass} ${className}`}
    >
      {count.toLocaleString()}
      {suffix}
    </motion.span>
  );
}
