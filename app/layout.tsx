import type React from "react"
import type { Metadata } from "next"
import { Inter, Hanken_Grotesk, JetBrains_Mono } from "next/font/google"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { LanguageProvider } from "@/contexts/LanguageContext"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700", "800"],
  variable: "--font-hanken",
})

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains",
})

const title = "Iván Gabriel — Data Engineer"
const description =
  "Data Engineering Architect. Diseño, construyo y optimizo infraestructuras de datos escalables: pipelines ETL, modelado de datos y migraciones cloud con cero downtime."

/*
  Base para las URL absolutas de las previews (og:image, canonical).
  Cuando haya dominio propio se define NEXT_PUBLIC_SITE_URL en Vercel y
  este valor deja de usarse, sin tocar el código.

  Se normaliza el esquema a mano: new URL() lanza ERR_INVALID_URL si la
  variable viene como "midominio.com", y eso rompe el build entero.
*/
const DEFAULT_SITE_URL = "https://ivangabrieldata.vercel.app"

function resolveSiteUrl() {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim()
  if (!raw) return DEFAULT_SITE_URL
  const withScheme = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`
  try {
    return new URL(withScheme).origin
  } catch {
    return DEFAULT_SITE_URL
  }
}

const siteUrl = resolveSiteUrl()

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  // Las imágenes salen de app/opengraph-image.png y app/twitter-image.png
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "/",
    siteName: "Iván Gabriel",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  alternates: {
    canonical: "/",
  },
  generator: "v0.app",
}

export const viewport = {
  themeColor: "#0b0d11",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${hanken.variable} ${jetbrains.variable} antialiased dark scroll-smooth`}
    >
      <body className="font-sans bg-background text-foreground min-h-screen flex flex-col blueprint-bg">
        <LanguageProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}
