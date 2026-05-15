"use client"

import { motion } from "framer-motion"
import { ArrowRight, Code2, Terminal, Sparkles } from "lucide-react"

export default function Hero({ data }: { data: any }) {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-gradient-to-br from-blue-100/50 via-white to-white">
      {/* Background: Refined technical grid with more visibility */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-100" />
        <div className="absolute -top-32 -left-32 w-[800px] h-[800px] bg-blue-400/20 rounded-full blur-[140px] -z-10" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10" />
        <div className="absolute top-1/3 -left-12 w-[400px] h-[400px] bg-indigo-200/20 rounded-full blur-[100px] -z-10" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <div className="space-y-12">
            
            {/* Minimalist Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-zinc-50 border border-zinc-100 text-zinc-900 shadow-sm"
            >
              <div className="flex -space-x-2">
                <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center border-2 border-white">
                  <Terminal size={12} className="text-white" />
                </div>
                <div className="w-7 h-7 rounded-full bg-zinc-900 flex items-center justify-center border-2 border-white">
                  <Code2 size={12} className="text-white" />
                </div>
              </div>
              <span className="text-[10px] font-semibold uppercase tracking-widest ml-1">
                Ingeniero de Software Full Stack
              </span>
            </motion.div>

            {/* Huge Editorial Headline */}
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-zinc-900 leading-[0.95] md:leading-[1.05]"
              >
                Construyendo <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Sistemas</span> de <br />
                Alto Impacto<span className="text-blue-600">.</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-zinc-500 text-lg md:text-xl font-medium leading-relaxed max-w-xl"
              >
                Especializado en el desarrollo de arquitecturas escalables y optimización de productos digitales. Con 
                <span className="text-zinc-900 font-bold mx-2 underline decoration-blue-600/20 underline-offset-8">3+ años de experiencia</span> 
                transformando ideas en soluciones robustas.
              </motion.p>
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-5"
            >
              <a
                href="#proyectos"
                className="group relative px-10 py-5 bg-zinc-900 text-white rounded-2xl font-bold text-[11px] uppercase tracking-widest overflow-hidden transition-all hover:bg-zinc-800 shadow-2xl shadow-zinc-200"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Ver Proyectos
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <a
                href="#contacto"
                className="px-10 py-5 bg-white border border-zinc-200 text-zinc-900 rounded-2xl font-bold text-[11px] uppercase tracking-widest hover:border-zinc-900 transition-all shadow-sm"
              >
                Hablemos
              </a>
            </motion.div>

            {/* Bottom Status / Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="pt-16 flex flex-col md:flex-row items-center gap-10 opacity-40 hover:opacity-100 transition-opacity duration-700"
            >
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Estado: Disponible para proyectos</span>
              </div>
              <div className="hidden md:block w-px h-4 bg-zinc-200" />
              <div className="flex gap-8 items-center">
                 <span className="text-[10px] font-semibold uppercase tracking-widest text-zinc-300">Expertise en</span>
                 <div className="flex gap-6 font-bold text-zinc-900 text-[11px] tracking-tighter">
                   <span>REACT</span>
                   <span>NODE.JS</span>
                   <span>AWS</span>
                   <span>FLUTTER</span>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative side element - Floating code snippet or card */}
      <div className="absolute right-[5%] top-[25%] hidden xl:block pointer-events-none">
        <motion.div
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative w-80 h-96 rounded-[48px] border border-zinc-100 bg-white p-10 flex flex-col justify-between shadow-[0_40px_80px_-20px_rgba(0,0,0,0.04)]"
        >
          <div className="flex justify-between items-start">
            <div className="p-4 rounded-2xl bg-zinc-50 text-blue-600">
               <Sparkles size={24} />
            </div>
            <div className="text-[9px] font-bold uppercase tracking-widest text-zinc-300">System.log</div>
          </div>
          <div className="space-y-4">
            <div className="space-y-1.5">
               <div className="h-1.5 w-full bg-zinc-50 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-blue-600" />
               </div>
               <div className="h-1.5 w-full bg-zinc-50 rounded-full overflow-hidden">
                  <div className="h-full w-1/2 bg-indigo-500" />
               </div>
            </div>
            <h4 className="text-2xl font-black text-zinc-900 tracking-tight leading-none">
              Clean Architecture & Performance.
            </h4>
            <p className="text-zinc-500 text-sm font-medium leading-relaxed">
              Enfoque en mantenibilidad y escalabilidad.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
