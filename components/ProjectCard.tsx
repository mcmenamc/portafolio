"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, BriefcaseBusiness, Database, Layout, Sparkles } from "lucide-react"
import Link from "next/link"
import ProjectCarousel from "./ProjectCarousel"

type ProjectMetric = { label: string; value: string }

type Project = {
  title: string
  subtitle: string
  description: string
  images: string[]
  tags: string[]
  link: string
  accentColor?: string
  ownership?: string
  impact?: string
  metrics?: ProjectMetric[]
  technicalSpecs: {
    architecture: string
    database: string
  }
}

export default function ProjectCard({ project, isFeatured }: { project: Project, isFeatured?: boolean }) {
  const [isHovered, setIsHovered] = useState(false)
  const accentColor = project.accentColor || "#0891b2"

  return (
    <motion.article
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -4 }}
      className={`group relative grid overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200/70 ${isFeatured ? 'gap-0 lg:grid-cols-[1.12fr_0.88fr]' : ''}`}
    >
      <div className={`relative bg-slate-100 ${isFeatured ? 'min-h-[20rem] lg:min-h-full' : 'aspect-video'}`}>
        <ProjectCarousel images={project.images} title={project.title} accentColor={accentColor} />
        <div className="absolute left-4 top-4 z-20 flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-slate-950 shadow-sm backdrop-blur">
            {isFeatured ? <Sparkles size={13} className="text-orange-500" /> : <BriefcaseBusiness size={13} className="text-slate-500" />}
            {project.ownership || (isFeatured ? "Producto propio" : "Proyecto")}
          </span>
        </div>
      </div>

      <div className="flex min-h-full flex-col p-6 sm:p-8">
        <div className="mb-6 flex items-start justify-between gap-5">
          <div className="space-y-2">
            <p className="text-[10px] font-black uppercase tracking-[0.24em]" style={{ color: accentColor }}>
              {project.subtitle}
            </p>
            <h3
              className={`font-black tracking-[-0.05em] text-slate-950 transition-colors duration-300 ${isFeatured ? 'text-4xl md:text-5xl' : 'text-2xl md:text-3xl'}`}
              style={{ color: isHovered ? accentColor : '#020617' }}
            >
              {project.title}
            </h3>
          </div>
          <Link
            href={project.link}
            target="_blank"
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-all hover:border-slate-950 hover:bg-slate-950 hover:text-white"
          >
            <ArrowUpRight size={20} />
          </Link>
        </div>

        <p className={`mb-6 font-medium leading-7 text-slate-600 ${isFeatured ? 'text-base md:text-lg' : 'text-sm'}`}>
          {project.description}
        </p>

        {project.impact && (
          <div className="mb-6 rounded-3xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-slate-400">Impacto / Contexto</p>
            <p className="mt-2 text-sm font-semibold leading-6 text-slate-700">{project.impact}</p>
          </div>
        )}

        {project.metrics && (
          <div className="mb-6 grid grid-cols-3 overflow-hidden rounded-3xl border border-slate-200">
            {project.metrics.map((metric) => (
              <div key={`${project.title}-${metric.label}`} className="border-r border-slate-200 p-4 last:border-r-0">
                <div className="text-xl font-black tracking-[-0.04em] text-slate-950">{metric.value}</div>
                <div className="mt-1 text-[9px] font-black uppercase tracking-[0.18em] text-slate-400">{metric.label}</div>
              </div>
            ))}
          </div>
        )}

        <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 p-4">
            <div className="flex items-center gap-2 text-slate-400">
              <Layout size={14} />
              <span className="text-[10px] font-black uppercase tracking-widest">Arquitectura</span>
            </div>
            <p className="mt-2 text-xs font-bold text-slate-950">{project.technicalSpecs.architecture}</p>
          </div>
          <div className="rounded-2xl border border-slate-200 p-4">
            <div className="flex items-center gap-2 text-slate-400">
              <Database size={14} />
              <span className="text-[10px] font-black uppercase tracking-widest">Data Stack</span>
            </div>
            <p className="mt-2 text-xs font-bold text-slate-950">{project.technicalSpecs.database}</p>
          </div>
        </div>

        <div className="mt-auto flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[10px] font-black text-slate-600 transition-all duration-300"
              style={{
                color: isHovered ? accentColor : undefined,
                borderColor: isHovered ? `${accentColor}30` : undefined,
                backgroundColor: isHovered ? `${accentColor}08` : undefined,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}
