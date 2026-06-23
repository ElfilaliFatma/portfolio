import { cn } from "@/lib/utils";

type SectionShellProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  centered?: boolean;
};

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  centered = false,
}: SectionShellProps) {
  return (
    <section id={id} className={cn("section-padding", className)}>
      <div className="section-shell">
        {(eyebrow || title || description) && (
          <div
            className={cn(
              "mb-14",
              centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl",
            )}
          >
            {eyebrow && (
              <span className="inline-flex items-center rounded-full border border-primary/20 bg-indigo-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary dark:bg-indigo-100/10 dark:border-primary/30">
                {eyebrow}
              </span>
            )}
            {title && (
              <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
