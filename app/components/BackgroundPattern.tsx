"use client"

import { motion } from "framer-motion"

const PatternElement = ({ emoji, x, y, delay }: { emoji: string; x: number; y: number; delay: number }) => (
  <motion.div
    className="absolute text-2xl"
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 0.5,
      delay,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "reverse",
      repeatDelay: Math.random() * 5,
    }}
    style={{
      top: `${y}%`,
      left: `${x}%`,
      transform: `rotate(${Math.random() * 360}deg)`,
    }}
  >
    {emoji}
  </motion.div>
)

export default function BackgroundPattern() {
  const elements = ["❤️", "💖", "💕", "💗", "💓", "🌹", "🎀", "✨", "💌", "💝"]

  return (
    <div className="absolute inset-0 z-0 opacity-20">
      {[...Array(100)].map((_, i) => (
        <PatternElement
          key={i}
          emoji={elements[Math.floor(Math.random() * elements.length)]}
          x={Math.random() * 100}
          y={Math.random() * 100}
          delay={i * 0.02}
        />
      ))}
    </div>
  )
}

