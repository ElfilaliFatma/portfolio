import { AnimateIn } from "@/components/animate-in";
import { SectionShell } from "@/components/section-shell";
import {
  aboutFacts,
  aboutHighlights,
  differentiators,
  technologies,
} from "@/lib/site-data";
import { CheckCircle2 } from "lucide-react";

export function AboutSection() {
  return (
    <SectionShell
      id="about"
      eyebrow="About"
      title="A focused engineering team delivering real-world digital solutions."
      description="We bring together AI engineering, data science, and full-stack software development under one roof — so your project doesn't need three separate teams."
    >
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Left: Main about card */}
        <AnimateIn className="rounded-3xl border border-border bg-surface/70 p-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            What we do
          </p>
          <h3 className="mt-3 font-heading text-2xl font-bold tracking-tight">
            Vertex Lab
          </h3>
          <ul className="mt-5 space-y-3">
            {aboutHighlights.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm leading-6 text-muted-foreground">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {item}
              </li>
            ))}
          </ul>

          {/* Facts grid */}
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {aboutFacts.map((fact) => (
              <div
                key={fact.title}
                className="rounded-2xl border border-border bg-white p-4 dark:bg-gray-900/50"
              >
                <fact.icon className="h-5 w-5 text-primary" />
                <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {fact.title}
                </p>
                <p className="mt-1 text-sm font-bold text-foreground">
                  {fact.value}
                </p>
              </div>
            ))}
          </div>
        </AnimateIn>

        {/* Right: Tech stack + differentiators */}
        <div className="flex flex-col gap-6">
          <AnimateIn
            delay={0.08}
            className="rounded-3xl border border-border bg-surface/70 p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              Core technologies
            </p>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Our go-to stack for building web applications, data pipelines, ML
              models, and analytics dashboards.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border bg-white px-3.5 py-1.5 text-xs font-medium text-foreground dark:bg-gray-900/60"
                >
                  {tech}
                </span>
              ))}
            </div>
          </AnimateIn>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {differentiators.map((item, index) => (
              <AnimateIn
                key={item.title}
                delay={0.12 + index * 0.07}
                className="rounded-2xl border border-border bg-white p-5 dark:bg-gray-900/50"
              >
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl icon-bg-indigo">
                  <item.icon className="h-4 w-4" />
                </div>
                <h3 className="mt-3 font-heading text-sm font-bold leading-snug tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-xs leading-5 text-muted-foreground">
                  {item.description}
                </p>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
