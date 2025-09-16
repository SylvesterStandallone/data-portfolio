import { ProjectCard } from "@/components/ProjectCard"

export default function ProyectosPage() {
  const projects = [
    {
      title: "Análisis de Ventas E-commerce",
      description:
        "Dashboard interactivo para análisis de patrones de compra y predicción de demanda utilizando técnicas de machine learning.",
      technologies: ["Python", "Pandas", "Scikit-learn", "Tableau"],
      githubUrl: "https://github.com/tu-usuario/proyecto-1",
      demoId: "ecommerce-analysis", // Changed from demoUrl to demoId
    },
    {
      title: "Segmentación de Clientes",
      description:
        "Modelo de clustering para identificar segmentos de clientes y optimizar estrategias de marketing personalizado.",
      technologies: ["R", "K-means", "Power BI", "SQL"],
      githubUrl: "https://github.com/tu-usuario/proyecto-2",
      demoId: "customer-segmentation", // Changed from demoUrl to demoId
    },
    {
      title: "Predicción de Precios Inmobiliarios",
      description:
        "Sistema de predicción de precios de viviendas usando regresión múltiple y redes neuronales con datos históricos.",
      technologies: ["Python", "TensorFlow", "Matplotlib", "Pandas"],
      githubUrl: "https://github.com/tu-usuario/proyecto-3",
      demoId: "real-estate-prediction", // Changed from demoUrl to demoId
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card/30 to-background py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-2xl mb-6">
            <div className="w-8 h-8 bg-accent rounded-lg animate-float"></div>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-foreground to-muted bg-clip-text text-transparent mb-6">
            Proyectos Destacados
          </h1>
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
                demoId={project.demoId} // Updated prop name
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
