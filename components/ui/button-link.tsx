import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const variants = {
  primary:
    "bg-foreground text-background shadow-[0_20px_40px_-20px_rgba(14,165,233,0.75)] hover:-translate-y-0.5 hover:shadow-[0_24px_48px_-22px_rgba(14,165,233,0.8)]",
  secondary:
    "border border-border bg-background/70 text-foreground hover:bg-background",
  ghost:
    "text-foreground hover:bg-muted/80",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        variants[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
