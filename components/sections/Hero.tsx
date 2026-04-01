"use client"

import { motion } from "framer-motion"
import { ArrowRight, Terminal, Cpu, Code2, Database } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero({ data }: { data: any }) {
  return (
    <section className="relative pt-32 pb-24 md:pt-30 md:pb-40 overflow-hidden bg-zinc-950 text-white border-b border-zinc-900">
      {/* Refined Technical Background Glows */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-[-5%] left-[-5%] w-[40%] h-[40%] bg-blue-900/30 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] right-[-5%] w-[30%] h-[30%] bg-zinc-800/20 rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <h2 className="text-xl md:text-3xl font-black text-white tracking-[0.2em] leading-none mb-6">
                JESÚS ANTONIO<br/>
                <span className="text-blue-500">MENA DE LA ROSA</span>
              </h2>
              
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl border border-zinc-800 bg-zinc-900/50 shadow-sm">
                <div className="flex -space-x-1">
                   <div className="w-5 h-5 rounded-full bg-blue-600 border-2 border-zinc-900" />
                   <div className="w-5 h-5 rounded-full bg-blue-400 border-2 border-zinc-900" />
                </div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-zinc-400 flex items-center gap-2 font-mono">
                   <Terminal size={14} className="text-blue-500" />
                   {data.role}
                </span>
              </div>
            </motion.div>

            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1] text-zinc-100"
              >
                {data.headline.split(' ').map((word: string, i: number) => (
                   <span key={i} className={word === 'Software' || word === 'Productos' ? 'text-blue-500' : ''}>
                      {word}{' '}
                   </span>
                ))}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="max-w-xl text-base md:text-lg text-zinc-400 leading-relaxed font-medium"
              >
                {data.tagline}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-5"
            >
              <a href="#work">
                <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700 transition-all rounded-[20px] px-12 h-16 text-lg font-bold shadow-2xl shadow-blue-900/20">
                  Ver Proyectos
                  <ArrowRight size={20} className="ml-2" />
                </Button>
              </a>
            
            </motion.div>
          </div>

          {/* Technical Visual Element - Dark Mode */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block relative"
          >
            <div className="p-8 rounded-[40px] bg-zinc-900 border border-zinc-800 shadow-2xl relative overflow-hidden group">
               {/* Terminal Style Header */}
               <div className="flex gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
               </div>
               
               <div className="font-mono text-sm space-y-4 text-zinc-300">
                  <p className="flex gap-3">
                     <span className="text-blue-500 font-bold">$</span>
                     <span>whoami</span>
                  </p>
                  <p className="pl-6 text-zinc-500 italic">
                     &gt; Profesional Full-Stack enfocado en arquitectura escalable e impacto real.
                  </p>
                  
                  <p className="flex gap-3 pt-4">
                     <span className="text-blue-500 font-bold">$</span>
                     <span>ls stack/core</span>
                  </p>
                  <div className="pl-6 grid grid-cols-2 gap-2 text-zinc-500">
                     <span>node.js</span>
                     <span>flutter</span>
                     <span>mongodb</span>
                     <span>mysql</span>
                     <span>next.js</span>
                     <span>typescript</span>
                  </div>
                  
                  <p className="flex gap-3 pt-4">
                     <span className="text-blue-500 font-bold">$</span>
                     <span className="animate-pulse">_</span>
                  </p>
               </div>
               
               {/* Decorative Gradient Overlay */}
               <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-blue-500/10 pointer-events-none" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
