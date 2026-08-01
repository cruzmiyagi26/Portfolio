import Image from "next/image"
import { ArrowRight, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 halftone" aria-hidden="true" />
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:px-6 md:py-24">
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full ink-border bg-card px-3 py-1 text-sm font-bold">
            <Sparkles className="h-4 w-4 text-primary" />
            Open for projects
          </span>

          <h1 className="mt-5 text-balance font-display text-4xl font-black leading-[1.05] tracking-tight md:text-6xl">
            Software Developer <span className="text-primary">&</span> Creative Designer
          </h1>

          <p className="mt-5 max-w-md text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            {"Hi, I'm Princeton. I build websites, apps, and playful digital experiences \u2014 blending clean engineering with bold, cartoon-flavored design."}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-xl ink-border ink-shadow bg-primary px-6 py-3 font-bold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              View my work
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl ink-border bg-card px-6 py-3 font-bold transition-transform hover:-translate-y-0.5"
            >
              Get in touch
            </a>
          </div>

          <dl className="mt-10 flex gap-8">
            {[
              { n: "5+", l: "Years crafting" },
              { n: "40+", l: "Projects shipped" },
              { n: "\u221e", l: "Cups of coffee" },
            ].map((s) => (
              <div key={s.l}>
                <dt className="font-display text-2xl font-black md:text-3xl">{s.n}</dt>
                <dd className="text-sm font-medium text-muted-foreground">{s.l}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative z-10 flex justify-center">
          <div className="relative w-full max-w-md">
            <div className="absolute -inset-3 -rotate-2 rounded-[2rem] bg-secondary/25" aria-hidden="true" />
            <div className="relative animate-float overflow-hidden rounded-[2rem] ink-border ink-shadow bg-card">
              <Image
                src="/images/H.png"
                alt="Cartoon illustration of , a developer sitting with a laptop"
                width={640}
                height={640}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
