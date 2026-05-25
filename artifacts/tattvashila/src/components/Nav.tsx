import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import Wordmark from "./Wordmark";
import { SiteContainer } from "../layouts";
import { EASE_GENTLE_ARRAY } from "../tokens/motion";

const NAV_ITEMS = [
  { label: "Philosophy", href: "/philosophy", isRoute: true },
  { label: "The work",   href: "/#ecosystem",  isRoute: false },
  { label: "Notes",      href: "/notes",        isRoute: true },
  { label: "Origin",     href: "/about",        isRoute: true },
] as const;

export default function Nav() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => { setMobileOpen(false); }, [location]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMobileOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  function isActive(href: string) {
    return location === href;
  }

  return (
    <>
      <header
        data-testid="site-nav"
        className="fixed top-0 inset-x-0 z-30 backdrop-blur-md bg-bone/85 border-b border-ink/10"
      >
        <SiteContainer>
          <div className="h-16 md:h-[72px] flex items-center justify-between">
            <Wordmark testId="nav-wordmark" />

            <nav className="hidden md:flex items-center gap-9" aria-label="Main navigation">
              {NAV_ITEMS.map((item) =>
                item.isRoute ? (
                  <Link
                    key={item.href}
                    href={item.href}
                    data-testid={`nav-link-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                    className={`text-small transition-colors duration-500 ease-gentle quiet-link${
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
                    className="text-small text-ink-muted hover:text-ink transition-colors duration-500 ease-gentle quiet-link"
                  >
                    {item.label}
                  </a>
                )
              )}
              <a
                href="/#intake"
                data-testid="nav-intake-cta"
                className="ml-2 inline-flex items-center gap-2 px-4 py-2 bg-ink text-bone-light text-small font-medium rounded-[2px] hover:bg-ink-soft transition-colors duration-500 ease-gentle"
              >
                Stay in touch
              </a>
            </nav>

            <div className="md:hidden flex items-center gap-3">
              <a
                href="/#intake"
                data-testid="nav-intake-cta-mobile"
                className="inline-flex items-center px-3.5 py-1.5 bg-ink text-bone-light text-micro tracking-widest uppercase rounded-[2px]"
              >
                Stay in touch
              </a>
              <button
                onClick={() => setMobileOpen(true)}
                aria-label="Open navigation menu"
                aria-expanded={mobileOpen}
                data-testid="nav-hamburger"
                className="inline-flex items-center justify-center w-9 h-9 text-ink-muted hover:text-ink transition-colors duration-300"
              >
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" className="w-5 h-5" aria-hidden="true">
                  <line x1="2" y1="5"  x2="18" y2="5"  />
                  <line x1="2" y1="10" x2="18" y2="10" />
                  <line x1="2" y1="15" x2="18" y2="15" />
                </svg>
              </button>
            </div>
          </div>
        </SiteContainer>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-nav"
            data-testid="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.35, ease: EASE_GENTLE_ARRAY } }}
            exit={{ opacity: 0, transition: { duration: 0.25, ease: EASE_GENTLE_ARRAY } }}
            className="fixed inset-0 z-50 bg-bone/97 backdrop-blur-sm md:hidden flex flex-col"
          >
            <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-ink/10">
              <Wordmark testId="mobile-nav-wordmark" />
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close navigation menu"
                data-testid="nav-close"
                className="inline-flex items-center justify-center w-9 h-9 text-ink-muted hover:text-ink transition-colors duration-300"
              >
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" className="w-5 h-5" aria-hidden="true">
                  <line x1="4" y1="4" x2="16" y2="16" />
                  <line x1="16" y1="4" x2="4" y2="16" />
                </svg>
              </button>
            </div>

            <nav
              className="flex flex-col px-6 pt-10 pb-6 gap-1 flex-1"
              aria-label="Mobile navigation"
            >
              {NAV_ITEMS.map((item, i) =>
                item.isRoute ? (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.05 + i * 0.04, ease: EASE_GENTLE_ARRAY } }}
                  >
                    <Link
                      href={item.href}
                      data-testid={`mobile-nav-link-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                      className={`block py-4 font-display text-display font-normal transition-colors duration-300 border-b border-ink/10${
                        isActive(item.href)
                          ? " text-ink"
                          : " text-ink-muted hover:text-ink"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ) : (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.05 + i * 0.04, ease: EASE_GENTLE_ARRAY } }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      data-testid={`mobile-nav-link-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                      className="block py-4 font-display text-display font-normal text-ink-muted hover:text-ink transition-colors duration-300 border-b border-ink/10"
                    >
                      {item.label}
                    </a>
                  </motion.div>
                )
              )}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.4, delay: 0.28, ease: EASE_GENTLE_ARRAY } }}
                className="mt-auto pt-10"
              >
                <a
                  href="/#intake"
                  onClick={() => setMobileOpen(false)}
                  data-testid="mobile-nav-intake-cta"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-ink text-bone-light text-small font-medium rounded-[2px] hover:bg-ink-soft transition-colors duration-500 ease-gentle"
                >
                  <span>Stay in touch</span>
                  <span aria-hidden className="block w-6 h-px bg-current" />
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
