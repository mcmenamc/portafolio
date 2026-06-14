"use client"

import { motion } from "framer-motion"
import ProjectCard from "../ProjectCard"

export default function BentoGrid({ projects }: { projects: any[] }) {
  const sortedProjects = [...projects].sort((a, b) => a.priority - b.priority)

  return (
    <section id="proyectos" className="bg-[#f7f3eb] py-28">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-700">
              Casos seleccionados
            </span>
            <h2 className="text-5xl font-black leading-[0.9] tracking-[-0.07em] text-slate-950 md:text-7xl">
              Trabajo real, contexto claro.
            </h2>
          </motion.div>
          <p className="max-w-2xl text-base font-medium leading-8 text-slate-600 md:text-lg">
            Separé mi producto propio de los proyectos donde participé como empleado para contar mejor el impacto, el rol y las decisiones técnicas detrás de cada caso.
          </p>
        </div>

        <div className="space-y-8">
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
