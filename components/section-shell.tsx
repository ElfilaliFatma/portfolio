import { cn } from "@/lib/utils";

type SectionShellProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description: string;
  children: React.ReactNode;
  className?: string;
};

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: SectionShellProps) {
  return (
    <section id={id} className={cn("section-padding", className)}>
      <div className="section-shell">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-accent">
            {eyebrow}
          </p>
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{description}</p>
        </div>
        {children}
      </div>
    </section>
  );
}
