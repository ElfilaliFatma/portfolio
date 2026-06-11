import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { AdminLoginForm } from "@/components/admin-login-form";
import {
  getFallbackCredentialHint,
  isAdminAuthenticated,
  shouldShowFallbackCredentialHint,
} from "@/lib/admin-auth";

export const metadata: Metadata = {
  title: "Admin Login",
  description: "Secure login for the portfolio admin dashboard.",
};

const loginErrors: Record<string, string> = {
  missing: "Please enter both username and password.",
  invalid: "Invalid admin credentials.",
};

type AdminLoginPageProps = {
  searchParams: Promise<{
    error?: string;
  }>;
};

export default async function AdminLoginPage({
  searchParams,
}: AdminLoginPageProps) {
  if (await isAdminAuthenticated()) {
    redirect("/admin");
  }

  const { error } = await searchParams;
  const fallbackCredentials = shouldShowFallbackCredentialHint()
    ? getFallbackCredentialHint()
    : null;

  return (
    <div className="section-shell flex min-h-[calc(100vh-12rem)] items-center py-16">
      <AdminLoginForm
        error={error ? loginErrors[error] ?? "Unable to sign in." : null}
        fallbackCredentials={fallbackCredentials}
      />
    </div>
  );
}
