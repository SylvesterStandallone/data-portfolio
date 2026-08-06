"use client"

import { Check, Database, LineChart, Timer, Workflow } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"
import { content } from "@/lib/content"

const icons = {
  database: Database,
  tree: Workflow,
  monitoring: LineChart,
} as const

export function Services() {
  const { language } = useLanguage()
  const c = content[language].services

  return (
    <section id="servicios" className="max-w-[1280px] mx-auto px-5 md:px-16 mb-28 md:mb-32 scroll-mt-24">
      <div className="text-center mb-12">
        <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-4">
          {c.title}
        </h2>
        <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">{c.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        {c.cards.map((card) => {
          const Icon = icons[card.icon as keyof typeof icons]
          return (
            <div
              key={card.title}
              className={`relative rounded-xl border bg-card p-8 transition-all ${
                card.core
                  ? "border-primary md:scale-105 z-10 glow-cyan-soft"
                  : "border-border opacity-80 hover:opacity-100"
              }`}
            >
              {card.core && (
                <div className="absolute top-0 right-0 rounded-tr-xl rounded-bl-xl bg-primary px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
                  {c.coreBadge}
                </div>
              )}
              <Icon className={`mb-4 text-primary ${card.core ? "h-12 w-12" : "h-9 w-9"}`} strokeWidth={1.5} />
              <h3 className="font-display text-xl md:text-2xl font-semibold tracking-tight text-foreground mb-3">
                {card.title}
              </h3>
              <p className="font-sans text-base text-muted-foreground mb-6 leading-relaxed">{card.description}</p>
              <ul className="space-y-3 font-mono text-sm text-muted-foreground mb-6">
                {card.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-[18px] w-[18px] shrink-0 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
              {card.core && "footer" in card && (
                <div className="border-t border-border pt-4">
                  <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-foreground">
                    <Timer className="h-4 w-4" />
                    {card.footer}
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
