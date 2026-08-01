import { SiteNav } from "@/components/site-nav"
import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="min-h-screen scroll-smooth">
      <SiteNav />
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Contact />
      <SiteFooter />
    </main>
  )
}
