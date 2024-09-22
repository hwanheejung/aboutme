"use client";

import { motion, useInView } from "framer-motion";
import { HTMLAttributes, ReactNode, useRef } from "react";
import { twMerge } from "tailwind-merge";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  title: string;
}

const Section = ({ title, children, className }: SectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section ref={ref}>
      <motion.header
        className={twMerge(
          `py-10 text-center text-3xl font-bold uppercase text-accent-lime`,
          className,
        )}
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {title}
      </motion.header>
      {children}
    </section>
  );
};

export default Section;
