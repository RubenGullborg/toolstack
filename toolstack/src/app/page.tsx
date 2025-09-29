import Hero from "@/components/Hero";
import ToolsSection from "@/components/ToolSection";

export default function Home() {
  const tools = [
    {
      title: "Cursorful",
      description: "Chrome extension for making smooth as fu*k demo videos, to showcase your smooth as fu*k products.",
      category: "Video",
      url: "https://cursorful.com/",
    },
    {
      title: "Zed",
      description: "Lightning fast editor. No fluff, no drag, just pure speed and power. Hit keys, ship sh*t",
      category: "Editor",
      url: "https://zed.dev",
    },
    {
      title: "Firecrawl",
      description: "Point, crawl, conquer. This crawler just rips through sites and gives me all the good stuff that i want.",
      category: "Crawler",
      url: "https://www.firecrawl.dev/",
    },
    {
      title: "Ultrasite",
      description: "A ridiculously fast rocket of a linter. Slaps tf outta bad code before it gets a chance to see the daylight.",
      category: "Linter",
      url: "#",
    },
    {
      title: "Raycast",
      description: "Fu*kload of productivity right at your fingertips. Pop commands, fly through tasks, never touch a mouse again.",
      category: "Productivity",
      url: "https://www.raycast.com",
    },
    {
      title: "Shots",
      description: "You want clean asf mock photos of your app in a shiny MacBook, lookin' like money? They got u",
      category: "Mocks",
      url: "https://shots.so/"
    },
    {
      title: "Oblivion",
      description: "Note taking with attitude. Catch all your ideas and feel like a fu*king mastermind while doing it.",
      category: "Note taking",
      url: "https://shots.so/"
    },
    {
    title: "Excalidraw",
    description: "Sketchy style diagrams. They're ugly as fu*k but its fast as hell.",
    category: "Note taking",
    url: "https://shots.so/"
    },
  ];

  return (
      <div className="font-sans min-h-screen">
        <Hero />
        <ToolsSection tools={tools} />
      </div>
      
  );
}