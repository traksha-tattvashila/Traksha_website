"use client";

import Wordmark from "./Wordmark";

const NAV = [
  { label: "Philosophy", href: "#philosophy" },
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "Journey", href: "#journey" },
  { label: "Stay in touch", href: "#intake" },
];

export default function Nav() {
  return (
    <header
      data-testid="site-nav"
      className="fixed top-0 inset-x-0 z-30 backdrop-blur-[6px] bg-bone/70 border-b border-ink/5"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 h-16 md:h-20 flex items-center justify-between">
        <Wordmark testId="nav-wordmark" />
        <nav className="hidden md:flex items-center gap-10">
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
        </nav>
        <a
          href="#intake"
          data-testid="nav-intake-cta"
          className="md:hidden text-micro tracking-widest uppercase text-ink-muted"
        >
          Stay in touch
        </a>
      </div>
    </header>
  );
}
