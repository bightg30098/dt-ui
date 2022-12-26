import clsx from 'clsx'

import type { ButtonHTMLAttributes, ReactNode } from 'react'

const variants = {
  unstyled: '',
  primary:
    'inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
  secondary:
    'inline-flex items-center rounded-md border border-transparent bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
} as const

type Props = {
  children?: ReactNode
  className?: string
  variant?: keyof typeof variants
} & ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({ children, className, variant = 'primary', ...props }: Props) {
  return (
    <button type="button" className={clsx(variants[variant] ?? variants.primary, className)} {...props}>
      {children}
    </button>
  )
}
