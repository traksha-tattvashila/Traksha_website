"use client";

import Wordmark from "./Wordmark";

const NAV = [
  { label: "Philosophy", href: "/#philosophy" },
  { label: "The work", href: "/#ecosystem" },
  { label: "Origin", href: "/about" },
];

export default function Nav() {
  return (
    <header
      data-testid="site-nav"
      className="fixed top-0 inset-x-0 z-30 backdrop-blur-md bg-bone/85 border-b border-ink/10"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 h-16 md:h-[72px] flex items-center justify-between">
        <Wordmark testId="nav-wordmark" />
        <nav className="hidden md:flex items-center gap-9">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              data-testid={`nav-link-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-small text-ink-muted hover:text-ink transition-colors duration-500 ease-gentle quiet-link"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/#intake"
            data-testid="nav-intake-cta"
            className="ml-2 inline-flex items-center gap-2 px-4 py-2 bg-ink text-bone-light text-small font-medium rounded-[2px] hover:bg-river transition-colors duration-500 ease-gentle"
          >
            Stay in touch
          </a>
        </nav>
        <a
          href="/#intake"
          data-testid="nav-intake-cta-mobile"
          className="md:hidden inline-flex items-center px-3.5 py-1.5 bg-ink text-bone-light text-micro tracking-widest uppercase rounded-[2px]"
        >
          Stay in touch
        </a>
      </div>
    </header>
  );
}
