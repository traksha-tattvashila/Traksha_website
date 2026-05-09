"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function Threshold() {
  const reduce = useReducedMotion();

  return (
    <section
      data-testid="section-threshold"
      className="relative min-h-[100svh] flex items-center"
    >
      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-10 lg:px-16 pt-32 md:pt-40 pb-24">
        <div className="max-w-prose-wide">
          <motion.p
            data-testid="threshold-eyebrow"
            initial={reduce ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
            className="text-micro tracking-widest uppercase text-ink-muted mb-10 md:mb-14"
          >
            <span className="font-deva text-[0.95rem] tracking-normal normal-case mr-3 text-ink">तत्त्वशिला</span>
            <span className="align-middle">— the foundation stone</span>
          </motion.p>

          <motion.h1
            data-testid="threshold-headline"
            initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
            className="font-display font-light text-hero text-ink"
          >
            Awareness,
            <br />
            <span className="italic text-river">integrated</span> into life.
          </motion.h1>

          <motion.p
            data-testid="threshold-sub"
            initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.95, ease: [0.22, 0.61, 0.36, 1] }}
            className="mt-12 md:mt-16 text-lead text-ink-muted max-w-reading"
          >
            A quiet ecosystem for grounded, conscious living &mdash; without the noise
            of motivation, the weight of dogma, or the spectacle of self-reinvention.
          </motion.p>

          <motion.div
            initial={reduce ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4, delay: 1.4 }}
            className="mt-20 md:mt-28"
          >
            <a
              href="#premise"
              data-testid="threshold-scroll-cue"
              className="inline-flex items-center gap-3 text-micro tracking-widest uppercase text-ink-muted hover:text-ink transition-colors duration-700 ease-gentle"
            >
              <span>Begin slowly</span>
              <span aria-hidden className="block w-10 h-px bg-current" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
