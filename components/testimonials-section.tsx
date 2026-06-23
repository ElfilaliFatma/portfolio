import { Star } from "lucide-react";
import { AnimateIn } from "@/components/animate-in";
import { SectionShell } from "@/components/section-shell";
import { testimonials } from "@/lib/site-data";

export function TestimonialsSection() {
  return (
    <SectionShell
      id="testimonials"
      eyebrow="Testimonials"
      title="What collaborators say about working with us."
      description="Feedback from supervisors, teammates, and early stakeholders on our technical delivery and collaboration style."
      centered
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <AnimateIn
            key={testimonial.name}
            delay={index * 0.08}
            className="hover-card flex flex-col rounded-3xl border border-border bg-white p-7 shadow-sm dark:bg-gray-900/60"
          >
            {/* Stars */}
            <div className="flex gap-0.5">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-amber-400 text-amber-400"
                />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="mt-5 flex-1">
              <p className="text-sm leading-7 text-foreground">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
            </blockquote>

            {/* Author */}
            <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 text-sm font-bold text-white">
                {testimonial.name.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {testimonial.role} · {testimonial.company}
                </p>
              </div>
              <span className="ml-auto rounded-full border border-border bg-surface px-2.5 py-1 text-xs font-medium text-muted-foreground">
                {testimonial.context}
              </span>
            </div>
          </AnimateIn>
        ))}
      </div>
    </SectionShell>
  );
}
