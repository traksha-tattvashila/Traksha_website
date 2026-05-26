import { Link } from "wouter";
import { ReactNode } from "react";
import Reveal from "../Reveal";
import Wordmark from "../Wordmark";
import { SiteContainer } from "../../layouts";
import { FOOTER_NAV, SOCIAL_LINKS } from "../../content/navigation";
import { BRAND } from "../../content/institutional";

const SOCIAL_ICONS: Record<string, ReactNode> = {
  Instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  ),
  YouTube: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2.5" y="6" width="19" height="12" rx="3" />
      <path d="M10.5 9.5l4.5 2.5-4.5 2.5z" fill="currentColor" stroke="none" />
    </svg>
  ),
};

export default function Closing() {
  const year = new Date().getFullYear();
  return (
    <footer
      data-testid="section-closing"
      className="relative pt-12 md:pt-16 pb-7 md:pb-9 border-t border-ink/15 bg-bone-deep/40"
    >
      <SiteContainer>
        <div className="grid grid-cols-12 gap-y-8 md:gap-x-12">
          <div className="col-span-12 md:col-span-6">
            <Reveal>
              <Wordmark size="default" testId="footer-wordmark" />
            </Reveal>
            <Reveal delay={0.05}>
              <p className="mt-3 font-display text-base md:text-lg text-ink-soft leading-snug max-w-prose-wide">
                {BRAND.footerQuote}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-3 text-small text-ink-muted max-w-reading">
                <span className="font-deva text-[0.95rem] tracking-normal text-ink mr-2">{BRAND.deva}</span>
                — {BRAND.meaning}. {BRAND.description}
              </p>
            </Reveal>
          </div>

          {FOOTER_NAV.map((g, gi) => (
            <Reveal key={g.label} delay={0.1 + gi * 0.04} className="col-span-6 md:col-span-3">
              <h3 className="text-micro tracking-widest uppercase text-ink-faint mb-3">
                {g.label}
              </h3>
              <ul className="space-y-2">
                {g.links.map((l) => (
                  <li key={l.label}>
                    {l.isRoute ? (
                      <Link
                        href={l.href}
                        data-testid={`footer-link-${l.label.toLowerCase().replace(/\s+/g, "-").replace(/[()]/g, "")}`}
                        className="text-small text-ink-soft hover:text-ink transition-colors duration-500 ease-gentle quiet-link"
                      >
                        {l.label}
                      </Link>
                    ) : (
                      <a
                        href={l.href}
                        data-testid={`footer-link-${l.label.toLowerCase().replace(/\s+/g, "-").replace(/[()]/g, "")}`}
                        className="text-small text-ink-soft hover:text-ink transition-colors duration-500 ease-gentle quiet-link"
                      >
                        {l.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-10 md:mt-12 flex items-center gap-5" data-testid="footer-social">
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`footer-social-${s.label.toLowerCase()}`}
                className="inline-flex items-center justify-center w-9 h-9 text-ink-muted hover:text-ink transition-colors duration-500 ease-gentle"
              >
                <span className="block w-[18px] h-[18px]">
                  {SOCIAL_ICONS[s.label]}
                </span>
              </a>
            ))}
          </div>
        </Reveal>

        <div className="mt-8 md:mt-10 pt-5 border-t border-ink/10 flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4">
          <p
            data-testid="footer-meta"
            className="text-micro tracking-widest uppercase text-ink-faint num-tab"
          >
            © {year} &nbsp;·&nbsp; {BRAND.name}
          </p>
          <p
            data-testid="footer-tagline"
            className="text-micro tracking-widest uppercase text-ink-faint"
          >
            {BRAND.legal}
          </p>
        </div>
      </SiteContainer>
    </footer>
  );
}
