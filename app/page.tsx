"use client"

import { useState, useEffect } from "react"
import Hero from "@/components/sections/Hero"
import BentoGrid from "@/components/sections/BentoGrid"
import Experience from "@/components/sections/Experience"
import ContactForm from "@/components/sections/ContactForm"
import GitHubActivity from "@/components/sections/GitHubActivity"
import portfolioData from "@/data/portfolio.json"
import { Toaster } from "@/components/ui/sonner"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Github, Linkedin, Mail } from "lucide-react"

export default function PortfolioPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const navLinks = [
    { href: "#proyectos", label: "Proyectos" },
    { href: "#experiencia", label: "Experiencia" },
    { href: "#contacto", label: "Contacto" },
  ]

  return (
    <main className="min-h-screen bg-white text-zinc-900 transition-colors duration-500 selection:bg-blue-500 selection:text-white pb-12">
      <Toaster position="top-center" richColors theme="light" />
      
      {/* Navigation - Premium Light Mode */}
      <nav className="fixed top-0 w-full z-50 border-b border-zinc-100 bg-white/80 backdrop-blur-xl">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="font-bold tracking-tighter text-2xl text-zinc-900 flex items-center gap-1 group cursor-pointer">
            MENA<span className="text-blue-600 group-hover:scale-110 transition-transform">.</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-10 text-[13px] font-bold uppercase tracking-widest text-zinc-500">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-blue-600 transition-all">
                {link.label}
              </a>
            ))}
          </div>

          {/* Action Button - Desktop */}
          <div className="hidden md:flex items-center gap-6">
             <a href={portfolioData.personalInfo.github} target="_blank" className="text-zinc-400 hover:text-zinc-900 transition-colors">
                <Github size={20} />
             </a>
             <a href={`mailto:${portfolioData.personalInfo.email}`} className="px-8 py-3 rounded-2xl bg-zinc-900 text-[11px] font-black uppercase tracking-[0.2em] text-white hover:bg-zinc-800 transition-all shadow-2xl shadow-zinc-200">
                Contactar Ahora
             </a>
          </div>

          {/* Mobile Nav Trigger */}
          <div className="md:hidden">
            {mounted && (
              <Sheet>
                <SheetTrigger asChild>
                  <button className="p-2 text-zinc-900 focus:outline-none">
                    <Menu size={24} />
                  </button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-white border-l border-zinc-100 p-8 text-zinc-900">
                  <div className="flex flex-col gap-10 mt-16">
                    {navLinks.map((link) => (
                      <a 
                        key={link.href} 
                        href={link.href} 
                        className="text-4xl font-black text-zinc-900 hover:text-blue-600 transition-colors"
                      >
                        {link.label}
                      </a>
                    ))}
                    <div className="pt-10 border-t border-zinc-100 flex flex-col gap-6">
                      <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Conectemos</p>
                      <div className="flex gap-6">
                         <a href={portfolioData.personalInfo.github} target="_blank"><Github size={24} className="text-zinc-400" /></a>
                         <a href={`mailto:${portfolioData.personalInfo.email}`}><Mail size={24} className="text-zinc-400" /></a>
                      </div>
                      <a href={`mailto:${portfolioData.personalInfo.email}`} className="text-zinc-900 font-bold text-lg">
                        {portfolioData.personalInfo.email}
                      </a>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            )}
          </div>
        </div>
      </nav>

      <Hero data={portfolioData.personalInfo} />
      
      <BentoGrid projects={portfolioData.projects} />

      <GitHubActivity username="mcmenamc" />

      <Experience experience={portfolioData.experience} education={portfolioData.education} />
      
      {/* Tech Stack - Premium Light Version */}
      <section className="py-20 bg-white border-y border-zinc-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-8">
            <div className="space-y-4">
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] tracking-widest uppercase">
                  Stack Tecnológico
               </div>
               <h2 className="text-3xl md:text-5xl font-black tracking-tight text-zinc-900">
                  Ecosistema de <span className="text-blue-600">Ingeniería</span>
               </h2>
            </div>
            <p className="text-zinc-500 max-w-xs text-sm font-medium leading-relaxed">
               Arquitecturas diseñadas para la alta disponibilidad, escalabilidad y una experiencia de usuario sin fricciones.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {Object.entries(portfolioData.techStack).map(([category, items]) => (
              <div key={category} className="space-y-8">
                <h3 className="text-zinc-900 font-black text-[10px] uppercase tracking-[0.3em] flex items-center gap-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                   {category.replace('_', ' ')}
                </h3>
                <ul className="flex flex-wrap gap-2 mt-4">
                  {(items as string[]).map((item) => (
                    <li key={item} className="px-3 py-1.5 bg-zinc-50 border border-zinc-100 rounded-lg text-zinc-600 text-xs font-bold hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50/50 hover:shadow-sm transition-all cursor-default">
                       {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />

      <footer className="py-24 bg-zinc-950 border-t border-zinc-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center space-y-8 text-center mb-16">
            <div className="font-black tracking-tighter text-3xl text-white flex items-center justify-center gap-1 cursor-pointer group">
              MENA<span className="text-blue-500 group-hover:scale-110 transition-transform">.</span>
            </div>
            <p className="text-zinc-500 text-sm max-w-sm font-medium">
              Arquitectura, Escalabilidad y Performance.
            </p>
            <div className="flex justify-center gap-8 text-xs font-bold uppercase tracking-widest text-zinc-400">
               <a href={portfolioData.personalInfo.github} target="_blank" className="hover:text-white transition-colors">GitHub</a>
               <a href={portfolioData.personalInfo.linkedin} target="_blank" className="hover:text-white transition-colors">LinkedIn</a>
               <a href={`mailto:${portfolioData.personalInfo.email}`} className="hover:text-white transition-colors">Correo</a>
            </div>
          </div>
          
          <div className="pt-8 border-t border-zinc-900/50 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-600 text-[11px] font-semibold tracking-wider uppercase">
            <p>&copy; {new Date().getFullYear()} {portfolioData.personalInfo.name}</p>
            <p>PUEBLA, MÉXICO</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

