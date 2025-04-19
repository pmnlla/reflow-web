import { Button } from '@/components/ui/button'
import type { MDXComponents } from 'mdx/types'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { LinkIcon } from 'lucide-react'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Button: ({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
      <Button {...props}>{children}</Button>
    ),
    h1: ({ children, id, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
      <div className="group flex items-center gap-2">
        <h1 {...props} className={cn("text-4xl font-bold", props.className)} id={id}>{children}</h1>
        <a href={`#${id}`} className="text-primary hover:text-primary/80 hidden group-hover:block">
          <LinkIcon className="w-4 h-4" />
        </a>
      </div>
    ),
    h2: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h2 {...props}>{children}</h2>
    ),
    h3: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h3 {...props}>{children}</h3>
    ),
    table: ({ children, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
      <div className="my-6 w-full overflow-y-auto">
        <table className="w-full border-collapse border border-primary-700 rounded-md" {...props}>
          {children}
        </table>
      </div>
    ),
    thead: ({ children, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) => (
      <thead className="bg-zinc-900" {...props}>{children}</thead>
    ),
    tbody: ({ children, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) => (
      <tbody className="bg-zinc-900" {...props}>{children}</tbody>
    ),
    tr: ({ children, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
      <tr className="border-b border-gray-700" {...props}>{children}</tr>
    ),
    th: ({ children, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
      <th className="border border-gray-700 px-4 py-2 text-left font-medium text-gray-200" {...props}>{children}</th>
    ),
    td: ({ children, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
      <td className="border border-gray-700 px-4 py-2 text-gray-300" {...props}>{children}</td>
    ),
    a: ({ children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
      <Link {...props} className="text-primary hover:text-primary/80">{children}</Link>
    ),
  }
}