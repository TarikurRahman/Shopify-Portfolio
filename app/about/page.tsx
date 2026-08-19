import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { Award, Zap, Users, Target } from 'lucide-react'

export default function AboutPage() {
  const achievements = [
    {
      icon: Award,
      title: 'Certified Expert',
      description: 'Shopify Partner with 10+ years of eCommerce experience',
    },
    {
      icon: Users,
      title: 'Global Clients',
      description: '50+ successful projects across 15+ countries',
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Stores averaging 2.5s load time and 40%+ conversion lift',
    },
    {
      icon: Target,
      title: 'Results Driven',
      description: '$5M+ in combined revenue growth for clients',
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <div className="w-24 h-24 mx-auto rounded-full glass-effect border border-primary/30 flex items-center justify-center text-6xl">
              👨‍💼
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              <span className="text-white">About </span>
              <span className="gradient-text">Tarikur Rahman</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
              Tarikur Rahman is a passionate Shopify expert dedicated to transforming eCommerce businesses through innovative solutions and data-driven strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                <span className="text-white">My </span>
                <span className="gradient-text">Journey</span>
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  I am <strong>Tarikur Rahman</strong>, and I started my eCommerce journey in 2014 as a freelance developer trying to help a friend set up their online store. What began as a small project quickly evolved into a passion for creating exceptional digital experiences.
                </p>
                <p>
                  Over the past decade, I&apos;ve worked with startups and established brands, learning what truly drives conversions and customer loyalty. Every project taught me something new about the intersection of design, performance, and business strategy.
                </p>
                <p>
                  Today, I specialize in custom Shopify solutions that don&apos;t just look beautiful—they perform exceptionally. I&apos;m committed to helping eCommerce entrepreneurs scale their businesses through strategic development and optimization.
                </p>
                <p>
                  When I&apos;m not coding, you can find me exploring new Shopify features, attending industry conferences, or mentoring the next generation of developers.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden glass-effect border border-primary/30">
              <div className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-8xl">
                💻
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Network & Portals Section */}
      <section className="relative py-16 overflow-hidden border-t border-primary/20 bg-black/10">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            <span className="text-white">Explore My </span>
            <span className="gradient-text">Web Network</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Nafij.com',
                description: 'My primary hub, showcasing complete portfolio highlights, case studies, and professional consulting services.',
                url: 'https://nafij.com',
                tag: 'Main Site'
              },
              {
                title: 'Nafij.bro.bd',
                description: 'A personal portal featuring developer insights, tech reviews, blogs, and community integrations.',
                url: 'https://nafij.bro.bd',
                tag: 'Personal Portal'
              },
              {
                title: 'Nafij.pro.bd',
                description: 'A dedicated workspace showcasing professional custom projects, apps integrations, and client portals.',
                url: 'https://nafij.pro.bd',
                tag: 'Professional Portal'
              }
            ].map((site) => (
              <a
                key={site.title}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer me"
                className="group relative p-6 rounded-xl glass-effect border border-primary/20 hover:border-primary/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/25 text-primary mb-4">
                    {site.tag}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {site.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {site.description}
                  </p>
                </div>
                <div className="text-primary font-semibold text-sm flex items-center group-hover:underline">
                  Visit Site <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
            <span className="text-white">Why Work With </span>
            <span className="gradient-text">Me</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map(({ icon: Icon, title, description }, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl glass-effect border border-primary/20 hover:border-primary/60 transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold text-white mb-2">{title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Experience */}
      <section className="relative py-20 overflow-hidden border-t border-primary/20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">Technical Skills</h3>
              <div className="space-y-6">
                {[
                  { name: 'Shopify Liquid & Development', level: 100 },
                  { name: 'Theme Customization & Design', level: 95 },
                  { name: 'App Integration & APIs', level: 90 },
                  { name: 'Performance Optimization', level: 95 },
                  { name: 'SEO Implementation', level: 90 },
                  { name: 'JavaScript & React', level: 85 },
                ].map(({ name, level }) => (
                  <div key={name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">{name}</span>
                      <span className="text-primary font-semibold">{level}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div
                        className="bg-gradient-cyan-purple h-2 rounded-full transition-all duration-500"
                        style={{ width: `${level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">Experience</h3>
              <div className="space-y-6">
                {[
                  {
                    title: 'Senior Shopify Developer',
                    company: 'Self-Employed',
                    period: '2014 - Present',
                    desc: '50+ projects, $5M+ revenue generated for clients',
                  },
                  {
                    title: 'eCommerce Consultant',
                    company: 'Various Brands',
                    period: '2018 - Present',
                    desc: 'Strategy and optimization for 100+ stores',
                  },
                  {
                    title: 'Shopify Partner',
                    company: 'Shopify',
                    period: '2015 - Present',
                    desc: 'Certified Expert with recommended status',
                  },
                  {
                    title: 'Mentor & Educator',
                    company: 'Community',
                    period: '2020 - Present',
                    desc: 'Teaching developers and entrepreneurs',
                  },
                ].map(({ title, company, period, desc }, idx) => (
                  <div key={idx} className="pb-6 border-b border-primary/20 last:border-0">
                    <h4 className="font-semibold text-white">{title}</h4>
                    <p className="text-primary text-sm">{company}</p>
                    <p className="text-gray-400 text-sm">{period}</p>
                    <p className="text-gray-500 text-sm mt-1">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
