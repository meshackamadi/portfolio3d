import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function AnimatedText({ text }: { text: string }) {
  const ref = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.8', 'end 0.2'] })

  const chars = Array.from(text)
  return (
    <div ref={ref} className="relative w-full max-w-[560px]">
      <div aria-hidden className="visibility-hidden text-transparent">{text}</div>
      <div className="relative text-center">
        {chars.map((c, i) => {
          const start = i / chars.length
          const end = start + 0.2
          const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1])
          return (
            <motion.span key={i} style={{ opacity }} className="inline-block">
              {c}
            </motion.span>
          )
        })}
      </div>
    </div>
  )
}
