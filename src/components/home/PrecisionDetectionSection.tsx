"use client";

import { motion } from "framer-motion";
import { Activity, Zap, Heart } from "lucide-react";
import {
  fadeUpVariants,
  cardGridContainer,
  cardGridItem,
  viewportOnce,
} from "@/lib/animations";

const detectionCards = [
  {
    icon: Activity,
    title: "Metabolic Risk",
    description:
      "Detect and reverse metabolic trajectories 10+ pre-diseased years before symptoms appear.",
    color: "text-primary",
    glow: "hover:shadow-glow-teal",
  },
  {
    icon: Zap,
    title: "Mental Health",
    description:
      "Stabilise mental health and stress trajectories with timely, data-backed lifestyle interventions.",
    color: "text-secondary",
    glow: "hover:shadow-glow-purple",
  },
  {
    icon: Heart,
    title: "Adaptive Maternal Care",
    description:
      "Your AI pregnancy companion. Safely adapts your prevention goals for support prenatal health when you're expecting.",
    color: "text-primary",
    glow: "hover:shadow-glow-teal",
  },
];

export default function PrecisionDetectionSection() {
  return (
    <section
      aria-labelledby="precision-detection-heading"
      className="py-20 md:py-28 px-6 md:px-8 relative overflow-hidden"
    >
      {/* Tonal ambient */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 -left-32 w-[400px] h-[400px] bg-primary/[0.04] blur-[100px] rounded-full pointer-events-none"
      />

      <div className="max-w-7xl mx-auto">
        {/* ── Section header ── */}
        <motion.div
          className="mb-14"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <h2
            id="precision-detection-heading"
            className="font-headline text-4xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Precision Detection
          </h2>
          <p className="text-on-surface-variant text-lg max-w-xl leading-relaxed">
            Early intervention is the cornerstone of longevity. We specialise in
            the silent risks that matter most.
          </p>
        </motion.div>

        {/* ── 3-column card grid with stagger ── */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={cardGridContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          role="list"
          aria-label="Precision detection categories"
        >
          {detectionCards.map(({ icon: Icon, title, description, color, glow }) => (
            <motion.article
              key={title}
              variants={cardGridItem}
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ duration: 0.2 }}
              role="listitem"
              className={`
                bg-surface-container-lowest p-8 rounded-[1.5rem]
                border border-outline-variant/[0.15]
                transition-all duration-300 cursor-default
                ${glow}
              `}
            >
              <Icon
                className={`${color} mb-6`}
                size={28}
                aria-hidden="true"
                strokeWidth={1.5}
              />
              <h3 className="font-headline font-bold text-lg text-on-surface mb-3">
                {title}
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                {description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
