import React from 'react'
import FadeIn from '../components/FadeIn'
import AnimatedText from '../components/AnimatedText'
import ContactButton from '../components/ContactButton'

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 relative">
      <FadeIn delay={0} y={40} className="hero-heading font-black uppercase leading-none tracking-tight text-center text-[clamp(3rem,12vw,160px)]">
        About me
      </FadeIn>

      <FadeIn delay={0.1} x={-80} className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%]">
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png" alt="moon" className="w-[120px] sm:w-[160px] md:w-[210px]" />
      </FadeIn>

      <FadeIn delay={0.15} x={80} className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%]">
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png" alt="lego" className="w-[120px] sm:w-[160px] md:w-[210px]" />
      </FadeIn>

      <FadeIn delay={0.25} x={-80} className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%]">
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png" alt="obj" className="w-[100px] sm:w-[140px] md:w-[180px]" />
      </FadeIn>

      <FadeIn delay={0.3} x={80} className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%]">
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png" alt="group" className="w-[130px] sm:w-[170px] md:w-[220px]" />
      </FadeIn>

      <div className="mt-8 flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
        <div className="max-w-[820px] text-center">
          <FadeIn delay={0.05} y={20} className="text-offwhite font-medium leading-relaxed text-[clamp(0.85rem,1.6vw,1.2em)]">
            <p className="mb-6">Data Scientist + Junior Developer. I analyze data — and build seamless web experience.</p>
            <p className="mb-6">Background: Mathematics & Statistics degree · Google Data Analytics · Web Programming Certificate (in progress).</p>
            <p className="mb-6">Data skills: Python, SQL, R, statistics, visualization, and reporting systems.</p>
            <p className="mb-6">Dev skills: JavaScript, HTML/CSS, React, Git, and full-stack web applications.</p>
            <p className="mb-6">Recent work: Helped improve global employer data collection. Built a time-tracking web app and a Theory of Change impact measurement tool.</p>
          </FadeIn>
        </div>

        <div className="mt-16 sm:mt-20 md:mt-24">
          <ContactButton />
        </div>
      </div>
    </section>
  )
}
