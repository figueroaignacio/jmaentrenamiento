import { motion } from "framer-motion";
import React from "react";

interface FadeInProps {
  children: React.ReactNode;
}

export const FadeIn = ({ children }: FadeInProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay: 0.1,
      }}
    >
      {children}
    </motion.div>
  );
};
