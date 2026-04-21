"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  staggerContainer,
  staggerItem,
  slideInRight,
  viewportOnce,
  hoverScaleButton,
  tapScale,
} from "@/lib/animations";

export default function WhitepaperHeroSection() {
  return (
    <section
      aria-labelledby="whitepaper-hero-heading"
      className="relative min-h-[80vh] flex items-center pt-28 pb-20 overflow-hidden"
    >
      {/* Ambient blobs */}
      <div aria-hidden="true" className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/3 -left-1/4 w-[500px] h-[500px] bg-secondary/[0.07] blur-[130px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/[0.05] blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* ── Left — Text ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            id="whitepaper-hero-heading"
            variants={staggerItem}
            className="font-headline text-[clamp(3rem,8vw,5.5rem)] font-extrabold tracking-tighter leading-[0.93] mb-7 text-on-surface"
          >
            The Science of{" "}
            <span className="text-primary">Preventive</span>{" "}
            Intelligence.
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="text-lg text-on-surface-variant max-w-lg mb-10 leading-relaxed"
          >
            A clinical-grade AI architecture designed to predict biological
            shifts before they become symptoms. Welcome to the era of preemptive
            longevity.
          </motion.p>

          <motion.div variants={staggerItem}>
            <motion.div whileHover={hoverScaleButton} whileTap={tapScale}>
              <Link
                href="#app-showcase"
                className="inline-block btn-primary px-8 py-4 text-base"
                aria-label="View the SvasthaX app showcase"
              >
                View App Showcase
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ── Right — Hero visual ── */}
        <motion.div
          variants={slideInRight}
          initial="hidden"
          animate="visible"
          className="hidden lg:flex justify-center"
        >
          <div className="relative w-full max-w-lg">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-secondary/10 blur-[80px] rounded-full"
            />
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-glow-purple shadow-[0_40px_80px_rgba(0,0,0,0.5)]">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMLfRe7u-eGYBOH3O6j6ZC9STHUMPHqGY_JpBg-nwp-ZvcNbvKRxTj6aAxWcsR4zGcYZRLjDn5ZSy0GNkppsZU-ZfD4LflYwwMVDN8tZV4L5-O7xXPWst0S2ynSW25uLEQmwGLCOlCc8oOnKrkSZwQ93B5ZwPt88ky2g1jjzUSNEZszYmTt6-YeAhlpDoCkkFUkYF4C2WTQFdgnB7XVFop9mMNrEYHjc1bMbcUXb0KPafnc36EL01lTGODFZQWr0xCNbreT6OMRFE"
                alt="Abstract visualization of neural pathway networks and biological data streams representing the SvasthaX preventive intelligence system"
                width={560}
                height={480}
                priority
                className="w-full h-auto block opacity-90"
                sizes="(max-width: 1024px) 0px, 560px"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
