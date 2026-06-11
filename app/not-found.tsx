import Link from "next/link";
import { ButtonLink } from "@/components/ui/button-link";

export default function NotFound() {
  return (
    <div className="section-shell py-24">
      <div className="glass-card mx-auto max-w-2xl rounded-[2rem] p-8 text-center sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
          404
        </p>
        <h1 className="mt-4 font-heading text-4xl font-semibold tracking-tight">
          This page could not be found.
        </h1>
        <p className="mt-4 text-muted-foreground">
          The project or page you’re looking for may have moved. You can head
          back to the portfolio homepage below.
        </p>
        <div className="mt-8 flex justify-center">
          <ButtonLink href="/">Return Home</ButtonLink>
        </div>
        <Link
          href="/#projects"
          className="mt-5 inline-flex text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          Browse Projects
        </Link>
      </div>
    </div>
  );
}
