import type { Metadata } from "next";
import "./globals.css";

// ─── Global SEO Metadata ───────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL("https://svasthax.com"),
  title: {
    default: "SvasthaX | Clinical-Grade Preventive Healthcare AI",
    template: "%s | SvasthaX",
  },
  description:
    "SvasthaX is a clinical-grade preventive healthcare AI platform. Predict biological shifts, simulate health outcomes, and intercept illness before it manifests with your AI-powered Digital Twin.",
  keywords: [
    "preventive health AI",
    "digital twin health",
    "predictive medicine",
    "clinical AI platform",
    "longevity technology",
    "health simulation",
    "biometric AI",
    "preventive wellness",
  ],
  authors: [{ name: "SvasthaX Team" }],
  creator: "SvasthaX",
  publisher: "SvasthaX",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://svasthax.com",
    siteName: "SvasthaX",
    title: "SvasthaX | Clinical-Grade Preventive Healthcare AI",
    description:
      "The era of reactive medicine is over. Leverage deep-tech preventive intelligence to simulate health outcomes before they occur.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SvasthaX — Clinical Oracle for Preventive Health",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SvasthaX | Clinical-Grade Preventive Healthcare AI",
    description:
      "Predict. Adapt. Prevent. The AI platform that simulates your health future before it happens.",
    images: ["/twitter-card.png"],
    creator: "@SvasthaX",
    site: "@SvasthaX",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

// ─── JSON-LD Schema Markup ─────────────────────────────────────────────────
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SvasthaX",
  url: "https://svasthax.com",
  logo: "https://svasthax.com/logo.png",
  description:
    "Clinical-grade preventive healthcare AI platform using Digital Twin technology to predict and prevent illness.",
  sameAs: [
    "https://twitter.com/SvasthaXAI",
    "https://www.linkedin.com/company/svasthax",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "hello@svasthax.com",
  },
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "SvasthaX",
  applicationCategory: "HealthApplication",
  operatingSystem: "iOS, Android, Web",
  description:
    "AI-powered preventive healthcare platform featuring a Clinical Context Engine (CCE), Preventive Risk Model (PSEM), Scenario Simulation (CSE), and Behavioral Scoring (BCSA) to construct your Behavioral Digital Twin.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Join the waitlist for early access",
  },
  creator: {
    "@type": "Organization",
    name: "SvasthaX",
  },
  featureList: [
    "Predictive health modeling",
    "Behavioral Digital Twin",
    "Clinical Context Engine",
    "Real-time biometric analysis",
    "AI-powered health insights",
  ],
  screenshot: "https://svasthax.com/screenshot.png",
};

// ─── Root Layout ───────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        {/* Preconnect for font performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Organization JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        {/* SoftwareApplication JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareApplicationSchema),
          }}
        />
      </head>
      <body className="bg-surface text-on-surface font-body oracle-bg overflow-x-hidden antialiased">
        {children}
      </body>
    </html>
  );
}
