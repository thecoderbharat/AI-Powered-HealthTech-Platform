"use client";

import { motion } from "framer-motion";
import { TrendingUp, SlidersHorizontal, BarChart2, RefreshCw } from "lucide-react";
import {
  fadeUpVariants,
  cardGridContainer,
  cardGridItem,
  viewportOnce,
} from "@/lib/animations";

const cycleCards = [
  {
    icon: TrendingUp,
    title: "Predict",
    badge: "Real-Time Stream",
    badgeIcon: "●",
    description:
      "AI trajectory modeling ingests biomarker velocity and behavioural patterns to map potential risk vectors up to 24 months in advance.",
    color: "text-primary",
    glow: "hover:shadow-glow-teal",
  },
  {
    icon: SlidersHorizontal,
    title: "Act",
    badge: "Edge Processing",
    badgeIcon: "◆",
    description:
      "Personalised dynamic interventions delivered via our Kinetic Engine. We don't just suggest — we contextually prompt healthy habit modification.",
    color: "text-secondary",
    glow: "hover:shadow-glow-purple",
  },
  {
    icon: BarChart2,
    title: "Measure",
    badge: "1s Latency",
    badgeIcon: "◉",
    description:
      "Near-time compliance tracking and physiological feedback loops monitor the efficacy of every intervention in high resolution.",
    color: "text-primary",
    glow: "hover:shadow-glow-teal",
  },
  {
    icon: RefreshCw,
    title: "Learn",
    badge: "Self-Evolving Loop",
    badgeIcon: "↻",
    description:
      "Reinforcement learning & adaptation. Your Digital Twin evolves with every action, refining the model for extreme future precision.",
    color: "text-secondary",
    glow: "hover:shadow-glow-purple",
  },
];

export default function CycleOfIntelligenceSection() {
  return (
    <section
      aria-labelledby="cycle-heading"
      className="py-20 md:py-28 px-6 md:px-8 relative overflow-hidden"
    >
      {/* Ambient blob */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/[0.05] blur-[120px] rounded-full pointer-events-none"
      />

      <div className="max-w-7xl mx-auto">
        {/* ── Section header ── */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-end mb-14 gap-6"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <h2
            id="cycle-heading"
            className="font-headline text-4xl md:text-5xl font-bold tracking-tight"
          >
            The Cycle of Intelligence
          </h2>
          {/* Decorative progress bar */}
          <div
            aria-hidden="true"
            className="hidden md:block h-[2px] bg-surface-container-highest flex-1 mx-10 rounded-full overflow-hidden"
          >
            <div className="w-1/3 h-full bg-gradient-to-r from-primary to-secondary" />
          </div>
        </motion.div>

        {/* ── 4-column stagger grid ── */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          variants={cardGridContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          role="list"
          aria-label="The four stages of SvasthaX intelligence cycle"
        >
          {cycleCards.map(({ icon: Icon, title, badge, badgeIcon, description, color, glow }) => (
            <motion.article
              key={title}
              variants={cardGridItem}
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ duration: 0.2 }}
              role="listitem"
              className={`
                bg-surface-container p-7 rounded-[1.5rem]
                border border-outline-variant/[0.1]
                flex flex-col h-full
                transition-all duration-300 cursor-default
                ${glow}
              `}
            >
              <Icon
                className={`${color} mb-5`}
                size={26}
                aria-hidden="true"
                strokeWidth={1.5}
              />
              <h3 className="font-headline font-bold text-xl text-on-surface mb-3">
                {title}
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed flex-1">
                {description}
              </p>
              <div className={`mt-5 flex items-center gap-2 ${color} font-bold text-[11px] uppercase tracking-widest`}>
                <span aria-hidden="true">{badgeIcon}</span>
                {badge}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
