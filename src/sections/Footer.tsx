import React from 'react'

export default function Footer() {
  return (
    <footer className="w-full bg-[#060606] text-offwhite py-8 mt-8">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row justify-between items-center gap-6">
        <div className="text-sm opacity-80 text-center sm:text-left">
          © {new Date().getFullYear()} Mesh — Web Developer & Data Scientist
        </div>

        <div className="flex flex-row flex-wrap justify-center items-center text-sm opacity-80 gap-2 sm:gap-4">
          <span>meshackamadi@gmail.com</span>
          <span className="hidden sm:inline">|</span>
          <span>+234(0)8167861296</span>
        </div>

        <div className="flex gap-4 text-sm opacity-80">
          <a href="#projects" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }} className="hover:underline">Projects</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }} className="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  )
}
