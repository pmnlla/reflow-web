"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { docsSidebar } from "@/app/config"
import Link from "next/link"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"

export function AppSidebar() {
  const activeItem = usePathname()
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SidebarGroupLabel className="w-full flex justify-center py-6">
              <motion.h1
                className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-orange-500 text-transparent bg-clip-text"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link href="/">
                  Reflow
                </Link>
              </motion.h1>
            </SidebarGroupLabel>
          </motion.div>
          <SidebarGroupContent>
            <SidebarMenu>
              {docsSidebar.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <SidebarMenuItem>
                    <Link href={item.url} className="flex flex-row items-center gap-2">
                      <SidebarMenuButton asChild className="py-6 group">
                        <motion.span
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            <item.icon className="scale-120" />
                          </motion.div>
                          <span className="text-lg relative">
                            {item.title}
                            <motion.span
                              className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-orange-500 group-hover:w-full transition-all duration-300"
                              whileHover={{ width: "100%" }}
                              animate={{ width: activeItem === item.url ? "100%" : "0%" }}
                            />
                          </span>
                        </motion.span>
                      </SidebarMenuButton>
                    </Link>
                  </SidebarMenuItem>
                </motion.div>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
