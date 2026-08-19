import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SmoothScroll } from '@/components/smooth-scroll'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
})
const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#14D8FF',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://nafij.com'),

  title: {
    default: 'Tarikur Rahman | Shopify Expert Developer & eCommerce Consultant',
    template: '%s | Tarikur Rahman'
  },
  description:
    'Tarikur Rahman is a professional Shopify Expert Developer specializing in custom store development, theme customization, speed optimization, and eCommerce growth. Build your high-converting store today.',
  generator: 'v0.app',
  keywords: [
    'Tarikur Rahman',
    'Tarikur',
    'Shopify Developer',
    'Shopify Expert',
    'Tarikur Shopify',
    'Tarikur Rahman Shopify',
    'Shopify Developer Bangladesh',
    'Custom Shopify Store',
    'eCommerce Developer',
    'Liquid Programming',
    'Shopify Speed Optimization'
  ],

  openGraph: {
    title: 'Tarikur Rahman | Shopify Expert Developer & Consultant',
    description:
      'Build high-converting Shopify stores with certified expert Tarikur Rahman. Customized Shopify solutions, Liquid theme development, and speed optimization.',
    type: 'website',
    url: 'https://nafij.com',
    siteName: 'Tarikur Rahman Portfolio',
    images: [
      {
        url: 'https://nafij.com/nafij-og.png',
        width: 1200,
        height: 630,
        alt: 'Tarikur Rahman - Shopify Expert Developer',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Tarikur Rahman | Shopify Expert Developer & Consultant',
    description:
      'Build high-converting Shopify stores with certified expert Tarikur Rahman.',
    images: ['https://nafij.com/nafij-og.png'],
    creator: '@tarikurrahman',
  },

  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Tarikur Rahman",
    "alternateName": ["Tarikur", "Tarikur Rahman Shopify"],
    "url": "https://nafij.com",
    "image": "https://nafij.com/Nafij-islam.png",
    "sameAs": [
      "https://www.facebook.com/nafijislam99/",
      "https://github.com/nafij-islam",
      "https://nafij.bro.bd",
      "https://nafij.pro.bd"
    ],
    "jobTitle": "Shopify Expert Developer",
    "description": "Tarikur Rahman is a professional Shopify Expert Developer specializing in custom store development, theme customization, speed optimization, and eCommerce growth."
  }

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <Analytics />
      </body>
    </html>
  )
}