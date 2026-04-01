"use client"

import { motion } from "framer-motion"
import ProjectCard from "../ProjectCard"

export default function BentoGrid({ projects }: { projects: any[] }) {
  const sortedProjects = [...projects].sort((a, b) => a.priority - b.priority);

  return (
    <section id="work" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 text-white">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-500 text-[10px] font-mono tracking-widest uppercase">
              Proyectos Seleccionados
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-zinc-100">
              Ingeniería Destacada
            </h2>
            <p className="text-zinc-500 max-w-lg text-lg">
              Soluciones tecnológicas construidas con precisión, enfocadas en escalabilidad y performance técnica.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedProjects.map((project, index) => {
            const isMain = project.id === 'haz-factura';
            const isSecondary = project.id === 'macrolife';

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${isMain ? 'lg:col-span-2' : ''} ${isSecondary ? 'md:col-span-1' : ''}`}
              >
                <ProjectCard project={project} />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
