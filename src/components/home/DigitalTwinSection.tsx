"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, Zap, TrendingDown } from "lucide-react";
import {
  slideInLeft,
  slideInRight,
  viewportOnce,
  hoverScaleButton,
  tapScale,
} from "@/lib/animations";

// ─── Feature list (left column) ───────────────────────────────────────────
const features = [
  {
    icon: CheckCircle2,
    title: "Clinical Personalization",
    description:
      "Your unique bio-signature mapped to institutional-grade medical protocols.",
  },
  {
    icon: Zap,
    title: "Dynamic Simulation",
    description:
      "Real-time forecasting of lifestyle adjustments using generative health models.",
  },
];

// ─── Humanoid SVG — glowing teal particle figure ──────────────────────────
function HumanoidFigure() {
  return (
    <svg
      viewBox="0 0 220 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden="true"
    >
      <defs>
        <filter id="teal-glow-dt" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <filter id="strong-glow-dt" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <radialGradient id="body-grad-dt" cx="50%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#83efe1" stopOpacity="0.9" />
          <stop offset="60%" stopColor="#3fb1a5" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#1a6b62" stopOpacity="0.2" />
        </radialGradient>
        <linearGradient id="spine-grad-dt" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#83efe1" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#af88ff" stopOpacity="0.5" />
        </linearGradient>
      </defs>

      {/* Head */}
      <ellipse cx="110" cy="52" rx="26" ry="30"
        stroke="#83efe1" strokeWidth="1.2" strokeDasharray="2 3"
        fill="none" filter="url(#teal-glow-dt)" opacity="0.85" />

      {/* Neck */}
      <line x1="103" y1="80" x2="100" y2="98" stroke="#83efe1" strokeWidth="1" opacity="0.6" />
      <line x1="117" y1="80" x2="120" y2="98" stroke="#83efe1" strokeWidth="1" opacity="0.6" />

      {/* Shoulders */}
      <path d="M100 98 Q70 95 52 108" stroke="#83efe1" strokeWidth="1.5"
        strokeDasharray="3 2" fill="none" filter="url(#teal-glow-dt)" opacity="0.8" />
      <path d="M120 98 Q150 95 168 108" stroke="#83efe1" strokeWidth="1.5"
        strokeDasharray="3 2" fill="none" filter="url(#teal-glow-dt)" opacity="0.8" />

      {/* Torso */}
      <path d="M100 98 L96 180 L108 192 L112 192 L124 180 L120 98"
        stroke="#83efe1" strokeWidth="1.2" strokeDasharray="2 3"
        fill="url(#body-grad-dt)" fillOpacity="0.08"
        filter="url(#teal-glow-dt)" opacity="0.8" />

      {/* Spine */}
      <line x1="110" y1="95" x2="110" y2="190"
        stroke="url(#spine-grad-dt)" strokeWidth="1.5" opacity="0.7"
        filter="url(#teal-glow-dt)" strokeDasharray="4 3" />

      {/* Left arm */}
      <path d="M52 108 Q38 140 42 185"
        stroke="#83efe1" strokeWidth="1.2" strokeDasharray="3 3"
        fill="none" filter="url(#teal-glow-dt)" opacity="0.75" />
      <path d="M42 185 Q36 205 40 225"
        stroke="#3fb1a5" strokeWidth="1" strokeDasharray="2 3"
        fill="none" opacity="0.6" />
      <ellipse cx="40" cy="232" rx="8" ry="11"
        stroke="#83efe1" strokeWidth="1" fill="none"
        opacity="0.5" strokeDasharray="2 2" />

      {/* Right arm */}
      <path d="M168 108 Q182 140 178 185"
        stroke="#83efe1" strokeWidth="1.2" strokeDasharray="3 3"
        fill="none" filter="url(#teal-glow-dt)" opacity="0.75" />
      <path d="M178 185 Q184 205 180 225"
        stroke="#3fb1a5" strokeWidth="1" strokeDasharray="2 3"
        fill="none" opacity="0.6" />
      <ellipse cx="180" cy="232" rx="8" ry="11"
        stroke="#83efe1" strokeWidth="1" fill="none"
        opacity="0.5" strokeDasharray="2 2" />

      {/* Hips */}
      <path d="M96 180 Q80 188 76 200 L144 200 Q140 188 124 180"
        stroke="#83efe1" strokeWidth="1.2" strokeDasharray="3 2"
        fill="none" filter="url(#teal-glow-dt)" opacity="0.75" />

      {/* Left leg */}
      <path d="M92 200 Q88 250 86 300"
        stroke="#83efe1" strokeWidth="1.2" strokeDasharray="3 3"
        fill="none" filter="url(#teal-glow-dt)" opacity="0.7" />
      <path d="M86 300 Q84 330 86 360"
        stroke="#3fb1a5" strokeWidth="1" strokeDasharray="2 3"
        fill="none" opacity="0.55" />
      <path d="M80 360 Q82 370 96 370"
        stroke="#83efe1" strokeWidth="1" fill="none" opacity="0.4" />

      {/* Right leg */}
      <path d="M128 200 Q132 250 134 300"
        stroke="#83efe1" strokeWidth="1.2" strokeDasharray="3 3"
        fill="none" filter="url(#teal-glow-dt)" opacity="0.7" />
      <path d="M134 300 Q136 330 134 360"
        stroke="#3fb1a5" strokeWidth="1" strokeDasharray="2 3"
        fill="none" opacity="0.55" />
      <path d="M140 360 Q138 370 124 370"
        stroke="#83efe1" strokeWidth="1" fill="none" opacity="0.4" />

      {/* Glowing node dots */}
      {([
        [110, 52], [110, 95], [110, 140], [110, 190],
        [52, 108], [42, 185], [168, 108], [178, 185],
        [92, 200], [86, 300], [128, 200], [134, 300],
        [96, 180], [124, 180],
      ] as [number, number][]).map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="2.5"
          fill="#83efe1" filter="url(#strong-glow-dt)" opacity="0.9" />
      ))}

      {/* Neural connection lines */}
      <line x1="110" y1="52" x2="110" y2="95" stroke="#83efe1" strokeWidth="0.5" opacity="0.3" />
      <line x1="110" y1="95" x2="52" y2="108" stroke="#af88ff" strokeWidth="0.5" opacity="0.25" />
      <line x1="110" y1="95" x2="168" y2="108" stroke="#af88ff" strokeWidth="0.5" opacity="0.25" />
      <line x1="110" y1="140" x2="42" y2="185" stroke="#83efe1" strokeWidth="0.4" opacity="0.2" />
      <line x1="110" y1="140" x2="178" y2="185" stroke="#83efe1" strokeWidth="0.4" opacity="0.2" />

      {/* DNA helix flourish */}
      <path d="M90 340 Q100 348 110 340 Q120 332 130 340"
        stroke="#af88ff" strokeWidth="1" fill="none" opacity="0.4" />
      <path d="M90 348 Q100 340 110 348 Q120 356 130 348"
        stroke="#83efe1" strokeWidth="1" fill="none" opacity="0.4" />

      {/* Heart core glow */}
      <circle cx="110" cy="135" r="8"
        fill="#83efe1" fillOpacity="0.08"
        stroke="#83efe1" strokeWidth="1"
        filter="url(#strong-glow-dt)" opacity="0.6" />
      <circle cx="110" cy="135" r="3"
        fill="#83efe1" filter="url(#strong-glow-dt)" opacity="0.9" />
    </svg>
  );
}

