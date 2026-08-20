'use client'

import { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Founder, Fashion & Co',
    feedback: 'The custom Shopify store doubled our revenue in 6 months. The developer\'s expertise in conversion optimization was invaluable.',
    rating: 5,
    image: '👩‍💼',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'CEO, Tech Marketplace',
    feedback: 'Incredible work on the theme customization and app integration. The store runs faster and looks absolutely stunning.',
    rating: 5,
    image: '👨‍💼',
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    role: 'Marketing Director, Beauty Brand',
    feedback: 'Best investment we made. The SEO optimization brought 5x more organic traffic. Highly recommend!',
    rating: 5,
    image: '👩‍💻',
  },
  {
    id: 4,
    name: 'David Smith',
    role: 'Owner, Sports Store',
    feedback: 'Professional, responsive, and delivers results. Our conversion rate jumped 45% after the store redesign.',
    rating: 5,
    image: '👨‍🏫',
  },
  {
    id: 5,
    name: 'Lisa Wang',
    role: 'E-commerce Manager, Home Decor',
    feedback: 'Top-notch developer. Implemented features we thought were impossible. The custom checkout is a game-changer.',
    rating: 5,
    image: '👩‍🔬',
  },
  {
    id: 6,
    name: 'James Thompson',
    role: 'Founder, Wellness Co',
    feedback: 'The speed optimization alone improved our SEO rankings. Customer experience has never been better.',
    rating: 5,
    image: '👨‍💼',
  },
]

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index)
  }, [emblaApi])

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
    
    // Trigger initial select
    onSelect(emblaApi)
  }, [emblaApi, onSelect])

  return (
    <section id="testimonials" className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-white">Client </span>
            <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto smooth-transition-slow">
            See what successful businesses have to say about our partnership
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Carousel Viewport */}
          <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
            {/* Carousel Container */}
            <div className="flex -ml-6">
              {TESTIMONIALS.map(({ id, name, role, feedback, rating, image }) => (
                <div
                  key={id}
                  className="flex-[0_0_100%] min-w-0 pl-6 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                >
                  <div className="group h-full p-6 rounded-xl glass-effect border border-primary/20 hover:border-primary/60 card-hover flex flex-col justify-between select-none">
                    <div>
                      {/* Rating */}
                      <div className="flex items-center space-x-1 mb-4">
                        {Array.from({ length: rating }).map((_, i) => (
                          <Star
                            key={i}
                            size={18}
                            className="fill-primary text-primary group-hover:animate-bounce"
                            style={{
                              animationDelay: `${(i * 0.1).toFixed(1)}s`,
                              animationDuration: '0.6s',
                            }}
                          />
                        ))}
                      </div>

                      {/* Feedback */}
                      <p className="text-gray-300 mb-6 leading-relaxed italic smooth-transition">
                        &quot;{feedback}&quot;
                      </p>
                    </div>

                    {/* Author */}
                    <div className="flex items-center space-x-3 pt-4 border-t border-primary/20">
                      <div className="w-12 h-12 rounded-full bg-gradient-cyan-purple flex items-center justify-center text-xl flex-shrink-0 group-hover:scale-110 smooth-transition">
                        {image}
                      </div>
                      <div>
                        <p className="font-semibold text-white smooth-transition group-hover:text-primary">{name}</p>
                        <p className="text-sm text-gray-400">{role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-10 fade-in-up">
            <div className="flex space-x-2">
              {scrollSnaps.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollTo(idx)}
                  className={`h-2 rounded-full smooth-transition cursor-pointer ${
                    idx === selectedIndex
                      ? 'bg-primary w-8 pulse-glow'
                      : 'bg-gray-600 hover:bg-gray-400 w-2'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex gap-3">
              <button
                onClick={scrollPrev}
                className="p-2 rounded-lg border border-primary/30 text-primary hover:bg-primary/10 btn-glow cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} className="smooth-transition group-hover:-translate-x-1" />
              </button>
              <button
                onClick={scrollNext}
                className="p-2 rounded-lg border border-primary/30 text-primary hover:bg-primary/10 btn-glow cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} className="smooth-transition group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
