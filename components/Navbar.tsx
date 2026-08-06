"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Globe, Menu, X } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"
import { content } from "@/lib/content"

export function Navbar() {
  const { language, setLanguage } = useLanguage()
  const [open, setOpen] = useState(false)
  const c = content[language].nav

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="max-w-[1280px] mx-auto flex items-center justify-between h-20 px-5 md:px-16">
        <Link href="#top" className="flex items-center gap-2" aria-label="Iván Gabriel — inicio">
          <span className="flex items-center justify-center rounded bg-foreground/95 p-1.5">
            <Image src="/logo.png" alt="Iván Gabriel logo" width={72} height={24} className="h-5 w-auto" priority />
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {c.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3 md:gap-4">
          <button
            onClick={() => setLanguage(language === "es" ? "en" : "es")}
            className="flex items-center gap-1 font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors"
            aria-label="Toggle language"
          >
            <Globe className="h-[18px] w-[18px]" />
            {language.toUpperCase()}
          </button>

          <a
            href="#contacto"
            className="hidden md:inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground font-mono text-xs font-semibold uppercase tracking-wider px-6 py-3 glow-cyan hover:opacity-90 transition-opacity"
          >
            {c.cta}
          </a>

          <button
            className="md:hidden text-foreground"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md px-5 py-6">
          <div className="flex flex-col gap-5">
            {c.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground font-mono text-xs font-semibold uppercase tracking-wider px-6 py-3 glow-cyan"
            >
              {c.cta}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
