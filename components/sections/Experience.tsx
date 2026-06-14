"use client"

import { motion } from "framer-motion"
import { Calendar, Cpu, Database, GraduationCap, Layers, MonitorSmartphone } from "lucide-react"

export default function Experience({ experience, education }: { experience: any[], education: any[] }) {
  const architecture = [
    { icon: MonitorSmartphone, label: "Frontend", value: "React · Next · Flutter" },
    { icon: Cpu, label: "Backend", value: "Node · Nest · Laravel" },
    { icon: Database, label: "Infra", value: "AWS · Mongo · MySQL" },
  ]

  return (
    <section id="experiencia" className="relative overflow-hidden bg-[#f7f4ee] py-28 text-[#0b0d10]">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <div className="mb-14 space-y-5 border-b border-[#0b0d10]/15 pb-10">
              <div className="inline-flex border border-[#0b0d10]/15 px-3 py-1 text-[10px] font-black uppercase tracking-[0.28em] text-[#6b7f00]">
                Trayectoria
              </div>
              <h2 className="text-4xl font-black leading-[0.9] tracking-[-0.06em] md:text-6xl">
                Experiencia con foco en entrega real.
              </h2>
              <p className="max-w-2xl text-base font-medium leading-8 text-[#0b0d10]/65">
                He trabajado productos web y móviles cuidando arquitectura, operación y una interfaz que no estorbe al negocio.
              </p>
            </div>

            <div className="space-y-5">
              {experience.map((item, index) => (
                <motion.article
                  key={item.company}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="border border-[#0b0d10]/15 bg-white/55 p-6 shadow-[6px_6px_0_rgba(11,13,16,0.12)]"
                >
                  <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                    <div>
                      <h3 className="text-2xl font-black tracking-[-0.04em]">{item.role}</h3>
                      <p className="mt-1 text-[11px] font-black uppercase tracking-[0.22em] text-[#6b7f00]">{item.company}</p>
                    </div>
                    <span className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#0b0d10]/45">
                      <Calendar size={13} /> {item.period}
                    </span>
                  </div>
                  <ul className="grid gap-3">
                    {item.responsibilities.map((resp: string) => (
                      <li key={resp} className="flex gap-3 text-sm font-medium leading-7 text-[#0b0d10]/65">
                        <span className="mt-2 h-2 w-2 shrink-0 bg-[#d2ff48] ring-1 ring-[#0b0d10]" />
                        {resp}
                      </li>
                    ))}
                  </ul>
                </motion.article>
              ))}
            </div>
          </div>

          <div className="lg:sticky lg:top-28 lg:col-span-5">
            <div className="border border-[#0b0d10]/15 bg-[#0b0d10] p-6 text-[#f4f0e8] shadow-[10px_10px_0_#d2ff48]">
              <div className="mb-8 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.28em] text-[#d2ff48]">
                <Layers size={15} /> Arquitectura personal
              </div>
              <div className="space-y-3">
                {architecture.map((item) => (
                  <div key={item.label} className="flex items-center gap-4 border border-[#f4f0e8]/10 bg-[#f4f0e8]/5 p-4">
                    <div className="flex h-11 w-11 items-center justify-center bg-[#d2ff48] text-[#0b0d10]">
                      <item.icon size={19} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#f4f0e8]/40">{item.label}</p>
                      <p className="text-sm font-black">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 border-t border-[#f4f0e8]/10 pt-6">
                <h3 className="mb-5 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.24em] text-[#f4f0e8]/45">
                  <GraduationCap size={16} /> Formación
                </h3>
                <div className="space-y-4">
                  {education.map((item) => (
                    <div key={item.degree} className="border-l-2 border-[#d2ff48] pl-4">
                      <p className="text-sm font-black">{item.degree}</p>
                      <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#f4f0e8]/45">{item.institution} · {item.period}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
