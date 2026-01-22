// app/components/AnimatedDiv.tsx
"use client";

import { motion } from "motion/react";

export default function AnimatedDiv({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}
