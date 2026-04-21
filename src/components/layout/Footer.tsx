import Link from "next/link";

interface FooterColumnLink {
  label: string;
  href: string;
}

interface FooterColumn {
  heading: string;
  links: FooterColumnLink[];
}

// ─── Footer link data (per design) ────────────────────────────────────────
const footerColumns: FooterColumn[] = [
  {
    heading: "Product",
    links: [
      { label: "Digital Twin", href: "/" },
      { label: "Algorithms", href: "/" },
      { label: "Waitlist", href: "/waitlist" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
  {
    heading: "Connect",
    links: [
      { label: "Twitter", href: "https://twitter.com" },
      { label: "LinkedIn", href: "https://linkedin.com" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

// ─── Footer Component (Server Component — no animations needed) ────────────
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-slate-950 w-full rounded-t-[2.5rem] mt-12"
      aria-label="Site footer"
    >
      <div className="flex flex-col md:flex-row justify-between items-start px-8 md:px-12 py-16 md:py-20 max-w-7xl mx-auto gap-12">
        {/* ── Brand block ── */}
        <div className="max-w-sm">
          <Link
            href="/"
            className="text-xl font-bold text-primary font-headline mb-6 block hover:opacity-85 transition-opacity"
            aria-label="SvasthaX — Go to homepage"
          >
            SvasthaX
          </Link>
          <p className="text-on-surface-variant text-sm leading-relaxed">
            Advancing human health through the synthesis of predictive AI and
            clinical excellence. We are building the clinical oracle for the
            next century.
          </p>
        </div>

        {/* ── Link columns ── */}
        <nav
          aria-label="Footer navigation"
          className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-16"
        >
          {footerColumns.map(({ heading, links }) => (
            <div key={heading} className="flex flex-col gap-3">
              <span className="text-on-surface font-bold font-headline text-sm mb-1">
                {heading}
              </span>
              {links.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="text-on-surface-variant text-sm hover:text-secondary transition-colors duration-200"
                >
                  {label}
                </Link>
              ))}
            </div>
          ))}
        </nav>
      </div>

      {/* ── Bottom bar ── */}
      <div className="max-w-7xl mx-auto px-8 md:px-12 py-6 border-t border-white/[0.05] flex flex-col md:flex-row justify-between items-center gap-3 text-xs">
        <p className="text-on-surface-variant">
          &copy; {currentYear} SvasthaX. All rights reserved.
        </p>
        <div className="flex gap-6" aria-label="Brand taglines">
          <span className="text-primary font-bold font-headline tracking-wide">
            Clinical Precision
          </span>
          <span className="text-primary font-bold font-headline tracking-wide">
            Predictive Power
          </span>
        </div>
      </div>
    </footer>
  );
}
