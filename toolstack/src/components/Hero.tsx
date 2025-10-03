import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <div className="font-sans">
      <main className="relative flex flex-col items-center justify-center min-h-[65vh] px-6">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:20px_20px]",
            "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
            "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
          )}
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

        <section className="relative z-20 w-full flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
            The no bullsh*t best developer toolstack
          </h1>
          <p className="mt-6 max-w-2xl text-base sm:text-lg text-foreground/80">
            A curated, no-fluff, list of the tools I actually use. Built for developers.
          </p>
        </section>
      </main>
    </div>
  );
}