import { AnimateIn } from "@/components/animate-in";
import { SectionShell } from "@/components/section-shell";
import {
  aboutFacts,
  aboutHighlights,
  company,
  differentiators,
  technologies,
} from "@/lib/site-data";

export function AboutSection() {
  return (
    <SectionShell
      id="about"
      eyebrow="About"
      title="A focused student team building practical digital products with clear structure and polished presentation."
      description="We combine engineering coursework, hands-on project work, and curiosity across software, data, and intelligent systems."
    >
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <AnimateIn className="rounded-[2rem] border border-border/70 bg-transparent p-1 sm:p-2">
          <div className="rounded-[1.75rem] p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
              Our profile
            </p>
            <h3 className="mt-4 font-heading text-3xl font-semibold tracking-tight">
              {company.name}
            </h3>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              Based in Tunisia, we are two 3rd-year engineering students in Data
              Science who enjoy building interfaces, case studies, and
              data-driven systems that feel thoughtful both technically and
              visually.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              {aboutHighlights.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-border bg-background/60 px-4 py-3"
                >
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {aboutFacts.map((fact) => (
                <div
                  key={fact.title}
                  className="rounded-2xl border border-border bg-background/70 p-4"
                >
                  <fact.icon className="h-5 w-5 text-accent" />
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    {fact.title}
                  </p>
                  <p className="mt-2 text-sm font-medium text-foreground">
                    {fact.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AnimateIn>

        <div className="grid gap-6">
          <AnimateIn
            delay={0.08}
            className="rounded-[2rem] border border-border/70 bg-transparent p-1 sm:p-2"
          >
            <div className="rounded-[1.75rem] p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
                Core technologies
              </p>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                The stack below reflects what we use most often when building web
                interfaces, dashboards, data workflows, and AI-oriented
                portfolio projects.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-border bg-background/65 px-4 py-2 text-sm text-muted-foreground"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </AnimateIn>

          <div className="grid gap-4 lg:grid-cols-3">
            {differentiators.map((item, index) => (
              <AnimateIn
                key={item.title}
                delay={0.12 + index * 0.06}
                className="rounded-[1.75rem] border border-border bg-background/55 p-5"
              >
                <item.icon className="h-4 w-4 text-accent" />
                <h3 className="mt-3 font-heading text-lg font-semibold leading-snug tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
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
