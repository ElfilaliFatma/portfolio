"use client";

import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Clock3,
  Github,
  Linkedin,
  Mail,
  MessageSquare,
  Phone,
  Send,
  User,
} from "lucide-react";
import { teamMembers } from "@/lib/site-data";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative overflow-hidden py-20 sm:py-28"
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-50/60 via-transparent to-violet-50/40 dark:from-indigo-950/20 dark:to-violet-950/10" />

      <div className="section-shell">
        {/* Section header */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-primary/20 bg-indigo-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary dark:bg-indigo-100/10">
            Contact
          </span>
          <h2
            id="contact-title"
            className="mt-5 font-heading text-4xl font-extrabold tracking-tight sm:text-5xl"
          >
            Let&apos;s build something{" "}
            <span className="gradient-text">great together.</span>
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Tell us about your project and we&apos;ll get back to you with a clear next step — no commitment required.
          </p>

          {/* Availability */}
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-800 dark:border-emerald-800/40 dark:bg-emerald-900/20 dark:text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="pulse-dot absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Open to new projects · Fast response guaranteed
          </div>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          {/* Left: Team contact cards */}
          <div className="flex flex-col gap-5">
            <motion.p
              custom={0.08}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-sm font-semibold uppercase tracking-widest text-muted-foreground"
            >
              Reach us directly
            </motion.p>

            {teamMembers.map((member, index) => (
              <motion.article
                key={member.email}
                custom={0.1 + index * 0.08}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="hover-card rounded-2xl border border-border bg-white p-5 dark:bg-gray-900/60"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-sm font-bold text-white">
                    {member.initials}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-bold text-foreground">{member.name}</h3>
                    <p className="text-xs text-muted-foreground">{member.role}</p>
                  </div>
                  <div className="flex gap-1.5">
                    <a
                      href={member.linkedin}
                      aria-label="LinkedIn"
                      className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-surface text-muted-foreground transition hover:border-primary/30 hover:text-primary"
                    >
                      <Linkedin className="h-3.5 w-3.5" />
                    </a>
                    <a
                      href={member.github}
                      aria-label="GitHub"
                      className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-surface text-muted-foreground transition hover:bg-muted hover:text-foreground"
                    >
                      <Github className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>

                <div className="mt-3 grid gap-2">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-2.5 rounded-xl border border-border bg-surface px-3 py-2 text-xs text-muted-foreground transition hover:border-primary/30 hover:bg-indigo-50 hover:text-primary dark:hover:bg-indigo-100/10"
                  >
                    <Mail className="h-3.5 w-3.5 shrink-0" />
                    <span className="truncate">{member.email}</span>
                  </a>
                </div>
              </motion.article>
            ))}

            {/* Availability info */}
            <motion.div
              custom={0.34}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-2xl border border-border bg-white p-5 dark:bg-gray-900/60"
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <BriefcaseBusiness className="h-5 w-5 text-primary" />
                  <p className="mt-2 text-sm font-bold text-foreground">Availability</p>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">
                    Open to freelance, long-term retainers, and project partnerships.
                  </p>
                </div>
                <div>
                  <Clock3 className="h-5 w-5 text-primary" />
                  <p className="mt-2 text-sm font-bold text-foreground">Response time</p>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">
                    We reply within 24 hours to all project inquiries.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Contact form */}
          <motion.div
            custom={0.12}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="rounded-3xl border border-border bg-white p-7 shadow-sm dark:bg-gray-900/60 sm:p-9"
          >
            {submitted ? (
              <div className="flex h-full min-h-[400px] flex-col items-center justify-center gap-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 dark:bg-emerald-900/20">
                  <Send className="h-7 w-7 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="font-heading text-2xl font-bold">Message sent!</h3>
                <p className="max-w-sm text-sm text-muted-foreground">
                  Thank you for reaching out. We&apos;ll review your message and get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-sm font-semibold text-primary hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <div className="mb-7">
                  <h3 className="font-heading text-2xl font-bold">
                    Tell us about your project
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Whether it&apos;s a product idea, a data challenge, or an AI integration — we&apos;re ready to help.
                  </p>
                </div>

                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        <User className="h-3.5 w-3.5" />
                        Full name
                      </span>
                      <input
                        type="text"
                        name="fullName"
                        required
                        placeholder="Your full name"
                        className="h-11 w-full rounded-xl border border-border bg-surface px-4 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/60 focus:border-primary/40 focus:bg-white focus:ring-2 focus:ring-primary/15 dark:focus:bg-gray-900"
                      />
                    </label>
                    <label className="block">
                      <span className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        <Mail className="h-3.5 w-3.5" />
                        Email
                      </span>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="you@company.com"
                        className="h-11 w-full rounded-xl border border-border bg-surface px-4 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/60 focus:border-primary/40 focus:bg-white focus:ring-2 focus:ring-primary/15 dark:focus:bg-gray-900"
                      />
                    </label>
                  </div>

                  <label className="block">
                    <span className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      <Phone className="h-3.5 w-3.5" />
                      Service needed
                    </span>
                    <select
                      name="service"
                      className="h-11 w-full rounded-xl border border-border bg-surface px-4 text-sm text-foreground outline-none transition focus:border-primary/40 focus:bg-white focus:ring-2 focus:ring-primary/15 dark:focus:bg-gray-900"
                    >
                      <option value="">Select a service...</option>
                      <option>Web Development</option>
                      <option>AI &amp; Machine Learning</option>
                      <option>Data Engineering</option>
                      <option>Analytics &amp; Dashboards</option>
                      <option>Mobile-Friendly Interface</option>
                      <option>Cloud &amp; DevOps</option>
                      <option>Multiple / Not sure yet</option>
                    </select>
                  </label>

                  <label className="block">
                    <span className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      <MessageSquare className="h-3.5 w-3.5" />
                      Project details
                    </span>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      placeholder="Describe your project, challenge, or idea. What are you trying to build or solve?"
                      className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/60 focus:border-primary/40 focus:bg-white focus:ring-2 focus:ring-primary/15 dark:focus:bg-gray-900"
                    />
                  </label>

                  <button
                    type="submit"
                    className="btn-primary w-full gap-2 text-base"
                  >
                    <Send className="h-4 w-4" />
                    Send message
                  </button>

                  <p className="text-center text-xs text-muted-foreground">
                    We respond within 24 hours. No spam, ever.
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
