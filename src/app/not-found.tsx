import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "404 — Page Not Found",
  description: "The page you're looking for doesn't exist.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main
        id="main-content"
        className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 py-32"
      >
        <p className="text-secondary font-bold uppercase tracking-[0.3em] text-sm mb-4 font-headline">
          Error 404
        </p>
        <h1 className="font-headline text-6xl md:text-8xl font-extrabold tracking-tighter text-on-surface mb-5">
          Lost in the data.
        </h1>
        <p className="text-on-surface-variant text-lg max-w-md leading-relaxed mb-10">
          This page doesn&apos;t exist in our neural network. Navigate back to
          a known coordinate.
        </p>
        <Link
          href="/"
          className="btn-primary inline-block px-10 py-4 text-base"
          aria-label="Return to the SvasthaX homepage"
        >
          Return Home
        </Link>
      </main>
      <Footer />
    </>
  );
}
