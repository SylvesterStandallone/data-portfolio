import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, BarChart3, Brain, Database } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const skills = ["Python", "R", "SQL", "Tableau", "Power BI", "Scikit-learn", "Pandas", "TensorFlow", "Apache Spark"]

  const highlights = [
    {
      icon: Database,
      title: "Análisis de Datos",
      description: "Extracción y transformación de insights desde datasets complejos",
    },
    {
      icon: BarChart3,
      title: "Visualización",
      description: "Creación de dashboards interactivos y reportes ejecutivos",
    },
    {
      icon: DatabaseImport,
      icon: Brain,
      title: "ETL y Automatizaciones",
      description: "Construcción de procesos ETL y automatización de transferencias de datos",
    },
  ]

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-card to-background">
        <div className="max-w-6xl mx-auto px-6 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight text-balance">
                  Transformo <span className="text-accent font-manrope">datos</span> en decisiones
                </h1>

                <p className="text-xl text-muted leading-relaxed text-pretty max-w-lg">
                  Especialista en análisis de datos y ciencia de datos. Ayudo a organizaciones a descubrir patrones
                  ocultos y generar insights accionables.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href="/proyectos">
                    Ver Proyectos <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contacto">Contactar</Link>
                </Button>
              </div>
            </div>

            {/* Visual Element */}
            <div className="flex justify-center lg:justify-end animate-slide-up">
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-accent/20 to-accent/5 rounded-3xl flex items-center justify-center animate-float">
                  <div className="w-64 h-64 lg:w-80 lg:h-80 bg-card rounded-2xl shadow-2xl flex items-center justify-center border border-border">
                    <BarChart3 className="w-24 h-24 text-accent" />
                  </div>
                </div>
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent/10 rounded-full animate-pulse" />
                <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-accent/20 rounded-full animate-pulse delay-1000" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-manrope">Habilidades Técnicas</h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Dominio de herramientas y tecnologías para el análisis completo del ciclo de vida de los datos
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {skills.map((skill, index) => (
              <Badge
                key={skill}
                variant="secondary"
                className="bg-accent text-white hover:bg-accent/90 px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 border border-accent/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {skill}
              </Badge>
            ))}
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <Card
                key={item.title}
                className="p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border bg-background"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 font-manrope">{item.title}</h3>
                <p className="text-muted leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
