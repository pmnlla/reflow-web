import { HeadingWrapper } from '@/components/heading-wrapper'
import { Button } from '@/components/ui/button'
import type { MDXComponents } from 'mdx/types'
import Link from 'next/link'


export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Button: ({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
      <Button {...props}>{children}</Button>
    ),
    h1: (props) => <HeadingWrapper level={1} {...props} />,
    h2: (props) => <HeadingWrapper level={2} {...props} />,
    h3: (props) => <HeadingWrapper level={3} {...props} />,
    h4: (props) => <HeadingWrapper level={4} {...props} />,
    h5: (props) => <HeadingWrapper level={5} {...props} />,
    h6: (props) => <HeadingWrapper level={6} {...props} />,
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
      <Link {...props} href={props.href || '#'} className="text-primary hover:text-primary/80">{children}</Link>
    ),
  }
}