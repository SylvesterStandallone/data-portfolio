"use client"

import { useLanguage } from "@/contexts/LanguageContext"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center space-x-2">
      <Globe className="w-4 h-4 text-muted-foreground" />
      <div className="flex rounded-md border border-border overflow-hidden">
        <Button
          variant={language === "es" ? "default" : "ghost"}
          size="sm"
          onClick={() => setLanguage("es")}
          className={`px-3 py-1 text-xs font-medium rounded-none ${
            language === "es"
              ? "bg-accent text-accent-foreground"
              : "bg-transparent text-muted-foreground hover:text-foreground hover:bg-muted"
          }`}
        >
          ES
        </Button>
        <Button
          variant={language === "en" ? "default" : "ghost"}
          size="sm"
          onClick={() => setLanguage("en")}
          className={`px-3 py-1 text-xs font-medium rounded-none ${
            language === "en"
              ? "bg-accent text-accent-foreground"
              : "bg-transparent text-muted-foreground hover:text-foreground hover:bg-muted"
          }`}
        >
          EN
        </Button>
      </div>
    </div>
  )
}
