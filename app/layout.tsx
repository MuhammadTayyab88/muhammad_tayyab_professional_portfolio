import '../styles/globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Muhammad Tayyab — AI Systems Engineer',
  description: 'AI Systems Engineer, Backend Architect, Automation Specialist — Portfolio of Muhammad',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#080812',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#080812] text-slate-100 antialiased min-h-screen flex flex-col overflow-x-hidden">

        {/* ── Sticky Nav ── */}
        <header className="sticky top-0 z-50 nav-glass">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 min-h-14 sm:h-16 py-2.5 sm:py-0 flex flex-nowrap items-center justify-between gap-3">
            <Link href="/" className="flex items-center gap-2 group min-w-0 flex-1">
              <span className="w-7 h-7 shrink-0 rounded-lg bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center text-xs font-bold text-white shadow-lg shadow-violet-900/40">
                M
              </span>
              <span className="font-display font-bold text-sm sm:text-base tracking-tight text-slate-100 group-hover:text-white transition-colors truncate">
                Muhammad Tayyab
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-0.5 lg:gap-1 text-sm flex-wrap justify-end">
              <Link href="/projects" className="px-2.5 lg:px-3 py-1.5 rounded-md text-slate-400 hover:text-white hover:bg-white/5 transition-all">
                Projects
              </Link>
              <Link href="/about" className="px-2.5 lg:px-3 py-1.5 rounded-md text-slate-400 hover:text-white hover:bg-white/5 transition-all">
                About
              </Link>
              <Link href="/contact" className="px-2.5 lg:px-3 py-1.5 rounded-md text-slate-400 hover:text-white hover:bg-white/5 transition-all">
                Contact
              </Link>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 lg:ml-3 accent-btn px-3 lg:px-4 py-1.5 rounded-lg text-white text-sm font-medium whitespace-nowrap"
              >
                Resume ↗
              </a>
            </nav>

            {/* Mobile / tablet: collapsible menu (no client JS) */}
            <details className="md:hidden relative shrink-0">
              <summary className="list-none cursor-pointer select-none rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-slate-300 hover:bg-white/10 hover:text-white transition-colors [&::-webkit-details-marker]:hidden flex items-center justify-center gap-2">
                <span aria-hidden>☰</span>
                Menu
              </summary>
              <nav className="absolute right-0 top-[calc(100%+0.5rem)] z-50 min-w-[200px] rounded-xl border border-white/10 bg-[#0c0c18]/95 backdrop-blur-xl py-2 shadow-xl shadow-black/40 flex flex-col text-sm">
                <Link href="/projects" className="px-4 py-2.5 text-slate-300 hover:bg-white/5 hover:text-white">
                  Projects
                </Link>
                <Link href="/about" className="px-4 py-2.5 text-slate-300 hover:bg-white/5 hover:text-white">
                  About
                </Link>
                <Link href="/contact" className="px-4 py-2.5 text-slate-300 hover:bg-white/5 hover:text-white">
                  Contact
                </Link>
                <div className="border-t border-white/10 mt-1 pt-1 px-2 pb-1">
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="accent-btn block text-center px-4 py-2.5 rounded-lg text-white text-sm font-medium"
                  >
                    Resume ↗
                  </a>
                </div>
              </nav>
            </details>
          </div>
        </header>

        {/* ── Page content ── */}
        <main className="flex-1 max-w-6xl w-full min-w-0 mx-auto px-4 sm:px-6">
          {children}
        </main>

        {/* ── Footer ── */}
        <footer className="border-t border-white/5 mt-12 sm:mt-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500 text-center sm:text-left">
            <span>© {new Date().getFullYear()} Muhammad — AI Systems Engineer</span>
            <div className="flex items-center gap-5">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">
                GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">
                LinkedIn
              </a>
              <Link href="/contact" className="hover:text-violet-400 transition-colors">
                Get in touch →
              </Link>
            </div>
          </div>
        </footer>

      </body>
    </html>
  )
}
