"use client"
import { useSectionProgress } from '@/contexts/section-progress'
import { useEffect, useRef, memo } from 'react'
import { cn } from '@/lib/utils'
import { LinkIcon } from 'lucide-react'

export const HeadingWrapper = memo(function HeadingWrapper({ 
  level, 
  children, 
  id, 
  ...props 
}: { 
  level: 1 | 2 | 3 | 4 | 5 | 6 
  children: React.ReactNode 
  id?: string 
} & React.HTMLAttributes<HTMLHeadingElement>) {
  const { registerSection } = useSectionProgress()
  const ref = useRef<HTMLDivElement>(null)
  const registeredRef = useRef(false)

  useEffect(() => {
    if (id && ref.current && !registeredRef.current) {
      registerSection(id, children?.toString() || '')
      registeredRef.current = true
    }
  }, [id, children, registerSection])

  const textSize = {
    1: 'text-4xl',
    2: 'text-3xl',
    3: 'text-2xl',
    4: 'text-xl',
    5: 'text-lg',
    6: 'text-base'
  }[level]

  return (
    <div ref={ref} className="group flex items-center gap-2">
      {level === 1 && <h1 {...props} className={cn(`${textSize} font-bold`, props.className)} id={id}>{children}</h1>}
      {level === 2 && <h2 {...props} className={cn(`${textSize} font-bold`, props.className)} id={id}>{children}</h2>}
      {level === 3 && <h3 {...props} className={cn(`${textSize} font-bold`, props.className)} id={id}>{children}</h3>}
      {level === 4 && <h4 {...props} className={cn(`${textSize} font-bold`, props.className)} id={id}>{children}</h4>}
      {level === 5 && <h5 {...props} className={cn(`${textSize} font-bold`, props.className)} id={id}>{children}</h5>}
      {level === 6 && <h6 {...props} className={cn(`${textSize} font-bold`, props.className)} id={id}>{children}</h6>}
      <a href={`#${id}`} className="text-primary hover:text-primary/80 hidden group-hover:block">
        <LinkIcon className="w-4 h-4" />
      </a>
    </div>
  )
})