"use client";

import { HTMLAttributes, ReactNode } from "react";
import { motion } from "framer-motion";

const ButtonTransition = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: HTMLAttributes<HTMLDivElement>["className"];
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.9 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ButtonTransition;
