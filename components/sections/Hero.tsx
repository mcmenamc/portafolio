"use client"

import { motion } from "framer-motion"
import { ArrowRight, Braces, Cpu, GitBranch, Radar, Sparkles } from "lucide-react"

type HeroProps = {
  data: {
    role: string
    tagline: string
    email: string
    experience: string
  }
}

const signalCards = [
  { icon: Cpu, label: "Latency budget", value: "< 120ms" },
  { icon: GitBranch, label: "Arquitectura", value: "Composable" },
  { icon: Braces, label: "Código", value: "SOLID" },
]

export default function Hero({ data }: HeroProps) {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-[#060812] pt-28 text-white sm:pt-32">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_20%,rgba(34,211,238,0.24),transparent_28%),radial-gradient(circle_at_82%_10%,rgba(168,85,247,0.2),transparent_24%),linear-gradient(135deg,#060812_0%,#0a1020_48%,#101827_100%)]" />
      <div className="absolute inset-0 -z-10 opacity-[0.16] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_80%_55%_at_50%_35%,#000_20%,transparent_82%)]" />
      <motion.div
        aria-hidden="true"
        className="absolute left-1/2 top-28 -z-10 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full border border-cyan-300/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute left-1/2 top-40 -z-10 h-[22rem] w-[22rem] -translate-x-1/2 rounded-full border border-fuchsia-300/20 border-dashed"
        animate={{ rotate: -360 }}
        transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
      />

      <div className="container mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl grid-cols-1 items-center gap-12 px-4 pb-20 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-[11px] font-black uppercase tracking-[0.24em] text-cyan-100 shadow-2xl shadow-cyan-950/40 backdrop-blur"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-300" />
            </span>
            Disponible · {data.experience} construyendo producto
          </motion.div>

          <div className="space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.05 }}
              className="text-sm font-bold uppercase tracking-[0.34em] text-white/45"
            >
              {data.role}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.12 }}
              className="max-w-5xl text-5xl font-black leading-[0.9] tracking-[-0.08em] text-balance sm:text-7xl lg:text-8xl"
            >
              Interfaces con alma de <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-sky-300 to-fuchsia-300">sistema vivo</span>.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2 }}
              className="max-w-2xl text-base font-medium leading-8 text-slate-300 sm:text-xl"
            >
              {data.tagline} Diseño experiencias rápidas, responsivas y memorables sin sacrificar mantenibilidad.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.28 }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <a href="#proyectos" className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-xs font-black uppercase tracking-[0.22em] text-slate-950 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/20">
              Explorar sistemas <ArrowRight size={16} className="transition group-hover:translate-x-1" />
            </a>
            <a href={`mailto:${data.email}`} className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/[0.04] px-7 py-4 text-xs font-black uppercase tracking-[0.22em] text-white backdrop-blur transition hover:border-cyan-200/50 hover:bg-cyan-200/10">
              Diseñemos algo único
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.18 }}
          className="relative mx-auto w-full max-w-[34rem]"
        >
          <div className="absolute inset-6 rounded-[3rem] bg-cyan-300/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.07] p-5 shadow-2xl shadow-black/40 backdrop-blur-xl sm:rounded-[3rem] sm:p-7">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div className="flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-rose-400" /><span className="h-3 w-3 rounded-full bg-amber-300" /><span className="h-3 w-3 rounded-full bg-emerald-300" /></div>
              <span className="text-[10px] font-black uppercase tracking-[0.28em] text-white/35">mena.kernel</span>
            </div>
            <div className="grid gap-4 py-6">
              {signalCards.map((card, index) => (
                <motion.div
                  key={card.label}
                  className="flex items-center justify-between rounded-3xl border border-white/10 bg-slate-950/35 p-4"
                  animate={{ x: [0, index % 2 ? 8 : -8, 0] }}
                  transition={{ duration: 6 + index, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="flex items-center gap-3"><card.icon className="text-cyan-200" size={20} /><span className="text-sm font-bold text-slate-300">{card.label}</span></div>
                  <span className="font-mono text-sm font-black text-white">{card.value}</span>
                </motion.div>
              ))}
            </div>
            <div className="rounded-[2rem] bg-slate-950/70 p-5 font-mono text-xs leading-7 text-slate-300 ring-1 ring-white/10">
              <p><span className="text-fuchsia-300">const</span> producto = build(&#123;</p>
              <p className="pl-4 text-cyan-200">performance: &quot;rápido&quot;,</p>
              <p className="pl-4 text-emerald-200">responsive: true,</p>
              <p className="pl-4 text-amber-200">wow: &quot;sin plantilla&quot;</p>
              <p>&#125;)</p>
            </div>
          </div>
          <motion.div className="absolute -right-4 -top-4 rounded-3xl border border-cyan-200/20 bg-cyan-200/10 p-4 backdrop-blur" animate={{ y: [0, -14, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
            <Radar className="text-cyan-100" />
          </motion.div>
          <motion.div className="absolute -bottom-5 left-8 rounded-full border border-fuchsia-200/20 bg-fuchsia-200/10 p-4 backdrop-blur" animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
            <Sparkles className="text-fuchsia-100" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
