"use client";

import Reveal from "../Reveal";
import Wordmark from "../Wordmark";

export default function Closing() {
  const year = new Date().getFullYear();
  return (
    <footer
      data-testid="section-closing"
      className="relative pt-32 md:pt-48 pb-16 md:pb-20 border-t border-ink/10"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <Reveal>
          <p className="font-display italic text-2xl md:text-3xl font-light text-ink-muted max-w-prose-wide leading-snug">
            &mdash;&nbsp;A foundation is laid quietly, long before anything is built upon it.
          </p>
        </Reveal>

        <div className="mt-32 md:mt-40 flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <Reveal>
            <Wordmark size="large" testId="footer-wordmark" />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="text-micro tracking-widest uppercase text-ink-faint num-tab">
              <p data-testid="footer-meta">
                Tattvashila Ecosystem &nbsp;·&nbsp; {year}
              </p>
              <p className="mt-3">
                <span className="font-deva text-[0.85rem] tracking-normal normal-case text-ink-muted">
                  शिल्प · संयम · सहभाग
                </span>
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </footer>
  );
}
