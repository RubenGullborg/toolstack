import Hero from "@/components/Hero";
import ToolCard from "@/components/ToolCard";

export default function Home() {
  return (
      <div className="font-sans min-h-screen">
        <Hero />
        <section className="mx-auto max-w-5xl px-6 py-10 space-y-4">
      <ToolCard
        title="Cursorful"
        description="Chrome extension for smooth videos of ."
        category="Editor"
        url="https://code.visualstudio.com"
        tags={["Extensions", "IntelliSense", "Git"]}
      />
      <ToolCard
        title="Zed"
        description="Fast editor built for collaboration and modern workflows."
        category="Editor"
        url="https://zed.dev"
        tags={["Speed", "Collab"]}
      />
      <ToolCard
        title="Raycast"
        description="Launcher til at styre Mac og udviklerflow lynhurtigt med tastaturet."
        category="Productivity"
        url="https://www.raycast.com"
        tags={["Hotkeys", "Extensions"]}
      />
    </section>
      </div>
      
  );
}
