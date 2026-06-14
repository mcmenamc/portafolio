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
      className={`group relative grid overflow-hidden border border-[#0b0d10]/15 bg-[#f7f4ee] shadow-[8px_8px_0_#0b0d10] transition-all duration-500 hover:-translate-y-1 hover:shadow-[12px_12px_0_#d2ff48] ${isFeatured ? 'gap-0 lg:grid-cols-[1.12fr_0.88fr]' : ''}`}
    >
      <div className={`relative bg-[#ded8cd] ${isFeatured ? 'min-h-[20rem] lg:min-h-full' : 'aspect-video'}`}>
        <ProjectCarousel images={project.images} title={project.title} accentColor={accentColor} />
        <div className="absolute left-4 top-4 z-20 flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-2 border border-[#0b0d10]/15 bg-[#f7f4ee]/95 px-3 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#0b0d10] shadow-sm backdrop-blur">
            {isFeatured ? <Sparkles size={13} className="text-[#0b0d10]" /> : <BriefcaseBusiness size={13} className="text-[#0b0d10]/60" />}
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
              className={`font-black tracking-[-0.05em] text-[#0b0d10] transition-colors duration-300 ${isFeatured ? 'text-4xl md:text-5xl' : 'text-2xl md:text-3xl'}`}
              style={{ color: isHovered ? accentColor : '#0b0d10' }}
            >
              {project.title}
            </h3>
          </div>
          <Link
            href={project.link}
            target="_blank"
            className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#0b0d10]/20 text-[#0b0d10]/60 transition-all hover:border-[#0b0d10] hover:bg-[#0b0d10] hover:text-[#d2ff48]"
          >
            <ArrowUpRight size={20} />
          </Link>
        </div>

        <p className={`mb-6 font-medium leading-7 text-[#0b0d10]/68 ${isFeatured ? 'text-base md:text-lg' : 'text-sm'}`}>
          {project.description}
        </p>

        {project.impact && (
          <div className="mb-6 border border-[#0b0d10]/15 bg-white/55 p-4">
            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#0b0d10]/40">Impacto / Contexto</p>
            <p className="mt-2 text-sm font-semibold leading-6 text-[#0b0d10]/70">{project.impact}</p>
          </div>
        )}

        {project.metrics && (
          <div className="mb-6 grid grid-cols-3 overflow-hidden border border-[#0b0d10]/15">
            {project.metrics.map((metric) => (
              <div key={`${project.title}-${metric.label}`} className="border-r border-[#0b0d10]/15 p-4 last:border-r-0">
                <div className="text-xl font-black tracking-[-0.04em] text-[#0b0d10]">{metric.value}</div>
                <div className="mt-1 text-[9px] font-black uppercase tracking-[0.18em] text-[#0b0d10]/40">{metric.label}</div>
              </div>
            ))}
          </div>
        )}

        <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="border border-[#0b0d10]/15 bg-white/40 p-4">
            <div className="flex items-center gap-2 text-[#0b0d10]/40">
              <Layout size={14} />
              <span className="text-[10px] font-black uppercase tracking-widest">Arquitectura</span>
            </div>
            <p className="mt-2 text-xs font-bold text-[#0b0d10]">{project.technicalSpecs.architecture}</p>
          </div>
          <div className="border border-[#0b0d10]/15 bg-white/40 p-4">
            <div className="flex items-center gap-2 text-[#0b0d10]/40">
              <Database size={14} />
              <span className="text-[10px] font-black uppercase tracking-widest">Data Stack</span>
            </div>
            <p className="mt-2 text-xs font-bold text-[#0b0d10]">{project.technicalSpecs.database}</p>
          </div>
        </div>

        <div className="mt-auto flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="border border-[#0b0d10]/15 bg-white/60 px-3 py-1.5 text-[10px] font-black text-[#0b0d10]/68 transition-all duration-300"
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
