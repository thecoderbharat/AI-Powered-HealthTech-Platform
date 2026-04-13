"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Rocket, Download } from "lucide-react";
import {
  slideInLeft,
  slideInRight,
  staggerContainer,
  staggerItem,
  viewportOnce,
  hoverScaleButton,
  tapScale,
} from "@/lib/animations";

export default function DigitalTwinArchitectureSection() {
  return (
    <section
      aria-labelledby="architecture-heading"
      className="py-24 md:py-32 px-6 md:px-8 relative overflow-hidden"
    >
      {/* Tonal background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-surface-container-low/30 pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-secondary/[0.05] blur-[120px] rounded-full pointer-events-none -translate-y-1/2"
      />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* ── Left — Content ── */}
        <motion.div
          className="lg:col-span-7"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.span
            variants={staggerItem}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-6 font-headline"
          >
            The Architecture
          </motion.span>

          <motion.h2
            id="architecture-heading"
            variants={staggerItem}
            className="font-headline text-4xl md:text-6xl font-extrabold mb-8 leading-[1.05] tracking-tight"
          >
            The Preventive{" "}
            <span className="block">Behavioral Digital</span>
            <span className="block gradient-text-oracle">
              Twin Architecture
            </span>
          </motion.h2>

          <motion.p
            variants={staggerItem}
            className="text-on-surface-variant text-lg md:text-xl leading-relaxed mb-10 max-w-xl"
          >
            WellAhead doesn&apos;t just track data. We construct a dynamic
            digital simulation of your biological and behavioural trajectory to
            intercept illness before it manifests.
          </motion.p>

          <motion.div
            variants={staggerItem}
            className="flex flex-wrap gap-4"
          >
            <motion.div whileHover={hoverScaleButton} whileTap={tapScale}>
              <Link
                href="/waitlist"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-[1rem] bg-gradient-to-r from-[#002824] to-[#1c253e] border border-primary/30 text-primary font-bold font-headline hover:border-primary transition-all duration-300"
                aria-label="Start your health prevention journey"
              >
                Start your prevention journey
                <Rocket size={18} aria-hidden="true" />
              </Link>
            </motion.div>

            <motion.div whileHover={hoverScaleButton} whileTap={tapScale}>
              <Link
                href="/whitepaper"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-[1rem] bg-surface-container-highest/50 backdrop-blur-sm text-on-surface font-bold font-headline hover:bg-surface-container-highest transition-all duration-300 border border-white/[0.05]"
                aria-label="Download the WellAhead.ai technical whitepaper"
              >
                Download Technical Whitepaper
                <Download size={18} aria-hidden="true" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ── Right — Architecture image ── */}
        <motion.div
          className="lg:col-span-5 relative"
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {/* Decorative ambient glows */}
          <div
            aria-hidden="true"
            className="absolute -top-10 -right-10 w-32 h-32 bg-secondary/20 blur-3xl rounded-full pointer-events-none"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/20 blur-3xl rounded-full pointer-events-none"
          />

          <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.6)] shadow-glow-teal">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHloc6icZ11TMs81IbugX0V0BrMghX79ThEfGsNrBeoucGGO8Fw7fSjxRjmPGggosU1UmCJySztrGY8TpM-fAe8TSUghd8JsxKaqQg8G49pd_rA115kDk8EyIZTxfai30KXTVyXhH9doUz2cAOAqzDoRlcV9o36ZTjrMIyIjnJAcETBv2VQwJiiZ2VTvFghlOUEoWSGIWV2xqhIEE3cEUSHUvGoeqIwPYJjPKMU9FeuFc6sbjXOhEs6e6zr1BEUCriIEUk2jc9k5o"
              alt="Isometric 3D diagram of the WellAhead.ai Preventive Behavioral Digital Twin architecture — neural networks integrated with biological data streams and AI processing layers"
              width={540}
              height={540}
              className="w-full h-auto block opacity-90"
              sizes="(max-width: 1024px) 100vw, 540px"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
