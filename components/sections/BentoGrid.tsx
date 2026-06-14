"use client"

import { motion } from "framer-motion"
import ProjectCard from "../ProjectCard"

export default function BentoGrid({ projects }: { projects: any[] }) {
  const sortedProjects = [...projects].sort((a, b) => a.priority - b.priority)

  return (
    <section id="proyectos" className="bg-[#f7f4ee] py-28 text-[#0b0d10]">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-16 border-y border-[#0b0d10]/15 py-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"
          >
            <div className="space-y-5">
              <span className="text-[10px] font-black uppercase tracking-[0.42em] text-[#6b7f00]">
                Casos seleccionados
              </span>
              <h2 className="max-w-2xl text-5xl font-black leading-[0.88] tracking-[-0.07em] md:text-7xl">
                Portafolio contado como producto.
              </h2>
            </div>
            <p className="max-w-2xl text-base font-medium leading-8 text-[#0b0d10]/65 md:text-lg">
              Haz Factura aparece como producto propio. El resto se presenta con contexto de participación, rol, métricas y stack para que no parezca una galería genérica.
            </p>
          </motion.div>
        </div>

        <div className="space-y-10">
          {sortedProjects.map((project, index) => {
            const isFeatured = project.id === "haz-factura"

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
              >
                <ProjectCard project={project} isFeatured={isFeatured} />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
