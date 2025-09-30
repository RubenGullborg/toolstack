export default function About(){
  return(
    <section className="mx-auto max-w-3xl px-6 py-14 min-h-[calc(100vh-7rem)] flex flex-col items-center justify-center text-center">
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">About Toolstack</h1>
      <p className="mt-4 text-neutral-300 max-w-2xl">
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
              <span className="font-semibold text-white">My philosophy:</span> Why use many tools, when few tools do? Spend time where it counts.
            </p>
          </div>
          <div className="rounded-lg border border-neutral-800 bg-neutral-950/50 p-4 text-left sm:text-center">
            <p className="text-sm text-neutral-300">
              <span className="font-semibold text-white">How to use:</span> Really? Browse the cards, hover to preview, click to visit. Simple.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}