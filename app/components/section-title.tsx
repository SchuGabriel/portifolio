"use client";

import { motion } from "framer-motion";

export function SectionTitle({
  firstTitle,
  secondTitle,
}: {
  firstTitle: string;
  secondTitle: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
      className="mb-16"
    >
      <div className="flex items-center justify-center text-4xl lg:text-5xl mb-4 text-center">
        <h2>
          {firstTitle} <span className="gradient-text">{secondTitle}</span>
        </h2>
      </div>

      <div className="w-20 h-1 bg-linear-to-r from-primary to-secondary mx-auto" />
    </motion.div>
  );
}
