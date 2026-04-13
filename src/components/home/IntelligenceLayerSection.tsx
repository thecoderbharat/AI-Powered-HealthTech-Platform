"use client";

import { motion } from "framer-motion";
import { Share2, Shield, Cpu, LineChart } from "lucide-react";
import {
  fadeUpVariants,
  cardGridContainer,
  cardGridItem,
  viewportOnce,
} from "@/lib/animations";

const algorithmCards = [
  {
    icon: Share2,
    acronym: "CCE",
    fullName: "Clinical Context Engine",
    description:
      "Synthesises fragmented medical history into a unified biological timeline.",
    color: "text-primary",
    glow: "hover:shadow-glow-teal",
    accent: "bg-primary/10",
  },
  {
    icon: Shield,
    acronym: "PSEM",
    fullName: "Preventive Risk Model",
    description:
      "Aggregates global epidemiological data to score individual vulnerability.",
    color: "text-secondary",
    glow: "hover:shadow-glow-purple",
    accent: "bg-secondary/10",
  },
  {
    icon: Cpu,
    acronym: "CSE",
    fullName: "Scenario Simulation",
    description:
      "Heuristic modelling of 'What-If' lifestyle and medical interventions.",
    color: "text-primary",
    glow: "hover:shadow-glow-teal",
    accent: "bg-primary/10",
  },
  {
    icon: LineChart,
    acronym: "BCSA",
    fullName: "Behavioral Scoring",
    description:
      "Analyses micro-habits to predict long-term clinical adherence.",
    color: "text-secondary",
    glow: "hover:shadow-glow-purple",
    accent: "bg-secondary/10",
  },
];

export default function IntelligenceLayerSection() {
  return (
    <section
      aria-labelledby="intelligence-layer-heading"
      className="py-20 md:py-28 px-6 md:px-8 relative overflow-hidden"
    >
      {/* Tonal background shift */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-surface-container-low/20 pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-secondary/[0.04] blur-[120px] rounded-full pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* ── Section header ── */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-end mb-14 gap-6"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <div>
            <span className="text-secondary font-bold uppercase tracking-[0.3em] text-xs mb-3 block font-headline">
              Proprietary Core
            </span>
            <h2
              id="intelligence-layer-heading"
              className="font-headline text-4xl md:text-5xl font-bold tracking-tight"
            >
              The Intelligence Layer
            </h2>
          </div>
          {/* Decorative bar */}
          <div
            aria-hidden="true"
            className="hidden md:block h-[2px] bg-surface-container-highest flex-1 mx-10 rounded-full overflow-hidden"
          >
            <div className="w-1/3 h-full bg-gradient-to-r from-primary to-secondary" />
          </div>
        </motion.div>

        {/* ── 4-column algorithm cards ── */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          variants={cardGridContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          role="list"
          aria-label="WellAhead.ai proprietary AI algorithm modules"
        >
          {algorithmCards.map(({ icon: Icon, acronym, fullName, description, color, glow, accent }) => (
            <motion.article
              key={acronym}
              variants={cardGridItem}
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ duration: 0.2 }}
              role="listitem"
              className={`
                bg-surface-container-lowest p-7 rounded-[1.5rem]
                border border-outline-variant/[0.12]
                flex flex-col h-full
                transition-all duration-300 cursor-default
                ${glow}
              `}
            >
              {/* Icon container */}
              <div className={`w-12 h-12 rounded-xl ${accent} flex items-center justify-center mb-5`}>
                <Icon
                  className={color}
                  size={22}
                  aria-hidden="true"
                  strokeWidth={1.5}
                />
              </div>

              <h3 className="font-headline font-extrabold text-2xl text-on-surface mb-1">
                {acronym}
              </h3>
              <p className={`text-xs font-bold uppercase tracking-widest ${color} mb-4 font-headline`}>
                {fullName}
              </p>
              <p className="text-on-surface text-sm leading-relaxed mt-auto">
                {description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
