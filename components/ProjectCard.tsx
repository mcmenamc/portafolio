"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, Database, Layout, Star } from "lucide-react"
import Link from "next/link"
import ProjectCarousel from "./ProjectCarousel"

export default function ProjectCard({ project, isFeatured }: { project: any, isFeatured?: boolean }) {
  const [isHovered, setIsHovered] = useState(false);
  const accentColor = project.accentColor || "#3B82F6";

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -4 }}
      className={`group relative flex flex-col bg-white transition-all duration-500 ${isFeatured ? 'lg:flex-row lg:gap-16 lg:items-center' : ''}`}
    >
      {/* Image Container */}
      <div className={`relative aspect-video rounded-[32px] overflow-hidden bg-zinc-50 border border-zinc-100 group-hover:border-zinc-200 transition-colors ${isFeatured ? 'lg:flex-1 lg:aspect-[16/10]' : ''}`}>
        <ProjectCarousel images={project.images} title={project.title} accentColor={accentColor} />
        {isFeatured && (
          <div className="absolute top-6 left-6 z-20 flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/90 backdrop-blur-md border border-zinc-100 shadow-sm">
            <Star size={14} className="fill-yellow-400 text-yellow-400" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-900">Proyecto Destacado</span>
          </div>
        )}
      </div>

      <div className={`pt-8 flex flex-col flex-1 ${isFeatured ? 'lg:pt-0' : ''}`}>
        {/* Header: Title and Link */}
        <div className="flex justify-between items-start gap-4 mb-6">
          <div className="space-y-1">
            <h3 
              className={`font-black tracking-tight text-zinc-900 transition-colors duration-300 ${isFeatured ? 'text-3xl md:text-5xl' : 'text-xl md:text-2xl'}`}
              style={{ color: isHovered ? accentColor : '#18181b' }}
            >
              {project.title}
            </h3>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-60" style={{ color: accentColor }}>
              {project.subtitle}
            </p>
          </div>
          
          <Link 
            href={project.link} 
            target="_blank" 
            className="flex items-center justify-center w-12 h-12 rounded-full border border-zinc-100 text-zinc-400 hover:text-zinc-900 hover:border-zinc-900 hover:bg-zinc-50 transition-all group/link shadow-sm"
          >
            <ArrowUpRight size={20} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        <p className={`text-zinc-500 font-medium leading-relaxed mb-8 ${isFeatured ? 'text-lg max-w-xl' : 'text-sm'}`}>
          {project.description}
        </p>

        {/* Technical Specs */}
        <div className={`grid grid-cols-2 gap-8 mb-8 py-8 border-y border-zinc-100 ${isFeatured ? 'max-w-md' : ''}`}>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-zinc-400">
               <Layout size={14} />
               <span className="text-[10px] font-bold uppercase tracking-widest">Arquitectura</span>
            </div>
            <p className="text-xs font-bold text-zinc-900">{project.technicalSpecs.architecture}</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-zinc-400">
               <Database size={14} />
               <span className="text-[10px] font-bold uppercase tracking-widest">Data Stack</span>
            </div>
            <p className="text-xs font-bold text-zinc-900">{project.technicalSpecs.database}</p>
          </div>
        </div>

        {/* Tech Tags */}
        <div className="mt-auto flex flex-wrap gap-2">
          {project.tags.map((tag: string) => (
            <span 
              key={tag} 
              className="px-3 py-1.5 text-[10px] font-bold tracking-tight rounded-xl bg-zinc-50 text-zinc-500 border border-transparent transition-all duration-300"
              style={{ 
                color: isHovered ? accentColor : undefined,
                backgroundColor: isHovered ? `${accentColor}08` : undefined,
                borderColor: isHovered ? `${accentColor}15` : undefined
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
