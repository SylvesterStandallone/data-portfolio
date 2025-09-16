"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navbar() {
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Sobre mí" },
    { href: "/proyectos", label: "Proyectos" },
    { href: "/contacto", label: "Contacto" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold font-manrope text-foreground hover:text-accent transition-all duration-300 hover:scale-105"
        >
          DataAnalyst
        </Link>

        <div className="flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium font-manrope transition-all duration-300 hover:text-accent relative group ${
                pathname === item.href ? "text-accent" : "text-foreground hover:text-accent"
              }`}
            >
              {item.label}
              <span
                className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full ${
                  pathname === item.href ? "w-full" : ""
                }`}
              />
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}
