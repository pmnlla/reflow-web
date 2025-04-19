import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/sidebar"
import Navbar from "@/components/navbar"

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar  />
      <div className="w-full">
        <Navbar docs={true} />
        <div className="prose-invert w-full p-6">
          {children}
        </div>
      </div>
    </SidebarProvider>
  )
}
