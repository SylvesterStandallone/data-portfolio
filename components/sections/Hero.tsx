"use client"

import Image from "next/image"
import { ArrowRight, Clock, MessagesSquare, Zap } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"
import { content } from "@/lib/content"

const chipIcons = [Clock, MessagesSquare, Zap]

export function Hero() {
  const { language } = useLanguage()
  const c = content[language].hero

  return (
    <section className="max-w-[1280px] mx-auto px-5 md:px-16 mb-28 md:mb-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {c.status}
            </span>
          </div>

          <h1 className="font-display text-[32px] leading-tight md:text-5xl font-bold tracking-tight text-foreground text-balance">
            {c.titlePre}
            <span className="text-primary">{c.titleHighlight}</span>
            {c.titlePost}
          </h1>

          <div className="flex flex-wrap gap-4 font-mono text-sm text-muted-foreground">
            {c.chips.map((chip, i) => {
              const Icon = chipIcons[i]
              return (
                <div
                  key={chip}
                  className="flex items-center gap-1.5 rounded-md border border-border bg-card px-3 py-2"
                >
                  <Icon className="h-[18px] w-[18px] text-primary" />
                  {chip}
                </div>
              )
            })}
          </div>

          <div className="pt-4">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground font-mono text-xs font-semibold uppercase tracking-wider px-8 py-4 glow-cyan hover:scale-105 transition-transform"
            >
              {c.cta}
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="relative mt-12 md:mt-0">
          <div className="absolute inset-0 rounded-full bg-primary/10 blur-3xl" />
          <Image
            src="/ivan-portrait.png"
            alt="Iván Gabriel — Data Engineer"
            width={520}
            height={520}
            priority
            className="relative z-10 mx-auto w-full max-w-md aspect-square rounded-xl border border-border object-cover grayscale"
          />

          {/* Floating terminal */}
          <div className="absolute -top-10 md:-top-16 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:-right-6 lg:-right-10 z-20 w-64 md:w-80 rounded-xl border border-border bg-terminal p-4 shadow-2xl">
            <div className="mb-3 flex items-center justify-between border-b border-border pb-2">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#EF4444]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#EAB308]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#22C55E]" />
              </div>
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">SQL</span>
            </div>
            <pre className="overflow-x-auto font-mono text-[13px] leading-relaxed text-muted-foreground">
              <code>
                <span className="text-primary">SELECT</span> status,{"\n"}
                <span className="text-[#A78BFA]">COUNT</span>
                {"(*) "}
                <span className="text-primary">AS</span> total{"\n"}
                <span className="text-primary">FROM</span> pipelines{"\n"}
                <span className="text-primary">WHERE</span> reliability {">"}{" "}
                <span className="text-[#22C55E]">0.99</span>
                {"\n"}
                <span className="text-primary">GROUP BY</span> status;{"\n"}
                <span className="mt-2 block text-[#22C55E]">{c.terminalResult}</span>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}
