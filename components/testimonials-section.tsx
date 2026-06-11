import { Quote } from "lucide-react";
import { AnimateIn } from "@/components/animate-in";
import { SectionShell } from "@/components/section-shell";
import { testimonials } from "@/lib/site-data";

export function TestimonialsSection() {
  return (
    <SectionShell
      id="testimonials"
      eyebrow="Testimonials"
      title="Sample reference-style feedback that reflects how we want our work to be experienced."
      description="These are realistic examples of how supervisors, teammates, or early collaborators might describe our contribution style."
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <AnimateIn
            key={testimonial.name}
            delay={index * 0.06}
            className="rounded-[2rem] border border-border bg-background/55 p-6"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/12 text-accent">
                <Quote className="h-5 w-5" />
              </div>
              <span className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {testimonial.context}
              </span>
            </div>
            <p className="mt-5 text-base leading-7 text-muted-foreground">
              "{testimonial.quote}"
            </p>
            <div className="mt-6 border-t border-border/80 pt-5">
              <p className="font-heading text-lg font-semibold tracking-tight">
                {testimonial.name}
              </p>
              <p className="text-sm text-muted-foreground">
                {testimonial.role} · {testimonial.company}
              </p>
            </div>
          </AnimateIn>
        ))}
      </div>
    </SectionShell>
  );
}
