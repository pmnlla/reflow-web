"use client"
import Slack from "@/components/slack"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { appConfig } from "@/app/config"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"
import BGGradients from "@/components/bg-gradients"

const cards = [
  {
    image: "/assets/kicad.png",
    title: "Design a PCB",
    description: (
      <>
        Use KiCad <span className="text-gray-500 text-sm">(or your favorite EDA)</span> to design a PCB using SMD
        components
      </>
    ),
  },
  {
    image: "/assets/hotplate.png",
    title: "Get a Hotplate",
    description: <>Get a hotplate, solder paste, and a testing PCB to practice on</>,
  },
  {
    image: "https://assets.hackclub.com/hcb-light.svg",
    title: "Get a Grant",
    description: <>Get a grant to order the PCB you designed, and parts to reflow solder on it!</>,
  },
]
const faq = [
  {
    question: "What is the timeline?",
    answer: "Undecided",
  },
  {
    question: "What are the requirements to participate?",
    answer: "You must be a high school student or under to participate.",
  },
  {
    question: "What is the cost?",
    answer: "This is completely free! We will cover the cost of the PCB, parts, and tools.",
  }
]
const rules = [
  "You must document your progress and post scraps in the appropriate Slack channels",
  "At least 80% of the components in your design should require SMD soldering",
  "You must NOT rely on external assembly serivces",
  "Your design should pass automated review: see docs",
  "Your design must be original",
]
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <section id="hero">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-pink-500 to-orange-500 text-transparent bg-clip-text mb-6"
            >
              Reflow
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl mb-10 max-w-2xl"
            >
              Design your own PCB and learn reflow soldering!
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 w-full justify-center"
            >
              <Link href="/docs/getting-started">
                <Button
                  size="xl"
                  className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white px-8 py-6 rounded-xl w-full"
                >
                  Get Started <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href={appConfig.slackChannel} target="_blank">
                <Button size="xl" variant="outline" className="border-2 px-8 py-6 rounded-xl w-full">
                  <Slack className="w-5 h-5 mr-2" />
                  Join Slack
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      <section id="cards">
        <div className="container mx-auto px-4 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <motion.div 
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-orange-500 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <Card className="bg-white dark:bg-zinc-900 relative overflow-hidden h-full rounded-xl gap-0">
                  <div className="relative h-48 w-full">
                    <Image src={card.image || "/placeholder.svg"} alt={card.title} fill className="object-contain rounded-md" />
                  </div>
                  <CardHeader className="pt-6">
                    <CardTitle className="text-2xl font-bold text-center text-black dark:text-white">{card.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center text-lg text-zinc-900 dark:text-zinc-300">{card.description}</CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-orange-500 text-transparent bg-clip-text mb-6">
              What is Reflow?
            </h2>
            <p className="text-lg md:text-xl mb-10">
              Reflow is a limited-time You Ship, We Ship (YSWS) where you first design your own PCB using SMD components (Surface Mount Devices). Once your design is complete, you receive a PCB, parts, and tools to practice reflow soldering. Afterward, you get a grant to have your design professionally fabricated and another grant to purchase the necessary components!
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-orange-500 text-transparent bg-clip-text mb-6">
              Requirements
            </h2>
            <p className="text-lg md:text-xl mb-10">
              Here are some rules your design should follow!
            </p>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              {rules.map((rule) => (
                <motion.li 
                  key={rule}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {rule}
                </motion.li>
              ))}
            </motion.div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-orange-500 text-transparent bg-clip-text mb-6">
              FAQ
            </h2>
            <p className="text-lg md:text-xl mb-10">
              If you have any other questions, please ask in the <Link href={appConfig.slackChannel} target="_blank" className="text-accent">#reflow channel!</Link>
            </p>
            <Accordion type="single" collapsible className="w-full">
              {faq.map((item, index) => (
                <motion.div
                  key={item.question}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <AccordionItem value={item.question}>
                    <AccordionTrigger className="border-b-2 text-lg rounded-none">{item.question}</AccordionTrigger>
                    <AccordionContent className="text-lg pt-4 text-left">{item.answer}</AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>
      <BGGradients />
    </div>
  )
}
