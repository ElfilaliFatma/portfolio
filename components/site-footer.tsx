import Link from "next/link";
import { company, type NavigationItem } from "@/lib/site-data";

type SiteFooterProps = {
  navigation: NavigationItem[];
};

export function SiteFooter({ navigation }: SiteFooterProps) {
  return (
    <footer className="border-t border-border/80 py-10">
      <div className="section-shell flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-heading text-lg font-semibold">{company.name}</p>
          <p className="mt-2 max-w-md text-sm text-muted-foreground">
            Portfolio work across web development, data science, analytics, and
            AI-oriented product concepts.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="section-shell mt-6 flex flex-col gap-2 border-t border-border/80 pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
        <p>{company.location}</p>
      </div>
    </footer>
  );
}
