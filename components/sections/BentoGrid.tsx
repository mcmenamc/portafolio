"use client"

import { motion } from "framer-motion"
import ProjectCard from "../ProjectCard"

export default function BentoGrid({ projects }: { projects: any[] }) {
  const sortedProjects = [...projects].sort((a, b) => a.priority - b.priority);

  return (
    <section id="work" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] tracking-widest uppercase">
              Proyectos de Alto Impacto
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-zinc-900 leading-none">
              Ingeniería <span className="text-zinc-200">&</span><br/>Arquitectura
            </h2>
            <p className="text-zinc-500 max-w-lg text-sm font-medium leading-relaxed">
              Desarrollo de soluciones tecnológicas robustas, desde motores de facturación masiva hasta aplicaciones móviles con visión artificial.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          {sortedProjects.map((project, index) => {
            const isMain = project.id === 'haz-factura';
            const isMedium = project.id === 'elearning-platform';

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className={`
                  ${isMain ? 'lg:col-span-4' : ''} 
                  ${isMedium ? 'lg:col-span-3' : ''}
                  ${!isMain && !isMedium ? 'lg:col-span-2' : ''}
                `}
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

