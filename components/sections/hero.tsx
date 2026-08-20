'use client'

import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'
import Image from 'next/image'
import Nafij from '../../public/Tarikur-Rahman.png'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      
      {/* Background Blur */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-32 -right-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:pt-20 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT */}
          <div className="space-y-8 z-10">

            {/* Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-effect w-fit">
              <Sparkles size={16} className="text-primary animate-spin" style={{ animationDuration: '3s' }} />
              <span className="text-sm text-gray-300">
                Trusted by <span className="text-primary font-semibold">10+</span> eCommerce brands
              </span>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
                Shopify Expert Developer
              </h1>

              <p className="text-xl text-gray-400 max-w-lg">
                I build high-converting, custom Shopify stores that scale your eCommerce business and maximize revenue.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 rounded-lg glass-effect">
                <p className="text-3xl font-bold text-primary">10+</p>
                <p className="text-sm text-gray-400">Projects Delivered</p>
              </div>

              <div className="p-4 rounded-lg glass-effect">
                <p className="text-3xl font-bold text-primary">2x</p>
                <p className="text-sm text-gray-400">Conversion Rate</p>
              </div>

              <div className="p-4 rounded-lg glass-effect">
                <p className="text-3xl font-bold text-primary">98%</p>
                <p className="text-sm text-gray-400">Client Satisfaction</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 rounded-lg gradient-cyan-purple text-black font-semibold"
              >
                Hire Me
                <ArrowRight size={20} className="ml-2" />
              </Link>

              <button
                onClick={() =>
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="px-8 py-3 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary/10"
              >
                View Projects
              </button>
            </div>
          </div>

          {/* RIGHT (FIXED IMAGE) */}
          <div className="relative flex items-center justify-center">
            
            {/* Image container MUST have size */}
            <div className="relative w-[420px] h-[420px] sm:w-[500px] sm:h-[600px]">
              <Image
                src={Nafij}
                alt="Tarikur Rahman"
                fill
                className="object-cover rounded-2xl shadow-2xl"
                priority
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}