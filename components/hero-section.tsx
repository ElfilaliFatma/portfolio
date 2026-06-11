import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { AnimateIn } from "@/components/animate-in";
import { ButtonLink } from "@/components/ui/button-link";
import { company, heroStats } from "@/lib/site-data";

export function HeroSection() {
  return (
    <section className="section-shell pt-10 pb-16 sm:pt-16 sm:pb-24">
      <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <AnimateIn>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-2 text-sm text-muted-foreground">
              <Sparkles className="h-4 w-4 text-accent" />
              Tunisia-based duo for academic, freelance, and internship-ready work
            </div>
          </AnimateIn>

          <AnimateIn delay={0.08}>
            <h1 className="mt-6 max-w-4xl font-heading text-5xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
              Turning data, code, and ideas into modern digital projects
            </h1>
          </AnimateIn>

          <AnimateIn delay={0.16}>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              Web development • Data science • AI systems • Analytics
            </p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
              {company.name} is the portfolio of Fatma Ezzahra El Filali and
              Ibrahim Gaha, two 3rd-year Data Science engineering students
              building polished project work with strong technical structure and
              presentation.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.24}>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href="/#projects" className="gap-2">
                View Projects
                <ArrowRight className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink href="/#contact" variant="secondary">
                Contact Us
              </ButtonLink>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.3} className="mt-10 grid gap-4 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-border bg-background/60 p-5"
              >
                <p className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </AnimateIn>
        </div>

        <AnimateIn delay={0.12}>
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-background/60 p-4 shadow-[0_24px_80px_-32px_rgba(15,23,42,0.22)]">
            <div className="relative aspect-[4/4.6] overflow-hidden rounded-[1.5rem]">
              <Image
                src="/projects/ai-chat-assistant.svg"
                alt="Portfolio hero visual showing a modern AI and software project interface"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-background/75 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                  Featured focus
                </p>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  Building interfaces and systems that combine software,
                  analytics, and intelligent workflows.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-background/75 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                  Portfolio style
                </p>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  Clean case studies, strong UI presentation, and project
                  storytelling designed for internships and collaborations.
                </p>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
