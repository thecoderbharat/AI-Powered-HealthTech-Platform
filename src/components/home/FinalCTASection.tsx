"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  scaleUpVariants,
  staggerContainer,
  staggerItem,
  viewportOnce,
  hoverScaleButton,
  tapScale,
} from "@/lib/animations";

export default function FinalCTASection() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="py-20 px-6 md:px-8"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="relative rounded-[1.5rem] bg-gradient-to-br from-surface-container-high to-surface-container-low p-12 md:p-20 overflow-hidden border border-white/[0.05]"
          variants={scaleUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {/* Ambient teal glow */}
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/10 blur-[80px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none"
          />

          <motion.div
            className="relative z-10 text-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.h2
              id="cta-heading"
              variants={staggerItem}
              className="font-headline text-4xl md:text-5xl font-extrabold mb-5 tracking-tight text-on-surface"
            >
              Ready to evolve your care?
            </motion.h2>

            <motion.p
              variants={staggerItem}
              className="text-on-surface-variant text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              Join the exclusive waitlist for WellAhead.ai and be the first to
              experience the future of autonomous health.
            </motion.p>

            <motion.div variants={staggerItem} className="flex justify-center">
              <motion.div
                whileHover={hoverScaleButton}
                whileTap={tapScale}
              >
                <Link
                  href="/waitlist"
                  className="inline-block btn-primary px-14 py-5 text-xl shadow-glow-teal-lg"
                  aria-label="Join the WellAhead.ai waitlist for exclusive early access"
                >
                  Join Waitlist
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
