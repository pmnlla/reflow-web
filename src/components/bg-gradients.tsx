"use client";

import { motion } from "framer-motion"

export default function BGGradients() {
  return (
    <>
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="fixed -top-40 -right-40 w-96 h-96 bg-pink-500 opacity-20 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
        className="fixed -bottom-40 -left-40 w-96 h-96 bg-orange-500 opacity-20 rounded-full blur-3xl pointer-events-none"
      />
    </>)
}

