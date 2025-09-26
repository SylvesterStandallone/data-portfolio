"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ProjectCard } from "@/components/ProjectCard"
import { ArrowRight, BarChart3, Brain, Database } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/contexts/LanguageContext"

export default function HomePage() {
  const [isExpanded, setIsExpanded] = useState(false)
  const { t } = useLanguage()

  const skills = ["Python", "Pandas", "Selenium", "SQL", "Power BI", "AI"]

  const highlights = [
    {
      icon: Database,
      title: t("home.skills.dataAnalysis"),
      description: t("home.skills.dataAnalysis.desc"),
    },
    {
      icon: BarChart3,
      title: t("home.skills.visualization"),
      description: t("home.skills.visualization.desc"),
    },
    {
      icon: Brain,
      title: t("home.skills.etl"),
      description: t("home.skills.etl.desc"),
    },
  ]

  const featuredProjects = [
    {
      title: t("project.fireAnalysis.title"),
      description: t("project.fireAnalysis.description"),
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
      title: t("project.marketIntelligence.title"),
      description: t("project.marketIntelligence.description"),
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
                  {t("home.hero.title").split(t("home.hero.title.highlight"))[0]}
                  <span className="text-accent font-manrope">{t("home.hero.title.highlight")}</span>
                  {t("home.hero.title").split(t("home.hero.title.highlight"))[1]}
                </h1>

                <div className="text-xl text-muted-foreground leading-relaxed text-pretty max-w-lg">
                  <p style={{ whiteSpace: "pre-wrap" }}>
                    {isExpanded ? t("home.hero.description.full") : t("home.hero.description.short")}
                    {!isExpanded && "..."}
                  </p>
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-accent font-semibold hover:underline mt-2"
                  >
                    {isExpanded ? t("home.hero.readLess") : t("home.hero.readMore")}
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href="/proyectos">
                    {t("home.hero.viewProjects")} <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contacto">{t("home.hero.contact")}</Link>
                </Button>
              </div>
            </div>

            {/* Visual Element */}
            <div className="flex justify-center lg:justify-end animate-slide-up">
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-accent/20 to-accent/5 rounded-3xl flex items-center justify-center animate-float">
                  <div className="w-64 h-64 lg:w-80 lg:h-80 bg-card rounded-2xl shadow-2xl flex items-center justify-center border border-border">
                    <Image
                      src="/Foto22.png"
                      alt={t("home.hero.imageAlt")}
                      width={320}
                      height={320}
                      className="object-cover w-full h-full"
                      priority
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
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-manrope">
              {t("home.projects.title")}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t("home.projects.subtitle")}</p>
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
                {t("home.projects.viewAll")} <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-manrope">
              {t("home.skills.title")}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t("home.skills.subtitle")}</p>
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
