"use client"

interface TestingRibbonProps {
  text?: string
  color?: string
}

export function TestingRibbon({ text = "WIP!!!!!", color = "#ff8a80" }: TestingRibbonProps) {
  return (
    <div className="fixed top-0 right-0 overflow-hidden w-[150px] h-[150px] z-[999] pointer-events-none">
      <div
        className="absolute top-[30px] right-[-50px] rotate-45 w-[200px] py-1 text-center text-[14px] font-bold shadow-md border border-opacity-10"
        style={{
          backgroundColor: color,
          color: "#000000",
        }}
      >
        {text}
      </div>
    </div>
  )
}
