"use client";

import { useEffect, useMemo, useState } from "react";
import { CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { SectionShell } from "@/components/section-shell";
import { services } from "@/lib/site-data";

const VISIBLE_CARDS = 3;

export function ServicesSection() {
  const [startIndex, setStartIndex] = useState(0);

  const totalSlides = useMemo(
    () => Math.max(1, services.length - VISIBLE_CARDS + 1),
    [],
  );

  useEffect(() => {
    const interval = window.setInterval(() => {
      setStartIndex((current) => (current + 1) % totalSlides);
    }, 4200);

    return () => window.clearInterval(interval);
  }, [totalSlides]);

  function goNext() {
    setStartIndex((current) => (current + 1) % totalSlides);
  }

  function goPrevious() {
    setStartIndex((current) => (current - 1 + totalSlides) % totalSlides);
  }

  return (
    <SectionShell
      id="services"
      eyebrow="Services"
      title="What we can contribute across software, data, AI, and presentation-ready digital products."
      description="Three cards stay visible in one line while the rest slide in, so the section feels cleaner and easier to scan."
    >
      <div className="overflow-hidden rounded-[2rem] border border-border/70 p-4 sm:p-6">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-sm leading-7 text-muted-foreground">
            A compact sliding row keeps the layout balanced while still showing
            every service area.
          </p>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={goPrevious}
              aria-label="Previous services"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/70 text-foreground transition hover:bg-background"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next services"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/70 text-foreground transition hover:bg-background"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden">
          <motion.div
            animate={{ x: `-${startIndex * (100 / VISIBLE_CARDS)}%` }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="flex gap-4"
          >
            {services.map((service) => (
              <article
                key={service.title}
                className="min-w-[88%] rounded-[2rem] border border-border bg-background/55 p-6 md:min-w-[calc(50%-0.5rem)] xl:min-w-[calc(33.333%-0.75rem)]"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/12 text-accent">
                  <service.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-heading text-2xl font-semibold tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  {service.description}
                </p>
                <div className="mt-6 rounded-2xl border border-border bg-background/60 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                    Example use case
                  </p>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {service.useCase}
                  </p>
                </div>
                <div className="mt-6 space-y-3">
                  {service.deliverables.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 className="h-4 w-4 text-accent" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </motion.div>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Show services slide ${index + 1}`}
              onClick={() => setStartIndex(index)}
              className={`h-2.5 rounded-full transition ${
                startIndex === index
                  ? "w-10 bg-accent"
                  : "w-2.5 bg-border hover:bg-accent/50"
              }`}
            />
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
