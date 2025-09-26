"use client"

import { useLanguage } from "@/contexts/LanguageContext"

export default function DemosPage() {
  const { t } = useLanguage()

  const demos = [
    {
      id: "ecommerce-analysis",
      title: t("demo.salesAnalysis.title"),
      description: t("demo.salesAnalysis.description"),
      embedUrl: "https://demo-proyecto-1.vercel.app", // Placeholder URL
    },
    {
      id: "customer-segmentation",
      title: t("language") === "es" ? "Segmentación de Clientes (PRONTO)" : "Customer Segmentation (COMING SOON)",
      description:
        t("language") === "es"
          ? "Modelo de clustering para identificar segmentos de clientes"
          : "Clustering model to identify customer segments",
      embedUrl: "https://demo-proyecto-2.vercel.app", // Placeholder URL
    },
    {
      id: "real-estate-prediction",
      title:
        t("language") === "es"
          ? "Predicción de Precios Inmobiliarios (PRONTO)"
          : "Real Estate Price Prediction (COMING SOON)",
      description:
        t("language") === "es"
          ? "Sistema de predicción de precios usando machine learning"
          : "Price prediction system using machine learning",
      embedUrl: "https://demo-proyecto-3.vercel.app", // Placeholder URL
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
            {t("demos.title")}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">{t("demos.subtitle")}</p>
        </div>

        <div className="space-y-12">
          {demos.map((demo, index) => (
            <div
              key={demo.id}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 animate-fade-in hover:bg-card/70 transition-all duration-500"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-foreground mb-3">{demo.title}</h2>
                <p className="text-muted-foreground">{demo.description}</p>
              </div>

              {/* Demo embed container with placeholder */}
              <div className="relative w-full h-96 bg-muted/20 rounded-2xl border border-border/30 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-accent/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
                      <svg
                        className="w-12 h-12 text-accent animate-pulse"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M12 6v6l4 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-accent mb-3">{t("alert.comingSoon")}</h3>
                    <p className="text-lg text-muted-foreground">
                      {t("language") === "es"
                        ? "La demo interactiva estará disponible próximamente"
                        : "Interactive demo will be available soon"}
                    </p>
                  </div>
                </div>

                {/* Future iframe for actual demo */}
                {/* 
                <iframe 
                  src={demo.embedUrl}
                  className="w-full h-full border-0"
                  title={demo.title}
                  loading="lazy"
                />
                */}
              </div>
            </div>
          ))}
        </div>

        {/* Back to projects link */}
        <div className="text-center mt-16">
          <a
            href="/proyectos"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-2xl hover:bg-accent/90 transition-all duration-300 hover:scale-105"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {t("demos.backToProjects")}
          </a>
        </div>
      </div>
    </div>
  )
}
