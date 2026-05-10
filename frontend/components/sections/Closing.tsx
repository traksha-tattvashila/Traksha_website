"use client";

import Reveal from "../Reveal";
import Wordmark from "../Wordmark";

const NAV_GROUPS = [
  {
    label: "The work",
    links: [
      { label: "Philosophy", href: "/#philosophy" },
      { label: "The dimensions", href: "/#ecosystem" },
      { label: "The journey", href: "/#journey" },
    ],
  },
  {
    label: "About",
    links: [
      { label: "Origin", href: "/about" },
      { label: "Reflective intake", href: "/#intake" },
      { label: "Quiet Notes", href: "/notes" },
    ],
  },
];

interface SocialItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

const SOCIAL: SocialItem[] = [
  {
    label: "Instagram",
    href: "https://instagram.com/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 4l16 16" />
        <path d="M20 4L4 20" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2.5" y="6" width="19" height="12" rx="3" />
        <path d="M10.5 9.5l4.5 2.5-4.5 2.5z" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2.5" />
        <path d="M7.5 10v7" />
        <circle cx="7.5" cy="7" r="0.7" fill="currentColor" stroke="none" />
        <path d="M11.5 17v-4.2c0-1.5 1-2.3 2.2-2.3s2.3 0.8 2.3 2.5V17" />
      </svg>
    ),
  },
];

export default function Closing() {
  const year = new Date().getFullYear();
  return (
    <footer
      data-testid="section-closing"
      className="relative pt-12 md:pt-16 pb-7 md:pb-9 border-t border-ink/15 bg-bone-deep/40"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Upper block */}
        <div className="grid grid-cols-12 gap-y-8 md:gap-x-12">
          <div className="col-span-12 md:col-span-6">
            <Reveal>
              <Wordmark size="default" testId="footer-wordmark" />
            </Reveal>
            <Reveal delay={0.05}>
              <p className="mt-3 font-display text-base md:text-lg text-ink-soft leading-snug max-w-prose-wide">
                A foundation is laid quietly, long before anything is built upon it.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-3 text-small text-ink-muted max-w-reading">
                <span className="font-deva text-[0.95rem] tracking-normal text-ink mr-2">तत्त्वशिला</span>
                — the foundation stone. A long-form, slowly-built body of work for grounded, conscious living.
              </p>
            </Reveal>
          </div>

          {NAV_GROUPS.map((g, gi) => (
            <Reveal key={g.label} delay={0.1 + gi * 0.04} className="col-span-6 md:col-span-3">
              <p className="text-micro tracking-widest uppercase text-ink-faint mb-3">
                {g.label}
              </p>
              <ul className="space-y-2">
                {g.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      data-testid={`footer-link-${l.label.toLowerCase().replace(/\s+/g, "-").replace(/[()]/g, "")}`}
                      className="text-small text-ink-soft hover:text-ink transition-colors duration-500 ease-gentle quiet-link"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        {/* Social row */}
        <Reveal delay={0.15}>
          <div className="mt-10 md:mt-12 flex items-center gap-5" data-testid="footer-social">
            {SOCIAL.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`footer-social-${s.label.toLowerCase()}`}
                className="inline-flex items-center justify-center w-9 h-9 text-ink-muted hover:text-ink transition-colors duration-500 ease-gentle"
              >
                <span className="block w-[18px] h-[18px]">{s.icon}</span>
              </a>
            ))}
          </div>
        </Reveal>

        {/* Closure row */}
        <div className="mt-8 md:mt-10 pt-5 border-t border-ink/10 flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4">
          <p
            data-testid="footer-meta"
            className="text-micro tracking-widest uppercase text-ink-faint num-tab"
          >
            © {year} &nbsp;·&nbsp; Tattvashila
          </p>
          <p
            data-testid="footer-tagline"
            className="text-micro tracking-widest uppercase text-ink-faint"
          >
            Grounded in Dharma. Carried with integrity.
          </p>
        </div>
      </div>
    </footer>
  );
}
