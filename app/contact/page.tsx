'use client'

import { useState } from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
      setFormData({ name: '', email: '', phone: '', message: '' })

      // Reset message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000)
    }, 1000)
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-20">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              <span className="text-white">Let&apos;s Build Your </span>
              <span className="gradient-text">Shopify Store</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
              Ready to transform your eCommerce business? Get in touch and let&apos;s discuss your project.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Info Cards */}
            {[
              {
                icon: Mail,
                title: 'Email',
                info: 'nafij.cms.2026@gmail.com',
                details: 'Response within 24 hours',
              },
              {
                icon: Phone,
                title: 'Phone',
                info: '+8801633003462',
                details: 'Available Mon-Fri 12AM-10PM EST',
              },
              {
                icon: MapPin,
                title: 'Location',
                info: 'Remote - Serving Global Clients',
                details: 'Timezone flexible',
              },
            ].map(({ icon: Icon, title, info, details }, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl glass-effect border border-primary/20 text-center hover:border-primary/60 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
                <p className="font-semibold text-primary mb-1">{info}</p>
                <p className="text-sm text-gray-400">{details}</p>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <div className="p-8 rounded-xl glass-effect border border-primary/20">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 space-y-4">
                  <CheckCircle size={48} className="text-primary animate-bounce" />
                  <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                  <p className="text-gray-400 text-center">
                    Thank you for reaching out. I&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-primary/20 focus:border-primary text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-primary/20 focus:border-primary text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                      Phone (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-primary/20 focus:border-primary text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-primary/20 focus:border-primary text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
                      placeholder="Tell me about your project and goals..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full px-8 py-3 rounded-lg gradient-cyan-purple text-black font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    <span>{isLoading ? 'Sending...' : 'Send Message'}</span>
                    {!isLoading && <Send size={20} />}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
