"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { SectionShell } from "@/components/section-shell";
import type { Project } from "@/lib/site-data";
import { cn } from "@/lib/utils";

type ProjectsSectionProps = {
  projects: Project[];
};

function getVisibleCount(width: number) {
  if (width < 768) {
    return 1;
  }

  if (width < 1280) {
    return 2;
  }

  return 3;
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(3);
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    function updateVisibleCount() {
      setVisibleCount(getVisibleCount(window.innerWidth));
    }

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);

    return () => {
      window.removeEventListener("resize", updateVisibleCount);
    };
  }, []);

  const totalPages = Math.max(1, Math.ceil(projects.length / visibleCount));

  useEffect(() => {
    setCurrentPage((page) => (page >= totalPages ? 0 : page));
  }, [totalPages]);

  useEffect(() => {
    if (totalPages <= 1 || isPaused) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setDirection(1);
      setCurrentPage((page) => (page + 1) % totalPages);
    }, 4200);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [isPaused, totalPages]);

  const selectedProject = useMemo(
    () => projects.find((project) => project.slug === selectedSlug) ?? null,
    [projects, selectedSlug],
  );

  const visibleProjects = useMemo(() => {
    const start = currentPage * visibleCount;
    return projects.slice(start, start + visibleCount);
  }, [currentPage, projects, visibleCount]);

  if (projects.length === 0) {
    return null;
  }

  function openProjectDetails(slug: string) {
    setSelectedSlug((current) => (current === slug ? null : slug));
  }

  function goToPreviousPage() {
    setDirection(-1);
    setCurrentPage((page) => (page - 1 + totalPages) % totalPages);
  }

  function goToNextPage() {
    setDirection(1);
    setCurrentPage((page) => (page + 1) % totalPages);
  }

  return (
    <SectionShell
      id="projects"
      eyebrow="Projects"
      title="Built, shipped, and ready to show."
      description="A single showcase block for your work: each project stays visual first, and the details appear only when someone asks for them."
    >
      <div className="overflow-hidden rounded-[2.25rem] border border-border bg-white/90 shadow-[0_30px_120px_-60px_rgba(15,23,42,0.28)] backdrop-blur dark:bg-slate-950/65">
        <div className="border-b border-border px-5 py-5 sm:px-7 sm:py-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                Project slider
              </p>
              <h3 className="mt-3 font-heading text-2xl font-semibold tracking-tight text-foreground">
                Visual case studies in one continuous block
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Hover the slider to pause the motion. Open any card to reveal the
                summary, stack, and delivery details below.
              </p>
            </div>

            {totalPages > 1 ? (
              <div className="flex items-center gap-3 self-start lg:self-auto">
                <button
                  type="button"
                  onClick={goToPreviousPage}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-foreground transition-all hover:border-primary/30 hover:text-primary"
                  aria-label="Show previous projects"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <div className="flex items-center gap-2">
                  {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => {
                        setDirection(index > currentPage ? 1 : -1);
                        setCurrentPage(index);
                      }}
                      className={cn(
                        "h-2.5 rounded-full transition-all",
                        index === currentPage
                          ? "w-10 bg-primary"
                          : "w-2.5 bg-border hover:bg-primary/40",
                      )}
                      aria-label={`Show project page ${index + 1}`}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  onClick={goToNextPage}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-foreground transition-all hover:border-primary/30 hover:text-primary"
                  aria-label="Show next projects"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            ) : null}
          </div>
        </div>

        <div
          className="px-5 py-5 sm:px-7 sm:py-7"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={`${currentPage}-${visibleCount}`}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 48 : -48 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -48 : 48 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
            >
              {visibleProjects.map((project, index) => {
                const isActive = selectedProject?.slug === project.slug;

                return (
                  <motion.article
                    key={project.slug}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.42,
                      delay: index * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={cn(
                      "group overflow-hidden rounded-[1.9rem] border border-border bg-slate-950/95 shadow-sm",
                      isActive &&
                        "border-primary/40 shadow-[0_24px_80px_-42px_rgba(59,130,246,0.45)]",
                    )}
                  >
                    <div className="relative aspect-[16/11] overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/28 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5">
                        <h4 className="max-w-[15rem] font-heading text-xl font-semibold tracking-tight text-white">
                          {project.name}
                        </h4>
                        <button
                          type="button"
                          onClick={() => openProjectDetails(project.slug)}
                          className={cn(
                            "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-all",
                            isActive
                              ? "border-primary/40 bg-primary text-white"
                              : "border-white/15 bg-white/10 text-white hover:border-primary/40 hover:bg-primary/90",
                          )}
                          aria-expanded={isActive}
                          aria-controls="project-details-panel"
                        >
                          {isActive ? "Hide details" : "View details"}
                          {isActive ? (
                            <X className="h-4 w-4" />
                          ) : (
                            <ArrowRight className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        <AnimatePresence mode="wait">
          {selectedProject ? (
            <motion.div
              key={selectedProject.slug}
              id="project-details-panel"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="border-t border-border bg-surface/60 px-5 py-6 sm:px-7 sm:py-7"
            >
              <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="overflow-hidden rounded-[1.8rem] border border-border bg-slate-950/95">
                  <div className="relative aspect-[16/11]">
                    <Image
                      src={selectedProject.image}
                      alt={selectedProject.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                  </div>
                  <div className="border-t border-white/10 px-5 py-4">
                    <p className="text-sm leading-7 text-slate-300">
                      {selectedProject.imageCaption}
                    </p>
                  </div>
                </div>

                <div className="rounded-[1.8rem] border border-border bg-white p-6 shadow-sm dark:bg-slate-950/70">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                    Project details
                  </p>
                  <h4 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-foreground">
                    {selectedProject.name}
                  </h4>
                  <p className="mt-4 text-base leading-8 text-foreground">
                    {selectedProject.summary}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">
                    {selectedProject.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {selectedProject.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 grid gap-5 sm:grid-cols-2">
                    <div className="rounded-3xl border border-border bg-surface/70 p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                        Outcomes
                      </p>
                      <ul className="mt-4 space-y-3">
                        {selectedProject.outcome.map((item) => (
                          <li
                            key={item}
                            className="text-sm leading-6 text-muted-foreground"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-3xl border border-border bg-surface/70 p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                        Key metrics
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {selectedProject.metrics.map((metric) => (
                          <span
                            key={metric}
                            className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-foreground"
                          >
                            {metric}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-7">
                    <Link
                      href={`/projects/${selectedProject.slug}`}
                      className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-all hover:opacity-90"
                    >
                      Open full case study
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </SectionShell>
  );
}
