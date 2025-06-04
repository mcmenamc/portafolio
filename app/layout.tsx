import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Jesús Antonio Mena | Desarrollador Full Stack | Puebla',
  description: 'Desarrollador Full Stack especializado en JavaScript, Node.js, .NET, React y desarrollo móvil. Experiencia en AWS, Firebase y desarrollo de APIs.',
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
    title: 'Jesús Antonio Mena - Desarrollador Full Stack',
    description: 'Portafolio profesional de Jesús Antonio Mena, Desarrollador Full Stack con experiencia en múltiples tecnologías y frameworks.',
    url: 'https://tuportafolio.com',
    siteName: 'Portafolio Jesús Mena De la rosa',
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jesús Antonio Mena - Desarrollador Full Stack',
    description: 'Experto en desarrollo web, móvil y soluciones en la nube. Conoce mi trabajo y experiencia.',
    // creator: '@tuusuario' // Si tienes Twitter
  },
  // verification: {
  //   google: 'tu-codigo-de-verificacion', // Si tienes Google Search Console
  // }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}