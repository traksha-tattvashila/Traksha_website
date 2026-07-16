import { Link } from "wouter";
import Reveal from "../Reveal";
import Wordmark from "../Wordmark";
import { SiteContainer } from "../../layouts";
import { SITE_NAV, SOCIAL_LINKS } from "../../content/navigation";
import { BRAND } from "../../content/institutional";

export default function Closing() {
  const year = new Date().getFullYear();

  return (
    <footer
      data-testid="section-closing"
      className="relative pt-24 md:pt-32 pb-12 md:pb-16 border-t-2 border-ink/12 bg-bone"
    >
      <SiteContainer>

        {/* ── Institutional closing statement ── */}
        <div className="grid grid-cols-12 gap-x-8 md:gap-x-12 lg:gap-x-14 xl:gap-x-16">
          <div className="col-span-12 md:col-span-3 hidden md:block" aria-hidden />
          <div className="col-span-12 md:col-span-9">
            <Reveal>
              <p
                data-testid="footer-closing-statement"
                className="font-display text-display-xl font-normal text-ink leading-[1.16] tracking-tight max-w-prose-wide"
              >
                {BRAND.footerQuote}
              </p>
            </Reveal>
            <Reveal delay={0.07}>
              <p className="mt-6 text-small text-ink-faint tracking-wide">
                {BRAND.footerStatement}
              </p>
            </Reveal>
          </div>
        </div>

        {/* ── Identity mark + institutional navigation ── */}
        <div className="mt-20 md:mt-24 grid grid-cols-12 gap-x-8 md:gap-x-12 lg:gap-x-14 xl:gap-x-16 gap-y-12 md:gap-y-0">

          {/* Institutional marks — wordmark + Devanagari + meaning */}
          <div className="col-span-12 md:col-span-3">
            <Reveal>
              <Wordmark size="default" testId="footer-wordmark" />
              <p
                data-testid="footer-devanagari"
                className="mt-2 font-deva text-[1.05rem] tracking-normal text-ink-muted leading-relaxed"
              >
                {BRAND.deva}
              </p>
              <p className="mt-2 text-small text-ink-faint leading-relaxed">
                {BRAND.meaning}
              </p>
            </Reveal>
          </div>

          {/* Institutional navigation — flat, manuscript-style */}
          <div className="col-span-12 md:col-span-9 md:pt-[3px]">
            <Reveal delay={0.05}>
              <p className="text-micro tracking-widest uppercase text-ink-faint mb-7">
                Institutional
              </p>
              <nav
                aria-label="Footer navigation"
                className="flex flex-wrap gap-x-10 gap-y-4"
              >
                {SITE_NAV.map((item) =>
                  item.isRoute ? (
                    <Link
                      key={item.href}
                      href={item.href}
                      data-testid={`footer-link-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-body text-ink-soft hover:text-ink transition-colors duration-700 ease-gentle quiet-link"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      key={item.href}
                      href={item.href}
                      data-testid={`footer-link-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-body text-ink-soft hover:text-ink transition-colors duration-700 ease-gentle quiet-link"
                    >
                      {item.label}
                    </a>
                  )
                )}

                {/* Stay in touch — separated visually */}
                <span className="text-body text-ink/20" aria-hidden>·</span>
                <a
                  href="/#intake"
                  data-testid="footer-link-stay-in-touch"
                  className="text-body text-ink-soft hover:text-ink transition-colors duration-700 ease-gentle quiet-link"
                >
                  Stay in touch
                </a>
              </nav>
            </Reveal>
          </div>

        </div>

        {/* ── Base mark ── */}
        <Reveal delay={0.1}>
          <div className="mt-20 md:mt-24 pt-6 border-t border-ink/10 flex flex-col md:flex-row md:items-center md:justify-between gap-5 md:gap-8">

            <p
              data-testid="footer-meta"
              className="text-micro tracking-widest uppercase text-ink-faint num-tab"
            >
              &#169;&nbsp;{year}&nbsp;&nbsp;&middot;&nbsp;&nbsp;{BRAND.name}
            </p>

            {/* Social — as quiet text links, not icons */}
            {SOCIAL_LINKS.length > 0 && (
              <div
                data-testid="footer-social"
                className="flex items-center gap-7"
              >
                {SOCIAL_LINKS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={`${s.label} — opens in new tab`}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`footer-social-${s.label.toLowerCase()}`}
                    className="text-micro tracking-widest uppercase text-ink-faint hover:text-ink-muted transition-colors duration-700 ease-gentle"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            )}

            <p
              data-testid="footer-tagline"
              className="text-micro tracking-widest uppercase text-ink-faint"
            >
              {BRAND.legal}
            </p>

          </div>
        </Reveal>

      </SiteContainer>
    </footer>
  );
}
