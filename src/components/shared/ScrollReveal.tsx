"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeUpVariants, viewportOnce } from "@/lib/animations";
import type { Variants } from "framer-motion";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  /** Override viewport margin */
  margin?: string;
}

/**
 * ScrollReveal — Generic scroll-triggered reveal wrapper.
 * Defaults to fadeUp. Pass custom `variants` for overrides.
 *
 * @example
 * <ScrollReveal>
 *   <MyCard />
 * </ScrollReveal>
 */
export default function ScrollReveal({
  children,
  className,
  variants = fadeUpVariants,
  delay = 0,
  margin = "-80px",
}: ScrollRevealProps) {
  return (
    <motion.div
      variants={delay ? {
        hidden: variants.hidden,
        visible: {
          ...(typeof variants.visible === "object" ? variants.visible : {}),
          transition: {
            ...(typeof variants.visible === "object" &&
            "transition" in variants.visible &&
            typeof variants.visible.transition === "object"
              ? variants.visible.transition
              : {}),
            delay,
          },
        },
      } : variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
