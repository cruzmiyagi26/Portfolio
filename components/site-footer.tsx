export function SiteFooter() {
  return (
    <footer className="border-t-[2.5px] border-ink bg-card">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-8 md:flex-row md:px-6">
        <div className="flex items-center gap-2">
        <span className="grid h-9 w-9 place-items-center rounded-lg ink-border bg-primary text-primary-foreground font-mono text-lg font-black">
          {"</>"}
           </span>
          <span className="font-display font-black">
          CloudWolf<span className="text-primary">.dev</span>
          </span>
        </div>
        <p className="text-sm font-medium text-muted-foreground">
          Designed &amp; built with care &mdash;  Made In Atlanta,GA with Love. &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
