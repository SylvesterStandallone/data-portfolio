import { ProjectCard } from "@/components/ProjectCard"

export default function ProyectosPage() {
  const projects = [
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
      images: ["/customer-data-analysis-charts.jpg", "/sales-data-visualization-graphs.jpg", "/ecommerce-dashboard-analytics-charts.jpg"],
      githubUrl: "#",
    },
    /*
    {
      title: "Predicción de Precios Inmobiliarios",
      description:
        "Sistema de predicción de precios de viviendas usando regresión múltiple y redes neuronales con datos históricos.",
      technologies: ["Python", "TensorFlow", "Matplotlib", "Pandas"],
      githubUrl: "https://github.com/tu-usuario/proyecto-3",
      demoId: "real-estate-prediction",
      images: ["/real-estate-price-prediction-neural-network.jpg", "/housing-market-data-analysis-matplotlib.jpg", "/property-valuation-machine-learning-model.jpg"],
    },
    */
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card/30 to-background py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-2xl mb-6">
            <div className="w-8 h-8 bg-accent rounded-lg animate-float"></div>
          </div>
          <h1 className="text-5xl font-bold text-foreground mb-6">Proyectos Destacados</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Una selección de mis trabajos más relevantes en análisis de datos y ciencia de datos, donde combino técnicas
            avanzadas con soluciones prácticas.
          </p>
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
