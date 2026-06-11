import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { unstable_noStore as noStore } from "next/cache";
import type { Project } from "@/lib/site-data";
import {
  cloneDefaultProjects,
  cloneProjects,
  ensureUniqueProjectSlugs,
  sanitizeProjects,
} from "@/lib/project-utils";

const dataDirectory = path.join(process.cwd(), "data");
const projectsFilePath = path.join(dataDirectory, "projects.json");

async function ensureProjectsFile() {
  try {
    await readFile(projectsFilePath, "utf8");
  } catch {
    await mkdir(dataDirectory, { recursive: true });
    const defaults = cloneDefaultProjects();
    await writeFile(
      projectsFilePath,
      `${JSON.stringify(defaults, null, 2)}\n`,
      "utf8",
    );
  }
}

export async function getProjects() {
  noStore();
  await ensureProjectsFile();

  try {
    const content = await readFile(projectsFilePath, "utf8");
    return sanitizeProjects(JSON.parse(content));
  } catch {
    const defaults = cloneDefaultProjects();
    await replaceProjects(defaults);
    return defaults;
  }
}

export async function getProjectBySlug(slug: string) {
  const projects = await getProjects();
  return projects.find((project) => project.slug === slug) ?? null;
}

export async function replaceProjects(projects: Project[]) {
  const sanitized = ensureUniqueProjectSlugs(sanitizeProjects(projects));
  await mkdir(dataDirectory, { recursive: true });
  await writeFile(
    projectsFilePath,
    `${JSON.stringify(sanitized, null, 2)}\n`,
    "utf8",
  );
  return cloneProjects(sanitized);
}
