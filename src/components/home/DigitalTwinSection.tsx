"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Zap, TrendingDown } from "lucide-react";
import {
  slideInLeft,
  slideInRight,
  viewportOnce,
  hoverScaleButton,
  tapScale,
} from "@/lib/animations";

// ─── Feature list ──────────────────────────────────────────────────────────
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
        <span
          style={{ fontSize: 9 }}
          className="font-bold uppercase tracking-widest text-on-surface-variant font-label"
        >
          Sleep Consistency
        </span>
        <span className="text-xs font-black text-primary font-headline ml-3">
          82%
        </span>
      </div>
      <div
        className="w-full h-[3px] rounded-full overflow-hidden"
        style={{ background: "rgba(255,255,255,0.08)" }}
      >
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
      <div
        className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
        style={{ background: "rgba(131,239,225,0.12)" }}
      >
        <TrendingDown className="text-primary" size={15} aria-hidden="true" />
      </div>
      <div>
        <p
          style={{ fontSize: 8 }}
          className="font-bold uppercase tracking-widest text-on-surface-variant font-label leading-none mb-0.5"
        >
          Metabolic Risk
        </p>
        <p className="text-xs font-bold text-on-surface font-headline">
          Lowering
        </p>
      </div>
    </motion.div>
  );
}

// ─── Lightning bolt pip ────────────────────────────────────────────────────
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

// ─── Main Section ──────────────────────────────────────────────────────────
export default function DigitalTwinSection() {
  return (
    <section
      aria-labelledby="digital-twin-heading"
      className="py-20 md:py-28 px-6 md:px-8 relative overflow-hidden"
    >
      {/* Ambient background blobs */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/[0.05] blur-[130px] rounded-full pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/[0.03] blur-[100px] rounded-full pointer-events-none"
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

        {/* ── LEFT — Text content ── */}
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
                  <Icon
                    className="text-primary"
                    size={18}
                    aria-hidden="true"
                  />
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

        {/* ── RIGHT — Digital Twin image card ── */}
        <motion.div
          className="lg:col-span-6 order-1 lg:order-2 flex justify-center lg:justify-end"
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <div className="relative w-full max-w-[400px]">

            {/* Outer ambient glow */}
            <div
              aria-hidden="true"
              className="absolute -inset-8 bg-primary/[0.07] blur-[60px] rounded-full pointer-events-none"
            />
            <div
              aria-hidden="true"
              className="absolute -inset-4 bg-secondary/[0.04] blur-[40px] rounded-full pointer-events-none"
            />

            {/* ── Card ── */}
            <div
              className="relative rounded-[2rem] overflow-visible"
              style={{
                background: "linear-gradient(160deg, #0d1a30 0%, #0a1525 100%)",
                border: "1px solid rgba(131,239,225,0.08)",
                boxShadow:
                  "0 32px 64px rgba(0,0,0,0.55), inset 0 1px 0 rgba(131,239,225,0.05)",
              }}
            >
              {/* Inner radial glow overlay */}
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-[2rem] pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 20%, rgba(131,239,225,0.07) 0%, transparent 65%)",
                }}
              />

              {/* ── Your digitaltwin image + floating badges ── */}
              <div
                className="relative px-6 pt-8 pb-6 flex justify-center items-center"
                style={{ minHeight: 380 }}
              >
                {/* 
                  YOUR IMAGE IS LOADED HERE
                  Place your file at: public/images/digitaltwin.png
                  Supported formats: .png / .jpg / .svg
                  Change the src extension below if using .jpg or .svg
                */}
                <motion.div
                  className="relative z-0 w-full flex justify-center"
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Image
                    src="/images/digitaltwin.png"
                    alt="SvasthaX Preventive Digital Twin — glowing teal humanoid figure representing your personal AI health simulation"
                    width={280}
                    height={380}
                    className="object-contain drop-shadow-[0_0_40px_rgba(131,239,225,0.35)]"
                    priority
                  />
                </motion.div>

                {/* Floating overlay badges */}
                <SleepConsistencyBadge />
                <MetabolicRiskBadge />
                <LightningPip />
              </div>

              {/* Scanning line animation */}
              <motion.div
                className="absolute left-0 right-0 h-px pointer-events-none rounded-[2rem]"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(131,239,225,0.5) 30%, rgba(131,239,225,0.8) 50%, rgba(131,239,225,0.5) 70%, transparent)",
                }}
                animate={{ top: ["12%", "88%", "12%"] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                aria-hidden="true"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
