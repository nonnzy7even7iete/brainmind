"use client";
import { motion } from "framer-motion";

export default function Counter({ value }) {
  return (
    <motion.h3
      className="text-2xl font-bold"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {value}
    </motion.h3>
  );
}
