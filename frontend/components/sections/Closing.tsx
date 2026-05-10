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

export default function Closing() {
  const year = new Date().getFullYear();
  return (
    <footer
      data-testid="section-closing"
      className="relative pt-14 md:pt-20 pb-9 md:pb-11 border-t border-ink/15 bg-bone-deep/40"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-12 gap-y-10 md:gap-x-12">
          <div className="col-span-12 md:col-span-6">
            <Reveal>
              <Wordmark size="default" testId="footer-wordmark" />
            </Reveal>
            <Reveal delay={0.05}>
              <p className="mt-4 font-display text-lg md:text-xl text-ink-soft leading-snug max-w-prose-wide">
                A foundation is laid quietly, long before anything is built upon it.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 text-small text-ink-muted max-w-reading">
                <span className="font-deva text-[0.95rem] tracking-normal text-ink mr-2">तत्त्वशिला</span>
                — the foundation stone. A long-form, slowly-built body of work for grounded, conscious living.
              </p>
            </Reveal>
          </div>

          {NAV_GROUPS.map((g, gi) => (
            <Reveal key={g.label} delay={0.1 + gi * 0.04} className="col-span-6 md:col-span-3">
              <p className="text-micro tracking-widest uppercase text-ink-faint mb-4">
                {g.label}
              </p>
              <ul className="space-y-2.5">
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

        <div className="mt-10 md:mt-14 pt-5 border-t border-ink/10 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p
            data-testid="footer-meta"
            className="text-micro tracking-widest uppercase text-ink-faint num-tab"
          >
            © {year} &nbsp;·&nbsp; Tattvashila
          </p>
          <p className="text-micro tracking-widest uppercase text-ink-faint">
            <span className="font-deva text-[0.85rem] tracking-normal normal-case text-ink-muted">
              शिल्प · संयम · सहभाग
            </span>
            <span className="ml-3">— craft, restraint, participation</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
