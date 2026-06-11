"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import type { Project } from "@/lib/site-data";

type ProjectDetailClientProps = {
  project: Project;
};

export function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  return (
    <div className="section-shell pb-20 pt-10 sm:pb-24 sm:pt-14">
      <div className="glass-card overflow-hidden rounded-[2rem]">
        <div className="grid gap-10 p-6 sm:p-8 lg:grid-cols-[1.08fr_0.92fr] lg:p-12">
          <div>
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to projects
            </Link>

            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.24em] text-accent">
              Portfolio Project
            </p>
            <h1 className="mt-4 font-heading text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              {project.name}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              {project.summary}
            </p>

            <div className="mt-6 rounded-[1.5rem] border border-border bg-background/60 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
                Project overview
              </p>
              <p className="mt-4 leading-7 text-muted-foreground">
                {project.description}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-background/70 px-4 py-2 text-sm text-muted-foreground"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-10 grid gap-6">
              <div className="rounded-[1.5rem] border border-border bg-background/60 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
                  Outcome
                </p>
                <ul className="mt-4 space-y-3 text-muted-foreground">
                  {project.outcome.map((item) => (
                    <li key={item} className="rounded-2xl border border-border px-4 py-3">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="relative aspect-[4/4.2] overflow-hidden rounded-[1.75rem] border border-border">
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
            </div>

            <div className="rounded-[1.75rem] border border-border bg-background/60 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
                Example visual
              </p>
              <p className="mt-3 font-heading text-xl font-semibold tracking-tight">
                {project.highlight}
              </p>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {project.imageCaption}
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-border bg-background/60 p-6">
              <p className="font-heading text-xl font-semibold tracking-tight">
                Interested in a similar project?
              </p>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                We are open to internships, collaborations, and project-based
                opportunities involving software, analytics, AI, and product
                design.
              </p>
              <div className="mt-6">
                <ButtonLink href="/#contact">Contact Us</ButtonLink>
              </div>
            </div>

            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition hover:text-accent"
            >
              Discuss a collaboration
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
