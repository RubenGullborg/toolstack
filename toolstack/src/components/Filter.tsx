import React from "react";
import { cn } from "@/lib/utils";

type FilterProps = {
  categories: string[];
  selectedCategory: string | null;
  onChange: (category: string | null) => void;
  className?: string;
};

export default function Filter({
  categories,
  selectedCategory,
  onChange,
  className,
}: FilterProps) {
  const handleSelect = (category: string | null) => () => onChange(category);

  return (
    <div className={cn("mx-auto max-w-5xl px-6", className)}>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={handleSelect(null)}
          className={cn(
            "inline-flex items-center rounded-full border px-4 py-2 text-sm sm:text-base font-medium transition-colors",
            selectedCategory === null
              ? "border-neutral-700 bg-neutral-800/80 text-white"
              : "border-neutral-800 bg-neutral-950/60 text-neutral-200 hover:border-neutral-700 hover:text-white"
          )}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={handleSelect(category)}
            className={cn(
              "inline-flex items-center rounded-full border px-4 py-2 text-sm sm:text-base font-medium transition-colors",
              selectedCategory === category
                ? "border-neutral-700 bg-neutral-800/80 text-white"
                : "border-neutral-800 bg-neutral-950/60 text-neutral-200 hover:border-neutral-700 hover:text-white"
            )}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
