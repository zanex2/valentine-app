"use client"

import ValentineCard from "./components/ValentineCard"
import BackgroundPattern from "./components/BackgroundPattern"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-pink-100 relative overflow-hidden">
      <BackgroundPattern />
      <ValentineCard />
    </main>
  )
}

