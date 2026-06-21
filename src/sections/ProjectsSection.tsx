import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import FadeIn from '../components/FadeIn'
import LiveProjectButton from '../components/LiveProjectButton'

const PROJECTS = [
  {
    number: '01',
    title: 'Nextlevel Studio',
    tag: 'Client',
    images: [
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85'
    ]
  },
  {
    number: '02',
    title: 'Aura Brand Identity',
    tag: 'Personal',
    images: [
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85'
    ]
  },
  {
    number: '03',
    title: 'Solaris Digital',
    tag: 'Client',
    images: [
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85'
    ]
  }
]

export default function ProjectsSection() {
  const ref = React.useRef(null)
  const { scrollYProgress } = useScroll({ target: ref })

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
                    <LiveProjectButton />
                  </div>

                  <div className="mt-6 grid grid-cols-5 gap-4">
                    <div className="col-span-2 flex flex-col gap-4">
                      <img src={p.images[0]} className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-cover h-[clamp(130px,16vw,230px)]" alt="p1" />
                      <img src={p.images[1]} className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-cover h-[clamp(160px,22vw,340px)]" alt="p2" />
                    </div>
                    <div className="col-span-3">
                      <img src={p.images[2]} className="w-full h-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-cover" alt="p3" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
