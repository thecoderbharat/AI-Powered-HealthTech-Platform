"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Maximize2 } from "lucide-react";
import {
  fadeUpVariants,
  scaleUpVariants,
  viewportOnce,
} from "@/lib/animations";

export default function VideoMockupSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      aria-labelledby="video-section-heading"
      className="py-20 md:py-28 px-6 md:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* ── Section label ── */}
        <motion.h2
          id="video-section-heading"
          className="text-center font-headline font-black text-on-surface mb-14 tracking-tight text-2xl md:text-3xl"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          Intelligent Intervention in Action
        </motion.h2>

        {/* ── Video mockup ── */}
        <motion.div
          className="relative group cursor-pointer rounded-[1.5rem] overflow-hidden border border-outline-variant/20 shadow-[0_40px_80px_rgba(0,0,0,0.5)]"
          variants={scaleUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          role="button"
          tabIndex={0}
          aria-label="Play the SvasthaX predictive neural pathways core demo video — 4 minutes 12 seconds"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              // Placeholder: open video player
            }
          }}
        >
          {/* Thumbnail */}
          <div className="aspect-video relative">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMLfRe7u-eGYBOH3O6j6ZC9STHUMPHqGY_JpBg-nwp-ZvcNbvKRxTj6aAxWcsR4zGcYZRLjDn5ZSy0GNkppsZU-ZfD4LflYwwMVDN8tZV4L5-O7xXPWst0S2ynSW25uLEQmwGLCOlCc8oOnKrkSZwQ93B5ZwPt88ky2g1jjzUSNEZszYmTt6-YeAhlpDoCkkFUkYF4C2WTQFdgnB7XVFop9mMNrEYHjc1bMbcUXb0KPafnc36EL01lTGODFZQWr0xCNbreT6OMRFE"
              alt="Preview thumbnail of SvasthaX clinical demonstration — a modern clinical lab environment with a holographic AI health interface showing neural pathways and vital signs in teal"
              fill
              className={`object-cover transition-transform duration-700 ${isHovered ? "scale-105" : "scale-100"}`}
              sizes="(max-width: 768px) 100vw, 1200px"
            />
          </div>

          {/* Overlay */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-colors duration-300 ${
              isHovered
                ? "bg-surface-container-lowest/25"
                : "bg-surface-container-lowest/45"
            }`}
          >
            {/* Play button */}
            <motion.div
              animate={{ scale: isHovered ? 1.1 : 1 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary/90 flex items-center justify-center shadow-glow-teal"
              aria-hidden="true"
            >
              <Play
                className="text-on-primary-container ml-1"
                size={32}
                fill="currentColor"
                strokeWidth={0}
              />
            </motion.div>
          </div>

          {/* Bottom info bar */}
          <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 bg-gradient-to-t from-surface-container-lowest/90 to-transparent flex justify-between items-end">
            <div className="text-left">
              <p className="text-primary font-bold tracking-widest uppercase text-[10px] md:text-xs mb-1 font-headline">
                04:12
              </p>
              <p className="text-white font-headline font-bold text-sm md:text-base">
                Predictive Neural Pathways: Core Demo
              </p>
            </div>
            <Maximize2
              className="text-white/50 hover:text-white transition-colors"
              size={18}
              aria-hidden="true"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
