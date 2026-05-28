"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

type AnimatedCounterProps = {
  value: number;
  suffix?: string;
  display?: string;
  duration?: number;
};

export function AnimatedCounter({ value, suffix = "", display, duration = 1.8 }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

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
      <span ref={ref} className="text-3xl font-semibold text-white">
        {display}
      </span>
    );
  }

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      className="text-3xl font-semibold text-white"
    >
      {count.toLocaleString()}
      {suffix}
    </motion.span>
  );
}
