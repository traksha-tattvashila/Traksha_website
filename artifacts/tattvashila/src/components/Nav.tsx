import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import Wordmark from "./Wordmark";
import { SiteContainer } from "../layouts";
import { EASE_GENTLE } from "../system/motion/easings";
import { SITE_NAV } from "../content/navigation";

export default function Nav() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close mobile nav on route change
  useEffect(() => { setMobileOpen(false); }, [location]);

  // Keyboard dismiss for mobile overlay
  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMobileOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  // Body scroll lock while mobile nav is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Scroll depth detection — adds a subtle shadow once page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll(); // sync on mount
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function isActive(href: string) {
    return location === href;
  }

  return (
    <>
      <header
        data-testid="site-nav"
        className={[
          "fixed top-0 inset-x-0 z-30 backdrop-blur-md bg-bone/88 border-b border-ink/8",
          "transition-shadow duration-700 ease-gentle",
          scrolled ? "shadow-[0_2px_16px_rgba(0,31,32,0.05)]" : "",
        ].filter(Boolean).join(" ")}
      >
        <SiteContainer>
          <div className="h-[68px] md:h-[80px] flex items-center justify-between">
            <Wordmark testId="nav-wordmark" />

            {/* Desktop navigation — institutional, quiet */}
            <nav className="hidden md:flex items-center gap-10" aria-label="Main navigation">
              {SITE_NAV.map((item) =>
                item.isRoute ? (
                  <Link
                    key={item.href}
                    href={item.href}
                    data-testid={`nav-link-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                    className={`text-small transition-colors duration-700 ease-gentle quiet-link${
                      isActive(item.href)
                        ? " text-ink is-active"
                        : " text-ink-muted hover:text-ink"
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.href}
                    href={item.href}
                    data-testid={`nav-link-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-small text-ink-muted hover:text-ink transition-colors duration-700 ease-gentle quiet-link"
                  >
                    {item.label}
                  </a>
                )
              )}

              {/* Institutional quiet CTA — restrained, not a product button */}
              <a
                href="/#intake"
                data-testid="nav-intake-cta"
                className="ml-1 inline-flex items-center gap-3 text-small text-ink-muted hover:text-ink transition-colors duration-700 ease-gentle group"
              >
                <span className="block w-5 h-px bg-current opacity-40 group-hover:opacity-70 transition-opacity duration-700" aria-hidden />
                <span>Stay in correspondence</span>
              </a>
            </nav>

            {/* Mobile controls */}
            <div className="md:hidden flex items-center gap-4">
              <a
                href="/#intake"
                data-testid="nav-intake-cta-mobile"
                className="text-micro tracking-widest uppercase text-ink-muted hover:text-ink transition-colors duration-500"
              >
                Stay in correspondence
              </a>
              <button
                onClick={() => setMobileOpen(true)}
                aria-label="Open navigation menu"
                aria-expanded={mobileOpen}
                aria-controls="mobile-nav"
                data-testid="nav-hamburger"
                className="inline-flex items-center justify-center w-9 h-9 text-ink-muted hover:text-ink transition-colors duration-300"
              >
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" className="w-5 h-5" aria-hidden="true">
                  <line x1="2" y1="5"  x2="18" y2="5"  />
                  <line x1="2" y1="10" x2="18" y2="10" />
                  <line x1="2" y1="15" x2="18" y2="15" />
                </svg>
              </button>
            </div>
          </div>
        </SiteContainer>
      </header>

      {/* Mobile navigation overlay — institutional, calm */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-nav"
            key="mobile-nav"
            data-testid="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.45, ease: EASE_GENTLE } }}
            exit={{ opacity: 0, transition: { duration: 0.3, ease: EASE_GENTLE } }}
            className="fixed inset-0 z-50 bg-bone md:hidden flex flex-col"
          >
            <div className="flex items-center justify-between px-7 pt-5 pb-5 border-b border-ink/10">
              <Wordmark testId="mobile-nav-wordmark" />
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close navigation menu"
                data-testid="nav-close"
                className="inline-flex items-center justify-center w-9 h-9 text-ink-faint hover:text-ink transition-colors duration-300"
              >
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" className="w-5 h-5" aria-hidden="true">
                  <line x1="4" y1="4" x2="16" y2="16" />
                  <line x1="16" y1="4" x2="4"  y2="16" />
                </svg>
              </button>
            </div>

            <nav
              className="flex flex-col px-7 pt-10 pb-8 flex-1"
              aria-label="Mobile navigation"
            >
              {SITE_NAV.map((item, i) =>
                item.isRoute ? (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.05 + i * 0.05, ease: EASE_GENTLE } }}
                  >
                    <Link
                      href={item.href}
                      data-testid={`mobile-nav-link-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                      className={`block py-5 font-display text-display font-normal border-b border-ink/10 transition-colors duration-300${
                        isActive(item.href) ? " text-ink" : " text-ink-muted hover:text-ink"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ) : (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.05 + i * 0.05, ease: EASE_GENTLE } }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      data-testid={`mobile-nav-link-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                      className="block py-5 font-display text-display font-normal text-ink-muted hover:text-ink border-b border-ink/10 transition-colors duration-300"
                    >
                      {item.label}
                    </a>
                  </motion.div>
                )
              )}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.35, ease: EASE_GENTLE } }}
                className="mt-auto pt-12"
              >
                <a
                  href="/#intake"
                  onClick={() => setMobileOpen(false)}
                  data-testid="mobile-nav-intake-cta"
                  className="inline-flex items-center gap-4 text-small text-ink-muted hover:text-ink transition-colors duration-500 ease-gentle"
                >
                  <span className="block w-6 h-px bg-current opacity-40" aria-hidden />
                  <span>Stay in correspondence</span>
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
