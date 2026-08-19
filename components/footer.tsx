'use client'

import Link from 'next/link'
import { Mail, Linkedin, Github, Facebook, MessageCircle, Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-primary/20 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="relative px-3.5 py-1 rounded-lg glass-effect flex items-center justify-center border border-primary/30">
                <span className="text-lg font-extrabold tracking-widest gradient-text font-mono">TARIKUR</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building high-converting Shopify stores that drive revenue and growth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-2">
              {[
                { name: 'Home', href: '/' },
                { name: 'About', href: '/about' },
                { name: 'Services', href: '/#services' },
                { name: 'Projects', href: '/#projects' },
                { name: 'Contact', href: '/contact' },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-400 hover:text-primary transition-colors text-sm cursor-pointer">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                'Store Development',
                'Theme Customization',
                'App Integration',
                'Speed Optimization',
                'SEO Services',
              ].map((item) => (
                <li key={item}>
                  <Link href="/#services" className="text-gray-400 hover:text-primary transition-colors text-sm cursor-pointer">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* My Network */}
          <div>
            <h4 className="font-semibold text-white mb-4">My Network</h4>
            <ul className="space-y-2">
              {[
                { name: 'nafij.com', href: 'https://nafij.com' },
                { name: 'nafij.bro.bd', href: 'https://nafij.bro.bd' },
                { name: 'nafij.pro.bd', href: 'https://nafij.pro.bd' },
              ].map((site) => (
                <li key={site.name}>
                  <a
                    href={site.href}
                    target="_blank"
                    rel="noopener noreferrer me"
                    className="text-gray-400 hover:text-primary transition-colors text-sm cursor-pointer"
                  >
                    {site.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold text-white mb-4">Get In Touch</h4>
            <div className="space-y-4">
              
              {/* Email */}
              <a
                href="mailto:nafij.cms.2026@gmail.com"
                className="flex items-center space-x-2 text-gray-400 hover:text-primary transition-colors text-sm"
              >
                <Mail size={16} />
                <span>nafij.cms.2026@gmail.com</span>
              </a>

              {/* Social Links */}
              <div className="flex space-x-4">
                
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/nafij-islam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg glass-effect hover:bg-primary/20 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} className="text-gray-400 hover:text-primary" />
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/nafij-islam"
                  target="_blank"
                  rel="noopener noreferrer me"
                  className="p-2 rounded-lg glass-effect hover:bg-primary/20 transition-all"
                  aria-label="GitHub"
                >
                  <Github size={20} className="text-gray-400 hover:text-primary" />
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/nafijislam99/"
                  target="_blank"
                  rel="noopener noreferrer me"
                  className="p-2 rounded-lg glass-effect hover:bg-primary/20 transition-all"
                  aria-label="Facebook"
                >
                  <Facebook size={20} className="text-gray-400 hover:text-primary" />
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/+8801633003462"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg glass-effect hover:bg-primary/20 transition-all"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={20} className="text-gray-400 hover:text-primary" />
                </a>

              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary/20" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-gray-400 text-sm">
            © {currentYear} Shopify Expert Developer. All rights reserved.
          </p>
          <div className="flex items-center space-x-1 text-gray-400 text-sm">
            <span>Built with</span>
            <Heart size={16} className="text-primary fill-primary" />
            <span>for eCommerce success</span>
          </div>
        </div>
      </div>
    </footer>
  )
}