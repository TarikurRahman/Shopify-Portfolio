import Hero from '@/components/sections/hero'
import Skills from '@/components/sections/skills'
import Projects from '@/components/sections/projects'
import Services from '@/components/sections/services'
import Testimonials from '@/components/sections/testimonials'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Skills />
      <Services />
      <Projects />
      <Testimonials />
      <Footer />
    </main>
  )
}
