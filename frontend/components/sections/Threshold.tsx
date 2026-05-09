"use client";

import { motion, useReducedMotion } from "framer-motion";
import QuietImage from "../QuietImage";

const HERO_IMG =
  "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=1400&q=80";

export default function Threshold() {
  const reduce = useReducedMotion();

  return (
    <section
      data-testid="section-threshold"
      className="relative pt-28 md:pt-32 pb-16 md:pb-24"
    >
      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-12 gap-y-12 md:gap-x-12 items-center">
          {/* Left — words */}
          <div className="col-span-12 md:col-span-7 lg:col-span-7">
            <motion.p
              data-testid="threshold-eyebrow"
              initial={reduce ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.0, delay: 0.1, ease: [0.22, 0.61, 0.36, 1] }}
              className="text-micro tracking-widest uppercase text-ink-muted mb-6 md:mb-8"
            >
              <span className="font-deva text-[0.95rem] tracking-normal normal-case mr-3 text-ink">तत्त्वशिला</span>
              <span className="align-middle">— Tattvashila Ecosystem</span>
            </motion.p>

            <motion.h1
              data-testid="threshold-headline"
              initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.25, ease: [0.22, 0.61, 0.36, 1] }}
              className="font-display font-normal text-ink leading-[1.1] tracking-tight"
              style={{ fontSize: "clamp(2.25rem, 5.2vw, 4rem)" }}
            >
              A quieter way to live with awareness &mdash; without leaving the world you&rsquo;ve built.
            </motion.h1>

            <motion.p
              data-testid="threshold-sub"
              initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.45, ease: [0.22, 0.61, 0.36, 1] }}
              className="mt-7 md:mt-9 text-lead text-ink-soft max-w-reading"
            >
              Modern life offers endless advice and very little steadiness.
              Tattvashila is a body of work for people who want awareness,
              responsibility and discipline to be ordinary again &mdash; integrated
              into work, family and the years ahead.
            </motion.p>

            <motion.div
              initial={reduce ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.0, delay: 0.7 }}
              className="mt-10 md:mt-12 flex flex-wrap items-center gap-x-8 gap-y-4"
            >
              <a
                href="#philosophy"
                data-testid="threshold-cta-primary"
                className="group inline-flex items-center gap-3 text-small font-medium text-ink hover:text-river transition-colors duration-500 ease-gentle"
              >
                <span>Read the philosophy</span>
                <span aria-hidden className="block w-8 h-px bg-current transition-[width] duration-500 ease-gentle group-hover:w-12" />
              </a>
              <a
                href="#intake"
                data-testid="threshold-cta-secondary"
                className="text-small text-ink-muted hover:text-ink transition-colors duration-500 ease-gentle quiet-link"
              >
                Stay in touch
              </a>
            </motion.div>
          </div>

          {/* Right — image */}
          <motion.div
            initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.55, ease: [0.22, 0.61, 0.36, 1] }}
            className="col-span-12 md:col-span-5 lg:col-span-5"
          >
            <QuietImage
              src={HERO_IMG}
              alt="Soft morning light falling on a quiet, lived-in room"
              testId="threshold-image"
              aspectClass="aspect-[4/5] md:aspect-[3/4]"
              fallbackTone="warm"
              className="rounded-[2px]"
            />
            <p className="mt-4 text-micro tracking-widest uppercase text-ink-faint">
              An ordinary morning, an ordinary page.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
