"use client"

import { useEffect, useCallback, useRef } from 'react'
import { useSectionProgress } from '@/contexts/section-progress'

export function SectionTracker() {
  const { sections, updateSectionProgress } = useSectionProgress()
  const lastProgressRef = useRef<Record<string, number>>({})
  const rafRef = useRef<number>(0)
  const isUpdatingRef = useRef(false)

  const calculateProgress = useCallback((element: HTMLElement, nextElement: HTMLElement | null) => {
    const scrollPosition = window.scrollY + window.innerHeight / 3
    const elementTop = element.offsetTop
    const nextElementTop = nextElement?.offsetTop || document.documentElement.scrollHeight

    if (scrollPosition >= document.documentElement.scrollHeight - window.innerHeight) {
      return 100
    }

    if (scrollPosition < elementTop) {
      return 0
    }

    if (nextElement && scrollPosition >= nextElementTop) {
      return 100
    }

    const totalDistance = nextElementTop - elementTop
    const currentDistance = scrollPosition - elementTop

    return Math.min(100, Math.max(0, (currentDistance / totalDistance) * 100))
  }, [])

  const updateProgress = useCallback(() => {
    if (isUpdatingRef.current) return
    isUpdatingRef.current = true

    sections.forEach((section, index) => {
      const element = document.getElementById(section.id)
      if (!element) return

      const nextSection = sections[index + 1]
      const nextElement = nextSection ? document.getElementById(nextSection.id) : null

      const newProgress = calculateProgress(element, nextElement)
      const lastProgress = lastProgressRef.current[section.id] || 0

      // only update if progress has changed a lot, saves on re-renders
      if (Math.abs(newProgress - lastProgress) >= 0.5) {
        lastProgressRef.current[section.id] = newProgress
        updateSectionProgress(section.id, newProgress)
      }
    })

    isUpdatingRef.current = false
  }, [sections, calculateProgress, updateSectionProgress])

  const handleScroll = useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current)
    }
    rafRef.current = requestAnimationFrame(updateProgress)
  }, [updateProgress])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })
    handleScroll() // initial calculation

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [handleScroll])

  return null
} 