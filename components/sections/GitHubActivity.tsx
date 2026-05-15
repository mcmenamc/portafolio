"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Github, GitCommit, Star } from "lucide-react"

interface Repo {
  name: string
  description: string
  stargazers_count: number
  html_url: string
  language: string
  pushed_at: string
}

export default function GitHubActivity({ username }: { username: string }) {
  const [repos, setRepos] = useState<Repo[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Sorting by pushed to show most active projects first
    fetch(`https://api.github.com/users/${username}/repos?sort=pushed&per_page=6`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setRepos(data)
        }
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [username])

  return (
    <section className="py-24 bg-zinc-50 border-y border-zinc-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] tracking-widest uppercase">
              Actividad Reciente
            </div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-zinc-900 leading-none">
              Código Open <span className="text-zinc-300">Source</span>
            </h2>
            <p className="text-zinc-500 max-w-lg text-sm font-medium leading-relaxed">
              Mis repositorios más activos, priorizando aquellos con desarrollo constante y despliegue continuo.
            </p>
          </div>
          
          <a 
            href={`https://github.com/${username}`} 
            target="_blank" 
            className="flex items-center gap-3 px-6 py-3 rounded-xl bg-zinc-900 text-white text-xs font-black uppercase tracking-widest hover:bg-zinc-800 transition-all shadow-xl shadow-zinc-200"
          >
            <Github size={18} />
            Perfil de GitHub
          </a>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-40 rounded-3xl bg-zinc-100 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo, index) => (
              <motion.a
                key={repo.name}
                href={repo.html_url}
                target="_blank"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 rounded-3xl bg-white border border-zinc-100 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500 flex flex-col justify-between min-h-[200px]"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <div className="p-2.5 rounded-xl bg-zinc-50 text-zinc-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                      <GitCommit size={20} />
                    </div>
                    <div className="flex items-center gap-1.5 text-zinc-400 font-bold text-xs">
                      <Star size={12} className="fill-current" />
                      {repo.stargazers_count}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-zinc-900 group-hover:text-blue-600 transition-colors truncate">
                      {repo.name}
                    </h3>
                    <p className="text-zinc-500 text-xs line-clamp-2 mt-2 font-medium leading-relaxed">
                      {repo.description || "Proyecto de ingeniería desarrollado con estándares de calidad."}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 mt-6 pt-5 border-t border-zinc-50">
                  <span className="text-[9px] font-black uppercase tracking-widest text-zinc-400 px-3 py-1 rounded-lg bg-zinc-50">
                    {repo.language || "TypeScript"}
                  </span>
                  <div className="ml-auto text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity font-black text-[9px] uppercase tracking-widest">
                    Explorar →
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
