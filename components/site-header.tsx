"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { ButtonLink } from "@/components/ui/button-link";
import type { NavigationItem } from "@/lib/site-data";

type SiteHeaderProps = {
  navigation: NavigationItem[];
};

export function SiteHeader({ navigation }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const closeMenu = () => setOpen(false);
    window.addEventListener("hashchange", closeMenu);
    return () => window.removeEventListener("hashchange", closeMenu);
  }, []);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <div className="section-shell">
        <div className="glass-card flex items-center justify-between rounded-full px-4 py-3 sm:px-5">
          <Link href="/" className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent/15 text-sm font-bold text-accent">
              FI
            </span>
            <div>
              <p className="font-heading text-sm font-semibold">Fatma & Ibrahim</p>
              <p className="text-xs text-muted-foreground">
                Data Science engineering portfolio
              </p>
            </div>
          </Link>

          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Primary navigation"
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm text-muted-foreground transition hover:bg-muted/80 hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle />
            <ButtonLink href="/#contact" className="px-4 py-2.5">
              Contact
            </ButtonLink>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/75 text-foreground"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open ? (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22 }}
              className="glass-card mt-3 rounded-3xl p-4 lg:hidden"
            >
              <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl px-4 py-3 text-sm font-medium text-foreground transition hover:bg-muted/80"
                  >
                    {item.label}
                  </Link>
                ))}
                <ButtonLink href="/#contact" className="mt-2" variant="primary">
                  Get In Touch
                </ButtonLink>
              </nav>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  );
}
