export default function Hero() {
    return (
      <div className="font-sans">
        <main className="flex flex-col items-center justify-center min-h-[65vh] px-6 ">
          <section className="w-full flex flex-col items-center justify-center text-center ">
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