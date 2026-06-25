import React, { useEffect, useRef, useState, memo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import FadeIn from '../components/FadeIn'

// Create a memoized heading component
const CatalogueHeading = memo(() => (
  <div className="w-full max-w-xl mx-auto px-4 sm:px-6 md:px-8 mb-12 sm:mb-16 md:mb-20">
    <FadeIn delay={0} y={40} className="hero-heading font-black uppercase leading-none tracking-tight text-center text-[clamp(3rem,12vw,90px)]">
      Catalogue
    </FadeIn>
  </div>
))

const IMAGES = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
  'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
  'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
  'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
  'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
  'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
  'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
  'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
  'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
  'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif'
]

function useScrollOffset(sectionRef: React.RefObject<HTMLElement | null>) {
  const [offset, setOffset] = useState(0)
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    function onScroll() {
      if (!el) return
      const sectionTop = el.getBoundingClientRect().top + window.scrollY
      const value = (window.scrollY - sectionTop + window.innerHeight) * 0.3
      setOffset(value)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [sectionRef])
  return offset
}

export default function MarqueeSection() {
  const ref = useRef<HTMLElement | null>(null)
  const offset = useScrollOffset(ref)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const row1 = IMAGES.slice(0, 11)
  const row2 = IMAGES.slice(11)

  const tileClass = 'w-[420px] h-[270px] rounded-2xl object-cover cursor-pointer hover:opacity-90 transition-opacity duration-300'

  // Close modal when pressing escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <section ref={ref} className="pt-24 sm:pt-32 md:pt-40 pb-10 bg-pagebg relative">
      <CatalogueHeading />
      <div className="flex flex-col gap-3">
        {/* Desktop Marquee */}
        <div className="hidden lg:flex flex-col gap-3">
          <div className="flex gap-3 will-change-transform transform" style={{ transform: `translateX(${offset - 200}px)` }}>
            {Array(3).fill(null).map((_, rep) => (
              <React.Fragment key={rep}>
                {row1.map((src, i) => (
                  <img key={`${rep}-${i}`} src={src} className={tileClass} loading="lazy" alt="marq" onClick={() => setSelectedImage(src)} />
                ))}
              </React.Fragment>
            ))}
          </div>

          <div className="flex gap-3 will-change-transform transform" style={{ transform: `translateX(${-(offset - 200)}px)` }}>
            {Array(3).fill(null).map((_, rep) => (
              <React.Fragment key={rep}>
                {row2.map((src, i) => (
                  <img key={`${rep}-r2-${i}`} src={src} className={tileClass} loading="lazy" alt="marq" onClick={() => setSelectedImage(src)} />
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Mobile Grid */}
        <div className="lg:hidden grid grid-cols-3 gap-2 px-3">
          {IMAGES.map((src, i) => (
            <img
              key={`mobile-${i}`}
              src={src}
              className="w-full h-auto aspect-[4/3] rounded-lg object-cover cursor-pointer hover:opacity-90 active:scale-95 transition-all duration-200"
              loading="lazy"
              alt="marq"
              onClick={() => setSelectedImage(src)}
            />
          ))}
        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-8"
          >
            <button
              className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors bg-black/50 p-2 rounded-full backdrop-blur-md"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              src={selectedImage}
              alt="Enlarged catalogue view"
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
