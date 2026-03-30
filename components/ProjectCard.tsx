import Link from 'next/link'

const CATEGORY_STYLE: Record<string, string> = {
  'AI':               'bg-violet-500/10 text-violet-300 border-violet-500/20',
  'AI / Automation':  'bg-violet-500/10 text-violet-300 border-violet-500/20',
  'Compliance':       'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
  'SaaS':             'bg-sky-500/10    text-sky-300    border-sky-500/20',
  'Full-Stack':       'bg-amber-500/10  text-amber-300  border-amber-500/20',
}

const defaultCat = 'bg-slate-500/10 text-slate-400 border-slate-500/20'

export function ProjectCard({ project, large = false }: any) {
  const catStyle = CATEGORY_STYLE[project.category] ?? defaultCat

  return (
    <article className={`
      group relative flex flex-col rounded-2xl border border-white/7
      bg-gradient-to-br from-neutral-900/80 to-neutral-850/80
      p-6 card-hover
      ${large ? 'min-h-[220px]' : ''}
    `}>
      {/* Top row: title + category badge */}
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display font-bold text-lg leading-snug text-slate-100 group-hover:text-white transition-colors">
          {project.title}
        </h3>
        <span className={`shrink-0 mt-0.5 px-2.5 py-0.5 rounded-full text-[0.68rem] font-semibold border ${catStyle}`}>
          {project.category}
        </span>
      </div>

      {/* Excerpt */}
      <p className="mt-2.5 text-sm text-slate-400 leading-relaxed line-clamp-2">
        {project.excerpt}
      </p>

      {/* Stack pills */}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.stack.map((s: string) => (
          <span key={s} className="tech-pill">{s}</span>
        ))}
      </div>

      {/* Footer: impact + link */}
      <div className="mt-auto pt-5 flex items-end justify-between gap-3">
        <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 max-w-[70%]">
          {project.impact}
        </p>
        <Link
          href={`/projects/${project.slug}`}
          className="shrink-0 text-sm font-medium text-violet-400 hover:text-violet-300 transition-colors"
        >
          Case Study →
        </Link>
      </div>
    </article>
  )
}
