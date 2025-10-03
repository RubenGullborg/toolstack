"use client";
import { useMemo, useState } from "react";
import Hero from "@/components/Hero";
import ToolsSection from "@/components/ToolSection";
import Filter from "@/components/Filter";

export default function Home() {
  const tools = [
    {
      title: "Cursorful",
      description:
        "Chrome extension for making smooth as fu*k demo videos, to showcase your smooth as fu*k products.",
      category: "Video",
      url: "https://cursorful.com/",
    },
    {
      title: "Zed",
      description:
        "Lightning fast editor. No fluff, no drag, just pure speed and power. Hit keys, ship sh*t",
      category: "Editor",
      url: "https://zed.dev",
    },
    {
      title: "Firecrawl",
      description:
        "Point, crawl, conquer. Aim at a site, pull the trigger, and this crawler rips all the data you want clean outta there.",
      category: "Crawler",
      url: "https://www.firecrawl.dev/",
    },
    {
      title: "Ultracite",
      description:
        "A ridiculously fast rocket of a linter. Slaps tf outta bad code before it even gets a chance to see daylight.",
      category: "Linter",
      url: "https://www.ultracite.ai/",
    },
    {
      title: "Raycast",
      description:
        "Fu*kload of productivity right at your fingertips. Pop commands, fly through tasks, never touch a mouse again.",
      category: "Productivity",
      url: "https://www.raycast.com",
    },
    {
      title: "Shots",
      description:
        "Turn your boring-ass screenshots into clean asf mock photos of your app in a shiny MacBook.",
      category: "Mocks",
      url: "https://shots.so/",
    },
    {
      title: "Obsidian",
      description:
        "Hoard notes, connect thoughts, and feel like a f*cking wizard mapping the universe.",
      category: "Note taking",
      url: "https://obsidian.md/",
    },
    {
      title: "Excalidraw",
      description:
        "The virtual equivilant of pen and paper. Its never been easier to sketch ugly diagrams.",
      category: "Note taking",
      url: "https://excalidraw.com/",
    },
    {
      title: "Ray.so",
      description:
        "Turn your ugly-ass code into poster material. Sexy snippets in seconds, zero effort.",
      category: "Mocks",
      url: "https://ray.so/",
    },
  ];

  const categories = useMemo(
    () => Array.from(new Set(tools.map((t) => t.category))),
    [tools]
  );
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const filteredTools = useMemo(
    () =>
      selectedCategory
        ? tools.filter((t) => t.category === selectedCategory)
        : tools,
    [tools, selectedCategory]
  );

  return (
    <div className="font-sans min-h-screen">
      <Hero />
      <Filter
        categories={categories}
        selectedCategory={selectedCategory}
        onChange={setSelectedCategory}
        className="mt-2"
      />
      <ToolsSection tools={filteredTools} />
    </div>
  );
}
