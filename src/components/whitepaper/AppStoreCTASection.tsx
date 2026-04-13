"use client";

import { motion } from "framer-motion";
import { Smartphone, Terminal } from "lucide-react";
import {
  staggerContainer,
  staggerItem,
  viewportOnce,
  hoverScaleButton,
  tapScale,
} from "@/lib/animations";

const storeButtons = [
  {
    icon: Smartphone,
    label: "Available on",
    storeName: "App Store",
    color: "group-hover:text-primary",
    ariaLabel: "Download WellAhead.ai on the Apple App Store",
  },
  {
    icon: Terminal,
    label: "Get it on",
    storeName: "Google Play",
    color: "group-hover:text-secondary",
    ariaLabel: "Download WellAhead.ai on Google Play",
  },
];

export default function AppStoreCTASection() {
  return (
    <section
      aria-labelledby="app-store-heading"
      className="py-20 px-6 md:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="bg-surface-container-low rounded-[1.5rem] py-20 md:py-24 px-8 border border-white/[0.05] relative overflow-hidden">
          {/* Dot grid texture */}
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "radial-gradient(#83efe1 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          {/* Ambient glow */}
          <div
            aria-hidden="true"
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-primary/[0.08] blur-[80px] rounded-full pointer-events-none"
          />

          <motion.div
            className="relative z-10 text-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.h2
              id="app-store-heading"
              variants={staggerItem}
              className="font-headline text-4xl md:text-6xl font-black text-on-surface mb-12 tracking-tight"
            >
              Experience the Future of Health
            </motion.h2>

            <motion.div
              variants={staggerItem}
              className="flex flex-wrap justify-center gap-5"
            >
              {storeButtons.map(({ icon: Icon, label, storeName, color, ariaLabel }) => (
                <motion.button
                  key={storeName}
                  whileHover={hoverScaleButton}
                  whileTap={tapScale}
                  className="bg-surface-container-highest border border-outline-variant/30 rounded-[1rem] px-7 py-4 flex items-center gap-4 hover:bg-surface-container transition-colors group"
                  aria-label={ariaLabel}
                >
                  <Icon
                    className={`text-on-surface-variant transition-colors ${color}`}
                    size={28}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <div className="text-left">
                    <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-label">
                      {label}
                    </p>
                    <p className="font-bold text-lg leading-tight font-headline text-on-surface">
                      {storeName}
                    </p>
                  </div>
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
