import { motion, useReducedMotion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";
import { EASE_GENTLE } from "../system/motion/easings";
import { duration } from "../system/motion/durations";

type MotionTag = "div" | "section" | "p" | "h1" | "h2" | "h3" | "li" | "span";

/**
 * Pre-built map from tag name → Framer Motion component.
 * Avoids dynamic property access on `motion`, removing the need for @ts-ignore.
 */
const MOTION_COMPONENTS: Record<MotionTag, React.FC<HTMLMotionProps<any>>> = {
  div:     motion.div,
  section: motion.section,
  p:       motion.p,
  h1:      motion.h1,
  h2:      motion.h2,
  h3:      motion.h3,
  li:      motion.li,
  span:    motion.span,
};

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: MotionTag;
}

/**
 * Scroll-triggered entrance animation for Tattvashila.
 * Motion is architectural, quiet, and intentional.
 * Respects prefers-reduced-motion — shows content immediately if set.
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
  as = "div",
}: RevealProps) {
  const reduce = useReducedMotion();
  const Tag = MOTION_COMPONENTS[as];

  return (
    <Tag
      initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: reduce ? 0 : duration.reveal,
        delay:    reduce ? 0 : delay,
        ease:     EASE_GENTLE,
      }}
      className={className}
    >
      {children}
    </Tag>
  );
}
