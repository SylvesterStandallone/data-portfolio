"use client"

import { useLanguage } from "@/contexts/LanguageContext"
import { content } from "@/lib/content"

export function Metrics() {
  const { language } = useLanguage()
  const metrics = content[language].metrics

  return (
    <section className="max-w-[1280px] mx-auto px-5 md:px-16 mb-28 md:mb-32">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {metrics.map((m, i) => (
          <div
            key={m.label}
            className={`rounded-xl border border-border bg-card p-6 text-center transition-transform hover:-translate-y-1 ${
              i === 4 ? "col-span-2 md:col-span-1" : ""
            }`}
          >
            <div className="font-display text-4xl md:text-5xl font-bold tracking-tight text-primary mb-1">
              {m.value}
            </div>
            <div className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {m.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
