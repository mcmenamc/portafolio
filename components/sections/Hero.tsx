"use client"

import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2, Code2, Layers3, Sparkles } from "lucide-react"

type HeroProps = {
  data: {
    role: string
    tagline: string
    email: string
    experience: string
  }
}

const principles = ["Producto propio", "Código mantenible", "UX rápida"]

export default function Hero({ data }: HeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-[#f7f3eb] pt-28 text-slate-950 sm:pt-32">
      <div className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-white to-transparent" />
      <div className="absolute -left-24 top-36 -z-10 h-72 w-72 rounded-full bg-cyan-200/50 blur-3xl" />
      <div className="absolute -right-24 top-20 -z-10 h-80 w-80 rounded-full bg-orange-200/60 blur-3xl" />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.06)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:linear-gradient(to_bottom,#000,transparent_82%)]" />

      <div className="container mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl grid-cols-1 items-center gap-12 px-4 pb-20 lg:grid-cols-[1.04fr_0.96fr]">
        <div className="space-y-9">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 rounded-full border border-slate-900/10 bg-white/70 px-4 py-2 text-[11px] font-black uppercase tracking-[0.22em] text-slate-700 shadow-sm backdrop-blur"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_0_6px_rgba(16,185,129,0.12)]" />
            {data.experience} · Full Stack con enfoque producto
          </motion.div>

          <div className="space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="max-w-xl text-sm font-black uppercase tracking-[0.28em] text-cyan-700"
            >
              {data.role}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="max-w-5xl text-5xl font-black leading-[0.9] tracking-[-0.075em] text-balance sm:text-7xl lg:text-8xl"
            >
              Software que se siente hecho a mano, pero escala como sistema.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="max-w-2xl text-base font-medium leading-8 text-slate-600 sm:text-xl"
            >
              {data.tagline} Mi objetivo: que cada pantalla tenga intención, cada módulo sea mantenible y cada producto se sienta distinto.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <a href="#proyectos" className="group inline-flex items-center justify-center gap-3 rounded-full bg-slate-950 px-7 py-4 text-xs font-black uppercase tracking-[0.2em] text-white shadow-xl shadow-slate-900/15 transition hover:-translate-y-1 hover:bg-cyan-700">
              Ver casos reales <ArrowRight size={16} className="transition group-hover:translate-x-1" />
            </a>
            <a href={`mailto:${data.email}`} className="inline-flex items-center justify-center rounded-full border border-slate-900/10 bg-white/70 px-7 py-4 text-xs font-black uppercase tracking-[0.2em] text-slate-950 backdrop-blur transition hover:border-cyan-700/30 hover:text-cyan-800">
              Crear algo juntos
            </a>
          </motion.div>

          <div className="grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
            {principles.map((item) => (
              <div key={item} className="flex items-center gap-2 rounded-2xl border border-slate-900/10 bg-white/55 px-4 py-3 text-sm font-bold text-slate-700 backdrop-blur">
                <CheckCircle2 size={16} className="text-cyan-700" /> {item}
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.14 }}
          className="relative mx-auto w-full max-w-[34rem]"
        >
          <div className="absolute inset-8 rounded-[2.75rem] bg-slate-950/10 blur-3xl" />
          <div className="relative rounded-[2.25rem] border border-slate-900/10 bg-white/75 p-4 shadow-2xl shadow-slate-900/10 backdrop-blur-xl sm:p-6">
            <div className="rounded-[1.75rem] bg-slate-950 p-5 text-white">
              <div className="mb-8 flex items-center justify-between">
                <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.22em] text-slate-400">
                  <Sparkles size={15} className="text-orange-300" /> Studio OS
                </div>
                <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-[10px] font-black text-emerald-200">Live</span>
              </div>
              <div className="space-y-4">
                <div className="rounded-3xl bg-white/[0.06] p-5 ring-1 ring-white/10">
                  <div className="mb-5 flex items-center justify-between text-xs font-bold text-slate-400">
                    <span>Proyecto propio</span>
                    <span>Haz Factura</span>
                  </div>
                  <div className="text-5xl font-black tracking-[-0.06em]">10+</div>
                  <div className="mt-2 text-sm font-medium leading-6 text-slate-300">clientes operando facturación y flujos administrativos reales.</div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-3xl bg-cyan-300 p-4 text-slate-950">
                    <Layers3 size={20} />
                    <div className="mt-5 text-2xl font-black">CFDI 4.0</div>
                    <p className="text-xs font-bold text-slate-700">SAT · PAC · S3</p>
                  </div>
                  <div className="rounded-3xl bg-orange-200 p-4 text-slate-950">
                    <Code2 size={20} />
                    <div className="mt-5 text-2xl font-black">Full stack</div>
                    <p className="text-xs font-bold text-slate-700">Web · API · Cloud</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
