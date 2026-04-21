"use client";

import { motion } from "framer-motion";
import { FileText, Download } from "lucide-react";
import {
  scaleUpVariants,
  staggerContainer,
  staggerItem,
  viewportOnce,
  hoverScaleButton,
  tapScale,
} from "@/lib/animations";

export default function WhitepaperCardSection() {
  return (
    <section
      aria-labelledby="whitepaper-card-heading"
      className="py-12 px-6 md:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="rounded-[1.5rem] p-px bg-gradient-to-br from-white/20 via-transparent to-secondary/30 shadow-glow-purple"
          variants={scaleUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <div className="bg-surface-container-high rounded-[1.4rem] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-10 lg:gap-20 overflow-hidden relative">
            {/* Ambient glow */}
            <div
              aria-hidden="true"
              className="absolute -right-20 -top-20 w-80 h-80 bg-primary/[0.05] blur-[80px] rounded-full pointer-events-none"
            />

            {/* ── PDF icon card ── */}
            <motion.div
              className="w-40 h-56 md:w-48 md:h-64 flex-shrink-0 bg-surface-container-lowest rounded-[1rem] border border-outline-variant/30 flex items-center justify-center relative"
              whileHover={{ scale: 1.03, rotate: 1 }}
              transition={{ duration: 0.3 }}
              aria-hidden="true"
            >
              <FileText
                className="text-primary"
                size={64}
                strokeWidth={1}
              />
              <span className="absolute -bottom-3 right-4 bg-secondary text-on-secondary px-3 py-1 rounded-full text-[10px] font-extrabold font-headline uppercase tracking-widest shadow-glow-purple">
                PDF
              </span>
            </motion.div>

            {/* ── Content ── */}
            <motion.div
              className="flex-1 text-center lg:text-left"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <motion.h2
                id="whitepaper-card-heading"
                variants={staggerItem}
                className="font-headline text-3xl md:text-5xl font-black text-on-surface mb-5 tracking-tight"
              >
                SvasthaX Clinical Whitepaper.
              </motion.h2>

              <motion.p
                variants={staggerItem}
                className="text-on-surface-variant text-base md:text-lg leading-relaxed max-w-2xl mb-10"
              >
                Our proprietary Bayesian inference model processes multi-modal
                health telemetry with 98.4% predictive accuracy. Explore the
                peer-reviewed methodology behind our autonomous health agents.
              </motion.p>

              <motion.div
                variants={staggerItem}
                className="flex justify-center lg:justify-start"
              >
                <motion.button
                  whileHover={{ ...hoverScaleButton, backgroundColor: "#83efe1" }}
                  whileTap={tapScale}
                  className="inline-flex items-center gap-3 bg-white text-surface-container-lowest px-10 py-5 rounded-full font-bold text-base font-headline transition-colors duration-200 group"
                  aria-label="Download the SvasthaX clinical whitepaper PDF"
                >
                  Download Whitepaper
                  <Download
                    size={18}
                    className="group-hover:translate-y-0.5 transition-transform"
                    aria-hidden="true"
                  />
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
