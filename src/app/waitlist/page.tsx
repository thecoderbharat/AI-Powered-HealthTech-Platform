import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WaitlistHeroSection from "@/components/waitlist/WaitlistHeroSection";
import PhoneMockup from "@/components/waitlist/PhoneMockup";
import WaitlistForm from "@/components/waitlist/WaitlistForm";

// ─── Page-level SEO Metadata ───────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Secure Early Access — Join the SvasthaX Waitlist",
  description:
    "Join the exclusive SvasthaX waitlist. Be among the first health pioneers to experience clinical-grade AI-powered preventive care and your personal Behavioral Digital Twin.",
  openGraph: {
    title: "Secure Your Early Access | SvasthaX Waitlist",
    description:
      "Join an exclusive circle of health pioneers. Gain data-driven clarity on your longevity and take the guesswork out of preventive wellness.",
    url: "https://svasthax.com/waitlist",
  },
  twitter: {
    title: "Join the SvasthaX Waitlist — Early Access",
    description:
      "Secure your spot for the future of preventive health AI. Limited early access available.",
  },
  alternates: {
    canonical: "https://svasthax.com/waitlist",
  },
  // Waitlist pages should not be indexed while invite-only
  robots: {
    index: false,
    follow: true,
  },
};

// ─── Waitlist Page (Server Component shell — client children) ─────────────
export default function WaitlistPage() {
  return (
    <>
      <Header />

      <main
        id="main-content"
        tabIndex={-1}
        className="pt-28 pb-20 px-6 md:px-8 max-w-7xl mx-auto"
      >
        {/* 1. Page hero — H1 "Secure Your Early Access" */}
        <WaitlistHeroSection />

        {/* 2. 50/50 split — Phone mockup (left) + Form (right) */}
        <div className="flex flex-col lg:flex-row items-start gap-14 lg:gap-20">
          {/* Left: Phone mockup */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <PhoneMockup />
          </div>

          {/* Right: Glassmorphism form card */}
          <div className="w-full lg:w-1/2">
            <WaitlistForm />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
