import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { company, type NavigationItem } from "@/lib/site-data";

type SiteFooterProps = {
  navigation: NavigationItem[];
};

export function SiteFooter({ navigation }: SiteFooterProps) {
  return (
    <footer className="border-t border-border bg-surface/50">
      <div className="section-shell py-14">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand Column */}
          <div>
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <span
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl text-xs font-bold text-white"
                style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }}
              >
                VL
              </span>
              <span className="font-heading text-base font-bold">{company.name}</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-6 text-muted-foreground">
              AI · Data Science · Software Engineering services. Building
              modern digital products for clients worldwide from Tunisia.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={company.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-background text-muted-foreground transition-colors hover:border-primary/30 hover:bg-indigo-50 hover:text-primary dark:hover:bg-indigo-100/10"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={company.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-background text-muted-foreground transition-colors hover:border-primary/30 hover:bg-indigo-50 hover:text-primary dark:hover:bg-indigo-100/10"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${company.email}`}
                aria-label="Email us"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-background text-muted-foreground transition-colors hover:border-primary/30 hover:bg-indigo-50 hover:text-primary dark:hover:bg-indigo-100/10"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Navigation
            </p>
            <ul className="space-y-2.5">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Get In Touch
            </p>
            <p className="text-sm leading-6 text-muted-foreground">
              Open to freelance projects, collaborations, and long-term partnerships.
            </p>
            <a
              href="/#contact"
              className="mt-4 inline-flex items-center gap-2 rounded-xl border border-primary/25 bg-indigo-50 px-4 py-2.5 text-sm font-semibold text-primary transition-all hover:bg-indigo-100 dark:bg-indigo-100/10 dark:hover:bg-indigo-100/20"
            >
              <span className="relative flex h-2 w-2">
                <span className="pulse-dot absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Available for new projects
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="section-shell flex flex-col gap-2 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with precision in Tunisia 🇹🇳
          </p>
        </div>
      </div>
    </footer>
  );
}
