import '../styles/globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Muhammad Tayyab — AI Systems Engineer',
  description: 'AI Systems Engineer, Backend Architect, Automation Specialist — Portfolio of Muhammad',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#080812] text-slate-100 antialiased min-h-screen flex flex-col">

        {/* ── Sticky Nav ── */}
        <header className="sticky top-0 z-50 nav-glass">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center text-xs font-bold text-white shadow-lg shadow-violet-900/40">
                M
              </span>
              <span className="font-display font-bold text-base tracking-tight text-slate-100 group-hover:text-white transition-colors">
                Muhammad Tayyab
              </span>
            </Link>

            <nav className="flex items-center gap-1 text-sm">
              <Link href="/projects" className="px-3 py-1.5 rounded-md text-slate-400 hover:text-white hover:bg-white/5 transition-all">
                Projects
              </Link>
              <Link href="/about" className="px-3 py-1.5 rounded-md text-slate-400 hover:text-white hover:bg-white/5 transition-all">
                About
              </Link>
              <Link href="/contact" className="px-3 py-1.5 rounded-md text-slate-400 hover:text-white hover:bg-white/5 transition-all">
                Contact
              </Link>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-3 accent-btn px-4 py-1.5 rounded-lg text-white text-sm font-medium"
              >
                Resume ↗
              </a>
            </nav>
          </div>
        </header>

        {/* ── Page content ── */}
        <main className="flex-1 max-w-6xl w-full mx-auto px-6">
          {children}
        </main>

        {/* ── Footer ── */}
        <footer className="border-t border-white/5 mt-20">
          <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
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
