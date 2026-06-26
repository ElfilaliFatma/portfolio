"use client";

import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { SectionShell } from "@/components/section-shell";
import { teamMembers } from "@/lib/site-data";

const colorBorderMap: Record<string, string> = {
  indigo: "ring-indigo-400/40 dark:ring-indigo-400/30",
  violet: "ring-violet-400/40 dark:ring-violet-400/30",
  emerald: "ring-emerald-400/40 dark:ring-emerald-400/30",
};

const colorBadgeMap: Record<string, string> = {
  indigo:
    "border-indigo-200 bg-indigo-50 text-indigo-700 dark:border-indigo-800/40 dark:bg-indigo-900/20 dark:text-indigo-300",
  violet:
    "border-violet-200 bg-violet-50 text-violet-700 dark:border-violet-800/40 dark:bg-violet-900/20 dark:text-violet-300",
  emerald:
    "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-800/40 dark:bg-emerald-900/20 dark:text-emerald-300",
};

export function TeamSection() {
  return (
    <SectionShell
      id="team"
      eyebrow="The Team"
      title="Three engineers, one focused studio."
      description="We combine deep technical expertise across AI, data engineering, and software development to deliver complete digital solutions."
      centered
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member, index) => {
          const specializationLabel = member.specialization
            .split("/")
            .map((item) => item.trim())
            .filter(Boolean)[0];

          return (
            <motion.article
              key={member.email}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="hover-card group flex flex-col rounded-3xl border border-border bg-white p-6 shadow-sm dark:bg-gray-900/60"
            >
              <div className="flex justify-center">
                <div
                  className={`relative h-24 w-24 overflow-hidden rounded-full ring-4 ring-offset-2 ring-offset-white transition-all duration-300 group-hover:ring-opacity-60 dark:ring-offset-gray-900 ${colorBorderMap[member.color]}`}
                >
                  <Image
                    src={member.photo}
                    alt={`Photo of ${member.name}`}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </div>
              </div>

              <div className="mt-5 text-center">
                <h3 className="font-heading text-xl font-bold tracking-tight">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-semibold text-primary">
                  {member.role}
                </p>
                <span
                  className={`mt-2 inline-block rounded-full border px-3 py-1 text-xs font-medium ${colorBadgeMap[member.color]}`}
                >
                  {specializationLabel}
                </span>
              </div>

              <p className="mt-5 text-center text-sm leading-6 text-muted-foreground">
                {member.bio}
              </p>

              <div className="mt-5 flex flex-wrap justify-center gap-1.5">
                {member.skills.slice(0, 4).map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex justify-center gap-2 border-t border-border pt-5">
                <a
                  href={member.linkedin}
                  aria-label={`${member.name} on LinkedIn`}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-background text-muted-foreground transition-colors hover:border-primary/30 hover:bg-indigo-50 hover:text-primary dark:hover:bg-indigo-100/10"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href={member.github}
                  aria-label={`${member.name} on GitHub`}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-background text-muted-foreground transition-colors hover:border-border hover:bg-muted hover:text-foreground"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href={`mailto:${member.email}`}
                  aria-label={`Email ${member.name}`}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-background text-muted-foreground transition-colors hover:border-primary/30 hover:bg-indigo-50 hover:text-primary dark:hover:bg-indigo-100/10"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </motion.article>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="mx-auto mt-10 max-w-2xl rounded-2xl border border-border bg-surface/70 p-5 text-center"
      >
        <p className="text-sm leading-6 text-muted-foreground">
          <span className="font-semibold text-foreground">Based in Tunisia.</span>{" "}
          We work fully remotely and are open to clients from anywhere in the world.
          Fast response, structured delivery, and a commitment to quality on every project.
        </p>
      </motion.div>
    </SectionShell>
  );
}
