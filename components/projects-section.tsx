"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { SectionShell } from "@/components/section-shell";
import type { Project } from "@/lib/site-data";
import { cn } from "@/lib/utils";

type ProjectsSectionProps = {
  projects: Project[];
};

const categories = ["All", "Web", "Data", "AI"];

const categoryColorMap: Record<string, string> = {
  Web: "icon-bg-indigo text-primary border-indigo-200",
  Data: "icon-bg-emerald text-emerald-700 border-emerald-200",
  AI: "icon-bg-violet text-violet-700 border-violet-200",
};

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  if (projects.length === 0) return null;

  return (
    <SectionShell
      id="projects"
      eyebrow="Projects"
      title="Built, shipped, and ready to show."
      description="A selection of projects spanning AI integration, data platforms, and full-stack product development."
    >
      {/* Category filter */}
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveCategory(cat)}
            className={cn(
              "rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200",
              activeCategory === cat
                ? "bg-primary text-white shadow-md"
                : "border border-border bg-white text-muted-foreground hover:border-primary/30 hover:text-primary dark:bg-gray-900/60",
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {filtered.map((project, index) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="hover-card group flex flex-col rounded-3xl border border-border bg-white shadow-sm dark:bg-gray-900/60 overflow-hidden"
            >
              {/* Project image */}
              <div className="relative aspect-[16/9] overflow-hidden bg-surface">
                <div className="absolute left-3 top-3 z-10">
                  <span
                    className={cn(
                      "inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold",
                      categoryColorMap[project.category] ??
                        "bg-surface text-muted-foreground border-border",
                    )}
                  >
                    {project.category}
                  </span>
                </div>
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                  {project.highlight}
                </p>
                <h3 className="mt-2 font-heading text-xl font-bold tracking-tight">
                  {project.name}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {project.summary}
                </p>

                {/* Stack */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border bg-surface px-2.5 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Metrics */}
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {project.metrics.map((metric) => (
                    <div
                      key={metric}
                      className="rounded-xl border border-border bg-surface/80 px-2 py-2 text-center"
                    >
                      <p className="text-xs font-medium leading-4 text-foreground">
                        {metric}
                      </p>
                    </div>
                  ))}
                </div>

                {/* View link */}
                <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                  <ul className="space-y-1">
                    {project.outcome.slice(0, 1).map((o) => (
                      <li
                        key={o}
                        className="text-xs leading-5 text-muted-foreground"
                      >
                        ✓ {o}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="ml-4 flex shrink-0 items-center gap-1.5 rounded-xl border border-border bg-surface px-3 py-2 text-xs font-semibold text-foreground transition-all hover:border-primary/30 hover:bg-indigo-50 hover:text-primary dark:hover:bg-indigo-100/10"
                  >
                    View case study
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </AnimatePresence>
    </SectionShell>
  );
}
