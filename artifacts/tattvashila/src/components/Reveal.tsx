import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

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
        duration: reduce ? 0 : 0.85,
        delay: reduce ? 0 : delay,
        ease: [0.22, 0.61, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </Tag>
  );
}
