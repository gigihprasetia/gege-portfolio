"use client";
import { HTMLMotionProps, motion, Transition } from "framer-motion";
import React, { FC, ReactNode } from "react";

const animateConfig: Record<
  | "fade"
  | "fadeOut"
  | "fadeInLeft"
  | "fadeInRight"
  | "fadeInTop"
  | "fadeInBottom",
  {
    initial: HTMLMotionProps<"div">["initial"];
    animate: HTMLMotionProps<"div">["animate"];
  }
> = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
  fadeOut: {
    initial: { opacity: 1 },
    animate: { opacity: 0 },
  },
  fadeInLeft: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
  },
  fadeInRight: {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
  },
  fadeInTop: {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
  },
  fadeInBottom: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  },
} as const;

interface AnimatesProps {
  type?: keyof typeof animateConfig;
  transition?: Transition;
  children: ReactNode;
}

const Animates: FC<AnimatesProps> = ({
  type = "fade",
  transition,
  children,
}) => {
  const config = animateConfig[type];

  return (
    <motion.div
      initial={config.initial}
      animate={config.animate}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default Animates;
