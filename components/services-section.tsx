"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { SectionShell } from "@/components/section-shell";
import { services } from "@/lib/site-data";

const iconColorMap: Record<string, string> = {
  indigo: "icon-bg-indigo",
  violet: "icon-bg-violet",
  cyan: "icon-bg-cyan",
  emerald: "icon-bg-emerald",
  rose: "icon-bg-rose",
  amber: "icon-bg-amber",
};

export function ServicesSection() {
  return (
    <SectionShell
      id="services"
      eyebrow="Services"
      title="Everything you need to build, launch, and scale."
      description="We deliver end-to-end engineering services — from a polished web interface to the data pipeline powering it. No partial handoffs."
    >
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => (
          <motion.article
            key={service.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              duration: 0.55,
              delay: index * 0.07,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="hover-card group flex flex-col rounded-3xl border border-border bg-white p-6 shadow-sm dark:bg-gray-900/60"
          >
            {/* Icon */}
            <div
              className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 ${iconColorMap[service.color]}`}
            >
              <service.icon className="h-6 w-6" />
            </div>

            {/* Title + description */}
            <h3 className="mt-5 font-heading text-xl font-bold tracking-tight">
              {service.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {service.description}
            </p>

            {/* Value proposition */}
            <div className="mt-4 rounded-xl border border-border bg-surface/80 px-4 py-3">
              <p className="text-xs font-semibold text-primary">
                ✦ Client value
              </p>
              <p className="mt-1 text-xs leading-5 text-muted-foreground">
                {service.value}
              </p>
            </div>

            {/* Deliverables */}
            <ul className="mt-5 space-y-2">
              {service.deliverables.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 text-sm text-muted-foreground"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-10 flex flex-col items-center gap-4 rounded-3xl border border-primary/15 bg-indigo-50/60 p-8 text-center dark:bg-indigo-900/10"
      >
        <p className="max-w-xl text-base font-medium text-foreground">
          Not sure which service fits your project? Let's talk and we'll
          recommend the right approach.
        </p>
        <a
          href="/#contact"
          className="btn-primary gap-2"
        >
          Get a free consultation
        </a>
      </motion.div>
    </SectionShell>
  );
}
