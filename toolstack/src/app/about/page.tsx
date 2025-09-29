export default function About(){
    return(
      <section className="mx-auto max-w-3xl px-6 py-14">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">About Toolstack</h1>
        <p className="mt-4 text-neutral-300">
          Toolstack is a no‑nonsense collection of the tools I actually use to build, test, and ship software.
          Short descriptions, strong opinions, and links that get you moving.
        </p>
  
        <div className="mt-8 space-y-3 text-neutral-300">
          <p><span className="font-semibold text-white">What you’ll find</span>: editors, terminals, design tools, crawlers, linters, and tiny utilities that punch above their weight.</p>
          <p><span className="font-semibold text-white">Philosophy</span>: fewer tools, deeper mastery. If it wastes time, it’s out.</p>
          <p><span className="font-semibold text-white">How to use it</span>: browse the cards, hover to preview, click to visit. Build faster.</p>
        </div>
  

      </section>
    );
  }