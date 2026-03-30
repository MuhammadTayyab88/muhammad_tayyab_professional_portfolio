import Link from 'next/link'

const CATEGORY_STYLE: Record<string, string> = {
  'AI':               'bg-violet-500/10 text-violet-300 border-violet-500/25',
  'AI / Automation':  'bg-violet-500/10 text-violet-300 border-violet-500/25',
  'Compliance':       'bg-emerald-500/10 text-emerald-300 border-emerald-500/25',
  'SaaS':             'bg-sky-500/10    text-sky-300    border-sky-500/25',
  'Full-Stack':       'bg-amber-500/10  text-amber-300  border-amber-500/25',
}

const Section = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <section>
    <p className="section-label mb-3">{label}</p>
    {children}
  </section>
)

export default function CaseStudy({ project }: any) {
  const catStyle = CATEGORY_STYLE[project.category] ?? 'bg-slate-500/10 text-slate-400 border-slate-500/25'

  return (
    <article className="py-12 max-w-4xl">

      {/* ── Back ── */}
      <Link
        href="/projects"
        className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-300 transition-colors mb-8"
      >
        ← Back to projects
      </Link>

      {/* ── Header ── */}
      <div className="flex flex-wrap items-start gap-3 mb-3">
        <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${catStyle}`}>
          {project.category}
        </span>
      </div>
      <h1 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight leading-snug">
        {project.title}
      </h1>
      <p className="mt-3 text-lg text-slate-400 leading-relaxed max-w-2xl">{project.excerpt}</p>

      {/* ── Stack pills ── */}
      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((s: string) => (
          <span key={s} className="tech-pill">{s}</span>
        ))}
      </div>

      {/* ── Divider ── */}
      <div className="mt-10 border-t border-white/5" />

      {/* ── Impact highlight ── */}
      <div className="mt-10 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 px-6 py-5">
        <p className="section-label text-emerald-400 mb-2">Business Impact</p>
        <p className="text-slate-200 leading-relaxed">{project.impact}</p>
      </div>

      {/* ── Problem + Challenges ── */}
      <div className="mt-10 grid md:grid-cols-2 gap-8">
        <Section label="Problem Statement">
          <p className="text-slate-400 leading-relaxed text-sm">{project.problem}</p>
        </Section>

        <Section label="Key Challenges">
          <ul className="space-y-2">
            {project.challenges.map((c: string, i: number) => (
              <li key={i} className="flex gap-2.5 text-sm text-slate-400">
                <span className="mt-0.5 w-1.5 h-1.5 rounded-full bg-violet-500 shrink-0 mt-1.5" />
                {c}
              </li>
            ))}
          </ul>
        </Section>
      </div>

      {/* ── Architecture ── */}
      <div className="mt-10">
        <Section label="Architecture Overview">
          <div className="rounded-2xl border border-white/7 bg-neutral-900/60 p-6">
            <p className="text-sm text-slate-300 font-mono leading-relaxed">
              {project.architecture.summary}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.architecture.components.map((c: string) => (
                <span
                  key={c}
                  className="px-3 py-1 rounded-lg border border-violet-500/20 bg-violet-500/8 text-violet-300 text-xs font-medium"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </Section>
      </div>

      {/* ── Screenshot placeholders ── */}
      <div className="mt-10">
        <Section label="Screenshots">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="h-32 rounded-xl border border-white/7 bg-neutral-900/60 flex items-center justify-center text-xs text-slate-600"
              >
                Screenshot {n}
              </div>
            ))}
          </div>
        </Section>
      </div>

      {/* ── Footer nav ── */}
      <div className="mt-12 pt-8 border-t border-white/5 flex flex-wrap gap-4">
        <Link href="/projects" className="ghost-btn px-5 py-2.5 rounded-lg text-sm font-medium">
          ← All projects
        </Link>
        <Link href="/contact" className="accent-btn px-5 py-2.5 rounded-lg text-white text-sm font-semibold">
          Discuss a project →
        </Link>
      </div>

    </article>
  )
}
