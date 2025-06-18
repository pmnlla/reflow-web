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
import { useEffect, useState, memo, useCallback, useMemo } from "react"
import { useSectionProgress } from "@/contexts/section-progress"

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

const ProgressCircle = memo(function ProgressCircle({ progress }: { progress: number }) {
  const size = 16
  const strokeWidth = 2
  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const offset = circumference - (progress / 100) * circumference

  return (
    <div className="relative w-4 h-4">
      <svg className="w-full h-full" viewBox={`0 0 ${size} ${size}`}>
        <circle
          className="text-gray-700"
          strokeWidth={strokeWidth}
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <circle
          className="text-primary"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
          style={{
            transition: 'stroke-dashoffset 0.3s ease-in-out',
          }}
        />
      </svg>
    </div>
  )
})

const SectionItem = memo(function SectionItem({ 
  heading, 
  section, 
  onClick 
}: { 
  heading: TOCItem
  section?: { id: string; progress: number }
  onClick: (id: string) => void 
}) {
  return (
    <motion.button
      onClick={() => onClick(heading.id)}
      className={`flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-200 my-2 ${
        heading.level === 1 ? 'font-semibold' : ''
      }`}
      style={{ marginLeft: `${(heading.level - 2) * 0.75}rem` }}
      whileHover={{ x: 5 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <ProgressCircle progress={section?.progress || 0} />
      {heading.text}
    </motion.button>
  )
})

export function AppSidebar() {
  const activeItem = usePathname()
  const [headings, setHeadings] = useState<TOCItem[]>([])
  const { sections } = useSectionProgress()

  // update headings when path changes (nextjs)
  useEffect(() => {
    const updateHeadings = () => {
      const contentDiv = document.getElementById('docs-content')
      if (!contentDiv) return
      const headingElements = Array.from(contentDiv.querySelectorAll('h1, h2, h3, h4, h5, h6'))
      const items: TOCItem[] = headingElements.map((heading) => {
        const level = parseInt(heading.tagName.substring(1))
        const text = heading.textContent || ''
        const id = heading.id || text.toLowerCase().replace(/\s+/g, '-')
        
        if (!heading.id) {
          heading.id = id
        }

        return {
          id,
          text,
          level,
        }
      })

      setHeadings(items)
    }

    updateHeadings()

    const observer = new MutationObserver(updateHeadings)
    observer.observe(document.body, {
      childList: true,
      subtree: true
    })

    return () => observer.disconnect()
  }, [activeItem])

  const handleClick = useCallback((id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const navbarHeight = 64
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight - 24

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }, [])

  const sectionsMap = useMemo(() => {
    return sections.reduce((acc, section) => {
      acc[section.id] = section
      return acc
    }, {} as Record<string, { id: string; progress: number }>)
  }, [sections])

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
                    {activeItem === item.url && headings.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="ml-8 mt-2"
                      >
                        <div className="border-l-2 border-gray-700 pl-4">
                          {headings.map((heading) => (
                            <SectionItem
                              key={heading.id}
                              heading={heading}
                              section={sectionsMap[heading.id]}
                              onClick={handleClick}
                            />
                          ))}
                        </div>
                      </motion.div>
                    )}
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
