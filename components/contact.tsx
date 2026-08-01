"use client";

import { Code2, Mail, MessageCircle, Send } from "lucide-react"
import { useRef } from "react"
import emailjs from "@emailjs/browser"

const socials = [
  { icon: Code2, label: "GitHub", href: "#" },
  { icon: MessageCircle, label: "Twitter", href: "#" },
  { icon: Send, label: "LinkedIn", href: "#" },
]

export function Contact() {

  const form = useRef<HTMLFormElement>(null)

const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()

  if (!form.current) return

  emailjs
    .sendForm(
      "service_wqmmq4j",
      "template_ytsgihh",
      form.current,
      "OJLC8hhCbp1Lc_0if"
    )
    .then(() => {
      alert("Message sent!")
      form.current?.reset()
    })
    .catch((err) => {
      console.error(err)
      alert("Failed to send message.")
    })
}
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-20 md:px-6">
      <div className="relative overflow-hidden rounded-3xl ink-border ink-shadow bg-primary text-primary-foreground">
        <div className="pointer-events-none absolute inset-0 halftone opacity-[0.12]" aria-hidden="true" />
        <div className="relative grid gap-10 p-8 md:grid-cols-2 md:items-center md:p-14">
          <div>
          <span className="grid h-9 w-9 place-items-center rounded-lg ink-border bg-primary text-primary-foreground font-mono text-lg font-black">
          {"</>"}
           </span>
            <h2 className="mt-4 text-balance font-display text-3xl font-black leading-tight tracking-tight md:text-4xl">
              {"Let's build something worth smiling about."}
            </h2>
            <p className="mt-4 max-w-md text-pretty leading-relaxed opacity-90">
              Have a project, a wild idea, or just want to talk shop? My inbox is always open.
            </p>

            <a
              href="mailto:princeton.nelson1@gmail.com"
              className="mt-8 inline-flex items-center gap-2 rounded-xl border-[2.5px] border-primary-foreground bg-background px-6 py-3 font-bold text-foreground transition-transform hover:-translate-y-0.5"
            >
              <Mail className="h-5 w-5" />
              princeton.nelson1@gmail.com
            </a>

            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="grid h-11 w-11 place-items-center rounded-xl border-[2.5px] border-primary-foreground transition-colors hover:bg-primary-foreground hover:text-primary"
                >
                  <s.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <form  ref={form} onSubmit={sendEmail} className="grid gap-4 rounded-2xl border-[2.5px] border-primary-foreground bg-background p-6 text-foreground">
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm font-bold">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your name"
                className="rounded-lg ink-border bg-card px-3 py-2 outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm font-bold">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="rounded-lg ink-border bg-card px-3 py-2 outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="message" className="text-sm font-bold">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder="Tell me about your idea..."
                className="resize-none rounded-lg ink-border bg-card px-3 py-2 outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <button
              type="submit"
              className="rounded-xl ink-border ink-shadow-sm bg-primary px-6 py-3 font-bold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
