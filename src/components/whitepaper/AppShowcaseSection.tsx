"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  fadeUpVariants,
  cardGridContainer,
  cardGridItem,
  viewportOnce,
} from "@/lib/animations";

const appScreens = [
  {
    title: "Universal Dashboard",
    description:
      "Real-time synthesis of genomic, biometric, and environmental data.",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBKI9qKqJBPRpTskCVZ_2NDZmh7yFt3rbVfGNQlN88uoSOiAVK_mGf7ya8yeoQc9dk71YOSYHTiMaRISdao_nmd5C_yTF__ZcJXdus-lUT_ix2Z6dQPggrwvevRHJVcEKtvg3y3mKnC_c5rlR2YhOasRY0cvzcijt3L5paW8V4bpKcJfFZL8s7F-vn1Mr1Wo_Db3gboUUE37RI9TltfV4mTjth5sodypmoaIYAJXI3q6OrYUkuc80nqpUBvBMd4gkfnJPGGQBNarRk",
    imageAlt:
      "WellAhead.ai Universal Dashboard mobile screen — glowing teal biometric rings, health score, and data visualizations on a dark background",
    offsetClass: "", // no offset
  },
  {
    title: "Adaptive Daily Plan",
    description:
      "Precision micro-adjustments to nutrition and recovery based on circadian flux.",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBgd0wwbTAAD6VmQ4SfgTbNL0Ns5GKg37A3L1l9SDBhaurmmRoSAnHe3EGbvGrzgIeSfOWI9ndrHY6pwkmm6HBFxs0og7OXLyAczx0c4GjjWAgm7zTB58Pgx_gj_mhbNR9ojllK-q6xArCZjOFXUrJxcXvsu8Jboh1DPj2JbkMf1LPi13WLsLFs-fZqEonGXreFd-2818EGtTYKeUw-8C-2tx1LblEy0z4ruTypDYdqsaoRedMbAwBpQWqsf54WWXDj9w3f-j9-3Yo",
    imageAlt:
      "WellAhead.ai Adaptive Daily Plan mobile screen — personalised health schedule with minimalist typography and soft purple accent colors",
    offsetClass: "md:translate-y-12", // visual stagger offset
  },
  {
    title: "AI Health Oracle",
    description:
      "Context-aware conversational intelligence for immediate diagnostic clarity.",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB_FKzMnycnQx5tA56YqS6C_4adEAzKO3YWpy7Bq1-3e9v3Nyx3EGIUrh494YzsNMR7-zxMruvVAiOzg45ned8Fupoqx8bYZqOvvVOcHtAEl8uYqEXzmPT-U2kCVq38cb5x7RAj_AGGTL0IXcuuL2CiDyPpo8_gXaImr2_ZXx_irLmuTIjge7wOMdp-y5tig-kWawqR3bsvRVVWu5sOcQ0RuQIP0Uqg2NU3meWsh6E-rw4VodEpcCEiV3Fy3NgSwf2DLzIR6ea1xcQ",
    imageAlt:
      "WellAhead.ai AI Health Oracle chat interface — conversational AI assistant providing diagnostic insights with dark mode and neon cyan highlights",
    offsetClass: "",
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
        {/* Optional heading for screen readers / SEO hierarchy */}
        <motion.h2
          id="app-showcase-heading"
          className="sr-only"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          WellAhead.ai App Features
        </motion.h2>

        {/* ── 3-column staggered phone grid ── */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start"
          variants={cardGridContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          role="list"
          aria-label="WellAhead.ai app feature screens"
        >
          {appScreens.map(({ title, description, imageSrc, imageAlt, offsetClass }) => (
            <motion.article
              key={title}
              variants={cardGridItem}
              role="listitem"
              className={`flex flex-col gap-5 ${offsetClass}`}
            >
              {/* Phone mockup frame */}
              <motion.div
                className="rounded-[1.5rem] overflow-hidden bg-surface-container border border-outline-variant/10 aspect-[9/19] relative shadow-[0_24px_48px_rgba(0,0,0,0.4)]"
                whileHover={{ scale: 1.02, y: -6 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 90vw, 340px"
                />
              </motion.div>

              {/* Caption */}
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
