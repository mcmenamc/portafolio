"use client"

import { motion } from "framer-motion"
import { ArrowRight, Code2, Terminal, Sparkles, Cpu, Globe, Zap } from "lucide-react"

export default function Hero({ data }: { data: any }) {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-b from-blue-50/50 to-white">
      {/* Background: Technical Grid & Interactive Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-100" />
        
        {/* Animated Depth Blobs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.4, 0.3] 
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-200/20 rounded-full blur-[120px] -z-10" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1] 
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-indigo-200/20 rounded-full blur-[120px] -z-10" 
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Content Side */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* High-End Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/80 backdrop-blur-md border border-blue-100/50 text-zinc-900 shadow-[0_8px_30px_rgb(0,0,0,0.04)] group cursor-default"
            >
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center border-2 border-white shadow-lg shadow-blue-200">
                  <Terminal size={14} className="text-white" />
                </div>
                <div className="w-8 h-8 rounded-xl bg-zinc-900 flex items-center justify-center border-2 border-white shadow-lg shadow-zinc-200">
                  <Code2 size={14} className="text-white" />
                </div>
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] ml-1">
                Full Stack Software Engineer
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse ml-1" />
            </motion.div>

            {/* Editorial Headline */}
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-zinc-900 leading-[0.95] md:leading-[1.05]"
              >
                Construyendo <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700">Sistemas</span> de <br />
                Alto Impacto<span className="text-blue-600">.</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-zinc-500 text-lg md:text-xl font-medium leading-relaxed max-w-2xl"
              >
                Especializado en el desarrollo de arquitecturas escalables y optimización de productos digitales con un enfoque en 
                <span className="text-zinc-900 font-black mx-2 border-b-4 border-blue-600/10">Clean Code</span> 
                y rendimiento extremo.
              </motion.p>
            </div>

            {/* Premium CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-6"
            >
              <a
                href="#proyectos"
                className="group relative px-10 py-5 bg-zinc-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest overflow-hidden transition-all hover:bg-zinc-800 shadow-2xl shadow-zinc-200"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Ver Proyectos
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </a>
              <a
                href="#contacto"
                className="px-10 py-5 bg-white border border-zinc-200 text-zinc-900 rounded-2xl font-black text-xs uppercase tracking-widest hover:border-zinc-900 hover:bg-zinc-50 transition-all shadow-sm"
              >
                Hablemos
              </a>
            </motion.div>
          </div>

          {/* Side Component: Professional Architecture Card */}
          <div className="hidden lg:block lg:col-span-4 relative">
             <motion.div
                initial={{ opacity: 0, scale: 0.9, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative z-20 p-10 rounded-[56px] border border-blue-100/50 bg-white shadow-[0_40px_80px_-20px_rgba(0,0,0,0.06)] space-y-10 group"
             >
                <div className="flex justify-between items-start">
                   <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-xl shadow-blue-200 transform group-hover:scale-110 transition-transform duration-500">
                      <Sparkles size={28} />
                   </div>
                   <div className="text-right">
                      <div className="text-[10px] font-black text-zinc-300 uppercase tracking-widest">System Status</div>
                      <div className="text-[10px] font-black text-green-500 uppercase tracking-widest flex items-center gap-2 justify-end">
                         <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                         Operational
                      </div>
                   </div>
                </div>

                <div className="space-y-6">
                   <div className="flex gap-4">
                      <div className="p-2 rounded-lg bg-zinc-50 border border-zinc-100 text-zinc-400 group-hover:text-blue-600 transition-colors">
                         <Cpu size={16} />
                      </div>
                      <div className="p-2 rounded-lg bg-zinc-50 border border-zinc-100 text-zinc-400 group-hover:text-blue-600 transition-colors">
                         <Globe size={16} />
                      </div>
                      <div className="p-2 rounded-lg bg-zinc-50 border border-zinc-100 text-zinc-400 group-hover:text-blue-600 transition-colors">
                         <Zap size={16} />
                      </div>
                   </div>
                   <div className="space-y-3">
                      <h4 className="text-2xl font-black text-zinc-900 tracking-tight leading-none">
                         Arquitectura <br/>de Sistemas
                      </h4>
                      <p className="text-zinc-500 text-sm font-medium leading-relaxed">
                         Enfoque en escalabilidad masiva y optimización de infraestructura Cloud.
                      </p>
                   </div>
                </div>

                {/* Progress Indicators */}
                <div className="space-y-3 pt-6 border-t border-zinc-50">
                   <div className="flex justify-between text-[9px] font-black uppercase text-zinc-400">
                      <span>Performance</span>
                      <span className="text-blue-600">99%</span>
                   </div>
                   <div className="h-1 w-full bg-zinc-50 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "99%" }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="h-full bg-blue-600" 
                      />
                   </div>
                </div>
             </motion.div>

             {/* Background shapes for depth */}
             <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full rounded-[56px] bg-blue-50/50 border border-blue-100/20" />
          </div>
        </div>

        {/* Bottom Refined Tech Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-24 pt-10 border-t border-zinc-100 flex flex-col md:flex-row items-center gap-12"
        >
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-300">Expertise Core</span>
          <div className="flex flex-wrap justify-center md:justify-start gap-x-12 gap-y-6">
             {['REACT', 'NODE.JS', 'TYPESCRIPT', 'AWS', 'FLUTTER', 'LARAVEL', 'MONGODB'].map((tech) => (
               <span key={tech} className="text-xs font-black text-zinc-400 hover:text-zinc-900 hover:scale-110 transition-all cursor-default tracking-tighter">
                 {tech}
               </span>
             ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
