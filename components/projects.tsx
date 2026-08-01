import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

type Project = {
  title: string
  tag: string
  description: string
  image: string
  accent: "primary" | "secondary" | "chart-3"
}

const projects: Project[] = [
  {
    title: "Cloud Wolf Agency Website",
    tag: "Web Design / UI-UX",
    description:
      "A modern creative agency website featuring responsive web design, bold branding, portfolio showcases, engaging landing pages, and an intuitive UI/UX experience.",
    image: "/images/project-web.png",
    accent: "secondary",
  },
  {
    title: "Cloud Vision Business Website",
    tag: "Website Design / UI-UX",
    description:
      "A professional business website concept designed with clean layouts, responsive user interfaces, conversion-focused sections, and modern web design principles.",
    image: "/images/Vision.png",
    accent: "secondary",
  },
  {
    title: "Formula 1 Racing Dashboard",
    tag: "Dashboard Design / Motorsport",
    description:
      "A Formula 1 inspired dashboard featuring live race telemetry, performance analytics, dark mode UI, responsive layouts, and immersive sports web design.",
    image: "/images/project-f1.png",
    accent: "primary",
  },
  {
    title: "NFT Real Estate Marketplace",
    tag: "Real Estate / Web3",
    description:
      "A modern NFT real estate marketplace concept combining property listings, digital ownership, Web3 features, responsive design, and engaging user experiences.",
    image: "/images/RealEstate3.png",
    accent: "primary",
  },
  {
    title: "Real Estate Agent Website",
    tag: "Real Estate / Website Design",
    description:
      "A responsive real estate website created for a local Atlanta real estate agent with property listings, lead generation, modern branding, and intuitive navigation.",
    image: "/images/Realestate4.png",
    accent: "primary",
  },
  {
    title: "Zillow Property Platform Concept",
    tag: "Property Search / UI-UX",
    description:
      "A Zillow-inspired property search platform featuring interactive listings, responsive filters, map integration, modern UI, and an optimized home-buying experience.",
    image: "/images/RealEstate1.png",
    accent: "primary",
  },
  {
    title: "Pokémon Fan Website",
    tag: "Anime / Website Design",
    description:
      "A colorful Pokémon-inspired website featuring custom illustrations, character galleries, responsive layouts, interactive sections, and engaging anime-themed UI design.",
    image: "/images/J.jpeg",
    accent: "chart-3",
  },
  {
    title: "Gaming Portal Experience",
    tag: "Gaming / UI-UX",
    description:
      "A modern gaming website with interactive dashboards, character showcases, esports-inspired layouts, responsive web design, and immersive user experiences.",
    image: "/images/project-gaming.png",
    accent: "secondary",
  },
  {
    title: "PayFlow Fintech Platform",
    tag: "Fintech / Dashboard",
    description:
      "A fintech payment platform featuring secure checkout flows, financial dashboards, responsive user interfaces, transaction management, and modern banking UI design.",
    image: "/images/project-future.png",
    accent: "primary",
  },
  {
    title: "Anime News & Magazine",
    tag: "News Website / Anime",
    description:
      "An anime news and magazine website designed with responsive layouts, featured articles, category pages, modern typography, and engaging editorial experiences.",
    image: "/images/C.jpeg",
    accent: "primary",
  },
]

const accentBg: Record<Project["accent"], string> = {
  primary: "bg-primary text-primary-foreground",
  secondary: "bg-secondary text-secondary-foreground",
  "chart-3": "bg-[var(--chart-3)] text-ink",
}

const accentPanel: Record<Project["accent"], string> = {
  primary: "bg-primary/10",
  secondary: "bg-secondary/10",
  "chart-3": "bg-[var(--chart-3)]/15",
}

export function Projects() {
  return (
    <section id="work" className="mx-auto max-w-7xl px-4 py-20 md:px-6">
      <div className="mb-12 flex flex-col gap-3">
        <span className="w-fit rounded-full ink-border bg-accent px-3 py-1 text-sm font-bold">
          作品 · Selected Work
        </span>

        <h2 className="text-balance font-display text-3xl font-black tracking-tight md:text-5xl">
          A gallery of website designs
        </h2>

        <p className="max-w-2xl text-pretty leading-relaxed text-muted-foreground">
          Concept website designs exploring creative agencies, motorsport,
          anime, gaming, fintech, and real estate experiences.
        </p>
      </div>

      <div className="grid gap-10">
        {projects.map((p, i) => (
          <article
            key={p.title}
            className={`group grid overflow-hidden rounded-3xl border bg-card shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl md:grid-cols-2 ${
              i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
            }`}
          >
            {/* Image */}
            <div
              className={`relative flex items-center justify-center p-6 ${accentPanel[p.accent]}`}
            >
              <Image
                src={p.image}
                alt={p.title}
                width={1600}
                height={1000}
                priority={i < 2}
                className="h-[300px] w-full rounded-xl bg-white object-contain p-2 transition-transform duration-300 group-hover:scale-[1.02] md:h-[520px]"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center gap-5 p-8 md:p-12">
              <span
                className={`w-fit rounded-full px-3 py-1 text-xs font-bold ${accentBg[p.accent]}`}
              >
                {p.tag}
              </span>

              <h3 className="font-display text-2xl font-black tracking-tight md:text-4xl">
                {p.title}
              </h3>

              <p className="leading-relaxed text-muted-foreground">
                {p.description}
              </p>

              <a
                href="#contact"
                className="inline-flex w-fit items-center gap-2 font-semibold text-primary transition hover:gap-3"
              >
                See the concept
                <ArrowUpRight className="h-5 w-5" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}