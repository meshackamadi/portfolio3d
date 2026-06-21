import React, { useRef, useEffect } from 'react'

type Props = React.PropsWithChildren<{
  padding?: number
  strength?: number
  activeTransition?: string
  inactiveTransition?: string
  className?: string
}>

export default function Magnet({ children, padding = 150, strength = 3, activeTransition = 'transform 0.3s ease-out', inactiveTransition = 'transform 0.6s ease-in-out', className = '' }: Props) {
  const ref = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return

    let active = false

    function onMove(e: MouseEvent) {
      const rect = el.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = e.clientX - cx
      const dy = e.clientY - cy
      const distX = Math.abs(e.clientX - Math.max(rect.left - padding, Math.min(e.clientX, rect.right + padding)))

      const within = e.clientX >= rect.left - padding && e.clientX <= rect.right + padding && e.clientY >= rect.top - padding && e.clientY <= rect.bottom + padding

      if (within) {
        active = true
        el.style.transition = activeTransition
        el.style.transform = `translate3d(${dx / strength}px, ${dy / strength}px, 0)`
      } else if (active) {
        active = false
        el.style.transition = inactiveTransition
        el.style.transform = `translate3d(0px, 0px, 0)`
      }
    }

    function onLeave() {
      if (!el) return
      el.style.transition = inactiveTransition
      el.style.transform = `translate3d(0px,0px,0)`
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseleave', onLeave)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseleave', onLeave)
    }
  }, [padding, strength, activeTransition, inactiveTransition])

  return (
    <div ref={ref} className={className} style={{ willChange: 'transform' }}>
      {children}
    </div>
  )
}
