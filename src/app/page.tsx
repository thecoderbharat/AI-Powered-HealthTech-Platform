import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import DigitalTwinSection from "@/components/home/DigitalTwinSection";
import PrecisionDetectionSection from "@/components/home/PrecisionDetectionSection";
import CycleOfIntelligenceSection from "@/components/home/CycleOfIntelligenceSection";
import IntelligenceLayerSection from "@/components/home/IntelligenceLayerSection";
import DigitalTwinArchitectureSection from "@/components/home/DigitalTwinArchitectureSection";
import FinalCTASection from "@/components/home/FinalCTASection";

// ─── Page-level SEO Metadata ───────────────────────────────────────────────
export const metadata: Metadata = {
  title: "SvasthaX | Predict. Adapt. Prevent.",
  description:
    "The era of reactive medicine is over. SvasthaX is a clinical-grade AI platform that simulates your health future using a Behavioral Digital Twin — predicting illness before it manifests.",
  openGraph: {
    title: "SvasthaX | Predict. Adapt. Prevent.",
    description:
      "Deep-tech preventive intelligence to simulate health outcomes before they occur. Meet your AI-powered Digital Twin.",
    url: "https://svasthax.com",
  },
  twitter: {
    title: "SvasthaX | Predict. Adapt. Prevent.",
    description:
      "Deep-tech preventive intelligence to simulate health outcomes before they occur.",
  },
  alternates: {
    canonical: "https://svasthax.com",
  },
};

// ─── Home Page (Server Component — SEO-first) ─────────────────────────────
export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        {/* Skip-to-content anchor for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-on-primary-container focus:rounded-full focus:font-bold"
        >
          Skip to main content
        </a>

        {/* 1. Hero — Page entry, H1 */}
        <HeroSection />

        {/* 2. Digital Twin intro — H2 */}
        <DigitalTwinSection />

        {/* 3. Precision Detection — H2 + 3-card stagger grid */}
        <PrecisionDetectionSection />

        {/* 4. Cycle of Intelligence — H2 + 4-card stagger grid */}
        <CycleOfIntelligenceSection />

        {/* 5. Intelligence Layer (Algorithms) — H2 + 4-card stagger */}
        <IntelligenceLayerSection />

        {/* 6. Digital Twin Architecture — Split layout + image */}
        <DigitalTwinArchitectureSection />

        {/* 7. Final CTA — "Ready to evolve your care?" */}
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}
