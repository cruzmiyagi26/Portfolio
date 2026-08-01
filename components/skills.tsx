import { Code2, GitBranch, PenTool, Braces, Terminal, Layers } from "lucide-react"

const tech = [
  { name: "React", icon: Code2 },
  { name: "JavaScript", icon: Braces },
  { name: "Python", icon: Terminal },
  { name: ".Net/C#", icon: GitBranch },
  { name: "UI/UX", icon: PenTool },
  { name: "Next.js", icon: Layers },
]

const skills = [
  { label: "Frontend Development", value: 92 },
  { label: "UI / UX Design", value: 88 },
  { label: "Illustration & Art", value: 80 },
  { label: "Backend & APIs", value: 74 },
]

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-20 md:px-6">
      <div className="mb-12 flex flex-col gap-3">
        <span className="w-fit rounded-full ink-border bg-accent px-3 py-1 text-sm font-bold">
          技術 · Skills & Tech
        </span>
        <h2 className="text-balance font-display text-3xl font-black tracking-tight md:text-5xl">
          Tools of the trade
        </h2>
      </div>

      <div className="grid gap-10 md:grid-cols-2">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {tech.map((t) => (
            <div
              key={t.name}
              className="flex flex-col items-center justify-center gap-3 rounded-2xl ink-border ink-shadow-sm bg-card p-6 text-center transition-transform hover:-translate-y-1"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl ink-border bg-secondary text-secondary-foreground">
                <t.icon className="h-6 w-6" />
              </span>
              <span className="font-display font-black">{t.name}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col justify-center gap-6">
          {skills.map((s) => (
            <div key={s.label}>
              <div className="mb-2 flex items-center justify-between">
                <span className="font-bold">{s.label}</span>
                <span className="font-display font-black text-primary">{s.value}%</span>
              </div>
              <div className="h-4 overflow-hidden rounded-full ink-border bg-background">
                <div
                  className="h-full rounded-full bg-primary"
                  style={{ width: `${s.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
