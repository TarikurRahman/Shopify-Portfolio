'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)

    if (pathname === '/') {
      const sections = ['home', 'skills', 'services', 'projects', 'testimonials']
      const observers = sections.map((id) => {
        const el = document.getElementById(id)
        if (!el) return null

        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveSection(id)
            }
          },
          { threshold: 0.2, rootMargin: '-20% 0px -20% 0px' }
        )
        observer.observe(el)
        return { observer, el }
      })

      return () => {
        window.removeEventListener('scroll', handleScroll)
        observers.forEach((obs) => {
          if (obs) obs.observer.unobserve(obs.el)
        })
      }
    }

    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname])

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    setIsOpen(false)
    
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect border-b' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 group cursor-pointer"
          >
            <div className="relative px-3.5 py-1 rounded-lg glass-effect flex items-center justify-center border border-primary/30 group-hover:border-primary/60 smooth-transition">
              <span className="text-lg font-extrabold tracking-widest gradient-text font-mono">TARIKUR</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {['home', 'skills', 'services', 'projects', 'testimonials'].map((item) => {
              const targetPath = item === 'home' ? '/' : `/#${item}`
              return (
                <Link
                  key={item}
                  href={targetPath}
                  onClick={(e) => {
                    if (pathname === '/') {
                      e.preventDefault()
                      scrollToSection(item)
                    }
                  }}
                  className={`px-4 py-2 rounded-lg smooth-transition capitalize cursor-pointer ${
                    activeSection === item
                      ? 'bg-primary/20 text-primary font-semibold'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item}
                </Link>
              )
            })}
          </div>

          {/* CTA Button - Desktop */}
          <Link
            href="/contact"
            className="hidden md:block px-6 py-2 rounded-lg gradient-cyan-purple text-black font-semibold btn-glow"
          >
            Hire Me
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 smooth-transition rotate-0"
          >
            {isOpen ? (
              <X size={24} className="text-white smooth-transition rotate-90" />
            ) : (
              <Menu size={24} className="text-white smooth-transition" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-in fade-in slide-in-from-top-2 duration-300">
            {['home', 'skills', 'services', 'projects', 'testimonials'].map((item, idx) => {
              const targetPath = item === 'home' ? '/' : `/#${item}`
              return (
                <Link
                  key={item}
                  href={targetPath}
                  onClick={(e) => {
                    if (pathname === '/') {
                      e.preventDefault()
                      scrollToSection(item)
                    } else {
                      setIsOpen(false)
                    }
                  }}
                  className={`block w-full text-left px-4 py-2 rounded-lg capitalize smooth-transition stagger-child cursor-pointer ${
                    activeSection === item
                      ? 'bg-primary/20 text-primary font-semibold'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                  style={{ animationDelay: `${idx * 0.05}s` }}
                >
                  {item}
                </Link>
              )
            })}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 rounded-lg gradient-cyan-purple text-black font-semibold text-center btn-glow smooth-transition stagger-child"
            >
              Hire Me
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
