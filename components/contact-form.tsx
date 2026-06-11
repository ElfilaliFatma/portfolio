"use client";

import { useRef, useState } from "react";

type StatusState = {
  type: "idle" | "success" | "error";
  message: string;
};

const initialStatus: StatusState = {
  type: "idle",
  message: "",
};

export function ContactForm() {
  const [status, setStatus] = useState<StatusState>(initialStatus);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true);
    setStatus(initialStatus);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        setStatus({
          type: "error",
          message: result.message ?? "Something went wrong. Please try again.",
        });
        return;
      }

      setStatus({
        type: "success",
        message:
          result.message ??
          "Message received. You can now connect this route to your preferred email provider.",
      });
      formRef.current?.reset();
    } catch {
      setStatus({
        type: "error",
        message: "Network error. Please try again in a moment.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form ref={formRef} action={handleSubmit} className="grid gap-4">
      <label className="grid gap-2">
        <span className="text-sm font-medium">Name</span>
        <input
          type="text"
          name="name"
          autoComplete="name"
          required
          aria-label="Your name"
          className="h-12 rounded-2xl border border-border bg-background/65 px-4 text-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-ring"
          placeholder="Your name"
        />
      </label>

      <label className="grid gap-2">
        <span className="text-sm font-medium">Email</span>
        <input
          type="email"
          name="email"
          autoComplete="email"
          required
          aria-label="Your email"
          className="h-12 rounded-2xl border border-border bg-background/65 px-4 text-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-ring"
          placeholder="you@company.com"
        />
      </label>

      <label className="grid gap-2">
        <span className="text-sm font-medium">Message</span>
        <textarea
          name="message"
          required
          aria-label="Your message"
          rows={6}
          className="rounded-2xl border border-border bg-background/65 px-4 py-3 text-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-ring"
          placeholder="Tell us about your product, timeline, or business challenge."
        />
      </label>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-5 text-sm font-semibold text-background transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? "Sending..." : "Send message"}
      </button>

      {status.type !== "idle" ? (
        <p
          className={
            status.type === "success"
              ? "text-sm text-emerald-500"
              : "text-sm text-rose-500"
          }
          role="status"
        >
          {status.message}
        </p>
      ) : null}
    </form>
  );
}
