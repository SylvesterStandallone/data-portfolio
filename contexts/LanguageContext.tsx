"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "es" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Translation data structure
const translations = {
  es: {
    // Navigation
    "nav.about": "Sobre mí",
    "nav.projects": "Proyectos",
    "nav.contact": "Contacto",
    "nav.brand": "DataAnalyst",

    // Home page
    "home.hero.title": "Transformo datos en decisiones",
    "home.hero.title.highlight": "datos",
    "home.hero.description.short":
      "Soy un Desarrollador de Datos y Analítica con un enfoque de pensamiento sistémico (systems-thinking). Me especializo en ir más allá de los simples dashboards: diseño y construyo los motores de datos automatizados que transforman el ruido operativo en inteligencia estratégica.",
    "home.hero.description.full":
      "Soy un Ingeniero de Datos y Analítica con un enfoque de pensamiento sistémico (systems-thinking). Me especializo en ir más allá de los simples dashboards: diseño y construyo los motores de datos automatizados que transforman el ruido operativo en inteligencia estratégica. Gestiono el ciclo de vida completo de los datos, desde la arquitectura y los pipelines ETL hasta las visualizaciones que los líderes necesitan para tomar decisiones críticas. Mi trabajo consiste en convertir el caos operativo en claridad estratégica. Tengo experiencia construyendo soluciones de BI de extremo a extremo, como mi proyecto de análisis de tendencias de incendios forestales con Python y Power BI, y procesando grandes volúmenes de datos con SQL o BIgQuery, para dashboards de inteligencia de mercado. Busco unirme a un equipo donde pueda diseñar y construir soluciones de datos escalables que tengan un impacto directo en el negocio. Si su organización necesita un puente entre la ingeniería de datos y la estrategia de negocio, me encantaría conversar.",
    "home.hero.readMore": "Ver más",
    "home.hero.readLess": "Ver menos",
    "home.hero.viewProjects": "Ver Proyectos",
    "home.hero.contact": "Contactar",
    "home.hero.imageAlt": "Foto de perfil de Iván Gabriel, Analytics Developer",

    // Projects section
    "home.projects.title": "Proyectos Destacados",
    "home.projects.subtitle": "Soluciones completas de datos que transforman información en decisiones estratégicas",
    "home.projects.viewAll": "Ver Todos los Proyectos",

    // Skills section
    "home.skills.title": "Habilidades Técnicas",
    "home.skills.subtitle":
      "Dominio de herramientas y tecnologías para el análisis completo del ciclo de vida de los datos",
    "home.skills.dataAnalysis": "Análisis de Datos",
    "home.skills.dataAnalysis.desc": "Extracción y transformación de insights desde datasets complejos",
    "home.skills.visualization": "Visualización",
    "home.skills.visualization.desc": "Creación de dashboards interactivos y reportes ejecutivos",
    "home.skills.etl": "ETL y Automatizaciones",
    "home.skills.etl.desc": "Construcción de procesos ETL y automatización de transferencias de datos",

    // Project data
    "project.fireAnalysis.title":
      "Solución de Business Intelligence End-to-End para el Análisis de Incendios Forestales en Argentina",
    "project.fireAnalysis.description":
      " Un dashboard interactivo en Power BI que centraliza y analiza más de 325,000 focos de incendio ocurridos en Argentina durante el Q1 de 2022. La solución completa abarca desde la ingesta automatizada de datos públicos hasta la visualización de KPIs para la toma de decisiones estratégicas",
    "project.marketIntelligence.title": "Sistema de Inteligencia de Mercado para un Distribuidor Mayorista",
    "project.marketIntelligence.description":
      "Una solución de datos end-to-end que extrae, procesa y visualiza data de más de 13,000 productos de sitios web de competidores. El sistema transforma datos públicos pero protegidos en un dashboard interactivo en Google Sheets, proporcionando al cliente una ventaja competitiva a través del análisis de precios, stock y promociones en tiempo real.",

    // Projects page
    "projects.title": "Proyectos Destacados",
    "projects.subtitle":
      "Una selección de mis trabajos más relevantes en análisis de datos y ciencia de datos, donde combino técnicas avanzadas con soluciones prácticas.",

    // Contact page
    "contact.title": "Conectemos",
    "contact.subtitle":
      "Estoy disponible para oportunidades de colaboración y nuevos proyectos. No dudes en ponerte en contacto para discutir cómo podemos trabajar juntos.",
    "contact.info.title": "Información de Contacto",
    "contact.info.email": "Email",
    "contact.info.location": "Ubicación",
    "contact.info.phone": "Teléfono",
    "contact.info.locationValue": "Santiago del Estero, Argentina",
    "contact.info.socialMedia": "Sígueme en redes sociales",
    "contact.form.title": "Envíame un Mensaje",
    "contact.form.name": "Nombre Completo",
    "contact.form.name.placeholder": "Tu nombre completo",
    "contact.form.email": "Correo Electrónico",
    "contact.form.email.placeholder": "tu-email@ejemplo.com",
    "contact.form.message": "Mensaje",
    "contact.form.message.placeholder": "Cuéntame sobre tu proyecto o consulta...",
    "contact.form.submit": "Enviar Mensaje",

    // Demos page
    "demos.title": "Demos Interactivas",
    "demos.subtitle": "Explora las demos interactivas de mis proyectos de análisis de datos en tiempo real.",
    "demos.backToProjects": "Volver a Proyectos",
    "demo.salesAnalysis.title": "Análisis de Ventas E-commerce",
    "demo.salesAnalysis.description":
      "Dashboard interactivo para análisis de patrones de compra y predicción de demanda",
  },
  en: {
    // Navigation
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "nav.brand": "DataAnalyst",

    // Home page
    "home.hero.title": "I transform data into decisions",
    "home.hero.title.highlight": "data",
    "home.hero.description.short":
      "I am an Analytics Engineer with a dual passion: building robust data systems and using them to discover insights that change the business. My specialty is managing the complete data lifecycle, from extraction and modeling to interactive visualization that leaders need to make strategic decisions.",
    "home.hero.description.full":
      "I am an Analytics Engineer with a dual passion: building robust data systems and using them to discover insights that change the business. My specialty is managing the complete data lifecycle, from extraction and modeling to interactive visualization that leaders need to make strategic decisions.\n\nMy experience focuses on ETL process optimization and BI dashboard creation. For example, when analyzing public data on forest fires in Argentina, I identified a key challenge: the difficulty of performing strategic analysis from disparate datasets. To solve this, I designed and built an end-to-end BI solution that automates the ingestion and processing of this data. The result is an interactive dashboard specifically created for post-event analysis, capable of identifying patterns, correlating risk factors, and visualizing historical high-incidence zones, thus enabling smarter and more proactive resource planning.\n\nI am looking for opportunities to apply my skills in Analytics Engineer, BI Developer, or Data Engineer projects and roles. If your organization needs someone who not only analyzes data but builds the systems to do it scalably based on your processes, I would love to talk.",
    "home.hero.readMore": "Read more",
    "home.hero.readLess": "Read less",
    "home.hero.viewProjects": "View Projects",
    "home.hero.contact": "Contact",
    "home.hero.imageAlt": "Profile photo of Iván Gabriel, Analytics Developer",

    // Projects section
    "home.projects.title": "Featured Projects",
    "home.projects.subtitle": "Complete data solutions that transform information into strategic decisions",
    "home.projects.viewAll": "View All Projects",

    // Skills section
    "home.skills.title": "Technical Skills",
    "home.skills.subtitle": "Mastery of tools and technologies for complete data lifecycle analysis",
    "home.skills.dataAnalysis": "Data Analysis",
    "home.skills.dataAnalysis.desc": "Extraction and transformation of insights from complex datasets",
    "home.skills.visualization": "Visualization",
    "home.skills.visualization.desc": "Creation of interactive dashboards and executive reports",
    "home.skills.etl": "ETL & Automation",
    "home.skills.etl.desc": "Building ETL processes and automating data transfers",

    // Project data
    "project.fireAnalysis.title": "End-to-End Business Intelligence Solution for Forest Fire Analysis in Argentina",
    "project.fireAnalysis.description":
      "An interactive Power BI dashboard that centralizes and analyzes over 325,000 fire hotspots that occurred in Argentina during Q1 2022. The complete solution spans from automated public data ingestion to KPI visualization for strategic decision-making",
    "project.marketIntelligence.title": "Market Intelligence System for a Wholesale Distributor",
    "project.marketIntelligence.description":
      "An end-to-end data solution that extracts, processes, and visualizes data from over 13,000 products from competitor websites. The system transforms public but protected data into an interactive Google Sheets dashboard, providing the client with a competitive advantage through real-time analysis of prices, stock, and promotions.",

    // Projects page
    "projects.title": "Featured Projects",
    "projects.subtitle":
      "A selection of my most relevant work in data analysis and data science, where I combine advanced techniques with practical solutions.",

    // Contact page
    "contact.title": "Let's Connect",
    "contact.subtitle":
      "I am available for collaboration opportunities and new projects. Feel free to get in touch to discuss how we can work together.",
    "contact.info.title": "Contact Information",
    "contact.info.email": "Email",
    "contact.info.location": "Location",
    "contact.info.phone": "Phone",
    "contact.info.locationValue": "Santiago del Estero, Argentina",
    "contact.info.socialMedia": "Follow me on social media",
    "contact.form.title": "Send me a Message",
    "contact.form.name": "Full Name",
    "contact.form.name.placeholder": "Your full name",
    "contact.form.email": "Email Address",
    "contact.form.email.placeholder": "your-email@example.com",
    "contact.form.message": "Message",
    "contact.form.message.placeholder": "Tell me about your project or inquiry...",
    "contact.form.submit": "Send Message",

    // Demos page
    "demos.title": "Interactive Demos",
    "demos.subtitle": "Explore interactive demos of my real-time data analysis projects.",
    "demos.backToProjects": "Back to Projects",
    "demo.salesAnalysis.title": "E-commerce Sales Analysis",
    "demo.salesAnalysis.description": "Interactive dashboard for purchase pattern analysis and demand prediction",
  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("es")

  // Load language preference from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "es" || savedLanguage === "en")) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Save language preference to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("language", language)
    // Update document language attribute
    document.documentElement.lang = language
  }, [language])

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
