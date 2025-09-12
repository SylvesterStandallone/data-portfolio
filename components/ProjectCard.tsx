import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, BarChart3 } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  githubUrl: string
  demoUrl: string
}

export function ProjectCard({ title, description, technologies, githubUrl, demoUrl }: ProjectCardProps) {
  return (
    /* Updated with modern glass-morphism design and hover effects */
    <Card className="group h-full flex flex-col bg-card/50 backdrop-blur-sm border border-border/50 hover:border-accent/30 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/10 hover:-translate-y-2">
      <CardHeader className="pb-4">
        <div className="w-full h-48 bg-gradient-to-br from-accent/10 via-accent/5 to-transparent rounded-xl mb-4 flex items-center justify-center border border-accent/20 group-hover:border-accent/40 transition-colors">
          <BarChart3 className="w-16 h-16 text-accent/60 group-hover:text-accent transition-colors" />
        </div>

        <CardTitle className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent className="flex-1 pb-4">
        <p className="text-muted-foreground mb-6 leading-relaxed text-sm">{description}</p>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="text-xs bg-accent/5 border-accent/20 text-accent hover:bg-accent/10 transition-colors"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="pt-4 gap-3">
        <Button
          variant="outline"
          size="sm"
          asChild
          className="flex-1 bg-transparent border-accent/20 text-accent hover:bg-accent/10 hover:border-accent/40 transition-all"
        >
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="w-4 h-4 mr-2" />
            Código
          </a>
        </Button>

        <Button
          size="sm"
          asChild
          className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-accent/25 transition-all"
        >
          <a href={demoUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="w-4 h-4 mr-2" />
            Demo
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}
