import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable}`} suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  )
}