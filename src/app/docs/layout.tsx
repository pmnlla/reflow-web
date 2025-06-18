"use client"

import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/sidebar"
import Navbar from "@/components/navbar"
import BGGradients from "@/components/bg-gradients"
import { SectionProgressProvider } from "@/contexts/section-progress"
import { SectionTracker } from "@/components/section-tracker"

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <SectionProgressProvider>
      <SidebarProvider>
        <AppSidebar />
        <div className="w-full">
          <Navbar docs={true} readProgress={true} />
          <div className="prose-invert w-full p-6" id="docs-content">
            {children}
          </div>
        </div>
        <BGGradients />
        <SectionTracker />
      </SidebarProvider>
    </SectionProgressProvider>
  )
}
