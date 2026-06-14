import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Jesús Antonio Mena | Ingeniero de Software | Portafolio',
  description: 'Ingeniero de Software y Desarrollador Full Stack. Experto en React, Node.js, Flutter y arquitectura de productos digitales.',
  keywords: [
    'Desarrollador Full Stack',
    'Desarrollador Puebla',
    'JavaScript Developer',
    'Node.js',
    'React',
    '.NET',
    'APIs RESTful',
    'Desarrollo móvil',
    'AWS',
    'Firebase',
    'Ingeniero de software'
  ],
  generator: 'Next.js',
  authors: [{ name: 'Jesús Antonio Mena de la Rosa' }],
  creator: 'Jesús Antonio Mena de la Rosa',
  openGraph: {
    title: 'Jesús Antonio Mena - Ingeniero de Software',
    description: 'Portafolio profesional de Jesús Antonio Mena, Desarrollador Full Stack con experiencia en múltiples tecnologías y frameworks.',
    url: 'https://tuportafolio.com',
    siteName: 'Portafolio Jesús Mena De la rosa',
    locale: 'es_MX',
    type: 'website',
  },
}

import { Analytics } from "@vercel/analytics/react"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}