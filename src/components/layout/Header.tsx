"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/whitepaper", label: "Whitepaper" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 w-full z-50"
      role="banner"
    >
      <nav
        aria-label="Main navigation"
        className={cn(
          "bg-slate-950/60 backdrop-blur-md",
          "border-b border-white/[0.12]",
          "shadow-[0_8px_32px_rgba(131,239,225,0.05)]"
        )}
      >
        <div className="flex justify-between items-center px-6 md:px-8 py-4 max-w-7xl mx-auto">
          {/* ── Logo ── */}
          <Link
            href="/"
            aria-label="SvasthaX — Home"
            className="text-xl md:text-2xl font-black text-primary tracking-tighter font-headline hover:opacity-85 transition-opacity duration-200"
          >
            SvasthaX
          </Link>

          {/* ── Nav Links ── */}
          <ul
            className="hidden md:flex items-center gap-8 list-none"
            role="list"
          >
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "font-headline font-bold tracking-tight text-sm transition-colors duration-200",
                      isActive
                        ? "text-primary border-b-2 border-primary pb-0.5"
                        : "text-on-surface-variant hover:text-primary"
                    )}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* ── CTA Button ── */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <Link
              href="/waitlist"
              className={cn(
                "btn-primary inline-block",
                "px-5 py-2.5 md:px-6 md:py-2.5",
                "text-sm font-bold font-headline",
                "shadow-[0_0_20px_rgba(131,239,225,0.15)]"
              )}
              aria-label="Join the SvasthaX waitlist"
            >
              Join Waitlist
            </Link>
          </motion.div>
        </div>
      </nav>
    </motion.header>
  );
}
