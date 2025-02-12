"use client"

import { motion } from "framer-motion"

const Heart = ({ delay, size }: { delay: number; size: string }) => (
  <motion.div
    className={`absolute text-pink-300 ${size}`}
    initial={{ opacity: 0, y: "100%" }}
    animate={{
      opacity: [0, 1, 0],
      y: [0, -200],
      x: [0, Math.random() * 100 - 50],
    }}
    transition={{
      duration: 3,
      delay,
      repeat: Number.POSITIVE_INFINITY,
      repeatDelay: Math.random() * 3,
    }}
  >
    {["❤️", "💖", "💕", "💗", "💓"][Math.floor(Math.random() * 5)]}
  </motion.div>
)

export default function FloatingHearts() {
  return (
    <>
      {[...Array(15)].map((_, i) => (
        <Heart key={i} delay={i * 0.2} size={i % 2 === 0 ? "text-2xl" : "text-3xl"} />
      ))}
    </>
  )
}

