"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "none";
}

export function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
}: FadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: direction === "up" ? 20 : 0 }}
      animate={
        isInView
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: direction === "up" ? 20 : 0 }
      }
      transition={{
        duration: 0.55,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}
