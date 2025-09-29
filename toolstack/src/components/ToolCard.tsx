import React from "react";
import { LinkPreview } from "@/components/ui/LinkPreview";

type ToolCardProps = {
  title: string;
  description: string;
  category: string;
  url: string;
  ctaLabel?: string;
};

export default function ToolCard({
  title,
  description,
  category,
  url,
  ctaLabel = "Visit",
}: ToolCardProps) {
  return (
    <LinkPreview url={url} className="group block w-full">
      <div className="relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/60 shadow-[0_1px_0_0_rgba(255,255,255,0.05)_inset,0_8px_24px_-12px_rgba(0,0,0,0.8)] backdrop-blur transition-colors group-hover:border-neutral-700">
        <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-r from-neutral-950/40 via-transparent to-neutral-900/40" />
        <div className="relative flex items-start gap-4 p-5 sm:p-6">
          <div className="min-w-0 flex-1">
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center rounded-full border border-neutral-800 bg-neutral-950/60 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-neutral-300">
                {category}
              </span>
            </div>

            <h3 className="truncate text-xl font-semibold tracking-tight text-white sm:text-2xl">
              {title}
            </h3>
            <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-neutral-300">
              {description}
            </p>
          </div>

          <div className="ml-auto hidden shrink-0 items-center gap-2 sm:flex">
            <span className="text-sm font-medium text-neutral-300 transition-colors group-hover:text-white">
              {ctaLabel}
            </span>
            <svg
              className="h-4 w-4 translate-x-0 transition-transform group-hover:translate-x-0.5"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M7 5h8v8M15 5 5 15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-neutral-400 group-hover:text-neutral-200"
              />
            </svg>
          </div>
        </div>
      </div>
    </LinkPreview>
  );
}