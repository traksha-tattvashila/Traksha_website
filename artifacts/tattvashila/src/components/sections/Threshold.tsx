import { motion, useReducedMotion } from "framer-motion";
import QuietImage from "../QuietImage";
import { SiteContainer, SectionGrid } from "../../layouts";
import { EASE_GENTLE } from "../../system/motion/easings";
import { images } from "../../system/images/registry";

const { heroThreshold } = images;

export default function Threshold() {
  const reduce = useReducedMotion();

  return (
    <section
      data-testid="section-threshold"
      className="relative pt-24 md:pt-28 pb-12 md:pb-20"
    >
      <SiteContainer>
        <SectionGrid align="center" gapY="gap-y-12">
          <div className="col-span-12 md:col-span-7">
            <motion.p
              data-testid="threshold-eyebrow"
              initial={reduce ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.0, delay: 0.1, ease: EASE_GENTLE }}
              className="text-micro tracking-widest uppercase text-ink-muted mb-6 md:mb-8"
            >
              <span className="font-deva text-[0.95rem] tracking-normal normal-case mr-3 text-ink">तत्त्वशिला</span>
              <span className="align-middle">— a quiet body of work</span>
            </motion.p>

            <motion.h1
              data-testid="threshold-headline"
              initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.25, ease: EASE_GENTLE }}
              className="font-display text-hero font-normal text-ink leading-[1.12] tracking-tight"
            >
              A quieter way to live with awareness &mdash; without leaving the world you&rsquo;ve built.
            </motion.h1>

            <motion.p
              data-testid="threshold-sub"
              initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.45, ease: EASE_GENTLE }}
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

          <motion.div
            initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.55, ease: EASE_GENTLE }}
            className="col-span-12 md:col-span-5"
          >
            <QuietImage
              src={heroThreshold.src}
              alt={heroThreshold.alt}
              testId="threshold-image"
              aspectClass="aspect-[4/5] md:aspect-[4/5]"
              fallbackTone={heroThreshold.fallbackTone}
              className="rounded-[2px]"
            />
            <p className="mt-4 text-micro tracking-widest uppercase text-ink-faint">
              {heroThreshold.credit}
            </p>
          </motion.div>
        </SectionGrid>
      </SiteContainer>
    </section>
  );
}
