import React, { useEffect, useState } from 'react'
import FadeIn from './FadeIn'

function scrollToId(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Navbar() {
  const [active, setActive] = useState<string>('')

  useEffect(() => {
    const handleScroll = () => {
      const ids = ['catalogue', 'about', 'services', 'projects', 'contact']
      let currentActive = ''

      for (const id of ids) {
        const element = document.getElementById(id)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= window.innerHeight * 0.6 && rect.bottom >= window.innerHeight * 0.4) {
            currentActive = id
          }
        }
      }

      setActive(prev => prev !== currentActive ? currentActive : prev)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <FadeIn delay={0} y={-20} as="nav" className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-pagebg/60 h-[64px] md:h-[80px]">
      <div className="flex justify-between items-center px-6 md:px-10 h-full text-offwhite">
        <div />
        <div className="flex gap-6 md:gap-8 lg:gap-10 uppercase tracking-wider font-medium text-sm md:text-lg lg:text-[1.4rem]">
          <button onClick={() => scrollToId('catalogue')} className={`transition-all duration-200 ${active === 'catalogue' ? 'opacity-100 underline underline-offset-[6px] decoration-2' : 'opacity-70 hover:opacity-100'}`}>
            Catalogue
          </button>
          <button onClick={() => scrollToId('about')} className={`transition-all duration-200 ${active === 'about' ? 'opacity-100 underline underline-offset-[6px] decoration-2' : 'opacity-70 hover:opacity-100'}`}>
            About
          </button>
          <button onClick={() => scrollToId('services')} className={`transition-all duration-200 ${active === 'services' ? 'opacity-100 underline underline-offset-[6px] decoration-2' : 'opacity-70 hover:opacity-100'}`}>
            Services
          </button>
          <button onClick={() => scrollToId('projects')} className={`transition-all duration-200 ${active === 'projects' ? 'opacity-100 underline underline-offset-[6px] decoration-2' : 'opacity-70 hover:opacity-100'}`}>
            Projects
          </button>
          <button onClick={() => scrollToId('contact')} className={`transition-all duration-200 ${active === 'contact' ? 'opacity-100 underline underline-offset-[6px] decoration-2' : 'opacity-70 hover:opacity-100'}`}>
            Contact
          </button>
        </div>
      </div>
    </FadeIn>
  )
}
