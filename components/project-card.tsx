"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import type { Project } from "@/lib/site-data";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -6 }}
      className="glass-card overflow-hidden rounded-[1.75rem]"
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-border">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
        <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-slate-950/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-white backdrop-blur">
          Example visual
        </div>
      </div>
      <div className="p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
          {project.highlight}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground"
            >
              {item}
            </span>
          ))}
        </div>
        <h3 className="mt-5 font-heading text-2xl font-semibold tracking-tight">
          {project.name}
        </h3>
        <p className="mt-4 text-sm leading-7 text-muted-foreground">
          {project.summary}
        </p>
        <p className="mt-4 rounded-2xl border border-border bg-background/60 px-4 py-3 text-sm leading-6 text-muted-foreground">
          {project.imageCaption}
        </p>
        <Link
          href={`/projects/${project.slug}`}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition hover:text-accent"
        >
          View Details
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.article>
  );
}
