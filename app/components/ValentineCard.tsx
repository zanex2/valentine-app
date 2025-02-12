"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import FloatingHearts from "./FloatingHearts"

const steps = [
  {
    title: "Hey there, gushi bushi! 😊",
    content: "I've got something special to tell you...",
    image: "/image.png",
  },
  {
    title: "You make my heart skip a beat! 💓",
    content: "Every time I see you, I can't help but smile.",
    image: "/image (1).png",
  },
  {
    title: "We're perfect together! 👫",
    content: "Like peanut butter and jelly, or Hello Kitty and bows!",
    image: "/image (2).png",
  },
  {
    title: "On this special day",
    content: "February 14th, I wanted to ask you, Would you be my valentine?",
    image: "/image (6).png",
  },
]

export default function ValentineCard() {
  const [step, setStep] = useState(0)
  const [accepted, setAccepted] = useState(false)

  const nextStep = () => {
    if (step < steps.length - 1) {
      setStep(step + 1)
    }
  }

  return (
    <motion.div
      initial={{ scale: 0, rotate: -10 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 260, damping: 20 }}
      className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center relative overflow-hidden"
    >
      <FloatingHearts />

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          <motion.h1
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
            className="text-3xl font-bold text-pink-500 mb-4"
          >
            {steps[step].title}
          </motion.h1>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mb-6">
            <Image
              src={steps[step].image || "/placeholder.svg"}
              alt={`Step ${step + 1} image`}
              width={step === steps.length - 1 ? 200 : 150}
              height={step === steps.length - 1 ? 200 : 150}
              className="mx-auto"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-lg text-gray-700 mb-6"
          >
            {steps[step].content}
          </motion.p>

          {step < steps.length - 1 ? (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextStep}
              className="bg-pink-500 text-white font-bold py-2 px-4 rounded-full text-lg shadow-md"
            >
              Next
            </motion.button>
          ) : !accepted ? (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setAccepted(true)}
              className="bg-pink-500 text-white font-bold py-2 px-4 rounded-full text-lg shadow-md"
            >
              Yes, I'd love to!
            </motion.button>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <p className="text-2xl font-bold text-pink-500 mb-4">Yay! You're my Valentine! ❤️</p>
              <motion.div
                animate={{ rotate: [0, 10, -10, 10, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1 }}
              >
                <Image
                  src="/image (7).png"
                  alt="Celebrating Hello Kitty"
                  width={150}
                  height={150}
                  className="mx-auto"
                />
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  )
}

