import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

type Project = {
  title: string
  tag: string
  description: string
  image: string
  accent: "primary" | "secondary" | "chart-3"
  fit: "cover" | "contain"
}

const projects: Project[] = [
  {
    title: "Cloud Wolf",
    tag: "Web / UI-UX",
    description:
      "A polished creative-agency website design — bold hero branding, clean navigation, and a portfolio grid built to feel fast and confident.",
    image: "/images/project-web.png",
    accent: "secondary",
    fit: "cover",
  },
  {
    title: "Cloud Vision",
    tag: "Web / UI-UX",
    description:
      "A polished creative-agency website design — bold hero branding, clean navigation, and a portfolio grid built to feel fast and confident.",
    image: "/images/Vision.png",
    accent: "secondary",
    fit: "cover",
  },
  {
    title: "F1 Racing Digital Experience",
    tag: "Concept / Motorsport",
    description:
      "A fictional Formula 1 web app concept with a live racing dashboard, car telemetry, and bold speed-driven visuals.",
    image: "/images/project-f1.png",
    accent: "primary",
    fit: "cover",
  },
  {
    title: "NTF Real Estate Digital Experience",
    tag: "Concept / Real Estate",
    description:
      "Pokemon type real estate NFT experienxe",
    image: "/images/RealEstate3.png",
    accent: "primary",
    fit: "cover",
  }, {
    title: "Real Estate Digital Experience",
    tag: "Concept / Real Estate",
    description:
      "Project with local Atlanta real estate agent",
    image: "/images/Realestate4.png",
    accent: "primary",
    fit: "cover",
  },
  , {
    title: "Zillow Digital Experience",
    tag: "Concept / Real Estate",
    description:
      "local Atlanta real estate agent",
    image: "/images/RealEstate1.png",
    accent: "primary",
    fit: "cover",
  },
  {
    title: "Poke Design Game",
    tag: "Web / Anime",
    description:
      "A vibrant anime website design fronted by an original Pokémon-type mascot, with a character gallery and colorful, playful layouts.",
    image: "/images/J.jpeg",
    accent: "chart-3",
    fit: "cover",
  },
  {
    title: "Game Portal",
    tag: "Web / Gaming",
    description:
      "A gaming website design built around an original Pokémon-type creature mascot — HUD previews, character cards, and bold interactive energy.",
    image: "/images/project-gaming.png",
    accent: "secondary",
    fit: "cover",
  },
  {
    title: "PayFlow",
    tag: "Web / Fintech",
    description:
      "A fintech payment-service website design with a secure checkout flow, transaction dashboard, and clean, trustworthy fintech UI.",
    image: "/images/project-future.png",
    accent: "primary",
    fit: "cover",
  },
  {
    title: "Online Magazine",
    tag: "Web / Anime",
    description:
      "Online News & Magzine for Anime Lovers",
    image: "/images/C.jpeg",
    accent: "primary",
    fit: "cover",
  },
]

const accentBg: Record<Project["accent"], string> = {
  primary: "bg-primary text-primary-foreground",
  secondary: "bg-secondary text-secondary-foreground",
  "chart-3": "bg-[var(--chart-3)] text-ink",
}

const accentPanel: Record<Project["accent"], string> = {
  primary: "bg-primary/12",
  secondary: "bg-secondary/15",
  "chart-3": "bg-[var(--chart-3)]/20",
}

export function Projects() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-4 py-20 md:px-6">
      <div className="mb-12 flex flex-col gap-3">
        <span className="w-fit rounded-full ink-border bg-accent px-3 py-1 text-sm font-bold">
          作品 · Selected Work
        </span>
        <h2 className="text-balance font-display text-3xl font-black tracking-tight md:text-5xl">
          A gallery of website designs
        </h2>
        <p className="max-w-xl text-pretty leading-relaxed text-muted-foreground">
          Concept website designs I created and built &mdash; exploring ideas across creative agencies, motorsport, anime, gaming, and fintech.
        </p>
      </div>

      <div className="grid gap-8">
        {projects.map((p, i) => (
          <article
            key={p.title}
            className={`group grid overflow-hidden rounded-2xl ink-border ink-shadow bg-card md:grid-cols-2 ${
              i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
            }`}
          >
            <div
              className={`relative flex items-center justify-center overflow-hidden ${
                p.fit === "contain" ? "p-6" : ""
              } ${accentPanel[p.accent]}`}
            >
              <Image
                src={p.image || "/placeholder.svg"}
                alt={`Cover art for ${p.title}`}
                width={640}
                height={480}
                className={`h-56 w-full transition-transform duration-300 group-hover:scale-105 md:h-full md:min-h-72 ${
                  p.fit === "contain" ? "object-contain" : "object-cover"
                }`}
              />
            </div>

            <div className="flex flex-col justify-center gap-4 p-6 md:p-10">
              <span className={`w-fit rounded-full px-3 py-1 text-xs font-bold ink-border ${accentBg[p.accent]}`}>
                {p.tag}
              </span>
              <h3 className="font-display text-2xl font-black tracking-tight md:text-3xl">{p.title}</h3>
              <p className="text-pretty leading-relaxed text-muted-foreground">{p.description}</p>
              <a
                href="#contact"
                className="mt-1 inline-flex w-fit items-center gap-1 font-bold text-primary underline-offset-4 hover:underline"
              >
                See the concept
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
