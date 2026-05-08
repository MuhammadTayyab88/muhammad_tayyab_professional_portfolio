'use client'

import { useState, FormEvent } from 'react'

const YOUR_EMAIL = 'md.tayyab.work@gmail.com'

const SOCIAL = [
  {
    name: 'LinkedIn',
    handle: 'linkedin.com/in/md-tayyab-work',
    href: 'https://www.linkedin.com/in/md-tayyab-work/',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
        <path d="M20.447 20.452H17.21v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.985V9h3.102v1.561h.046c.432-.82 1.487-1.685 3.062-1.685 3.273 0 3.876 2.155 3.876 4.956v6.62h-.624zM5.337 7.433a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6zm1.55 13.019H3.785V9h3.102v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    handle: 'github.com/MuhammadTayyab88',
    href: 'https://github.com/MuhammadTayyab88',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    name: 'Email',
    handle: YOUR_EMAIL,
    href: `https://mail.google.com/mail/?view=cm&to=${YOUR_EMAIL}`,
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m2 7 10 7 10-7" />
      </svg>
    ),
  },
]

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()

    const { name, email, subject, message } = form

    if (!name || !email || !message) {
      setStatus('error')
      return
    }

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      '',
      message,
    ].join('\n')

    const mailtoUrl =
      `mailto:${YOUR_EMAIL}` +
      `?subject=${encodeURIComponent(subject || 'Portfolio enquiry')}` +
      `&body=${encodeURIComponent(body)}`

    setStatus('sending')

    // Open Gmail / default mail client with fields pre-filled
    window.open(mailtoUrl, '_blank')

    // Short delay then show success
    setTimeout(() => {
      setStatus('sent')
      setForm({ name: '', email: '', subject: '', message: '' })
    }, 800)
  }

  return (
    <div className="py-10 sm:py-14 min-w-0">
      <div className="grid md:grid-cols-[1fr_1.4fr] gap-10 md:gap-14 max-w-4xl">

        {/* ── Left: info ── */}
        <div>
          <p className="section-label mb-3">Contact</p>
          <h1 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight leading-snug">
            Let&rsquo;s build <span className="text-gradient">something great</span>
          </h1>
          <p className="mt-4 text-slate-400 leading-relaxed text-sm">
            I&rsquo;m currently available for backend, AI systems, and architecture roles — both contract and
            full-time. If you have a project in mind or just want to connect, drop me a message.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-emerald-500/20 bg-emerald-500/7 text-emerald-400 text-xs font-medium select-none">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Open to new opportunities
          </div>

          <div className="mt-8 space-y-3">
            {SOCIAL.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl border border-white/7 bg-white/2 hover:border-violet-500/30 hover:bg-violet-500/5 transition-all group"
              >
                <span className="text-slate-500 group-hover:text-violet-400 transition-colors">{s.icon}</span>
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-semibold text-slate-300 group-hover:text-white transition-colors">{s.name}</div>
                  <div className="text-xs text-slate-600 break-all">{s.handle}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* ── Right: form ── */}
        <div className="rounded-2xl border border-white/7 bg-neutral-900/60 p-4 sm:p-6 md:p-7 min-w-0">
          <h2 className="font-display font-bold text-lg text-slate-100 mb-6">Send a message</h2>

          {status === 'sent' ? (
            /* ── Success state ── */
            <div className="flex flex-col items-center justify-center py-12 text-center gap-3">
              <div className="w-12 h-12 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-xl">
                ✓
              </div>
              <p className="font-display font-bold text-slate-100">Message opened!</p>
              <p className="text-sm text-slate-500 max-w-xs">
                Your mail app opened with the message pre-filled. Just hit send and I'll get back to you shortly.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-2 text-sm text-violet-400 hover:text-violet-300 transition-colors"
              >
                Send another →
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1.5">
                    Your name <span className="text-red-400">*</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="John Smith"
                    value={form.name}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1.5">
                    Email address <span className="text-red-400">*</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="john@company.com"
                    value={form.email}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1.5">Subject</label>
                <input
                  name="subject"
                  type="text"
                  placeholder="Project enquiry / Role opportunity"
                  value={form.subject}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1.5">
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project, stack, timeline, and budget..."
                  value={form.message}
                  onChange={handleChange}
                  className="form-input resize-none"
                />
              </div>

              {status === 'error' && (
                <p className="text-xs text-red-400 -mt-1">
                  Please fill in your name, email, and message.
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="accent-btn w-full py-2.5 rounded-lg text-white text-sm font-semibold mt-1 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Opening mail app…' : 'Send Message →'}
              </button>

              <p className="text-xs text-slate-600 text-center -mt-1">
                Opens your mail client with the message pre-filled
              </p>
            </form>
          )}
        </div>

      </div>
    </div>
  )
}
