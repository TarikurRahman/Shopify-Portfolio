'use client'

import { Check, Layers, Zap, BarChart3 } from 'lucide-react'

const SERVICES = [
  {
    id: 1,
    title: 'Starter Package',
    description: 'Perfect for small businesses or beginners looking to launch a basic Shopify store.',
    features: [
      'Basic Shopify store setup',
      'Free theme installation',
      'Essential pages setup',
      'Payment gateway integration',
    ],
    price: '$80',
    icon: Layers,
  },
  {
    id: 2,
    title: 'Growth Package',
    description: 'Ideal for growing brands that need customization and improved design.',
    features: [
      'Theme customization',
      'Responsive design',
      'Custom sections & layout',
      'Basic SEO optimization',
    ],
    price: '$150',
    icon: Zap,
  },
  {
    id: 3,
    title: 'Professional Package',
    description: 'Best for businesses aiming for a high-converting and optimized Shopify store.',
    features: [
      'Advanced UI/UX design',
      'Speed optimization',
      'Conversion-focused layout',
      'App integration & setup',
    ],
    price: '$300',
    icon: BarChart3,
  },
  {
    id: 4,
    title: 'Premium Package',
    description: 'Complete custom Shopify solution tailored for scaling and high performance.',
    features: [
      'Custom theme development',
      'Full store customization',
      'Advanced SEO & performance optimization',
      'Priority support',
    ],
    price: '$550',
    icon: Zap,
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-white">Premium </span>
            <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto smooth-transition-slow">
            End-to-end Shopify solutions designed to maximize your ROI and business growth
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {SERVICES.map(({ id, title, description, features, price, icon: Icon }) => (
            <div
              key={id}
              className="group relative rounded-xl overflow-hidden glass-effect border border-primary/20 hover:border-primary/60 card-hover p-8 stagger-child"
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 smooth-transition-slow -z-10 bg-gradient-to-br from-primary/10 to-secondary/10" />

              {/* Icon */}
              <div className="w-14 h-14 rounded-lg bg-gradient-cyan-purple flex items-center justify-center mb-6 group-hover:scale-125 smooth-transition group-hover:shadow-lg group-hover:shadow-primary/50">
                <Icon size={28} className="text-black group-hover:animate-bounce" style={{ animationDuration: '0.8s' }} />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-primary smooth-transition">{title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed smooth-transition">{description}</p>

              {/* Features List */}
              <div className="space-y-3 mb-8">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-3 stagger-child">
                    <Check size={20} className="text-primary flex-shrink-0 mt-0.5 group-hover:animate-bounce" style={{ animationDelay: `${idx * 0.1}s`, animationDuration: '0.8s' }} />
                    <span className="text-gray-300 text-sm smooth-transition">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Price and CTA */}
              <div className="border-t border-primary/20 pt-6 flex items-center justify-between">
                <span className="text-xl font-bold text-primary smooth-transition">{price}</span>
                <button className="px-6 py-2 rounded-lg bg-primary/10 text-primary font-semibold btn-glow group-hover:shadow-lg">
                  Inquire
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
