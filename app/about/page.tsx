import Link from 'next/link'

const SKILLS = [
  { name: 'Python / Django / FastAPI', pct: 90 },
  { name: 'PostgreSQL & Data Modeling',pct: 85 },
  { name: 'LLM Integrations & Prompt Engineering', pct: 80 },
  { name: 'System Architecture & SaaS Design', pct: 82 },
  { name: 'Automation & Web Scraping', pct: 88 },
  { name: 'React / TypeScript', pct: 70 },
  { name: 'CI/CD & Production Deployments', pct: 75 },
]

const TOOLS = [
  'Python', 'Django', 'FastAPI', 'PostgreSQL', 'React', 'TypeScript',
  'Celery', 'Redis', 'Docker', 'Selenium', 'Scrapy', 'Pandas',
  'Gemini API', 'LLaMA', 'Groq', 'Stripe', 'Twilio', 'GitHub Actions',
]

const VALUES = [
  {
    icon: '⚙️',
    title: 'Architecture First',
    body: 'I think in systems: data flows, failure modes, and scaling paths before writing the first line.',
  },
  {
    icon: '📦',
    title: 'Production-Ready Code',
    body: 'Every project is built to ship — tested, documented, observable, and ready for real traffic.',
  },
  {
    icon: '🤖',
    title: 'AI-Augmented Workflows',
    body: 'I design LLM pipelines that are structured, token-efficient, and evaluated — not just prompt hacks.',
  },
]

export default function About() {
  return (
    <div className="py-10 sm:py-14 max-w-4xl min-w-0">

      {/* ── Intro ── */}
      <p className="section-label mb-3">About Me</p>
      <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
        Building Systems That <span className="text-gradient">Actually Work</span>
      </h1>
      <p className="mt-5 text-slate-400 leading-relaxed max-w-2xl">
        I'm Muhammad Tayyab — a backend engineer specialising in AI-driven automation, scalable SaaS platforms,
        and production-grade Django / FastAPI architectures. I combine deep technical execution with a
        strong focus on measurable business outcomes, shipping systems that handle real load and real edge cases.
      </p>
      <p className="mt-4 text-slate-400 leading-relaxed max-w-2xl">
        Over the past 3+ years I've delivered everything from government RFP automation engines and
        supply-chain compliance tools to multi-tenant SaaS billing platforms — always with a full-stack,
        end-to-end approach.
      </p>

      {/* ── Values ── */}
      <div className="mt-14 grid sm:grid-cols-3 gap-5">
        {VALUES.map((v) => (
          <div key={v.title} className="rounded-2xl border border-white/7 bg-neutral-900/60 p-5 card-hover">
            <span className="text-2xl">{v.icon}</span>
            <h3 className="mt-3 font-display font-bold text-slate-100 text-sm">{v.title}</h3>
            <p className="mt-2 text-xs text-slate-500 leading-relaxed">{v.body}</p>
          </div>
        ))}
      </div>

      {/* ── Skills ── */}
      <section className="mt-14">
        <p className="section-label mb-6">Core Skills</p>
        <div className="space-y-4">
          {SKILLS.map(({ name, pct }) => (
            <div key={name}>
              <div className="flex flex-col gap-0.5 sm:flex-row sm:justify-between sm:items-center text-sm text-slate-400 mb-1.5 min-w-0">
                <span className="break-words pr-2">{name}</span>
                <span className="text-slate-600 shrink-0">{pct}%</span>
              </div>
              <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-violet-600 to-purple-400"
                  style={{ width: `${pct}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Tools ── */}
      <section className="mt-14">
        <p className="section-label mb-5">Technologies & Tools</p>
        <div className="flex flex-wrap gap-2">
          {TOOLS.map((t) => (
            <span
              key={t}
              className="px-3 py-1 rounded-full text-sm border border-white/8 text-slate-400 hover:border-violet-500/40 hover:text-violet-300 transition-all cursor-default"
            >
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <div className="mt-14 flex flex-wrap gap-3">
        <Link href="/contact" className="accent-btn px-6 py-2.5 rounded-lg text-white text-sm font-semibold">
          Work with me
        </Link>
        <Link href="/projects" className="ghost-btn px-6 py-2.5 rounded-lg text-sm font-medium">
          View my projects →
        </Link>
      </div>

    </div>
  )
}
