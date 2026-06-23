"use client";

import { motion } from "framer-motion";
import { SectionShell } from "@/components/section-shell";
import { whyChooseUs } from "@/lib/site-data";
import { ArrowRight } from "lucide-react";

export function WhyChooseUsSection() {
  return (
    <SectionShell
      id="why-us"
      eyebrow="Why Vertex Lab"
      title="What makes us different."
      description="We don't just write code. We understand your problem, choose the right approach, and deliver something that actually works."
      centered
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {whyChooseUs.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.55,
              delay: index * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="hover-card flex gap-5 rounded-3xl border border-border bg-white p-7 shadow-sm dark:bg-gray-900/60"
          >
            <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl icon-bg-indigo">
              <item.icon className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold tracking-tight">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA strip */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-10 flex flex-col items-center justify-between gap-6 rounded-3xl border border-primary/15 bg-gradient-to-br from-indigo-50 to-violet-50/50 p-8 dark:from-indigo-900/15 dark:to-violet-900/10 sm:flex-row"
      >
        <div>
          <p className="font-heading text-xl font-bold">
            Ready to start your project?
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Tell us about your idea and we'll come back with a plan.
          </p>
        </div>
        <a
          href="/#contact"
          className="btn-primary shrink-0 gap-2"
        >
          Contact us today
          <ArrowRight className="h-4 w-4" />
        </a>
      </motion.div>
    </SectionShell>
  );
}
