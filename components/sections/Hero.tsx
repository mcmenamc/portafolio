"use client"

import { motion } from "framer-motion"
import { ArrowRight, Boxes, CircleDot, Code2, ReceiptText } from "lucide-react"

type HeroProps = {
  data: {
    role: string
    tagline: string
    email: string
    experience: string
  }
}

const highlights = [
  { label: "Producto propio", value: "Haz Factura" },
  { label: "Clientes activos", value: "10+" },
  { label: "Experiencia", value: "3+ años" },
]

export default function Hero({ data }: HeroProps) {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-[#0b0d10] pt-28 text-[#f4f0e8] sm:pt-32">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_20%,rgba(210,255,72,0.14),transparent_26%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.08),transparent_22%),linear-gradient(135deg,#0b0d10_0%,#12161c_55%,#07080a_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(244,240,232,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(244,240,232,0.055)_1px,transparent_1px)] bg-[size:42px_42px] [mask-image:linear-gradient(to_bottom,#000_0%,transparent_76%)]" />

      <div className="container mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl grid-cols-1 items-center gap-10 px-4 pb-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-3 border border-[#f4f0e8]/15 bg-[#f4f0e8]/5 px-4 py-2 text-[11px] font-black uppercase tracking-[0.26em] text-[#d2ff48]"
          >
            <CircleDot size={14} /> {data.experience} · Software Engineer
          </motion.div>

          <div className="space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="max-w-xl text-xs font-black uppercase tracking-[0.34em] text-[#f4f0e8]/45"
            >
              {data.role}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.72, delay: 0.1 }}
              className="max-w-5xl text-5xl font-black leading-[0.88] tracking-[-0.08em] text-balance sm:text-7xl lg:text-8xl"
            >
              Diseño sistemas con carácter, no portafolios clonados.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="max-w-2xl text-base font-medium leading-8 text-[#f4f0e8]/65 sm:text-xl"
            >
              {data.tagline} Presento cada proyecto como caso real: propiedad, rol, métricas, arquitectura y decisiones de producto.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <a href="#proyectos" className="group inline-flex items-center justify-center gap-3 bg-[#d2ff48] px-7 py-4 text-xs font-black uppercase tracking-[0.22em] text-[#0b0d10] transition hover:-translate-y-1 hover:bg-white">
              Ver casos <ArrowRight size={16} className="transition group-hover:translate-x-1" />
            </a>
            <a href={`mailto:${data.email}`} className="inline-flex items-center justify-center border border-[#f4f0e8]/20 px-7 py-4 text-xs font-black uppercase tracking-[0.22em] text-[#f4f0e8] transition hover:border-[#d2ff48] hover:text-[#d2ff48]">
              Hablemos
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.72, delay: 0.15 }}
          className="relative"
        >
          <div className="grid border border-[#f4f0e8]/15 bg-[#f4f0e8]/5 p-3 shadow-2xl shadow-black/30">
            <div className="border border-[#f4f0e8]/10 bg-[#0b0d10] p-5">
              <div className="mb-10 flex items-center justify-between text-[10px] font-black uppercase tracking-[0.26em] text-[#f4f0e8]/40">
                <span>Portfolio OS</span>
                <span>v3</span>
              </div>
              <div className="grid gap-3">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.label}
                    className="grid grid-cols-[auto_1fr] gap-4 border border-[#f4f0e8]/10 bg-[#f4f0e8]/[0.03] p-4"
                    animate={{ y: [0, index % 2 ? 8 : -8, 0] }}
                    transition={{ duration: 5 + index, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="flex h-11 w-11 items-center justify-center bg-[#d2ff48] text-[#0b0d10]">
                      {index === 0 ? <ReceiptText size={19} /> : index === 1 ? <Boxes size={19} /> : <Code2 size={19} />}
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-[0.24em] text-[#f4f0e8]/40">{item.label}</div>
                      <div className="mt-1 text-2xl font-black tracking-[-0.05em] text-[#f4f0e8]">{item.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-3 border border-[#d2ff48]/30 bg-[#d2ff48]/10 p-5">
                <p className="font-mono text-xs leading-7 text-[#f4f0e8]/75">
                  build(producto) → medir impacto → optimizar UX → escalar arquitectura
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
