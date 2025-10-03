import Link from "next/link"

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-black">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-base font-semibold tracking-tight text-foreground hover:text-foreground/80 transition-colors"
        >
          <span>Toolstack</span>
        </Link>

        <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
          Read more
        </Link>
      </div>
    </nav>
  )
}
