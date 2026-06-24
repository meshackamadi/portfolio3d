import React, { useRef, useState, useEffect, useCallback } from 'react'
import { motion, useScroll } from 'framer-motion'
import FadeIn from '../components/FadeIn'
import LiveProjectButton from '../components/LiveProjectButton'

const PROJECTS = [
  {
    number: '01',
    title: 'Blacc-Farms',
    tag: 'Client',
    images: [
      './FarmStats.png',
      './reasonForBlaccFarms.png',
      './hero2.png',
    ],
    demo: 'https://meshackamadi.github.io/blacc-farms/'
  },
  {
    number: '02',
    title: 'Single-Family Building Permit',
    tag: 'Personal',
    images: [
      './BeforeCrisis.png',
      './TotalPermits.png',
      './TotalStatePermits.png'
    ],
    demo: '/InteractiveSFBuildingPermit.html'
  }
  ,
  {
    number: '03',
    title: 'FiveThirtyEight Demo',
    tag: 'Personal',
    images: [
      './GunDeathsbyAge.png',
      './SeasonaltrendbyAge.png',
      './SeasonalTrends.png'
    ],
    demo: '/FiveThirtyEight.html'
  }
]

export default function ProjectsSection() {
  const ref = useRef<HTMLElement | null>(null)
  const { scrollYProgress } = useScroll({ target: ref })

  const [modalSrc, setModalSrc] = useState<string | null>(null)
  const [modalTitle, setModalTitle] = useState<string | null>(null)
  const [modalLoaded, setModalLoaded] = useState(false)
  const modalRef = useRef<HTMLDivElement | null>(null)
  const closeBtnRef = useRef<HTMLButtonElement | null>(null)
  const previouslyFocused = useRef<HTMLElement | null>(null)

  const openDemo = useCallback((src: string, title?: string) => {
    previouslyFocused.current = document.activeElement as HTMLElement | null
    setModalTitle(title || 'Demo')
    setModalLoaded(false)
    setModalSrc(src)
  }, [])

  const closeDemo = useCallback(() => {
    setModalSrc(null)
    setModalTitle(null)
    setModalLoaded(false)
    if (previouslyFocused.current) previouslyFocused.current.focus()
  }, [])

  useEffect(() => {
    if (!modalSrc) return
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') closeDemo()
      if (e.key === 'Tab') {
        const container = modalRef.current
        if (!container) return
        const focusable = Array.from(container.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'))
        if (focusable.length === 0) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [modalSrc, closeDemo])

  useEffect(() => { if (!modalSrc) return; const t = setTimeout(() => closeBtnRef.current?.focus(), 50); return () => clearTimeout(t) }, [modalSrc])

  return (
    <section id="projects" className="bg-pagebg rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 pt-10 pb-24" ref={ref}>
      <FadeIn delay={0} y={40} className="hero-heading font-black uppercase leading-none tracking-tight text-center text-[clamp(3rem,12vw,160px)]">Project</FadeIn>

      <div className="max-w-5xl mx-auto mt-8 space-y-8">
        {PROJECTS.map((p, idx) => {
          const targetScale = 1 - (PROJECTS.length - 1 - idx) * 0.03
          return (
            <div key={p.title} className="h-[85vh]">
              <div className={`sticky top-24 md:top-32`}>
                <motion.div style={{ scale: targetScale }} className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-offwhite bg-pagebg p-4 sm:p-6 md:p-8">
                  <div className="flex justify-between items-start">
                    <div className="font-black text-pagebg text-[clamp(3rem,10vw,140px)]">{p.number}</div>
                    <div className="flex-1 px-6">
                      <div className="text-sm uppercase tracking-widest opacity-70">{p.tag}</div>
                      <h3 className="font-medium text-[clamp(1rem,2.2vw,2.1rem)]">{p.title}</h3>
                    </div>
                    <div className="flex items-center gap-3">
                      <LiveProjectButton onClick={() => window.open(p.demo || '#', '_blank')}>Open</LiveProjectButton>
                      {p.demo && <LiveProjectButton onClick={() => openDemo(p.demo, p.title)}>View Demo</LiveProjectButton>}
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-5 gap-4">
                    <div className="col-span-2 flex flex-col gap-4">
                      <img src={p.images[0]} className="w-full rounded-xl sm:rounded-2xl md:rounded-3xl object-cover h-[clamp(130px,16vw,230px)]" alt={`${p.title} thumb`} />
                      <img src={p.images[1]} className="w-full rounded-xl sm:rounded-2xl md:rounded-3xl  object-cover h-[clamp(160px,22vw,340px)]" alt={`${p.title} thumb2`} />
                    </div>
                    <div className="col-span-3">
                      <img src={p.images[2]} className="w-full h-full rounded-xl sm:rounded-2xl md:rounded-3xl object-cover" alt={`${p.title} hero`} />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          )
        })}

        {modalSrc && (
          <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/60" onMouseDown={(e) => { if (e.target === e.currentTarget) closeDemo() }}>
            <div ref={modalRef} role="dialog" aria-modal="true" aria-labelledby="modal-title" className="w-[95%] md:w-[80%] lg:w-[70%] h-[80%] bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="flex items-center justify-between p-2 bg-[#07070a]">
                <h4 id="modal-title" className="text-white font-semibold px-3">{modalTitle}</h4>
                <div className="flex gap-2 px-3">
                  <a href={modalSrc} target="_blank" rel="noreferrer" className="text-sm text-white bg-transparent border border-white/20 px-3 py-1 rounded">Open in new tab</a>
                  <button ref={closeBtnRef} onClick={closeDemo} className="text-white px-3 py-1 rounded bg-[#222]/60">Close</button>
                </div>
              </div>
              <div className="relative w-full h-full bg-gray-50">
                {!modalLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="animate-spin h-10 w-10 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                    </svg>
                  </div>
                )}
                <iframe title={modalTitle || 'demo'} src={modalSrc || undefined} className="w-full h-full border-0" onLoad={() => setModalLoaded(true)} />
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  )
}
