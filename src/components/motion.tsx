"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

/** Parent that orchestrates the single entrance sequence (~1.2s total). */
export function Stagger({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: reduce ? 0 : 0.055,
            delayChildren: 0.08,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

type Tag = "div" | "li" | "footer" | "header" | "p";

/** Child of <Stagger>. Fades and rises slightly; optional blur-in for hero imagery. */
export function Item({
  children,
  className,
  as = "div",
  blur = false,
}: {
  children: ReactNode;
  className?: string;
  as?: Tag;
  blur?: boolean;
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;

  const variants: Variants = reduce
    ? {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 0.2 } },
      }
    : {
        hidden: {
          opacity: 0,
          y: 10,
          ...(blur ? { scale: 0.94, filter: "blur(8px)" } : {}),
        },
        show: {
          opacity: 1,
          y: 0,
          ...(blur ? { scale: 1, filter: "blur(0px)" } : {}),
          transition: { duration: 0.5, ease },
        },
      };

  return (
    <MotionTag className={className} variants={variants}>
      {children}
    </MotionTag>
  );
}
