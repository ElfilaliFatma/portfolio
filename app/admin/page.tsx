import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { AdminDashboard } from "@/components/admin-dashboard";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { getProjects } from "@/lib/project-store";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Manage portfolio project content, visuals, and case study details.",
};

export default async function AdminPage() {
  if (!(await isAdminAuthenticated())) {
    redirect("/admin/login");
  }

  const projects = await getProjects();
  return <AdminDashboard initialProjects={projects} />;
}
