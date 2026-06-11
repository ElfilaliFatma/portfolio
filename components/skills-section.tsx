import { AnimateIn } from "@/components/animate-in";
import { SectionShell } from "@/components/section-shell";
import { skillGroups } from "@/lib/site-data";

export function SkillsSection() {
  return (
    <SectionShell
      id="skills"
      eyebrow="Skills"
      title="A balanced skill set across engineering, analytics, and modern digital product work."
      description="We aim for breadth with enough depth to build complete, understandable project experiences from interface to data layer."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group, index) => (
          <AnimateIn
            key={group.title}
            delay={index * 0.05}
            className="rounded-[2rem] border border-border bg-background/55 p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <group.icon className="h-5 w-5 text-accent" />
                <h3 className="mt-4 font-heading text-xl font-semibold tracking-tight">
                  {group.title}
                </h3>
              </div>
              <span className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Core
              </span>
            </div>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              {group.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-background/60 px-3 py-1.5 text-xs font-medium text-muted-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </AnimateIn>
        ))}
      </div>
    </SectionShell>
  );
}
