"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  cardGridContainer,
  cardGridItem,
  viewportOnce,
} from "@/lib/animations";

// ─── Real app screenshots ──────────────────────────────────────────────────
// Place images in: public/images/
// app-dashboard.png  → Hi Bharat / Prevention Score 73 screen
// app-daily-plan.png → Optimize Your Day / Today's Protocol screen
// app-profile.png    → Profile / BH avatar screen
// ──────────────────────────────────────────────────────────────────────────
const appScreens = [
  {
    title: "Universal Dashboard",
    description:
      "Real-time synthesis of genomic, biometric, and environmental data.",
    imageSrc: "/images/app-dashboard.png",
    imageAlt:
      "SvasthaX app home screen showing Prevention Score of 73, Today's Focus items including Hydration goal, Low HDL Cholesterol risk area, and High Processed Food Intake alert",
    offsetClass: "",
    glow: "rgba(131,239,225,0.15)",
  },
  {
    title: "Adaptive Daily Plan",
    description:
      "Precision micro-adjustments to nutrition and recovery based on circadian flux.",
    imageSrc: "/images/app-daily-plan.png",
    imageAlt:
      "SvasthaX Adaptive Daily Plan screen showing Today's Protocol — Optimize Your Day with Morning Hydration, Heart-Healthy Breakfast completed, and Desk Break Mobility tasks",
    offsetClass: "md:translate-y-12",
    glow: "rgba(175,136,255,0.15)",
  },
  {
    title: "AI Health Oracle",
    description:
      "Context-aware conversational intelligence for immediate diagnostic clarity.",
    imageSrc: "/images/app-profile.png",
    imageAlt:
      "SvasthaX Profile screen showing user Bharat with Prevention Score 73/100, Health Goals, Top Risk Area Low HDL Cholesterol, and Location details",
    offsetClass: "",
    glow: "rgba(131,239,225,0.15)",
  },
];

export default function AppShowcaseSection() {
  return (
    <section
      id="app-showcase"
      aria-labelledby="app-showcase-heading"
      className="py-20 md:py-28 px-6 md:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Visually hidden heading for SEO / accessibility */}
        <h2 id="app-showcase-heading" className="sr-only">
          SvasthaX App Feature Screenshots
        </h2>

        {/* ── 3-column staggered phone grid ── */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start"
          variants={cardGridContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          role="list"
          aria-label="SvasthaX real app screenshots"
        >
          {appScreens.map(({ title, description, imageSrc, imageAlt, offsetClass, glow }) => (
            <motion.article
              key={title}
              variants={cardGridItem}
              role="listitem"
              className={`flex flex-col gap-5 ${offsetClass}`}
            >
              {/* ── Phone frame with screenshot ── */}
              <motion.div
                className="relative rounded-[2rem] overflow-hidden"
                style={{
                  aspectRatio: "9 / 19.5",
                  background: "#070d1f",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: `0 24px 48px rgba(0,0,0,0.5), 0 0 40px ${glow}`,
                }}
                whileHover={{ scale: 1.02, y: -6 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {/* Screenshot image */}
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 85vw, 300px"
                />

                {/* Subtle top reflection */}
                <div
                  aria-hidden="true"
                  className="absolute top-0 left-0 right-0 h-20 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(131,239,225,0.04) 0%, transparent 100%)",
                  }}
                />
              </motion.div>

              {/* ── Caption ── */}
              <div className="px-1">
                <h3 className="font-headline font-bold text-lg text-on-surface mb-1.5">
                  {title}
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
