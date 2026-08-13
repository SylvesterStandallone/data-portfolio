"use client"

import { useState } from "react"
import { CalendarCheck, Check } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"
import { content } from "@/lib/content"

/** Número de WhatsApp en formato wa.me: solo dígitos, sin "+" ni separadores. */
const WHATSAPP_NUMBER = "5493856276194"

export function Contact() {
  const { language } = useLanguage()
  const c = content[language].contact
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const get = (k: string) => String(data.get(k) ?? "").trim()

    const text = c.waTemplate
      .replace("{name}", get("name"))
      .replace("{email}", get("email"))
      .replace("{challenge}", get("challenge") || c.waEmptyChallenge)

    setSent(true)
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    )
  }

  const fieldClass =
    "w-full rounded-md border border-border bg-background p-3 font-sans text-base text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
  const labelClass = "mb-2 block font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground"

  return (
    <section id="contacto" className="max-w-[1280px] mx-auto px-5 md:px-16 scroll-mt-24">
      <div className="rounded-xl border border-primary/20 bg-primary/5 p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-[32px] leading-tight md:text-5xl font-bold tracking-tight text-foreground mb-4 text-balance">
              {c.title}
            </h2>
            <p className="font-sans text-base text-muted-foreground mb-8 leading-relaxed">{c.subtitle}</p>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className={labelClass}>
                  {c.name}
                </label>
                <input id="name" name="name" type="text" required className={fieldClass} />
              </div>
              <div>
                <label htmlFor="email" className={labelClass}>
                  {c.email}
                </label>
                <input id="email" name="email" type="email" required className={fieldClass} />
              </div>
              <div>
                <label htmlFor="challenge" className={labelClass}>
                  {c.challenge}
                </label>
                <textarea id="challenge" name="challenge" rows={4} className={fieldClass} />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-4 font-mono text-xs font-semibold uppercase tracking-wider text-primary-foreground glow-cyan transition-opacity hover:opacity-90"
              >
                {sent ? (
                  <>
                    <Check className="h-4 w-4" />
                    {c.sent}
                  </>
                ) : (
                  c.submit
                )}
              </button>
            </form>
          </div>

          <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-terminal p-8 text-center">
            <CalendarCheck className="mb-6 h-16 w-16 text-primary" strokeWidth={1.5} />
            <h3 className="font-display text-xl md:text-2xl font-semibold tracking-tight text-foreground mb-2">
              {c.scheduleTitle}
            </h3>
            <p className="font-sans text-base text-muted-foreground mb-8 leading-relaxed">{c.scheduleText}</p>
            <a
              href="https://cal.com/ivan-espindola-egxczc/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-primary px-8 py-4 font-mono text-xs font-semibold uppercase tracking-wider text-primary transition-colors hover:bg-primary/10 w-full md:w-auto"
            >
              {c.scheduleCta}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
