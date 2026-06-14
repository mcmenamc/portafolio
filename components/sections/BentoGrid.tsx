"use client"

import { motion } from "framer-motion"
import ProjectCard from "../ProjectCard"

export default function BentoGrid({ projects }: { projects: any[] }) {
  const sortedProjects = [...projects].sort((a, b) => a.priority - b.priority);

  return (
    <section id="proyectos" className="py-32 bg-[#f4f7fb]">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <div className="max-w-3xl mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-700">
              Laboratorio de producto
            </span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tight text-slate-950 leading-[0.95]">
              Casos con <span className="text-cyan-600">firma</span><br />propia
            </h2>
            <p className="text-slate-600 text-lg font-medium leading-relaxed max-w-xl">
              Soluciones escalables diseñadas con precisión técnica y enfoque en el impacto de negocio.
            </p>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {sortedProjects.map((project, index) => {
            const isFeatured = project.id === 'haz-factura';
            
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className={isFeatured ? "md:col-span-2" : ""}
              >
                <ProjectCard project={project} isFeatured={isFeatured} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  )
}
