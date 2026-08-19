'use client'

import { Code2, Zap, Eye, Laptop, Server, Layers, Star, ChevronsDown } from 'lucide-react'

const SKILLS = [
  {
    id: 1,
    title: 'Shopify Expert Partner',
    description: 'Bespoke custom theme development, Liquid programming, and premium eCommerce integrations.',
    icon: Star,
  },
  {
    id: 2,
    title: 'Frontend: React & Next.js',
    description: 'Modern, highly responsive, SEO-friendly user interfaces and headless store storefronts.',
    icon: Laptop,
  },
  {
    id: 3,
    title: 'Backend: Node.js & APIs',
    description: 'Secure, high-performance API endpoints, custom apps, database management, and integrations.',
    icon: Server,
  },
  {
    id: 4,
    title: 'Bubble.io: No-Code Dev',
    description: 'Rapid development and deployment of premium web apps and SaaS tools using Bubble.io.',
    icon: Layers,
  },
  {
    id: 5,
    title: 'Liquid Programming',
    description: 'Advanced Shopify Liquid code for tailored customer experiences and checkout scripts.',
    icon: Zap,
  },
  {
    id: 6,
    title: 'Smooth Scrolling & UX',
    description: 'Configuring seamless, responsive single-page smooth scrolling and modern interactive animations.',
    icon: ChevronsDown,
  },
  {
    id: 7,
    title: 'Shopify SEO',
    description: 'On-page SEO, schema markup, and content strategy for ranking eCommerce stores at the top.',
    icon: Eye,
  },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-white">My Core </span>
            <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto smooth-transition-slow">
            Comprehensive Shopify solutions to transform your eCommerce business
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map(({ id, title, description, icon: Icon }) => (
            <div
              key={id}
              className="group relative p-6 rounded-xl glass-effect border border-primary/20 hover:border-primary/60 card-hover cursor-pointer stagger-child"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 smooth-transition-slow -z-10 blur-lg bg-gradient-to-br from-primary/20 to-secondary/20" />

              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 smooth-transition group-hover:bg-primary/20">
                <Icon size={24} className="text-primary group-hover:animate-bounce" style={{ animationDuration: '0.8s' }} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary smooth-transition">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed smooth-transition">{description}</p>

              {/* Border glow */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 smooth-transition pointer-events-none border border-primary/40 pulse-glow" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
