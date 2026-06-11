"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, SunMedium } from "lucide-react";

export function ThemeToggle() {
  const pathname = usePathname() || "/";

  return (
    <Link
      href={`/theme-toggle?next=${encodeURIComponent(pathname)}`}
      prefetch={false}
      aria-label="Toggle color mode"
      className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/75 text-foreground transition hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <SunMedium className="h-4 w-4 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute h-4 w-4 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
    </Link>
  );
}
