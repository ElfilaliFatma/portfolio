import { NextResponse, type NextRequest } from "next/server";
import type { Project } from "@/lib/site-data";
import { isAdminRequestAuthenticated } from "@/lib/admin-auth";
import { getProjects, replaceProjects } from "@/lib/project-store";
import { sanitizeProject } from "@/lib/project-utils";

type RouteContext = {
  params: Promise<{
    slug: string;
  }>;
};

function unauthorizedResponse() {
  return NextResponse.json({ message: "Unauthorized." }, { status: 401 });
}

export async function PUT(request: NextRequest, context: RouteContext) {
  if (!isAdminRequestAuthenticated(request)) {
    return unauthorizedResponse();
  }

  const { slug } = await context.params;
  const body = (await request.json()) as { project?: Project };
  const projects = await getProjects();
  const existingProject = projects.find((project) => project.slug === slug);

  if (!existingProject) {
    return NextResponse.json({ message: "Project not found." }, { status: 404 });
  }

  const sanitizedProject = sanitizeProject(body.project, existingProject);

  if (!sanitizedProject) {
    return NextResponse.json(
      { message: "Project data is invalid or incomplete." },
      { status: 400 },
    );
  }

  const nextProjects = await replaceProjects(
    projects.map((project) => (project.slug === slug ? sanitizedProject : project)),
  );
  const savedProject =
    nextProjects.find((project) => project.name === sanitizedProject.name && project.summary === sanitizedProject.summary) ??
    nextProjects.find((project) => project.slug === sanitizedProject.slug) ??
    sanitizedProject;

  return NextResponse.json({
    message: "Project updated successfully.",
    project: savedProject,
    projects: nextProjects,
  });
}

export async function DELETE(request: NextRequest, context: RouteContext) {
  if (!isAdminRequestAuthenticated(request)) {
    return unauthorizedResponse();
  }

  const { slug } = await context.params;
  const projects = await getProjects();

  if (projects.length <= 1) {
    return NextResponse.json(
      { message: "At least one project must remain in the portfolio." },
      { status: 400 },
    );
  }

  const nextProjects = projects.filter((project) => project.slug !== slug);

  if (nextProjects.length === projects.length) {
    return NextResponse.json({ message: "Project not found." }, { status: 404 });
  }

  const savedProjects = await replaceProjects(nextProjects);
  return NextResponse.json({
    message: "Project deleted successfully.",
    projects: savedProjects,
  });
}
