import Link from 'next/link'
import { Home, ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        {/* 404 Icon */}
        <div className="space-y-4">
          <div className="text-9xl font-bold gradient-text">404</div>
          <h1 className="text-3xl sm:text-5xl font-bold text-white">
            Page Not Found
          </h1>
          <p className="text-lg text-gray-400">
            Sorry, the page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back on track.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg gradient-cyan-purple text-black font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 hover:scale-105"
          >
            <Home size={20} className="mr-2" />
            Go Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg border-2 border-primary text-primary font-semibold transition-all duration-300 hover:bg-primary/10"
          >
            Contact Me
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </div>
    </main>
  )
}
