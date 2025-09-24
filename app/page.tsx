"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ProjectCard } from "@/components/ProjectCard"
import { ArrowRight, BarChart3, Brain, Database } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  const [isExpanded, setIsExpanded] = useState(false)

  const skills = ["Python", "Pandas", "Selenium", "SQL", "Power BI", "AI"]

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
      icon: Brain,
      title: "ETL y Automatizaciones",
      description: "Construcción de procesos ETL y automatización de transferencias de datos",
    },
  ]

  const fullDescription = `Soy un Analytics Engineer con una pasión dual: construir sistemas de datos robustos y usarlos para descubrir insights que cambian el negocio. Mi especialidad es gestionar el ciclo de vida completo de los datos, desde la extracción y modelado hasta la visualización interactiva que los líderes necesitan para tomar decisiones estratégicas.

Mi experiencia se centra en la optimización de procesos ETL y la creación de dashboards de BI. Por ejemplo, al analizar los datos públicos sobre incendios forestales en Argentina, identifiqué un desafío clave: la dificultad para realizar análisis estratégicos a partir de datasets dispares. Para solucionarlo, diseñé y construí una solución de BI de extremo a extremo que automatiza la ingesta y procesamiento de estos datos. El resultado es un dash interactivo que se creó específicamente para análisis post-evento, capaz de identificar patrones, correlacionar factores de riesgo y visualizar las zonas de mayor incidencia históricas, que de esta manera permite una planificación de recursos más inteligente y proactiva

Estoy buscando oportunidades para aplicar mis habilidades en proyectos y roles de Analytics Engineer, BI Developer o Data Engineer. Si tu organización necesita a alguien que no solo analice datos, sino que construya los sistemas para hacerlo de manera escalable en base a sus procesos, me encantaría conversar.`

  const truncatedDescription =
    "Soy un Analytics Engineer con una pasión dual: construir sistemas de datos robustos y usarlos para descubrir insights que cambian el negocio. Mi especialidad es gestionar el ciclo de vida completo de los datos, desde la extracción y modelado hasta la visualización interactiva que los líderes necesitan para tomar decisiones estratégicas."

  const featuredProjects = [
    {
      title: "Solución de Business Intelligence End-to-End para el Análisis de Incendios Forestales en Argentina",
      description:
        " Un dashboard interactivo en Power BI que centraliza y analiza más de 325,000 focos de incendio ocurridos en Argentina durante el Q1 de 2022. La solución completa abarca desde la ingesta automatizada de datos públicos hasta la visualización de KPIs para la toma de decisiones estratégicas",
      technologies: ["Python (Selenium, Pandas)", "Power BI", "DAX"],
      githubUrl: "#",
      demoId: "focos-incendio",
      images: [
        "/Screenshot_1.png",
        "/Screenshot_2.png",
        "/Screenshot_3.png",
        "/Screenshot_4.png",
        "/Screenshot_5.png",
        "/Screenshot_6.png",
        "/Screenshot_7.png",
      ],
    },
    {
      title: "Sistema de Inteligencia de Mercado para un Distribuidor Mayorista",
      description:
        "Una solución de datos end-to-end que extrae, procesa y visualiza data de más de 13,000 productos de sitios web de competidores. El sistema transforma datos públicos pero protegidos en un dashboard interactivo en Google Sheets, proporcionando al cliente una ventaja competitiva a través del análisis de precios, stock y promociones en tiempo real.",
      technologies: ["Python", "Google Sheets", "Google Drive API", "Make"],
      demoId: "sheets-dashboard",
      images: [
        "/customer-data-analysis-charts.jpg",
        "/sales-data-visualization-graphs.jpg",
        "/ecommerce-dashboard-analytics-charts.jpg",
      ],
      githubUrl: "#",
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

                {/* MODIFICADO: Reemplazamos el texto estático por este bloque interactivo */}
                <div className="text-xl text-muted-foreground leading-relaxed text-pretty max-w-lg">
                  <p style={{ whiteSpace: "pre-wrap" }}>
                    {isExpanded ? fullDescription : truncatedDescription}
                    {!isExpanded && "..."}
                  </p>
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-accent font-semibold hover:underline mt-2"
                  >
                    {isExpanded ? "Ver menos" : "Ver más"}
                  </button>
                </div>
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
                    <Image
                      src="/Foto22.png" // Apunta a la imagen en la carpeta /public
                      alt="Foto de perfil de Iván Gabriel, Analytics Developer"
                      width={320} // El tamaño más grande del contenedor (lg:w-80 = 320px)
                      height={320} // El tamaño más grande del contenedor (lg:h-80 = 320px)
                      className="object-cover w-full h-full" // Asegura que la imagen cubra el contenedor
                      priority // Le dice a Next.js que cargue esta imagen importante primero
                    />
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

      {/* Projects Section - Now positioned after bio and before skills */}
      <section className="py-20 bg-gradient-to-br from-background via-card/30 to-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-2xl mb-6">
              <div className="w-8 h-8 bg-accent rounded-lg animate-float"></div>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-manrope">Proyectos Destacados</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Una selección de mis trabajos más relevantes en análisis de datos, donde combino técnicas avanzadas con
              soluciones prácticas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  githubUrl={project.githubUrl}
                  demoId={project.demoId}
                  images={project.images}
                />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-accent/20 text-accent hover:bg-accent/10 hover:border-accent/40 bg-transparent"
            >
              <Link href="/proyectos">
                Ver Todos los Proyectos <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-manrope">Habilidades Técnicas</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
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
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
