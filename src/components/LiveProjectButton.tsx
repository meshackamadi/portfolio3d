import React from 'react'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { children?: React.ReactNode }

export default function LiveProjectButton({ children = 'Live Project', className = '', ...props }: Props) {
  const base = 'rounded-full border-2 border-offwhite text-offwhite font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base hover:bg-[rgba(215,226,234,0.1)]'
  return (
    <button {...props} className={`${base} ${className}`.trim()}>
      {children}
    </button>
  )
}
