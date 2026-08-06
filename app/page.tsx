import { Hero } from "@/components/sections/Hero"
import { Metrics } from "@/components/sections/Metrics"
import { Services } from "@/components/sections/Services"
import { Cases } from "@/components/sections/Cases"
import { TechStack } from "@/components/sections/TechStack"
import { About } from "@/components/sections/About"
import { Contact } from "@/components/sections/Contact"

export default function HomePage() {
  return (
    <div id="top" className="pt-32 pb-28 md:pb-32">
      <Hero />
      <Metrics />
      <Services />
      <Cases />
      <TechStack />
      <About />
      <Contact />
    </div>
  )
}
