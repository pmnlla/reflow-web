import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center flex-1">
      <h1 className="text-8xl font-bold">Reflow</h1>
      <p className="text-2xl">Design your own PCB and learn reflow soldering!</p>
      <Button size={"xl"} className="mt-4">Get Started <ArrowRight className="w-4 h-4" /></Button>
    </div>
  );
}
