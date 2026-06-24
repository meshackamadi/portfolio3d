import React from 'react'

export default function Footer() {
  return (
    <footer className="w-full bg-[#060606] text-offwhite py-8 mt-8">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="text-sm opacity-80">© {new Date().getFullYear()} Mesh — Web Developer & Data Scientist</div>
        <div className="flex gap-4 text-sm opacity-80">
          <a href="#projects" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }} className="hover:underline">Projects</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }} className="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  )
}
