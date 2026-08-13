"use client"

import { useLanguage } from "@/contexts/LanguageContext"
import { content } from "@/lib/content"

export function Footer() {
  const { language } = useLanguage()
  const c = content[language].footer

  const social = [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/ivanges" },
    { label: "GitHub", href: "https://github.com/sylvesterstandallone" },
    { label: "Email", href: "mailto:ivan.e90@gmail.com" },
  ]

  return (
    <footer className="w-full border-t border-border bg-card">
      <div className="max-w-[1280px] mx-auto px-5 md:px-16 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-1 md:col-span-3 mb-8">
            <span className="font-display text-2xl font-bold tracking-tight text-primary">Iván Gabriel</span>
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mt-2">{c.tagline}</p>
          </div>

          {c.cols.map((col, i) => (
            <div key={i} className="flex flex-col gap-4">
              {col.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          ))}

          <div className="flex flex-col gap-4">
            {social.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="col-span-1 md:col-span-3 mt-12 pt-8 border-t border-border">
            <p className="font-mono text-xs text-muted-foreground">{c.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
