"use client";

import { ArrowRight, Bot, BarChart3, Globe, CloudCog, Database, Smartphone } from "lucide-react";
import { motion } from "framer-motion";
import { ButtonLink } from "@/components/ui/button-link";
import { company, heroStats, teamMembers } from "@/lib/site-data";
import Image from "next/image";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const serviceCards = [
  { icon: Globe, label: "Web Development", color: "icon-bg-indigo", float: "float-1" },
  { icon: Bot, label: "AI & ML", color: "icon-bg-violet", float: "float-2" },
  { icon: Database, label: "Data Engineering", color: "icon-bg-cyan", float: "float-3" },
  { icon: BarChart3, label: "Analytics", color: "icon-bg-emerald", float: "float-1" },
  { icon: Smartphone, label: "Mobile Interfaces", color: "icon-bg-rose", float: "float-2" },
  { icon: CloudCog, label: "Cloud & DevOps", color: "icon-bg-amber", float: "float-3" },
];

export function HeroSection() {
  return (
    <section className="section-shell relative overflow-hidden pb-20 pt-10 sm:pb-28 sm:pt-16">
      <div className="grid gap-14 lg:grid-cols-[1fr_420px] lg:items-center xl:grid-cols-[1fr_480px]">
        {/* Left: Content */}
        <div>
          {/* Availability badge */}
          <motion.div {...fadeUp(0)}>
            <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-800 dark:border-emerald-800/40 dark:bg-emerald-900/20 dark:text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="pulse-dot absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Available for freelance projects
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            {...fadeUp(0.08)}
            className="mt-7 max-w-3xl font-heading text-5xl font-extrabold tracking-tight text-balance leading-[1.1] sm:text-6xl lg:text-7xl"
          >
            We engineer{" "}
            <span className="gradient-text">AI-powered</span>{" "}
            digital solutions
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            {...fadeUp(0.16)}
            className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground sm:text-xl"
          >
            {company.name} is a team of Data Science & Software Engineers
            building modern web products, machine learning systems, and
            analytics platforms — end-to-end.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            {...fadeUp(0.24)}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <ButtonLink href="/#contact" variant="primary" className="gap-2 text-base px-7 py-3.5">
              Start a Project
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink href="/#projects" variant="secondary" className="text-base px-7 py-3.5">
              View Our Work
            </ButtonLink>
          </motion.div>

          {/* Team avatars */}
          <motion.div {...fadeUp(0.3)} className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-3">
              {teamMembers.map((member) => (
                <div
                  key={member.name}
                  className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-white shadow-sm dark:border-gray-900"
                >
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
              ))}
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">
                3 Engineers · Ready to build
              </p>
              <p className="text-xs text-muted-foreground">
                Data Science · AI · Full-Stack
              </p>
            </div>
          </motion.div>

          {/* Stats row */}
          <motion.div
            {...fadeUp(0.36)}
            className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4"
          >
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-border bg-surface/80 px-4 py-4 text-center"
              >
                <p className="font-heading text-2xl font-extrabold tracking-tight text-foreground">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs leading-4 text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Service cards visual */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden lg:block"
        >
          <div className="relative rounded-3xl border border-border bg-surface/60 p-6 shadow-xl">
            {/* Top badge */}
            <div className="mb-5 flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Our capabilities
              </p>
              <span className="rounded-full border border-primary/20 bg-indigo-50 px-3 py-1 text-xs font-semibold text-primary dark:bg-indigo-100/10">
                6 service areas
              </span>
            </div>

            {/* Service grid */}
            <div className="grid grid-cols-2 gap-3">
              {serviceCards.map((card) => (
                <div
                  key={card.label}
                  className={`rounded-2xl border border-border bg-white p-4 shadow-sm dark:bg-gray-900/60 ${card.float}`}
                >
                  <div
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${card.color}`}
                  >
                    <card.icon className="h-5 w-5" />
                  </div>
                  <p className="mt-3 text-sm font-semibold text-foreground leading-tight">
                    {card.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom bar */}
            <div className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-3 dark:border-emerald-800/40 dark:bg-emerald-900/15">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="pulse-dot absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </span>
                <p className="text-xs font-semibold text-emerald-800 dark:text-emerald-300">
                  Open for new client projects · Remote-friendly
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
