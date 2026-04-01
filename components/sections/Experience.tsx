"use client"

import { motion } from "framer-motion"
import { Briefcase, GraduationCap, MapPin, Calendar, Terminal, CheckCircle2 } from "lucide-react"

export default function Experience({ experience, education }: { experience: any[], education: any[] }) {
  return (
    <section id="experience" className="py-24 bg-zinc-950 border-t border-zinc-900">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Experience Column */}
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-blue-500 text-[10px] font-mono tracking-widest uppercase">
                Ciclo de Vida de Producto
              </div>
              <h2 className="text-4xl font-black tracking-tight text-zinc-100 flex items-center gap-3">
                <Terminal className="text-blue-500" size={32} />
                Trayectoria Técnica
              </h2>
            </div>

            <div className="space-y-12 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-zinc-900">
              {experience.map((item, index) => {
                const isCurrent = item.isCurrent;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`relative pl-10 space-y-4 ${isCurrent ? 'group' : ''}`}
                  >
                    {/* Timeline Dot */}
                    <div className={`absolute left-0 top-[6px] w-[24px] h-[24px] rounded-full bg-zinc-950 border-4 ${isCurrent ? 'border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]' : 'border-zinc-800'} z-10 transition-all`} />
                    
                    <div className="space-y-2">
                       {isCurrent && (
                          <div className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider font-extrabold text-blue-500 mb-1 font-mono">
                             <CheckCircle2 size={12} /> Actual
                          </div>
                       )}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <h3 className="text-2xl font-bold text-zinc-100">{item.role}</h3>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-semibold">
                          <Calendar size={12} />
                          {item.period}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-zinc-500 font-bold text-lg">
                        {item.company}
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {item.responsibilities.map((resp: string, i: number) => (
                        <li key={i} className="text-zinc-400 text-base leading-relaxed flex gap-3">
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Education Column */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-500 text-[10px] font-mono tracking-widest uppercase">
                Base Académica
              </div>
              <h2 className="text-4xl font-black tracking-tight text-zinc-100 flex items-center gap-3">
                <GraduationCap className="text-zinc-600" size={32} />
                Formación
              </h2>
            </div>

            <div className="space-y-6">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-[40px] border border-zinc-800 bg-zinc-900 shadow-2xl hover:bg-zinc-800/50 transition-all space-y-4 group"
                >
                  <div className="space-y-1">
                    <div className="text-[10px] font-extrabold text-zinc-500 uppercase tracking-widest font-mono">{item.period}</div>
                    <h3 className="text-xl font-extrabold text-zinc-100 leading-tight group-hover:text-blue-500 transition-colors">
                      {item.degree}
                    </h3>
                  </div>
                  
                  <div className="flex items-center gap-2 text-zinc-500 text-sm font-semibold">
                    <MapPin size={14} className="text-zinc-600" />
                    {item.institution}
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Engineer Stats Card */}
            <div className="p-8 rounded-[40px] bg-white text-zinc-950 space-y-4 shadow-[0_0_30px_rgba(59,130,246,0.1)]">
               <h4 className="text-sm uppercase tracking-widest font-black">Ingeniería Full-Stack</h4>
               <p className="text-zinc-600 text-sm font-medium leading-relaxed">
                  Experto en arquitectura y despliegue de soluciones escalables. Enfoque en performance de bases de datos y optimización de red.
               </p>
               <div className="flex gap-6 pt-4">
                  <div className="flex flex-col">
                     <span className="text-3xl font-black text-blue-600">5+</span>
                     <span className="text-[10px] text-zinc-400 uppercase font-bold tracking-widest">Años de Exp.</span>
                  </div>
                  <div className="w-[1px] h-10 bg-zinc-200" />
                  <div className="flex flex-col">
                     <span className="text-3xl font-black text-blue-600">20+</span>
                     <span className="text-[10px] text-zinc-400 uppercase font-bold tracking-widest">Despliegues</span>
                  </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
