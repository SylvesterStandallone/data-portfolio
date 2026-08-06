"use client"

import { useLanguage } from "@/contexts/LanguageContext"
import { content } from "@/lib/content"

export function TechStack() {
  const { language } = useLanguage()
  const c = content[language].stack

  return (
    <section id="stack" className="max-w-[1280px] mx-auto px-5 md:px-16 mb-28 md:mb-32 scroll-mt-24">
      <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-8 text-center">
        {c.title}
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {c.columns.map((col) => (
          <div key={col.title} className="rounded-xl border border-border bg-card p-6">
            <h3 className="mb-4 border-b border-border pb-2 font-mono text-xs font-semibold uppercase tracking-wider text-foreground">
              {col.title}
            </h3>
            <ul className="space-y-3 font-mono text-sm text-muted-foreground">
              {col.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
