"use client";

import { motion } from "framer-motion";
import {
  staggerContainer,
  staggerItem,
} from "@/lib/animations";

export default function WaitlistHeroSection() {
  return (
    <motion.header
      className="mb-14 md:mb-20 max-w-3xl"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        variants={staggerItem}
        className="font-headline text-[clamp(2.8rem,7vw,5rem)] font-extrabold tracking-tight text-on-surface leading-[1.05] mb-5"
      >
        Secure Your{" "}
        <em className="not-italic text-primary">Early Access</em>
      </motion.h1>

      <motion.p
        variants={staggerItem}
        className="text-base md:text-xl text-on-surface-variant leading-relaxed max-w-xl"
      >
        Join an exclusive circle of health pioneers. Gain data-driven clarity
        on your longevity and take the guesswork out of preventive wellness.
      </motion.p>
    </motion.header>
  );
}
