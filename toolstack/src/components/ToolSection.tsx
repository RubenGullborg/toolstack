import React from "react";
import ToolCard, { ToolCardProps } from "@/components/ToolCard";

type ToolsSectionProps = {
  tools: ToolCardProps[];
  className?: string;
};

export default function ToolsSection({ tools, className }: ToolsSectionProps) {
  return (
    <section className={`mx-auto max-w-5xl px-6 py-10 ${className ?? ""}`}>
      <div className="space-y-4">
        {tools.map((tool) => (
          <ToolCard key={tool.title} {...tool} />
        ))}
      </div>
    </section>
  );
}