import { AlertCircle, LockKeyhole, UserRound } from "lucide-react";

type AdminLoginFormProps = {
  error?: string | null;
  fallbackCredentials?: {
    username: string;
    password: string;
  } | null;
};

export function AdminLoginForm({
  error,
  fallbackCredentials,
}: AdminLoginFormProps) {
  return (
    <div className="mx-auto w-full max-w-md rounded-[2rem] border border-border bg-background/75 p-8 shadow-[0_24px_80px_-36px_rgba(15,23,42,0.45)] backdrop-blur">
      <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/12 text-accent">
        <LockKeyhole className="h-6 w-6" />
      </div>
      <p className="mt-6 text-sm font-semibold uppercase tracking-[0.24em] text-accent">
        Secure admin access
      </p>
      <h1 className="mt-3 font-heading text-3xl font-semibold tracking-tight">
        Admin Login
      </h1>
      <p className="mt-3 text-sm leading-7 text-muted-foreground">
        Sign in before adding, updating, or deleting portfolio projects.
      </p>

      {fallbackCredentials ? (
        <div className="mt-6 rounded-2xl border border-amber-500/30 bg-amber-500/10 px-4 py-4 text-sm text-amber-200">
          <p className="font-semibold text-amber-100">Local development credentials</p>
          <p className="mt-2">Username: {fallbackCredentials.username}</p>
          <p>Password: {fallbackCredentials.password}</p>
        </div>
      ) : null}

      <form className="mt-8 space-y-5" action="/api/admin/login" method="post">
        <label className="grid gap-2">
          <span className="text-sm font-medium">Username</span>
          <div className="flex h-12 items-center gap-3 rounded-2xl border border-border bg-background/70 px-4">
            <UserRound className="h-4 w-4 text-muted-foreground" />
            <input
              name="username"
              autoComplete="username"
              className="h-full w-full bg-transparent text-sm outline-none"
              placeholder="Enter admin username"
              required
            />
          </div>
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-medium">Password</span>
          <div className="flex h-12 items-center gap-3 rounded-2xl border border-border bg-background/70 px-4">
            <LockKeyhole className="h-4 w-4 text-muted-foreground" />
            <input
              type="password"
              name="password"
              autoComplete="current-password"
              className="h-full w-full bg-transparent text-sm outline-none"
              placeholder="Enter admin password"
              required
            />
          </div>
        </label>

        {error ? (
          <div className="flex items-start gap-2 rounded-2xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-300">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
            <p>{error}</p>
          </div>
        ) : null}

        <button
          type="submit"
          className="inline-flex h-12 w-full items-center justify-center rounded-2xl bg-foreground px-4 text-sm font-semibold text-background transition hover:-translate-y-0.5"
        >
          Sign in
        </button>
      </form>
    </div>
  );
}
