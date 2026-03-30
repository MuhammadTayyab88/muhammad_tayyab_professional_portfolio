import Link from 'next/link'
import { ProjectCard } from '../components/ProjectCard'
import projects from '../utils/projects'

const TECH = [
  'Python', 'Django', 'FastAPI', 'PostgreSQL', 'React', 'TypeScript',
  'Celery', 'Redis', 'Docker', 'Selenium', 'LLM APIs', 'Stripe',
]

const STATS = [
  { value: '3+', label: 'Years Experience' },
  { value: '7+', label: 'Production Projects' },
  { value: '12+', label: 'Technologies' },
]

export default function Home() {
  const featured = projects.slice(0, 4)

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-20 pb-16 grid-bg overflow-hidden">
        {/* Ambient glow blobs */}
        <div className="pointer-events-none absolute -top-10 left-1/3 w-[480px] h-[480px] rounded-full bg-violet-700/10 blur-[100px]" />
        <div className="pointer-events-none absolute top-32 -right-20 w-64 h-64 rounded-full bg-purple-500/8 blur-[80px]" />

        <div className="relative">
          {/* Availability pill */}
          <div className="fade-up inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/8 text-emerald-400 text-xs font-medium mb-7 select-none">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available for new projects
          </div>

          {/* Name */}
          <h1 className="fade-up delay-100 font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none">
            Muhammad Tayyab
          </h1>

          {/* Role */}
          <h2 className="fade-up delay-200 mt-4 text-xl sm:text-2xl font-semibold text-gradient">
            AI Systems Engineer &amp; Backend Architect
          </h2>

          {/* Bio */}
          <p className="fade-up delay-300 mt-5 max-w-2xl text-slate-400 leading-relaxed text-[0.95rem]">
            Mid-level backend developer with 3+ years building Django &amp; FastAPI systems, AI integrations,
            automation platforms and full-stack SaaS products. I design reliable architectures and ship
            production-ready systems for startups and enterprise workflows.
          </p>

          {/* CTAs */}
          <div className="fade-up delay-400 mt-8 flex flex-wrap gap-3">
            <a href="/resume.pdf" className="accent-btn px-5 py-2.5 rounded-lg text-white text-sm font-semibold">
              Download Resume ↗
            </a>
            <Link href="/contact" className="ghost-btn px-5 py-2.5 rounded-lg text-sm font-medium">
              Get in touch
            </Link>
            <Link href="/projects" className="px-5 py-2.5 rounded-lg text-slate-500 hover:text-slate-300 transition-colors text-sm">
              View all projects →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="border-y border-white/5 py-10">
        <div className="grid grid-cols-3 divide-x divide-white/5">
          {STATS.map(({ value, label }) => (
            <div key={label} className="text-center px-4">
              <div className="font-display text-3xl sm:text-4xl font-extrabold text-gradient">{value}</div>
              <div className="mt-1.5 text-xs text-slate-500 font-medium tracking-wide uppercase">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Featured Projects ── */}
      <section className="py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="section-label mb-2">Selected Work</p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">Featured Projects</h2>
          </div>
          <Link href="/projects" className="text-sm text-slate-500 hover:text-violet-400 transition-colors hidden sm:block">
            All projects →
          </Link>
        </div>

        <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>

        <div className="mt-6 sm:hidden">
          <Link href="/projects" className="text-sm text-slate-500 hover:text-violet-400 transition-colors">
            All projects →
          </Link>
        </div>
      </section>

      {/* ── Tech Stack ── */}
      <section className="border-t border-white/5 py-12 mb-4">
        <p className="section-label text-center mb-6">Core Technologies</p>
        <div className="flex flex-wrap justify-center gap-2.5">
          {TECH.map((t) => (
            <span
              key={t}
              className="px-3.5 py-1.5 rounded-full border border-white/8 text-slate-400 text-sm bg-white/2 hover:border-violet-500/40 hover:text-violet-300 transition-all cursor-default select-none"
            >
              {t}
            </span>
          ))}
        </div>
      </section>
    </>
  )
}
