"use client";

import { motion } from "framer-motion";
import { TrendingUp, Home, BarChart2, CalendarDays, Settings, UserCircle } from "lucide-react";
import { scaleUpVariants, viewportOnce } from "@/lib/animations";

// Vitality bar heights as percentages
const vitalityBars = [40, 55, 65, 85, 100, 75, 60];

export default function PhoneMockup() {
  return (
    <motion.div
      className="w-full flex justify-center relative"
      variants={scaleUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {/* Decorative ambient glow */}
      <div
        aria-hidden="true"
        className="absolute -inset-10 bg-secondary/[0.08] blur-[100px] rounded-full pointer-events-none"
      />

      {/* Decorative circle ring (design detail from source) */}
      <div
        aria-hidden="true"
        className="hidden md:block absolute -right-12 -bottom-12 w-64 h-64 border border-white/[0.05] rounded-full pointer-events-none"
      />

      {/* ── Phone frame ── */}
      <div
        role="img"
        aria-label="WellAhead.ai app mockup showing a health dashboard with a prevention score of 88 out of 100 and a vitality pulse chart"
        className="relative w-full max-w-[360px] aspect-[9/18.5] bg-surface-container-lowest border-4 border-surface-variant rounded-[3rem] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.7)] shadow-glow-purple"
      >
        {/* ── Status bar ── */}
        <div className="h-10 w-full flex justify-between items-center px-8 pt-3" aria-hidden="true">
          <span className="text-xs font-bold text-white font-headline">9:41</span>
          <div className="flex gap-1.5">
            <div className="w-3.5 h-3.5 rounded-full bg-white/10" />
            <div className="w-3.5 h-3.5 rounded-full bg-white/10" />
          </div>
        </div>

        {/* ── App content ── */}
        <div className="px-6 pt-2 pb-24 overflow-hidden">
          {/* App header */}
          <div className="flex justify-between items-center mb-7">
            <div>
              <p className="text-[9px] uppercase tracking-widest text-on-surface-variant mb-0.5 font-label">
                Preventive Health
              </p>
              <h3 className="text-xl font-bold text-white font-headline">Dashboard</h3>
            </div>
            <div className="w-9 h-9 rounded-full bg-surface-variant flex items-center justify-center">
              <UserCircle className="text-primary" size={20} aria-hidden="true" />
            </div>
          </div>

          {/* Prevention Score card */}
          <div className="bg-surface-container-high rounded-[1rem] p-5 mb-4 border border-white/[0.05]">
            <p className="text-xs font-medium text-on-surface-variant mb-3 font-label">
              Current Prevention Score
            </p>
            <div className="flex items-end gap-2 mb-2">
              <span className="text-[2.8rem] font-black text-primary font-headline leading-none"
                style={{ textShadow: "0 0 15px rgba(131, 239, 225, 0.3)" }}
              >
                88
              </span>
              <span className="text-xs text-on-surface-variant mb-2 font-label">/ 100</span>
            </div>

            {/* Progress bar */}
            <div className="w-full bg-surface-container-lowest h-1.5 rounded-full overflow-hidden mb-3" aria-hidden="true">
              <motion.div
                className="h-full rounded-full"
                style={{ background: "linear-gradient(135deg, #83efe1 0%, #3fb1a5 100%)" }}
                initial={{ width: 0 }}
                whileInView={{ width: "88%" }}
                transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
              />
            </div>

            <div className="flex items-center gap-1.5 text-[10px] text-primary font-label">
              <TrendingUp size={12} aria-hidden="true" />
              <span>+4% from last month&apos;s scan</span>
            </div>
          </div>

          {/* Vitality Pulse card */}
          <div className="bg-surface-container-high rounded-[1rem] p-5 border border-white/[0.05]">
            <div className="flex justify-between items-center mb-4" aria-hidden="true">
              <span className="text-xs font-bold text-white font-headline">Vitality Pulse</span>
              <BarChart2 className="text-secondary" size={16} />
            </div>

            {/* Animated bar chart */}
            <div
              className="h-20 w-full flex items-end gap-1"
              role="img"
              aria-label="Vitality pulse bar chart showing upward health trend"
            >
              {vitalityBars.map((height, i) => (
                <motion.div
                  key={i}
                  className="flex-1 rounded-t-sm"
                  style={{
                    height: `${height}%`,
                    background:
                      height === 100
                        ? "#83efe1"
                        : `rgba(131, 239, 225, ${height / 100})`,
                  }}
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.6 + i * 0.07,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  viewport={{ once: true }}
                  aria-hidden="true"
                />
              ))}
            </div>
          </div>
        </div>

        {/* ── Bottom nav ── */}
        <div
          className="absolute bottom-0 w-full h-[68px] bg-surface-container-low flex justify-around items-center px-4 border-t border-white/[0.05]"
          aria-hidden="true"
        >
          <Home className="text-primary" size={20} fill="currentColor" />
          <BarChart2 className="text-on-surface-variant" size={20} />
          <CalendarDays className="text-on-surface-variant" size={20} />
          <Settings className="text-on-surface-variant" size={20} />
        </div>
      </div>
    </motion.div>
  );
}
