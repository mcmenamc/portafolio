"use client"

import { motion } from "framer-motion"
import { GraduationCap, Calendar, Terminal, CheckCircle2, Layers, Cpu, Database, Globe } from "lucide-react"

export default function Experience({ experience, education }: { experience: any[], education: any[] }) {
  return (
    <section id="experiencia" className="py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[40%] h-[100%] bg-zinc-50/50 -skew-x-6 translate-x-1/2 -z-10" />
      
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left: Professional Presentation & Experience */}
          <div className="lg:col-span-7 space-y-16">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] tracking-widest uppercase font-black">
                Presentación & Carrera
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-zinc-900 leading-none">
                Trayectoria en <span className="text-blue-600">Ingeniería</span>.
              </h2>
              <p className="text-zinc-500 text-lg font-medium leading-relaxed max-w-2xl">
                Mi enfoque combina el desarrollo ágil con una base sólida en arquitectura de software, asegurando que cada línea de código contribuya a un sistema escalable y mantenible.
              </p>
            </div>

            {/* Timeline Experience */}
            <div className="space-y-12 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-zinc-100">
              {experience.map((item, index) => {
                const isCurrent = item.isCurrent;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative pl-12 space-y-4"
                  >
                    {/* Timeline Dot */}
                    <div className={`absolute left-0 top-[6px] w-[24px] h-[24px] rounded-full bg-white border-4 ${isCurrent ? 'border-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.2)]' : 'border-zinc-200'} z-10 transition-all`} />
                    
                    <div className="space-y-2">
                       {isCurrent && (
                          <div className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] font-black text-blue-600">
                             <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-ping" />
                             Actualidad
                          </div>
                       )}
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                        <h3 className="text-2xl font-black text-zinc-900 tracking-tight">{item.role}</h3>
                        <span className="inline-flex items-center gap-2 text-zinc-400 text-xs font-bold uppercase tracking-widest">
                          <Calendar size={12} />
                          {item.period}
                        </span>
                      </div>
                      <div className="text-blue-600 font-black text-[11px] uppercase tracking-[0.3em]">
                        {item.company}
                      </div>
                    </div>

                    <ul className="grid grid-cols-1 gap-3">
                      {item.responsibilities.map((resp: string, i: number) => (
                        <li key={i} className="text-zinc-500 text-sm leading-relaxed flex gap-3 font-medium">
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-zinc-200 flex-shrink-0" />
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Right: Architecture Visual Presentation */}
          <div className="lg:col-span-5 space-y-12 lg:sticky lg:top-32">
            
            {/* System Architecture Visualization */}
            <div className="space-y-6">
               <div className="space-y-2">
                  <h3 className="text-xs font-black text-zinc-400 uppercase tracking-[0.3em] flex items-center gap-2">
                     <Layers size={14} className="text-blue-600" /> My Stack Architecture
                  </h3>
                  <p className="text-zinc-400 text-[11px] font-medium leading-relaxed">
                     Visualización de cómo integro mis herramientas principales en un ecosistema robusto.
                  </p>
               </div>

               <div className="space-y-3">
                  {/* UI Layer */}
                  <div className="p-5 rounded-3xl bg-white border border-zinc-100 shadow-sm flex items-center gap-5 group hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all">
                     <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                        <Globe size={20} />
                     </div>
                     <div>
                        <div className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Interface Layer</div>
                        <div className="text-sm font-black text-zinc-900">React · Next.js · Flutter</div>
                     </div>
                  </div>

                  {/* Logic Layer */}
                  <div className="p-5 rounded-3xl bg-white border border-zinc-100 shadow-sm flex items-center gap-5 group hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all ml-4">
                     <div className="w-12 h-12 rounded-2xl bg-zinc-50 flex items-center justify-center text-zinc-400 group-hover:bg-zinc-900 group-hover:text-white transition-all">
                        <Cpu size={20} />
                     </div>
                     <div>
                        <div className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Business Logic</div>
                        <div className="text-sm font-black text-zinc-900">Node.js · NestJS · Laravel</div>
                     </div>
                  </div>

                  {/* Infra Layer */}
                  <div className="p-5 rounded-3xl bg-white border border-zinc-100 shadow-sm flex items-center gap-5 group hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all ml-8">
                     <div className="w-12 h-12 rounded-2xl bg-zinc-50 flex items-center justify-center text-zinc-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                        <Database size={20} />
                     </div>
                     <div>
                        <div className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Infrastructure</div>
                        <div className="text-sm font-black text-zinc-900">AWS · PostgreSQL · Redis</div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Formación (Smaller / Refined) */}
            <div className="space-y-6 pt-12 border-t border-zinc-100">
               <h3 className="text-[10px] font-black text-zinc-900 uppercase tracking-[0.3em] flex items-center gap-2">
                  <GraduationCap size={16} className="text-zinc-300" /> Formación Académica
               </h3>
               <div className="space-y-4">
                  {education.map((item, index) => (
                     <div key={index} className="flex gap-4">
                        <div className="w-1 h-10 bg-zinc-100 rounded-full flex-shrink-0" />
                        <div>
                           <div className="text-xs font-black text-zinc-900">{item.degree}</div>
                           <div className="text-[10px] font-bold text-zinc-400 uppercase">{item.institution} · {item.period}</div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
