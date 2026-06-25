import React from 'react'
import Navbar from '../components/Navbar'
import FadeIn from '../components/FadeIn'
import Magnet from '../components/Magnet'
import ContactButton from '../components/ContactButton'

export default function HeroSection() {
  return (
    <section className="h-screen relative flex flex-col overflow-x-clip pt-[64px] md:pt-[80px]">
      <Navbar />

      <div className="w-full flex justify-center overflow-hidden mt-12 lg:-mt-5">
        <FadeIn delay={0.15} y={40} as="h1" className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]">
          Hi, i&apos;m Mesh
        </FadeIn>
      </div>

      <div className="absolute left-0 right-0 bottom-[12vh] lg:bottom-0 flex justify-between items-end pb-0 lg:pb-10 px-6 md:px-10">
        <FadeIn delay={0.35} y={20} className="max-w-[160px] sm:max-w-[220px] md:max-w-[260px]">
          <p className="text-offwhite font-light uppercase tracking-wide leading-snug text-[clamp(0.75rem,1.4vw,1.5rem)]">
            Data Scientist | Consumer Research Analyst | Web Frontend Developer | Python | R | React | Next Js
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>

      <FadeIn delay={0.6} y={30} className="absolute left-1/2 -translate-x-1/2 z-10 top-[35%] -translate-y-1/2 lg:top-auto lg:translate-y-0 lg:bottom-0">
        <Magnet padding={150} strength={3} className="w-[200px] sm:w-[220px] md:w-[260px] lg:w-[360px]">
          <img src="./meshbg.png" alt="portrait" className="w-full h-auto object-cover" loading="lazy"/>
        </Magnet>
      </FadeIn>
    </section>
  )
}
