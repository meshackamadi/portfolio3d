import React from 'react'

export default function LiveProjectButton({ children = 'Live Project' }: { children?: React.ReactNode }) {
  return (
    <button className="rounded-full border-2 border-offwhite text-offwhite font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base hover:bg-[rgba(215,226,234,0.1)]">
      {children}
    </button>
  )
}
