import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhitepaperHeroSection from "@/components/whitepaper/WhitepaperHeroSection";
import WhitepaperCardSection from "@/components/whitepaper/WhitepaperCardSection";
import VideoMockupSection from "@/components/whitepaper/VideoMockupSection";
import AppShowcaseSection from "@/components/whitepaper/AppShowcaseSection";
import AppStoreCTASection from "@/components/whitepaper/AppStoreCTASection";

// ─── Page-level SEO Metadata ───────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Clinical Whitepaper — The Science of Preventive Intelligence",
  description:
    "Explore WellAhead.ai's proprietary Bayesian inference model that processes multi-modal health telemetry with 98.4% predictive accuracy. Download the peer-reviewed clinical methodology whitepaper.",
  openGraph: {
    title: "WellAhead.ai Clinical Whitepaper — Preventive AI Science",
    description:
      "Our Bayesian inference model processes multi-modal health telemetry with 98.4% predictive accuracy. Peer-reviewed methodology for autonomous health agents.",
    url: "https://wellahead.ai/whitepaper",
  },
  twitter: {
    title: "WellAhead.ai Clinical Whitepaper",
    description:
      "98.4% predictive accuracy. Peer-reviewed methodology behind our autonomous health agents.",
  },
  alternates: {
    canonical: "https://wellahead.ai/whitepaper",
  },
};

// ─── Whitepaper Page (Server Component) ───────────────────────────────────
export default function WhitepaperPage() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        {/* 1. Hero — "The Science of Preventive Intelligence" */}
        <WhitepaperHeroSection />

        {/* 2. Clinical Whitepaper download card */}
        <WhitepaperCardSection />

        {/* 3. Video demo mockup */}
        <VideoMockupSection />

        {/* 4. App feature screens (3-phone stagger) */}
        <AppShowcaseSection />

        {/* 5. App Store / Google Play CTA */}
        <AppStoreCTASection />
      </main>
      <Footer />
    </>
  );
}
