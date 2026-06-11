import { NextResponse, type NextRequest } from "next/server";
import { isAdminRequestAuthenticated } from "@/lib/admin-auth";
import { getProjects, replaceProjects } from "@/lib/project-store";
import { createEmptyProject } from "@/lib/project-utils";

function unauthorizedResponse() {
  return NextResponse.json({ message: "Unauthorized." }, { status: 401 });
}

export async function GET(request: NextRequest) {
  if (!isAdminRequestAuthenticated(request)) {
    return unauthorizedResponse();
  }

  const projects = await getProjects();
  return NextResponse.json({ projects });
}

export async function POST(request: NextRequest) {
  if (!isAdminRequestAuthenticated(request)) {
    return unauthorizedResponse();
  }

  const projects = await getProjects();
  const project = createEmptyProject(projects);
  const nextProjects = await replaceProjects([...projects, project]);

  return NextResponse.json(
    {
      message: "Project created successfully.",
      project: nextProjects.find((item) => item.slug === project.slug) ?? project,
      projects: nextProjects,
    },
    { status: 201 },
  );
}
