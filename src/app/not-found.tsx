"use client"

import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Home } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import BGGradients from "@/components/bg-gradients"

export default function NotFound() {
  const router = useRouter()
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen">
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: [0, 0.71, 0.2, 1.01]
          }}
          className="text-4xl md:text-[10rem] font-bold bg-gradient-to-r from-pink-500 to-orange-500 text-transparent bg-clip-text"
        >
          404
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.3
          }}
          className="text-2xl md:text-4xl"
        >
          We couldn&apos;t find that page!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.6
          }}
          className="flex flex-row gap-4"
        >
          <Link href="/">
            <Button className="mt-4" size="lg">
              <Home /> Return Home
            </Button>
          </Link>
          <Button variant="outline" className="mt-4" size="lg" onClick={() => router.back()}>
            <ArrowLeft /> Go Back
          </Button>
        </motion.div>
      </div>
      <BGGradients />
    </>
  )
}
