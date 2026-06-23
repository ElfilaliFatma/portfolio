import { AnimateIn } from "@/components/animate-in";
import { SectionShell } from "@/components/section-shell";
import { skillGroups } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const levelStyles: Record<string, string> = {
  Advanced: "level-advanced",
  Proficient: "level-proficient",
  Foundational: "level-foundational",
};

const iconColorMap: Record<number, string> = {
  0: "icon-bg-indigo",
  1: "icon-bg-amber",
  2: "icon-bg-violet",
  3: "icon-bg-emerald",
  4: "icon-bg-rose",
  5: "icon-bg-cyan",
};

export function SkillsSection() {
  return (
    <SectionShell
      id="skills"
      eyebrow="Skills"
      title="Our technical capability, across the full stack."
      description="A broad skill set that allows us to own the entire delivery — from frontend interface to data pipeline to cloud deployment."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group, index) => (
          <AnimateIn
            key={group.title}
            delay={index * 0.06}
            className="hover-card rounded-3xl border border-border bg-white p-6 shadow-sm dark:bg-gray-900/60"
          >
            <div className="flex items-start justify-between gap-4">
              <div
                className={cn(
                  "inline-flex h-11 w-11 items-center justify-center rounded-xl",
                  iconColorMap[index],
                )}
              >
                <group.icon className="h-5 w-5" />
              </div>
              <span
                className={cn(
                  "rounded-full px-3 py-1 text-xs font-semibold",
                  levelStyles[group.level] ?? "level-proficient",
                )}
              >
                {group.level}
              </span>
            </div>
            <h3 className="mt-4 font-heading text-lg font-bold tracking-tight">
              {group.title}
            </h3>
            <p className="mt-1.5 text-sm leading-6 text-muted-foreground">
              {group.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-foreground"
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
