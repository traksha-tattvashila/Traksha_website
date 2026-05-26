import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";
import { EASE_GENTLE } from "../system/motion/easings";
import { duration } from "../system/motion/durations";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "p" | "h1" | "h2" | "h3" | "li" | "span";
}

export default function Reveal({
  children,
  delay = 0,
  className = "",
  as = "div",
}: RevealProps) {
  const reduce = useReducedMotion();
  // @ts-ignore
  const Tag = motion[as] as any;

  return (
    <Tag
      initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
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
