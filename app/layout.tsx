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

export const metadata: Metadata = {
  title: "Iván Gabriel — Data Engineer",
  description:
    "Data Engineering Architect. Diseño, construyo y optimizo infraestructuras de datos escalables: pipelines ETL, modelado de datos y migraciones cloud con cero downtime.",
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
