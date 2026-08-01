import { Coffee, Palette, Rocket } from "lucide-react"

const facts = [
  {
    icon: Palette,
    title: "Design-minded engineer",
    body: "I care as much about how it feels as how it works. Every pixel and every function gets attention.",
  },
  {
    icon: Rocket,
    title: "Ship fast, stay clean",
    body: "I love shipping quickly without sacrificing readable code, accessibility, or performance.",
  },
  {
    icon: Coffee,
    title: "Always learning",
    body: "From racing telemetry to game UI, I chase curiosity across wildly different creative spaces.",
  },
]

export function About() {
  return (
    <section id="about" className="border-y-[2.5px] border-ink bg-card">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6">
        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:items-center">
          <div>
            <span className="w-fit rounded-full ink-border bg-accent px-3 py-1 text-sm font-bold">
              自己紹介 · About Me
            </span>
            <h2 className="mt-4 text-balance font-display text-3xl font-black tracking-tight md:text-4xl">
              I turn bold ideas into friendly, functional products.
            </h2>
            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
              {"I'm a developer and designer who grew up loving manga, games, and clean web design. Today I mix those influences to build interfaces that are approachable, playful, and genuinely useful \u2014 the kind of work that makes people smile while it quietly does its job."}
            </p>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              {"When I'm not coding, you'll find me sketching characters, watching Formula 1, or hunting for the perfect cup of matcha."}
            </p>
          </div>

          <div className="grid gap-5">
            {facts.map((f) => (
              <div
                key={f.title}
                className="flex items-start gap-4 rounded-2xl ink-border ink-shadow-sm bg-background p-5"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl ink-border bg-primary text-primary-foreground">
                  <f.icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-black">{f.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
