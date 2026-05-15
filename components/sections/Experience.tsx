"use client"

import { motion } from "framer-motion"
import { GraduationCap, MapPin, Calendar, Terminal, CheckCircle2 } from "lucide-react"

export default function Experience({ experience, education }: { experience: any[], education: any[] }) {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Experience Column */}
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] tracking-widest uppercase">
                Ciclo de Vida de Producto
              </div>
              <h2 className="text-3xl font-black tracking-tight text-zinc-900 flex items-center gap-3">
                <Terminal className="text-blue-600" size={28} />
                Trayectoria Técnica
              </h2>
            </div>

            <div className="space-y-10 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-zinc-100">
              {experience.map((item, index) => {
                const isCurrent = item.isCurrent;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`relative pl-10 space-y-3 ${isCurrent ? 'group' : ''}`}
                  >
                    {/* Timeline Dot */}
                    <div className={`absolute left-0 top-[6px] w-[24px] h-[24px] rounded-full bg-white border-4 ${isCurrent ? 'border-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.1)]' : 'border-zinc-200'} z-10 transition-all`} />
                    
                    <div className="space-y-1.5">
                       {isCurrent && (
                          <div className="inline-flex items-center gap-1.5 text-[9px] uppercase tracking-[0.2em] font-black text-blue-600 mb-0.5">
                             <CheckCircle2 size={11} /> Actualidad
                          </div>
                       )}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <h3 className="text-xl font-black text-zinc-900">{item.role}</h3>
                        <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-xl bg-zinc-50 border border-zinc-100 text-zinc-500 text-[9px] font-black uppercase tracking-widest">
                          <Calendar size={11} />
                          {item.period}
                        </span>
                      </div>
                      <div className="text-zinc-400 font-bold text-base uppercase tracking-wider">
                        {item.company}
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {item.responsibilities.map((resp: string, i: number) => (
                        <li key={i} className="text-zinc-500 text-sm leading-relaxed flex gap-3 font-medium">
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" />
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
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-500 text-[10px] tracking-widest uppercase">
                Base Académica
              </div>
              <h2 className="text-3xl font-black tracking-tight text-zinc-900 flex items-center gap-3">
                <GraduationCap className="text-zinc-300" size={28} />
                Formación
              </h2>
            </div>

            <div className="space-y-5">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-[32px] border border-zinc-100 bg-zinc-50/50 shadow-sm hover:bg-white hover:border-blue-100 hover:shadow-2xl hover:shadow-blue-500/5 transition-all space-y-3 group"
                >
                  <div className="space-y-1">
                    <div className="text-[9px] font-black text-zinc-400 uppercase tracking-widest">{item.period}</div>
                    <h3 className="text-lg font-black text-zinc-900 leading-tight group-hover:text-blue-600 transition-colors">
                      {item.degree}
                    </h3>
                  </div>
                  
                  <div className="flex items-center gap-2 text-zinc-500 text-[10px] font-bold">
                    <MapPin size={12} className="text-zinc-300" />
                    {item.institution}
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Engineer Stats Card */}
            <div className="p-6 rounded-[32px] bg-zinc-900 text-white space-y-3 shadow-2xl relative overflow-hidden">
               <h4 className="text-[9px] uppercase tracking-widest font-black text-blue-400">Perfil de Ingeniería</h4>
               <p className="text-zinc-400 text-xs font-medium leading-relaxed">
                  Experto en arquitectura y despliegue de soluciones escalables con enfoque en performance.
               </p>
               <div className="flex gap-8 pt-2">
                  <div className="flex flex-col">
                     <span className="text-3xl font-black text-white">3+</span>
                     <span className="text-[9px] text-zinc-500 uppercase font-black tracking-widest">Años Exp.</span>
                  </div>
                  <div className="w-[1px] h-10 bg-zinc-800" />
                  <div className="flex flex-col">
                     <span className="text-3xl font-black text-white">7K+</span>
                     <span className="text-[9px] text-zinc-500 uppercase font-black tracking-widest">Descargas</span>
                  </div>
               </div>
               <div className="absolute top-0 right-0 p-6 opacity-10">
                  <Terminal size={80} />
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
