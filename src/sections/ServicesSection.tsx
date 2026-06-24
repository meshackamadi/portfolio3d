import React from 'react'
import FadeIn from '../components/FadeIn'

const SERVICES = [
  { title: 'Web Development Services', desc: 'Build responsive, SEO-friendly & high-performance websites and web applications using modern technologies and best practices.' },
  { title: 'Data Science & Analytics Services', desc: 'Analyze data and provide actionable insights to drive business decisions and improve performance.' },
  { title: 'Consumer Research Services', desc: 'Conduct/Analyze consumer behavior, preferences, and market trends to inform business strategies.' },
  { title: 'Data Analysis & Excel Services', desc: 'Build automated reports, dashboards, and templates to streamline data visualization and reporting.' },
  { title: 'Sales Operations & Administration Services', desc: 'Streamline sales processes, manage documentation, ensure operational compliance, Track inventory and manage PPSK distribution.' }
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
