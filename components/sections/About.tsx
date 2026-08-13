"use client"

import Image from "next/image"
import { Download } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"
import { content } from "@/lib/content"

export function About() {
  const { language } = useLanguage()
  const c = content[language].about

  return (
    <section id="sobre-mi" className="max-w-[1280px] mx-auto px-5 md:px-16 mb-28 md:mb-32 scroll-mt-24">
      <div className="rounded-xl border border-border bg-card p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="relative md:col-span-4">
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-xl border border-primary/30 bg-primary/20" />
            <Image
              src="/ivan-portrait.jpg"
              alt="Iván Gabriel — retrato"
              width={480}
              height={640}
              className="relative z-10 w-full rounded-xl border border-border object-cover aspect-[3/4] grayscale"
            />
          </div>

          <div className="md:col-span-8 space-y-6">
            <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
              {c.title}
            </h2>
            <div className="space-y-4 font-sans text-base text-muted-foreground leading-relaxed">
              {c.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="pt-4">
              <a
                href="/cv.pdf"
                download="Ivan-Gabriel-CV.pdf"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-transparent px-6 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-foreground transition-all hover:border-primary hover:bg-card hover:text-primary"
              >
                <Download className="h-[18px] w-[18px]" />
                {c.cv}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
