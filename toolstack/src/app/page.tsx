import Hero from "@/components/Hero";
import ToolsSection from "@/components/ToolSection";

export default function Home() {
  const tools = [
    {
      title: "Cursorful",
        description: "Chrome extension for smooth as fu*k videos to showcase your badass products.",
        category: "Video",
        url:"https://cursorful.com/"
    },
    {
      title: "Zed",
      description: "Blændende hurtig editor bygget til samarbejde og moderne workflows.",
      category: "Editor",
      url: "https://zed.dev",
    },
    {
      title: "Raycast",
      description: "Launcher til at styre Mac og udviklerflow lynhurtigt med tastaturet.",
      category: "Productivity",
      url: "https://www.raycast.com",
    },
  ];

  return (
      <div className="font-sans min-h-screen">
        <Hero />
        <ToolsSection tools={tools} />
      </div>
      
  );
}