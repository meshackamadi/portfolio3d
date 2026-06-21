import React, { useState } from 'react'
import FadeIn from '../components/FadeIn'
import ContactButton from '../components/ContactButton'

export default function ContactSection() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const to = 'hello@jack.example'
    const subject = encodeURIComponent('Contact from website')
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 bg-pagebg">
      <FadeIn delay={0} y={40} className="hero-heading font-black uppercase leading-none tracking-tight text-center text-[clamp(2rem,8vw,80px)]">
        Contact
      </FadeIn>

      <form onSubmit={handleSubmit} className="mt-8 w-full max-w-xl">
        <p className="text-offwhite mb-6 text-center">Have a project or just want to say hi? Fill the form and I'll get back to you.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <input id="contact-name" name="name" aria-label="Name" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className="p-3 rounded-lg bg-[#0b0b0b] border border-[rgba(215,226,234,0.06)] text-offwhite" />
          <input id="contact-email" name="email" aria-label="Email" required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email" className="p-3 rounded-lg bg-[#0b0b0b] border border-[rgba(215,226,234,0.06)] text-offwhite" />
        </div>
        <textarea id="contact-message" name="message" aria-label="Message" required value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Your message" className="w-full p-3 rounded-lg bg-[#0b0b0b] border border-[rgba(215,226,234,0.06)] text-offwhite h-40 mb-6" />

        <div className="text-center">
          <button type="submit" className="rounded-full text-white font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base" style={{ background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)', boxShadow: 'inset 4px 4px 12px #7721B1, 0px 4px 4px rgba(181,1,167,0.25)', outline: '2px solid white', outlineOffset: '-3px' }}>Send Message</button>
        </div>
      </form>
    </section>
  )
}
