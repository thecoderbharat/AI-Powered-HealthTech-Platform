"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  staggerContainerSlow,
  staggerItem,
  slideInRight,
  hoverScaleButton,
  tapScale,
} from "@/lib/animations";

export default function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative min-h-[88vh] flex items-center pt-24 pb-6 overflow-hidden"
    >
      {/* ── Ambient background blobs ── */}
      <div aria-hidden="true" className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-primary/[0.07] blur-[130px] rounded-full animate-pulse-glow" />
        <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-secondary/[0.07] blur-[130px] rounded-full animate-pulse-glow [animation-delay:1.5s]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* ── Left — Text Block ── */}
        <motion.div
          className="lg:col-span-7"
          variants={staggerContainerSlow}
          initial="hidden"
          animate="visible"
        >
          {/* H1 — Display headline */}
          <motion.h1
            id="hero-heading"
            variants={staggerItem}
            className="font-headline text-[clamp(3.5rem,9vw,6.5rem)] font-extrabold tracking-tighter leading-[0.92] mb-6 text-on-surface"
          >
            Predict.{" "}
            <span className="block text-primary">Adapt.</span>{" "}
            Prevent.
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="font-body text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed mb-10"
          >
            The era of reactive medicine is over. Leverage deep-tech preventive
            intelligence to simulate health outcomes before they occur.
          </motion.p>

          <motion.div
            variants={staggerItem}
            className="flex flex-wrap gap-4"
          >
            <motion.div
              whileHover={hoverScaleButton}
              whileTap={tapScale}
            >
              <Link
                href="/waitlist"
                className="inline-block btn-primary px-8 py-4 text-base shadow-glow-teal"
                aria-label="Join the WellAhead.ai waitlist for early access"
              >
                Join the Waitlist
              </Link>
            </motion.div>

            <motion.div
              whileHover={hoverScaleButton}
              whileTap={tapScale}
            >
              <Link
                href="/whitepaper"
                className="inline-block btn-ghost px-8 py-4 text-base"
                aria-label="Read the WellAhead.ai clinical whitepaper"
              >
                Whitepaper
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ── Right — Hero image ── */}
        <motion.div
          className="lg:col-span-5 hidden lg:flex justify-center items-center"
          variants={slideInRight}
          initial="hidden"
          animate="visible"
        >
          <div className="relative w-full max-w-md">
            {/* Glow halo behind image */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-primary/10 blur-[80px] rounded-full"
            />
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.6)] shadow-glow-teal animate-float">
              <Image
                src="/images/predictsimulate.png"
                alt="High-fidelity 3D rendering of the WellAhead.ai Behavioral Digital Twin — a glowing teal humanoid figure surrounded by neural data streams"
                width={520}
                height={580}
                priority
                className="w-full h-auto block opacity-90"
                sizes="(max-width: 1024px) 0px, 520px"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
