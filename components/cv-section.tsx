"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download, ExternalLink, FileText } from "lucide-react";
import { SectionShell } from "@/components/section-shell";
import { teamMembers } from "@/lib/site-data";

const cvDocuments = [
  {
    email: "fatmaezzahra.elfilali@sesame.com",
    previewHref: "/cvs/fatma-el-filali-cv.pdf",
    downloadHref: "/cvs/fatma-el-filali-cv.pdf",
    format: "PDF",
    note: "Full CV available as a browser preview and direct download.",
  },
  {
    email: "ibrahim.gaha@sesame.com",
    previewHref: "/cvs/ibrahim-gaha-cv.pdf",
    downloadHref: "/cvs/ibrahim-gaha-cv.pdf",
    format: "PDF",
    note: "Detailed engineering CV ready to open or download instantly.",
  },
  {
    email: "melek.briki@sesame.com",
    previewHref: "/cvs/melek-briki-cv.pdf",
    downloadHref: "/cvs/melek-briki-cv.docx",
    format: "Preview PDF + Original DOCX",
    note: "Preview in PDF, with the original editable document available separately.",
  },
];

export function CvSection() {
  const documents = cvDocuments.flatMap((document) => {
      const member = teamMembers.find((item) => item.email === document.email);

      if (!member) {
        return [];
      }

      return [
        {
          ...document,
          member,
        },
      ];
    });

  return (
    <SectionShell
      id="cvs"
      eyebrow="CV Library"
      title="Preview or download each CV separately."
      description="A clean document area for recruiters, collaborators, and clients who want the full individual profiles behind the portfolio."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {documents.map((document, index) => (
          <motion.article
            key={document.member.email}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.5,
              delay: index * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="hover-card overflow-hidden rounded-[2rem] border border-border bg-white shadow-sm dark:bg-slate-950/70"
          >
            <div className="relative border-b border-border bg-gradient-to-br from-sky-500/10 via-transparent to-cyan-500/10 p-6">
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-border bg-surface">
                  <Image
                    src={document.member.photo}
                    alt={document.member.name}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                    {document.format}
                  </p>
                  <h3 className="mt-2 font-heading text-xl font-semibold tracking-tight text-foreground">
                    {document.member.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {document.member.role}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="rounded-3xl border border-border bg-surface/80 p-4">
                <div className="flex items-start gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Individual CV access
                    </p>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      {document.note}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {document.member.skills.slice(0, 4).map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={document.previewHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-primary/30 bg-primary px-5 py-3 text-sm font-semibold text-white transition-all hover:opacity-90"
                >
                  Preview CV
                  <ExternalLink className="h-4 w-4" />
                </a>
                <a
                  href={document.downloadHref}
                  download
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary/30 hover:text-primary"
                >
                  Download
                  <Download className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  );
}
