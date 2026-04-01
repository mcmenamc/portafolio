"use client"

import { motion } from "framer-motion"
import { ExternalLink, ArrowUpRight, Database, Layout, Cpu, Terminal } from "lucide-react"
import Link from "next/link"
import ProjectCarousel from "./ProjectCarousel"

export default function ProjectCard({ project }: { project: any }) {
  return (
    <motion.div
      whileHover={{ y: -12 }}
      className="group relative overflow-hidden rounded-[32px] border border-zinc-800 bg-zinc-900/50 p-6 flex flex-col transition-all duration-500 hover:bg-zinc-900 hover:border-zinc-700 hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.8)]"
    >
      {/* Visual Indicator - Top Bar */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 font-mono">
            Ship Ready
          </span>
        </div>
        <Link 
          href={project.link} 
          target="_blank" 
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-400 group-hover:text-blue-500 group-hover:border-blue-500/30 transition-all text-[10px] font-bold uppercase tracking-wider"
        >
          Explorar
          <ArrowUpRight size={14} />
        </Link>
      </div>

      <div className="mb-8 relative rounded-2xl overflow-hidden border border-zinc-800/50">
        <ProjectCarousel images={project.images} title={project.title} />
      </div>

      <div className="space-y-6">
        <div className="space-y-1">
          <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight leading-none">
            {project.title}
          </h3>
          <p className="text-blue-500 font-bold text-xs uppercase tracking-widest">
            {project.subtitle}
          </p>
        </div>

        <p className="text-zinc-400 text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Technical Specs - Premium Badges */}
        <div className="grid grid-cols-2 gap-3">
          <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800/50 flex flex-col gap-2">
            <div className="flex items-center gap-2">
               <Layout size={14} className="text-blue-500" />
               <span className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest font-mono">Arquetipo</span>
            </div>
            <p className="text-xs font-bold text-zinc-200">{project.technicalSpecs.architecture}</p>
          </div>
          <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800/50 flex flex-col gap-2">
            <div className="flex items-center gap-2">
               <Database size={14} className="text-green-500" />
               <span className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest font-mono">Persistencia</span>
            </div>
            <p className="text-xs font-bold text-zinc-200">{project.technicalSpecs.database}</p>
          </div>
        </div>
      </div>

      {/* Tech Tags - Minimalist Pill style */}
      <div className="mt-10 pt-6 border-t border-zinc-800 flex flex-wrap gap-2">
        {project.tags.map((tag: string) => (
          <span 
            key={tag} 
            className="px-3 py-1 text-[9px] font-black uppercase tracking-wider rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-500 group-hover:text-zinc-300 group-hover:border-zinc-700 transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Background Decorative Accent */}
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-500/5 rounded-full blur-[60px] pointer-events-none group-hover:bg-blue-500/10 transition-colors duration-500" />
    </motion.div>
  )
}
