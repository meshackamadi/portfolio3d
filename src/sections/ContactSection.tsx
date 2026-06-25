import React, { useState, memo, useRef, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import FadeIn from '../components/FadeIn'
import ContactButton from '../components/ContactButton'

// created memoized heading component
const ContactHeading = memo(() => (
  <div className="w-full max-w-xl">
    <FadeIn delay={0} y={40} className="hero-heading font-black uppercase leading-none tracking-tight text-center text-[clamp(2rem,8vw,80px)]">
      Contact
    </FadeIn>
  </div>
))

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<'success' | 'error' | null>(null)

  const SERVICE_ID = 'service_zkxp9ds'
  const TEMPLATE_ID = 'template_p7hjcfg'
  const PUBLIC_KEY = 'yiK2eqKTVPPRXmPpy'

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (!formRef.current) return

    setIsSubmitting(true)
    setStatus(null)

    try {
      const result = await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        {
          publicKey: PUBLIC_KEY,
        }
      )

      console.log('Email sent successfully:', result.text)
      setStatus('success')

      // Reset form
      setName('')
      setEmail('')
      setSubject('')
      setMessage('')
      formRef.current.reset()

      // Auto-hide success message after 5 seconds
      setTimeout(() => setStatus(null), 5000)

    } catch (error) {
      console.error('Failed to send email:', error)
      setStatus('error')
      setTimeout(() => setStatus(null), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-28 md:py-40 bg-pagebg mt-16">
      <ContactHeading />

      <form ref={formRef} onSubmit={handleSubmit} className="mt-8 w-full max-w-xl">
        <p className="text-offwhite mb-6 text-center">
          Have a project or just want to say hi? Fill the form and I'll get back to you.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <input
            id="contact-name"
            name="user_name"
            aria-label="Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="p-3 rounded-lg bg-[#0b0b0b] border border-[rgba(215,226,234,0.06)] text-offwhite"
            disabled={isSubmitting}
          />
          <input
            id="contact-email"
            name="user_email"
            aria-label="Email"
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            className="p-3 rounded-lg bg-[#0b0b0b] border border-[rgba(215,226,234,0.06)] text-offwhite"
            disabled={isSubmitting}
          />
        </div>

        <div className="mb-4">
          <input
            id="contact-subject"
            name="subject"
            aria-label="Subject"
            required
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Subject"
            className="w-full p-3 rounded-lg bg-[#0b0b0b] border border-[rgba(215,226,234,0.06)] text-offwhite"
            disabled={isSubmitting}
          />
        </div>

        <textarea
          id="contact-message"
          name="message"  // ← Important: matches EmailJS template
          aria-label="Message"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your message"
          className="w-full p-3 rounded-lg bg-[#0b0b0b] border border-[rgba(215,226,234,0.06)] text-offwhite h-40 mb-6"
          disabled={isSubmitting}
        />

        {/* Status Messages */}
        {status === 'success' && (
          <div className="mb-4 p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-center">
            ✅ Message sent successfully! I'll get back to you soon.
          </div>
        )}
        {status === 'error' && (
          <div className="mb-4 p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 text-center">
            ❌ Failed to send message. Please try again or email me directly.
          </div>
        )}

        <div className="text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-full text-white font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base transition-all duration-300 hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
            style={{
              background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
              boxShadow: 'inset 4px 4px 12px #7721B1, 0px 4px 4px rgba(181,1,167,0.25)',
              outline: '2px solid white',
              outlineOffset: '-3px'
            }}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                </svg>
                Sending...
              </span>
            ) : (
              'Send Message'
            )}
          </button>
        </div>
      </form>
    </section>
  )
}