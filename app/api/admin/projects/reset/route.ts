import { NextResponse, type NextRequest } from "next/server";
import { isAdminRequestAuthenticated } from "@/lib/admin-auth";
import { projects as defaultProjects } from "@/lib/site-data";
import { replaceProjects } from "@/lib/project-store";

export async function POST(request: NextRequest) {
  if (!isAdminRequestAuthenticated(request)) {
    return NextResponse.json({ message: "Unauthorized." }, { status: 401 });
  }

  const projects = await replaceProjects(defaultProjects);
  return NextResponse.json({
    message: "Projects reset to defaults.",
    projects,
  });
}
