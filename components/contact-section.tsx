"use client";

import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Clock3,
  Mail,
  MessageSquare,
  Phone,
  Send,
  Shield,
  User,
  Workflow,
} from "lucide-react";
import { teamMembers } from "@/lib/site-data";

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
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative overflow-hidden py-20 sm:py-24"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.12),transparent_28%)]" />

      <div className="section-shell">
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-slate-200/80 bg-white/80 px-4 py-1.5 text-sm font-medium text-slate-700 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-200">
            Contact
          </span>
          <h2
            id="contact-title"
            className="mt-5 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl dark:text-white"
          >
            Let&apos;s Work Together
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">
            We are open to internships, freelance projects, and collaborations
          </p>
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-slate-200/80 bg-white/75 px-4 py-3 text-sm text-slate-600 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-300">
            <span className="inline-flex items-center gap-2">
              <Workflow className="h-4 w-4 text-sky-500" />
              Web Development
            </span>
            <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block dark:bg-slate-700" />
            <span className="inline-flex items-center gap-2">
              <Shield className="h-4 w-4 text-emerald-500" />
              Cybersecurity basics
            </span>
            <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block dark:bg-slate-700" />
            <span>Data Science &amp; Machine Learning</span>
            <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block dark:bg-slate-700" />
            <span>Data Engineering</span>
          </div>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {teamMembers.map((member, index) => (
              <motion.article
                key={member.email}
                custom={0.08 + index * 0.08}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="rounded-[1.75rem] border border-slate-200/80 bg-white/70 p-4 transition-all duration-300 hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-900/55"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-500/10 text-sky-600 dark:bg-sky-400/10 dark:text-sky-400">
                    <User className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold leading-tight text-slate-900 dark:text-white">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">
                      {member.role}
                    </p>
                  </div>
                </div>

                <div className="mt-4 space-y-3">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-3 rounded-xl border border-slate-200/80 bg-slate-50/80 px-3 py-2.5 text-xs text-slate-700 transition-colors hover:border-sky-300 hover:bg-sky-50 hover:text-sky-700 dark:border-slate-800 dark:bg-slate-950/50 dark:text-slate-300 dark:hover:border-sky-800 dark:hover:bg-slate-950/70 dark:hover:text-sky-300"
                  >
                    <Mail className="h-3.5 w-3.5 shrink-0" />
                    <span className="truncate">{member.email}</span>
                  </a>

                  <a
                    href={`tel:${member.phone.replace(/\s+/g, "")}`}
                    className="flex items-center gap-3 rounded-xl border border-slate-200/80 bg-slate-50/80 px-3 py-2.5 text-xs text-slate-700 transition-colors hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700 dark:border-slate-800 dark:bg-slate-950/50 dark:text-slate-300 dark:hover:border-emerald-800 dark:hover:bg-emerald-950/40 dark:hover:text-emerald-300"
                  >
                    <Phone className="h-3.5 w-3.5 shrink-0" />
                    <span>{member.phone}</span>
                  </a>
                </div>

                <div className="mt-4 rounded-xl border border-dashed border-slate-200 bg-slate-50/70 px-3 py-2.5 text-xs leading-6 text-slate-600 dark:border-slate-800 dark:bg-slate-950/40 dark:text-slate-400">
                  <span className="font-medium text-slate-800 dark:text-slate-200">
                    Skills:
                  </span>{" "}
                  {member.skills}
                </div>
              </motion.article>
            ))}

            <motion.div
              custom={0.24}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-[1.75rem] border border-slate-200/80 bg-white/70 p-4 md:col-span-2 xl:col-span-3 dark:border-slate-800 dark:bg-slate-900/55"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4 dark:border-slate-800 dark:bg-slate-950/40">
                  <BriefcaseBusiness className="h-5 w-5 text-accent" />
                  <p className="mt-3 text-sm font-semibold text-slate-900 dark:text-white">
                    Availability
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    Open to internship opportunities, collaborations, and
                    portfolio-driven freelance work.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4 dark:border-slate-800 dark:bg-slate-950/40">
                  <Clock3 className="h-5 w-5 text-accent" />
                  <p className="mt-3 text-sm font-semibold text-slate-900 dark:text-white">
                    Response style
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    Best for project ideas, internship discussions, academic
                    collaborations, and technical portfolio conversations.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            custom={0.12}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-3xl border border-slate-200/80 bg-white/75 p-6 sm:p-8 dark:border-slate-800 dark:bg-slate-900/60"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                Send us a message
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                Share your idea, internship opportunity, or collaboration
                request and we&apos;ll get back with the right next step.
              </p>
            </div>

            <form className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                    <User className="h-4 w-4" />
                    Full name
                  </span>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Your full name"
                    className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none transition focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-100 dark:border-slate-800 dark:bg-slate-950/50 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-sky-500 dark:focus:bg-slate-950 dark:focus:ring-sky-950"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                    <Mail className="h-4 w-4" />
                    Email
                  </span>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none transition focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-100 dark:border-slate-800 dark:bg-slate-950/50 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-sky-500 dark:focus:bg-slate-950 dark:focus:ring-sky-950"
                  />
                </label>
              </div>

              <label className="block">
                <span className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                  <MessageSquare className="h-4 w-4" />
                  Subject
                </span>
                <input
                  type="text"
                  name="subject"
                  placeholder="Internship, freelance project, collaboration..."
                  className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none transition focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-100 dark:border-slate-800 dark:bg-slate-950/50 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-sky-500 dark:focus:bg-slate-950 dark:focus:ring-sky-950"
                />
              </label>

              <label className="block">
                <span className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                  <MessageSquare className="h-4 w-4" />
                  Message
                </span>
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Tell us about your project, opportunity, or what kind of collaboration you have in mind."
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-100 dark:border-slate-800 dark:bg-slate-950/50 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-sky-500 dark:focus:bg-slate-950 dark:focus:ring-sky-950"
                />
              </label>

              <button
                type="submit"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-slate-900 px-5 text-sm font-semibold text-white shadow-lg shadow-slate-900/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-600 hover:shadow-sky-500/20 focus:outline-none focus:ring-4 focus:ring-sky-100 dark:bg-white dark:text-slate-900 dark:hover:bg-sky-400 dark:hover:text-slate-950 dark:focus:ring-sky-950"
              >
                <Send className="h-4 w-4" />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
