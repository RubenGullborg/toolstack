import Image from "next/image";

export default function Nav() {
  return(
    <nav className="mx-auto max-w-7xl px-6 h-14 flex items-center justify-between">
      <a href="/" className="flex items-center gap-2 text-sm font-semibold tracking-tight">
        <span className="hidden sm:inline">Toolstack</span>
      </a>
      <a
        href="/about"
        className="text-sm text-neutral-300 hover:text-white transition-colors"
      >
        Read more
      </a>
    </nav>
  );
}