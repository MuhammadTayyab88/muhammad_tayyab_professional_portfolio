import projects from '../../utils/projects'
import { ProjectCard } from '../../components/ProjectCard'

export default function Projects() {
  return (
    <div className="py-10 sm:py-14 min-w-0">

      {/* ── Header ── */}
      <p className="section-label mb-3">Portfolio</p>
      <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
        Projects &amp; <span className="text-gradient">Case Studies</span>
      </h1>
      <p className="mt-4 max-w-2xl text-slate-400 leading-relaxed">
        Deep dives into architecture, technical decisions, and business impact for every production system
        I've built — from AI automation engines to multi-tenant SaaS platforms.
      </p>

      {/* ── Stats row ── */}
      <div className="mt-8 flex flex-wrap gap-6 text-sm">
        {[
          { value: `${projects.length}`, label: 'total projects' },
          { value: '4', label: 'AI / automation' },
          { value: '3', label: 'SaaS platforms' },
        ].map(({ value, label }) => (
          <div key={label} className="flex items-baseline gap-1.5">
            <span className="font-display text-xl font-bold text-gradient">{value}</span>
            <span className="text-slate-500">{label}</span>
          </div>
        ))}
      </div>

      {/* ── Grid ── */}
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} large />
        ))}
      </div>

    </div>
  )
}
