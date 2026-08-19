'use client'

import { ReactLenis } from 'lenis/react'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<any>(null)

  useEffect(() => {
    // Register GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger)

    // Synchronize Lenis scrolling with GSAP ScrollTrigger
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000)
    }

    gsap.ticker.add(update)

    return () => {
      gsap.ticker.remove(update)
    }
  }, [])

  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{
        duration: 1.2,
        lerp: 0.08, // Buttery smooth momentum scrolling
        syncTouch: true,
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  )
}
