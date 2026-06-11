"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { SectionShell } from "@/components/section-shell";
import type { Project } from "@/lib/site-data";

type ProjectsSectionProps = {
  projects: Project[];
};

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (projects.length === 0 || isPaused) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % projects.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [isPaused, projects]);

  useEffect(() => {
    if (activeIndex >= projects.length) {
      setActiveIndex(0);
    }
  }, [activeIndex, projects.length]);

  if (projects.length === 0) {
    return null;
  }

  const activeProject = projects[activeIndex] ?? projects[0];

  function goToNext() {
    setActiveIndex((current) => (current + 1) % projects.length);
  }

  function goToPrevious() {
    setActiveIndex((current) => (current - 1 + projects.length) % projects.length);
  }

  return (
    <SectionShell
      id="projects"
      eyebrow="Projects"
      title="Showcase projects presented as animated case-study cards with example visuals."
      description="The slider below highlights each project with a mockup image, a concise case-study breakdown, and a card-based presentation style."
    >
      <div className="overflow-hidden rounded-[2rem] border border-border/70 p-4 sm:p-6">
        <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
              Featured slider
            </p>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-muted-foreground">
              Each slide uses one example project image and one descriptive card
              so the portfolio feels more visual and easier to scan.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={goToPrevious}
              aria-label="Previous project"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/70 text-foreground transition hover:bg-background"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={goToNext}
              aria-label="Next project"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/70 text-foreground transition hover:bg-background"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="relative min-h-[620px] md:min-h-[560px]">
          <AnimatePresence mode="wait">
            <motion.article
              key={activeProject.slug}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]"
              onHoverStart={() => setIsPaused(true)}
              onHoverEnd={() => setIsPaused(false)}
            >
              <div className="relative overflow-hidden rounded-[1.75rem] border border-border bg-background/60">
                <div className="absolute left-4 top-4 z-10 rounded-full border border-white/20 bg-slate-950/65 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-white backdrop-blur">
                  Example project image
                </div>
                <div className="relative aspect-[16/12]">
                  <Image
                    src={activeProject.image}
                    alt={activeProject.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    priority
                  />
                </div>
                <div className="border-t border-border bg-background/70 p-5">
                  <p className="text-sm leading-7 text-muted-foreground">
                    {activeProject.imageCaption}
                  </p>
                  <div className="mt-5 rounded-[1.5rem] border border-border bg-background/55 p-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
                      Description
                    </p>
                    <p className="mt-4 text-sm leading-7 text-muted-foreground">
                      {activeProject.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-5">
                <div className="rounded-[1.75rem] border border-border bg-background/55 p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                    {activeProject.highlight}
                  </p>
                  <h3 className="mt-4 font-heading text-3xl font-semibold tracking-tight">
                    {activeProject.name}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">
                    {activeProject.summary}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {activeProject.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-[1.75rem] border border-border bg-background/55 p-6">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
                      Quick metrics
                    </p>
                    <Link
                      href={`/projects/${activeProject.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition hover:text-accent"
                    >
                      View details
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                  <div className="mt-4 grid gap-3 sm:grid-cols-3">
                    {activeProject.metrics.map((metric) => (
                      <div
                        key={metric}
                        className="rounded-2xl border border-border bg-background/70 px-4 py-4 text-sm font-medium text-muted-foreground"
                      >
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          {projects.map((project, index) => (
            <button
              key={project.slug}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                index === activeIndex
                  ? "bg-foreground text-background"
                  : "border border-border bg-background/70 text-muted-foreground hover:bg-background"
              }`}
              aria-label={`Show ${project.name}`}
            >
              {project.name}
            </button>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
