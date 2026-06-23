"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { ButtonLink } from "@/components/ui/button-link";
import type { NavigationItem } from "@/lib/site-data";
import { cn } from "@/lib/utils";

type SiteHeaderProps = {
  navigation: NavigationItem[];
};

export function SiteHeader({ navigation }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const closeMenu = () => setOpen(false);
    window.addEventListener("hashchange", closeMenu);
    return () => window.removeEventListener("hashchange", closeMenu);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full px-4 pt-3">
      <div className="section-shell">
        <div
          className={cn(
            "flex items-center justify-between rounded-2xl border px-5 py-3 transition-all duration-300",
            scrolled
              ? "border-border bg-white/95 shadow-sm backdrop-blur-md dark:bg-gray-950/95"
              : "border-border/60 bg-white/80 backdrop-blur-sm dark:bg-gray-950/70",
          )}
        >
          {/* Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <span
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl text-xs font-bold text-white transition-all duration-200 group-hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              }}
            >
              VL
            </span>
            <div>
              <p className="font-heading text-sm font-bold tracking-tight">
                Vertex Lab
              </p>
              <p className="text-xs text-muted-foreground hidden sm:block">
                AI · Data · Software
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Primary navigation"
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle />
            <ButtonLink href="/#contact" variant="primary" className="px-5 py-2.5 text-sm">
              Start a Project
            </ButtonLink>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-background text-foreground transition hover:bg-muted"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-2 overflow-hidden rounded-2xl border border-border bg-white/98 p-3 shadow-lg backdrop-blur-md dark:bg-gray-950/98"
            >
              <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-4 py-3 text-sm font-medium text-foreground transition hover:bg-muted"
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="mt-2 pt-2 border-t border-border">
                  <ButtonLink href="/#contact" variant="primary" className="w-full justify-center">
                    Start a Project
                  </ButtonLink>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
