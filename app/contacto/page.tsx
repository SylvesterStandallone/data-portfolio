"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Github, Linkedin, Mail, Send, MapPin, Phone } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    console.log("Formulario enviado:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    /* Updated with modern fluid layout and enhanced design */
    <div className="min-h-screen bg-gradient-to-br from-background via-card/30 to-background py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-2xl mb-6">
              <Mail className="w-8 h-8 text-accent animate-float" />
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-foreground to-muted bg-clip-text text-transparent mb-6">
              Conectemos
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Estoy disponible para oportunidades de colaboración y nuevos proyectos. No dudes en ponerte en contacto
              para discutir cómo podemos trabajar juntos.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 animate-slide-up">
            <div className="space-y-8">
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 p-8">
                <h2 className="text-2xl font-semibold text-foreground mb-6">Información de Contacto</h2>

                <div className="space-y-6">
                  <div className="flex items-center group">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mr-4 group-hover:bg-accent/20 transition-colors">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a
                        href="mailto:ivan.e90@gmail.com"
                        className="text-foreground hover:text-accent transition-colors"
                      >
                        ivan.e90@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center group">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mr-4 group-hover:bg-accent/20 transition-colors">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Ubicación</p>
                      <p className="text-foreground">Santiago del Estero, Argentina</p>
                    </div>
                  </div>

                  <div className="flex items-center group">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mr-4 group-hover:bg-accent/20 transition-colors">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Teléfono</p>
                      <p className="text-foreground">+543855061551</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-border/50">
                  <p className="text-sm text-muted-foreground mb-4">Sígueme en redes sociales</p>
                  <div className="flex space-x-4">
                    <Link
                      href="https://www.linkedin.com/in/ivanges/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center text-accent hover:bg-accent hover:text-accent-foreground transition-all"
                    >
                      <Linkedin className="w-5 h-5" />
                    </Link>

                    <Link
                      href="https://github.com/SylvesterStandallone"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center text-accent hover:bg-accent hover:text-accent-foreground transition-all"
                    >
                      <Github className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-6">Envíame un Mensaje</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="nombre" className="text-sm font-medium text-foreground mb-2 block">
                    Nombre Completo
                  </Label>
                  <Input
                    id="nombre"
                    name="nombre"
                    type="text"
                    required
                    value={formData.nombre}
                    onChange={handleChange}
                    className="bg-background/50 border-border/50 focus:border-accent/50 focus:ring-accent/20"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-foreground mb-2 block">
                    Correo Electrónico
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-background/50 border-border/50 focus:border-accent/50 focus:ring-accent/20"
                    placeholder="tu-email@ejemplo.com"
                  />
                </div>

                <div>
                  <Label htmlFor="mensaje" className="text-sm font-medium text-foreground mb-2 block">
                    Mensaje
                  </Label>
                  <Textarea
                    id="mensaje"
                    name="mensaje"
                    required
                    value={formData.mensaje}
                    onChange={handleChange}
                    className="bg-background/50 border-border/50 focus:border-accent/50 focus:ring-accent/20 min-h-[120px]"
                    rows={5}
                    placeholder="Cuéntame sobre tu proyecto o consulta..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-accent/25 transition-all"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Enviar Mensaje
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
