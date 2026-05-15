"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Database, Layout } from "lucide-react"
import Link from "next/link"
import ProjectCarousel from "./ProjectCarousel"

export default function ProjectCard({ project }: { project: any }) {
  const accentColor = project.accentColor || "#3B82F6";

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-[32px] border border-zinc-100 bg-white p-6 flex flex-col transition-all duration-500 hover:border-blue-100 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.05)]"
    >
      {/* Visual Indicator - Top Bar */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <div 
            className="w-1.5 h-1.5 rounded-full animate-pulse" 
            style={{ backgroundColor: accentColor }}
          />
          <span className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-400">
            Optimización & Escala
          </span>
        </div>
        <Link 
          href={project.link} 
          target="_blank" 
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-50 border border-zinc-100 text-zinc-500 group-hover:text-zinc-900 group-hover:bg-white transition-all text-[9px] font-black uppercase tracking-widest"
        >
          Ver Más
          <ArrowUpRight size={12} style={{ color: accentColor }} />
        </Link>
      </div>

      <div className="mb-6 relative rounded-2xl overflow-hidden border border-zinc-50 transition-colors">
        <ProjectCarousel images={project.images} title={project.title} />
      </div>

      <div className="space-y-4 flex-1">
        <div className="space-y-1.5">
          <h3 className="text-xl font-black text-zinc-900 tracking-tight leading-none">
            {project.title}
          </h3>
          <p className="font-black text-[9px] uppercase tracking-[0.2em]" style={{ color: accentColor }}>
            {project.subtitle}
          </p>
        </div>

        <p className="text-zinc-500 text-xs leading-relaxed line-clamp-3 font-medium">
          {project.description}
        </p>

        {/* Technical Specs - Premium Badges */}
        <div className="grid grid-cols-2 gap-3">
          <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100 flex flex-col gap-2 group-hover:bg-white transition-colors">
            <div className="flex items-center gap-2">
               <Layout size={14} style={{ color: accentColor }} />
               <span className="text-[9px] font-black text-zinc-400 uppercase tracking-widest">Arquitectura</span>
            </div>
            <p className="text-xs font-bold text-zinc-900">{project.technicalSpecs.architecture}</p>
          </div>
          <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100 flex flex-col gap-2 group-hover:bg-white transition-colors">
            <div className="flex items-center gap-2">
               <Database size={14} className="text-green-600" />
               <span className="text-[9px] font-black text-zinc-400 uppercase tracking-widest">Data Stack</span>
            </div>
            <p className="text-xs font-bold text-zinc-900">{project.technicalSpecs.database}</p>
          </div>
        </div>
      </div>

      {/* Tech Tags - Minimalist Pill style */}
      <div className="mt-8 pt-6 border-t border-zinc-50 flex flex-wrap gap-2">
        {project.tags.map((tag: string) => (
          <span 
            key={tag} 
            className="px-3 py-1.5 text-[9px] font-black uppercase tracking-wider rounded-lg bg-zinc-50 border border-zinc-100 text-zinc-500 hover:text-zinc-900 transition-all cursor-default"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Background Decorative Accent */}
      <div 
        className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full blur-[80px] pointer-events-none opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-700" 
        style={{ backgroundColor: accentColor }}
      />
    </motion.div>
  )
}

