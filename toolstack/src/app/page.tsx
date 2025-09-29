import Hero from "@/components/Hero";
import ToolCard from "@/components/ToolCard";

export default function Home() {
  return (
      <div className="font-sans ">
        <Hero />
        <section className="mx-auto max-w-5xl px-6 py-10 space-y-4">
      <ToolCard
        title="Cursorful"
        description="Chrome extension for smooth as fu*k videos to showcase your badass products."
        category="Video"
        url="https://cursorful.com/"
      />
      <ToolCard
        title="Zed"
        description="Blændende hurtig editor bygget til samarbejde og moderne workflows."
        category="Editor"
        url="https://zed.dev"
      />
      <ToolCard
        title="Raycast"
        description="Launcher til at styre Mac og udviklerflow lynhurtigt med tastaturet."
        category="Productivity"
        url="https://www.raycast.com"
      />
    </section>
      </div>
      
  );
}