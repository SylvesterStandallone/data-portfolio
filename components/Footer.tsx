import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-muted text-sm font-manrope">© 2025 DataAnalyst. Transformando datos en insights.</p>

          <div className="flex items-center space-x-6">
            <Link
              href="https://github.com/tu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-all duration-300 hover:scale-110"
            >
              <Github className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </Link>

            <Link
              href="https://linkedin.com/in/tu-perfil"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>

            <Link
              href="mailto:tu-email@ejemplo.com"
              className="text-muted hover:text-accent transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-5 h-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
