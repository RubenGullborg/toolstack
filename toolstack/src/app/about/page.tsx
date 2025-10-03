import { cn } from "@/lib/utils";

export default function About(){
  return(
    <section className="relative mx-auto max-w-3xl px-6 py-14 min-h-[calc(100vh-7rem)] flex flex-col items-center justify-center text-center">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

      <div className="relative z-20 w-full">
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">About Toolstack</h1>
        <p className="mt-4 text-neutral-300 max-w-2xl mx-auto">
          Toolstack is a no nonsense collection of the tools I actually use to build, test, and ship software.
          From the initial idea, to the ugly mockups and the first disappointing MVP, there is something for every part of the journey.
        </p>

        <div className=" mt-10 w-full space-y-5">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center rounded-full border border-neutral-800 bg-neutral-950/60 px-3 py-1 text-xs font-medium text-neutral-200">
              Editors
            </span>
            <span className="inline-flex items-center rounded-full border border-neutral-800 bg-neutral-950/60 px-3 py-1 text-xs font-medium text-neutral-200">
              Mocks
            </span>
            <span className="inline-flex items-center rounded-full border border-neutral-800 bg-neutral-950/60 px-3 py-1 text-xs font-medium text-neutral-200">
              Crawlers
            </span>
            <span className="inline-flex items-center rounded-full border border-neutral-800 bg-neutral-950/60 px-3 py-1 text-xs font-medium text-neutral-200">
              Productivity
            </span>
            <span className="inline-flex items-center rounded-full border border-neutral-800 bg-neutral-950/60 px-3 py-1 text-xs font-medium text-neutral-200">
              Note taking
            </span>
            <span className="inline-flex items-center rounded-full border border-neutral-800 bg-neutral-950/60 px-3 py-1 text-xs font-medium text-neutral-200">
              Linting
            </span>
            <span className="inline-flex items-center rounded-full border border-neutral-800 bg-neutral-950/60 px-3 py-1 text-xs font-medium text-neutral-200">
              Video
            </span>
          </div>

          <div className="grid grid-cols-1 gap-3 mt-10 sm:grid-cols-2"> 
            <div className="rounded-lg border border-neutral-800 bg-neutral-950/50 p-4 text-left sm:text-center">
              <p className="text-sm text-neutral-300">
                <span className="font-semibold text-white">The idea:</span> Why use many tool, when few tool do? Spend time where it counts.
              </p>
            </div>
            <div className="rounded-lg border border-neutral-800 bg-neutral-950/50 p-4 text-left sm:text-center">
              <p className="text-sm text-neutral-300">
                <span className="font-semibold text-white">How to use:</span> Really? Browse the cards, hover to preview, click to visit. Simple.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}