import React, { useEffect, useState } from 'react'
import FadeIn from './FadeIn'

function scrollToId(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Navbar() {
  const [active, setActive] = useState<string>('')

  useEffect(() => {
    const ids = ['about', 'services', 'projects', 'contact']
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[]
    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        let bestId = active
        let bestRatio = 0
        for (const e of entries) {
          if (e.intersectionRatio > bestRatio) {
            bestRatio = e.intersectionRatio
            bestId = e.target.id
          }
        }
        if (bestId !== active) setActive(bestId)
      },
      { threshold: [0.1, 0.25, 0.5, 0.75, 1], rootMargin: '-40% 0px -55% 0px' }
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <FadeIn delay={0} y={-20} as="nav" className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-pagebg/60 h-[64px] md:h-[80px]">
      <div className="flex justify-between items-center px-6 md:px-10 h-full text-offwhite">
        <div />
        <div className="flex gap-6 md:gap-8 lg:gap-10 uppercase tracking-wider font-medium text-sm md:text-lg lg:text-[1.4rem]">
          <button onClick={() => scrollToId('about')} className={`transition-all duration-200 ${active === 'about' ? 'opacity-100 border-b-2 border-offwhite pb-1' : 'opacity-70'}`}>
            About
          </button>
          <button onClick={() => scrollToId('services')} className={`transition-all duration-200 ${active === 'services' ? 'opacity-100 border-b-2 border-offwhite pb-1' : 'opacity-70'}`}>
            Services
          </button>
          <button onClick={() => scrollToId('projects')} className={`transition-all duration-200 ${active === 'projects' ? 'opacity-100 border-b-2 border-offwhite pb-1' : 'opacity-70'}`}>
            Projects
          </button>
          <button onClick={() => scrollToId('contact')} className={`transition-all duration-200 ${active === 'contact' ? 'opacity-100 border-b-2 border-offwhite pb-1' : 'opacity-70'}`}>
            Contact
          </button>
        </div>
      </div>
    </FadeIn>
  )
}
