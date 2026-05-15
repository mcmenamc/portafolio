"use client"

import { motion } from "framer-motion"
import { ArrowRight, Code2, Sparkles, Terminal } from "lucide-react"

export default function Hero({ data }: { data: any }) {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-white">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f4f4f5_1px,transparent_1px),linear-gradient(to_bottom,#f4f4f5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60" />
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-500/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl space-y-10">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-zinc-50 border border-zinc-100 text-zinc-900 shadow-sm"
          >
            <div className="flex -space-x-2">
              <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center border-2 border-white">
                <Terminal size={12} className="text-white" />
              </div>
              <div className="w-6 h-6 rounded-full bg-zinc-900 flex items-center justify-center border-2 border-white">
                <Code2 size={12} className="text-white" />
              </div>
            </div>
            <span className="text-xs font-black uppercase tracking-[0.2em] ml-2">
              Ingeniero de Software Full Stack
            </span>
          </motion.div>

          {/* Main Title */}
          <div className="space-y-3">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight text-zinc-900 leading-[1.1] md:leading-[1.05]"
            >
              Construyendo <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Sistemas</span> de <br />
              Alto Impacto<span className="text-blue-600">.</span>
            </motion.h1>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-zinc-500 text-sm md:text-base font-medium leading-relaxed max-w-lg"
          >
            Especializado en el desarrollo de arquitecturas escalables y optimización de productos digitales. Con 
            <span className="text-zinc-900 font-bold mx-1">3+ años de experiencia</span> 
            transformando ideas en soluciones técnicas robustas.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <a
              href="#work"
              className="group relative px-6 py-3 bg-zinc-900 text-white rounded-xl font-black text-[10px] uppercase tracking-widest overflow-hidden transition-all hover:bg-zinc-800 shadow-xl shadow-zinc-200"
            >
              <span className="relative z-10 flex items-center gap-2">
                Ver Proyectos
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-white border border-zinc-200 text-zinc-900 rounded-xl font-black text-[10px] uppercase tracking-widest hover:border-zinc-900 transition-all"
            >
              Hablemos
            </a>
          </motion.div>

          {/* Skills / Tech shortcut */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="pt-12 flex items-center gap-8 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Expertise en</span>
            <div className="flex gap-8 font-black text-zinc-900 text-sm tracking-tighter">
              <span>REACT</span>
              <span>NODE.JS</span>
              <span>TYPESCRIPT</span>
              <span>AWS</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative side element */}
      <div className="absolute right-[-5%] top-[20%] hidden xl:block">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative w-80 h-80 rounded-[60px] border border-zinc-100 bg-zinc-50/50 p-8 flex flex-col justify-between shadow-sm"
        >
          <div className="flex justify-between items-start">
            <div className="p-4 rounded-3xl bg-white shadow-sm">
               <Sparkles className="text-blue-600" size={32} />
            </div>
            <div className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Status: Online</div>
          </div>
          <div className="space-y-4">
            <h4 className="text-2xl font-black text-zinc-900 tracking-tight leading-none">
              Código Limpio &<br />Escalable
            </h4>
            <p className="text-zinc-500 text-sm font-medium leading-relaxed">
              Enfoque en performance y mantenibilidad a largo plazo.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
