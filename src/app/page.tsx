import Slack from "@/components/slack"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

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
    image: "/assets/hotplate.jpg",
    title: "Get a Hotplate",
    description: <>Get a hotplate, solder paste, and a testing PCB to practice on</>,
  },
  {
    image: "https://assets.hackclub.com/hcb-light.svg",
    title: "Get a Grant",
    description: <>Get a grant to order the PCB you designed, and parts to reflow solder on it!</>,
  },
]
export const faq = [
  {
    question: "What is Reflow?",
    answer: "Reflow is a limited-time You Ship, We Ship (YSWS) event, where you can learn how to design PCBs using SMD (Surface Mount Devices) and we ship you the tools and parts to do it!",
  },
  
]

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <section id="hero">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-pink-500 to-orange-500 text-transparent bg-clip-text mb-6">
              Reflow
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-2xl">Design your own PCB and learn reflow soldering!</p>
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
              <Button
                size="xl"
                className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white px-8 py-6 rounded-xl"
              >
                Get Started <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Link href="https://hackclub.slack.com/archives/C08NDN4JA3G" target="_blank">
                <Button size="xl" variant="outline" className="border-2 px-8 py-6 rounded-xl w-full">
                  <Slack className="w-5 h-5 mr-2" />
                  Join Slack
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id="cards">
        <div className="container mx-auto px-4 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cards.map((card) => (
              <div className="relative group" key={card.title}>
                {/* cool gradient border */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-orange-500 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <Card
                  key={card.title}
                  className="bg-white dark:bg-zinc-900 relative overflow-hidden h-full pt-0 rounded-xl gap-0"
                >
                  <div className="relative h-48 w-full">
                    <Image src={card.image || "/placeholder.svg"} alt={card.title} fill className="object-cover" />
                  </div>
                  <CardHeader className="pt-6">
                    <CardTitle className="text-2xl font-bold text-center text-black dark:text-white">{card.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center text-zinc-900 dark:text-zinc-300">{card.description}</CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-orange-500 text-transparent bg-clip-text mb-6">
              What is Reflow?
            </h2>
            <p className="text-lg md:text-xl mb-10">
              Reflow is a limited-time You Ship, We Ship (YSWS) event where you first design your own PCB using SMD components (Surface Mount Devices). Once your design is complete, you receive a PCB, parts, and tools to practice reflow soldering. Afterward, you get a grant to have your design professionally fabricated and another grant to purchase the necessary components!
            </p>
          </div>
          
        </div>
      </section>

      {/* cool background thingies */}
      <div className="fixed -top-40 -right-40 w-96 h-96 bg-pink-500 opacity-20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="fixed -bottom-40 -left-40 w-96 h-96 bg-orange-500 opacity-20 rounded-full blur-3xl pointer-events-none"></div>
    </div>
  )
}