// ─── Sleep Consistency floating badge ─────────────────────────────────────
function SleepConsistencyBadge() {
  return (
    <motion.div
      className="absolute top-4 right-3 z-10"
      style={{
        background: "rgba(28, 37, 62, 0.75)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderRadius: "0.75rem",
        border: "1px solid rgba(255,255,255,0.08)",
        padding: "10px 12px",
        minWidth: 164,
      }}
      initial={{ opacity: 0, x: 16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.8, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex justify-between items-center mb-1.5">
        <span style={{ fontSize: 9 }}
          className="font-bold uppercase tracking-widest text-on-surface-variant font-label">
          Sleep Consistency
        </span>
        <span className="text-xs font-black text-primary font-headline ml-3">82%</span>
      </div>
      <div className="w-full h-[3px] rounded-full overflow-hidden"
        style={{ background: "rgba(255,255,255,0.08)" }}>
        <motion.div
          className="h-full rounded-full"
          style={{
            background: "linear-gradient(90deg, #af88ff 0%, #83efe1 100%)",
          }}
          initial={{ width: 0 }}
          whileInView={{ width: "82%" }}
          viewport={{ once: true }}
          transition={{ delay: 1.1, duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </motion.div>
  );
}

// ─── Metabolic Risk floating badge ────────────────────────────────────────
function MetabolicRiskBadge() {
  return (
    <motion.div
      className="absolute bottom-6 left-3 z-10 flex items-center gap-2.5"
      style={{
        background: "rgba(28, 37, 62, 0.75)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderRadius: "0.75rem",
        border: "1px solid rgba(255,255,255,0.08)",
        padding: "10px 12px",
      }}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 1.0, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
        style={{ background: "rgba(131,239,225,0.12)" }}>
        <TrendingDown className="text-primary" size={15} aria-hidden="true" />
      </div>
      <div>
        <p style={{ fontSize: 8 }}
          className="font-bold uppercase tracking-widest text-on-surface-variant font-label leading-none mb-0.5">
          Metabolic Risk
        </p>
        <p className="text-xs font-bold text-on-surface font-headline">Lowering</p>
      </div>
    </motion.div>
  );
}

// ─── Lightning bolt side pip ───────────────────────────────────────────────
function LightningPip() {
  return (
    <motion.div
      className="absolute right-[-14px] top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full flex items-center justify-center"
      style={{
        background: "rgba(11,25,46,0.9)",
        border: "1px solid rgba(131,239,225,0.35)",
      }}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      animate={{
        boxShadow: [
          "0 0 6px rgba(131,239,225,0.3)",
          "0 0 20px rgba(131,239,225,0.75)",
        ],
      }}
      transition={{
        opacity: { delay: 1.2, duration: 0.3 },
        scale: { delay: 1.2, duration: 0.4, type: "spring", stiffness: 200 },
        boxShadow: {
          duration: 1.8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 1.5,
        },
      }}
    >
      <Zap
        size={13}
        className="text-primary"
        fill="currentColor"
        aria-hidden="true"
      />
    </motion.div>
  );
}

// ─── Main exported section ─────────────────────────────────────────────────
export default function DigitalTwinSection() {
  return (
    <section
      aria-labelledby="digital-twin-heading"
      className="py-20 md:py-28 px-6 md:px-8 relative overflow-hidden"
    >
      {/* Ambient blobs */}
      <div aria-hidden="true"
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/[0.05] blur-[130px] rounded-full pointer-events-none" />
      <div aria-hidden="true"
        className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/[0.03] blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

        {/* ── LEFT — Text ── */}
        <motion.div
          className="lg:col-span-6 order-2 lg:order-1"
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <h2
            id="digital-twin-heading"
            className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.05] mb-6"
          >
            Meet Your Preventive{" "}
            <span className="gradient-text-oracle">Digital Twin.</span>
          </h2>

          <ul className="space-y-5 mb-8 list-none" role="list">
            {features.map(({ icon: Icon, title, description }) => (
              <li key={title} className="flex gap-3.5 items-start">
                <div className="w-5 h-5 mt-0.5 shrink-0">
                  <Icon className="text-primary" size={18} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-headline font-bold text-on-surface mb-1">
                    {title}
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <motion.div
            whileHover={hoverScaleButton}
            whileTap={tapScale}
            className="inline-block"
          >
            <Link
              href="/waitlist"
              className="inline-flex items-center gap-2 text-primary font-bold font-headline text-sm group"
              aria-label="Simulate your health future — join the waitlist"
            >
              Simulate Your Future
              <span
                className="group-hover:translate-x-1.5 transition-transform duration-200 inline-block"
                aria-hidden="true"
              >
                →
              </span>
            </Link>
          </motion.div>
        </motion.div>

        {/* ── RIGHT — Digital Twin card ── */}
        <motion.div
          className="lg:col-span-6 order-1 lg:order-2 flex justify-center lg:justify-end"
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <div className="relative w-full max-w-[400px]">
            {/* Outer ambient glow rings */}
            <div aria-hidden="true"
              className="absolute -inset-8 bg-primary/[0.07] blur-[60px] rounded-full pointer-events-none" />
            <div aria-hidden="true"
              className="absolute -inset-4 bg-secondary/[0.04] blur-[40px] rounded-full pointer-events-none" />

            {/* ── Card ── */}
            <div
              className="relative rounded-[2rem] overflow-visible"
              style={{
                background: "linear-gradient(160deg, #0d1a30 0%, #0a1525 100%)",
                border: "1px solid rgba(131,239,225,0.08)",
                boxShadow: "0 32px 64px rgba(0,0,0,0.55), inset 0 1px 0 rgba(131,239,225,0.05)",
              }}
            >
              {/* Inner radial glow */}
              <div aria-hidden="true"
                className="absolute inset-0 rounded-[2rem] pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 20%, rgba(131,239,225,0.07) 0%, transparent 65%)",
                }} />

              {/* Humanoid + floating badges */}
              <div
                className="relative px-8 pt-10 pb-8 flex justify-center"
                style={{ minHeight: 340 }}
              >
                {/* Figure */}
                <div className="w-[160px] relative z-0">
                  <HumanoidFigure />
                </div>

                {/* Floating badges */}
                <SleepConsistencyBadge />
                <MetabolicRiskBadge />
                <LightningPip />
              </div>

              {/* Scanning line */}
              <motion.div
                className="absolute left-0 right-0 h-px pointer-events-none"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(131,239,225,0.5) 30%, rgba(131,239,225,0.8) 50%, rgba(131,239,225,0.5) 70%, transparent)",
                }}
                animate={{ top: ["12%", "88%", "12%"] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                aria-hidden="true"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
