import React from 'react'
import FadeIn from '../components/FadeIn'

const SERVICES = [
  { title: '3D Modeling', desc: 'Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations.' },
  { title: 'Rendering', desc: 'High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life.' },
  { title: 'Motion Design', desc: 'Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences.' },
  { title: 'Branding', desc: 'Crafting cohesive visual identities -- from logos to full brand systems -- that communicate a clear and memorable presence.' },
  { title: 'Web Design', desc: 'Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience.' }
]

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <h2 className="text-[clamp(3rem,12vw,160px)] font-black text-pagebg uppercase text-center mb-16 sm:mb-20 md:mb-28 opacity-100">Services</h2>

      <div className="max-w-5xl mx-auto">
        {SERVICES.map((s, i) => (
          <FadeIn key={s.title} delay={i * 0.1} className="py-8 sm:py-10 md:py-12 border-t border-[rgba(12,12,12,0.05)]">
            <div className="flex gap-6 items-start">
              <div className="font-black text-pagebg text-[clamp(3rem,10vw,140px)]">{String(i + 1).padStart(2, '0')}</div>
              <div>
                <div className="font-medium uppercase text-pagebg opacity-100 text-[clamp(1rem,2.2vw,2.1rem)]">{s.title}</div>
                <p className="font-light text-[clamp(0.95rem,1.8vw,1.35rem)] leading-relaxed max-w-2xl text-pagebg opacity-95 mt-2">{s.desc}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
