import Hero from "@/components/sections/Hero"
import BentoGrid from "@/components/sections/BentoGrid"
import Experience from "@/components/sections/Experience"
import ContactForm from "@/components/sections/ContactForm"
import portfolioData from "@/data/portfolio.json"
import { Toaster } from "@/components/ui/sonner"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Github, Linkedin, Mail } from "lucide-react"

export default function PortfolioPage() {
  const navLinks = [
    { href: "#work", label: "Proyectos" },
    { href: "#experience", label: "Arquitectura" },
    { href: "#contact", label: "Contacto" },
  ]

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 transition-colors duration-500 selection:bg-blue-500 selection:text-white pb-12">
      <Toaster position="top-center" richColors theme="dark" />
      
      {/* Navigation - Premium Dark Mode */}
      <nav className="fixed top-0 w-full z-50 border-b border-zinc-900 bg-zinc-950/80 backdrop-blur-xl">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="font-bold tracking-tighter text-xl text-white flex items-center gap-1 group cursor-pointer">
            MENA<span className="text-blue-500 group-hover:scale-110 transition-transform">.</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-10 text-[13px] font-semibold uppercase tracking-wider text-zinc-400">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-blue-500 transition-all">
                {link.label}
              </a>
            ))}
          </div>

          {/* Action Button - Desktop */}
          <div className="hidden md:flex items-center gap-6">
             <a href={portfolioData.personalInfo.github} target="_blank" className="text-zinc-500 hover:text-white transition-colors">
                <Github size={20} />
             </a>
             <a href={`mailto:${portfolioData.personalInfo.email}`} className="px-6 py-2.5 rounded-xl bg-blue-600 text-xs font-bold uppercase tracking-wider text-white hover:bg-blue-700 transition-all shadow-xl shadow-blue-900/20">
                Reserva una llamada
             </a>
          </div>

          {/* Mobile Nav Trigger */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button className="p-2 text-white focus:outline-none">
                  <Menu size={24} />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-zinc-950 border-l border-zinc-900 p-8 text-white">
                <div className="flex flex-col gap-10 mt-16">
                  {navLinks.map((link) => (
                    <a 
                      key={link.href} 
                      href={link.href} 
                      className="text-4xl font-black text-white hover:text-blue-500 transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                  <div className="pt-10 border-t border-zinc-900 flex flex-col gap-6">
                    <p className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-600">Conectemos</p>
                    <div className="flex gap-6">
                       <Github size={24} className="text-zinc-400" />
                       <Mail size={24} className="text-zinc-400" />
                    </div>
                    <a href={`mailto:${portfolioData.personalInfo.email}`} className="text-zinc-300 font-bold text-lg">
                      {portfolioData.personalInfo.email}
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      <Hero data={portfolioData.personalInfo} />
      
      <BentoGrid projects={portfolioData.projects} />

      <Experience experience={portfolioData.experience} education={portfolioData.education} />
      
      {/* Tech Stack - Premium Dark Version */}
      <section className="py-32 bg-zinc-950 border-y border-zinc-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-8">
            <div className="space-y-4">
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950 border border-blue-900 text-blue-500 text-[10px] font-mono tracking-widest uppercase">
                  Stack Tecnológico
               </div>
               <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white">
                  Herramientas de <span className="text-blue-500">Alto Nivel</span>
               </h2>
            </div>
            <p className="text-zinc-500 max-w-sm text-lg font-medium">
               Selección curada de tecnologías para el desarrollo de productos escalables y de alto rendimiento.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {portfolioData.techStack.map((category) => (
              <div key={category.name} className="space-y-8">
                <h3 className="text-white font-black text-xs uppercase tracking-[0.2em] flex items-center gap-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                   {category.name}
                </h3>
                <ul className="space-y-4">
                  {category.items.map((item) => (
                    <li key={item} className="text-zinc-500 text-sm font-bold hover:text-white transition-colors cursor-default">
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

      <footer className="py-24 bg-zinc-950 text-center border-t border-zinc-900">
        <div className="container mx-auto px-4 space-y-10">
           <div className="font-bold tracking-tighter text-xl text-white flex items-center justify-center gap-1 mb-8 cursor-pointer group">
            MENA<span className="text-blue-500 group-hover:scale-110 transition-transform">.</span>
          </div>
          <div className="flex justify-center gap-10 text-[12px] font-semibold uppercase tracking-wider text-zinc-600">
             <a href={portfolioData.personalInfo.github} target="_blank" className="hover:text-blue-500 transition-colors">GitHub</a>
             <a href={`mailto:${portfolioData.personalInfo.email}`} className="hover:text-blue-500 transition-colors">Email</a>
          </div>
          <p className="text-zinc-800 text-[10px] font-mono uppercase tracking-[0.4em]">
            &copy; {new Date().getFullYear()} {portfolioData.personalInfo.name.toUpperCase()} &bull; INGENIERÍA DE SOFTWARE
          </p>
        </div>
      </footer>
    </main>
  )
}
