"use client"

import { ProjectCard } from "@/components/ProjectCard"
import { useLanguage } from "@/contexts/LanguageContext"

export default function ProyectosPage() {
  const { t } = useLanguage()

  const projects = [
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
      ],
      githubUrl: "#",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card/30 to-background py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-2xl mb-6">
            <div className="w-8 h-8 bg-accent rounded-lg animate-float"></div>
          </div>
          <h1 className="text-5xl font-bold text-foreground mb-6">{t("projects.title")}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">{t("projects.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up">
          {projects.map((project, index) => (
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
      </div>
    </div>
  )
}
