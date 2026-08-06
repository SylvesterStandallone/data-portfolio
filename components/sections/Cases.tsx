"use client"

import { Cloud, Network } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"
import { content } from "@/lib/content"

const icons = {
  hub: Network,
  cloud: Cloud,
} as const

export function Cases() {
  const { language } = useLanguage()
  const c = content[language].cases

  return (
    <section id="casos" className="max-w-[1280px] mx-auto px-5 md:px-16 mb-28 md:mb-32 scroll-mt-24">
      <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-12">
        {c.title}
      </h2>

      <div className="space-y-6">
        {c.items.map((item, i) => {
          const Icon = icons[item.icon as keyof typeof icons]
          const reverse = i % 2 === 1
          return (
            <div
              key={item.title}
              className="group flex flex-col md:flex-row items-center gap-8 rounded-xl border border-border bg-card p-6 md:p-8"
            >
              <div
                className={`relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-lg border border-border bg-terminal md:w-1/3 ${
                  reverse ? "md:order-2" : ""
                }`}
              >
                <Icon className="h-16 w-16 text-muted-foreground/20" strokeWidth={1} />
                <div className="absolute inset-0 bg-primary/5 transition-colors group-hover:bg-primary/10" />
              </div>
              <div className={`w-full md:w-2/3 ${reverse ? "md:order-1" : ""}`}>
                <div className="mb-3 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded border border-border bg-background px-2 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-display text-xl md:text-2xl font-semibold tracking-tight text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="font-sans text-base text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
