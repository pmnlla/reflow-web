"use client"

import { createContext, useContext, useState, ReactNode } from 'react'

interface Section {
  id: string
  title: string
  progress: number
}

interface SectionProgressContextType {
  sections: Section[]
  registerSection: (id: string, title: string) => void
  updateSectionProgress: (id: string, progress: number) => void
}

const SectionProgressContext = createContext<SectionProgressContextType | undefined>(undefined)

export function SectionProgressProvider({ children }: { children: ReactNode }) {
  const [sections, setSections] = useState<Section[]>([])

  const registerSection = (id: string, title: string) => {
    setSections(prev => {
      if (prev.some(section => section.id === id)) return prev
      return [...prev, { id, title, progress: 0 }]
    })
  }

  const updateSectionProgress = (id: string, progress: number) => {
    setSections(prev => 
      prev.map(section => 
        section.id === id ? { ...section, progress } : section
      )
    )
  }

  return (
    <SectionProgressContext.Provider value={{ sections, registerSection, updateSectionProgress }}>
      {children}
    </SectionProgressContext.Provider>
  )
}

export function useSectionProgress() {
  const context = useContext(SectionProgressContext)
  if (context === undefined) {
    throw new Error('useSectionProgress must be used within a SectionProgressProvider')
  }
  return context
} 