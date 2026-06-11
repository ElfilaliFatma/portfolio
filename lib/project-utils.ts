import type { Project } from "@/lib/site-data";
import { projects as defaultProjects } from "@/lib/site-data";

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((item) => typeof item === "string");
}

function isProject(value: unknown): value is Project {
  if (!value || typeof value !== "object") {
    return false;
  }

  const project = value as Record<string, unknown>;

  return (
    typeof project.slug === "string" &&
    typeof project.name === "string" &&
    isStringArray(project.stack) &&
    typeof project.summary === "string" &&
    typeof project.description === "string" &&
    isStringArray(project.outcome) &&
    isStringArray(project.metrics) &&
    typeof project.highlight === "string" &&
    typeof project.image === "string" &&
    typeof project.imageCaption === "string"
  );
}

export function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function cloneProjects(projects: Project[]) {
  return projects.map((project) => ({
    ...project,
    stack: [...project.stack],
    outcome: [...project.outcome],
    metrics: [...project.metrics],
  }));
}

export function cloneDefaultProjects() {
  return cloneProjects(defaultProjects);
}

export function sanitizeProject(
  value: unknown,
  fallback?: Partial<Project>,
): Project | null {
  if (!value || typeof value !== "object") {
    return null;
  }

  const candidate = value as Partial<Project>;
  const name = typeof candidate.name === "string" ? candidate.name.trim() : "";
  const slugSource =
    typeof candidate.slug === "string" && candidate.slug.trim()
      ? candidate.slug
      : name;
  const slug = slugify(slugSource);

  if (!name || !slug) {
    return null;
  }

  return {
    slug,
    name,
    stack: Array.isArray(candidate.stack)
      ? candidate.stack.filter((item): item is string => typeof item === "string" && item.trim().length > 0)
      : [...(fallback?.stack ?? [])],
    summary:
      typeof candidate.summary === "string"
        ? candidate.summary.trim()
        : (fallback?.summary ?? ""),
    description:
      typeof candidate.description === "string"
        ? candidate.description.trim()
        : (fallback?.description ?? ""),
    outcome: Array.isArray(candidate.outcome)
      ? candidate.outcome.filter((item): item is string => typeof item === "string" && item.trim().length > 0)
      : [...(fallback?.outcome ?? [])],
    metrics: Array.isArray(candidate.metrics)
      ? candidate.metrics.filter((item): item is string => typeof item === "string" && item.trim().length > 0)
      : [...(fallback?.metrics ?? [])],
    highlight:
      typeof candidate.highlight === "string"
        ? candidate.highlight.trim()
        : (fallback?.highlight ?? ""),
    image:
      typeof candidate.image === "string" && candidate.image.trim()
        ? candidate.image.trim()
        : (fallback?.image ?? "/projects/ai-chat-assistant.svg"),
    imageCaption:
      typeof candidate.imageCaption === "string"
        ? candidate.imageCaption.trim()
        : (fallback?.imageCaption ?? ""),
  };
}

export function sanitizeProjects(value: unknown): Project[] {
  if (!Array.isArray(value)) {
    return cloneDefaultProjects();
  }

  const sanitized = value
    .map((project) => sanitizeProject(project))
    .filter((project): project is Project => Boolean(project));

  const unique = ensureUniqueProjectSlugs(sanitized);
  return unique.length > 0 ? unique : cloneDefaultProjects();
}

export function ensureUniqueProjectSlugs(projects: Project[]) {
  const seen = new Set<string>();

  return cloneProjects(projects).map((project) => {
    const baseSlug = slugify(project.slug || project.name) || "project";
    let slug = baseSlug;
    let counter = 2;

    while (seen.has(slug)) {
      slug = `${baseSlug}-${counter}`;
      counter += 1;
    }

    seen.add(slug);
    return {
      ...project,
      slug,
    };
  });
}

export function createEmptyProject(existingProjects: Project[] = []): Project {
  const existingSlugs = new Set(existingProjects.map((project) => project.slug));
  const baseSlug = "new-project";
  let slug = baseSlug;
  let counter = 1;

  while (existingSlugs.has(slug)) {
    counter += 1;
    slug = `${baseSlug}-${counter}`;
  }

  return {
    slug,
    name: "New Project",
    stack: ["Next.js", "TypeScript"],
    summary: "Short summary of the project.",
    description: "Longer description of the project and the context behind it.",
    outcome: ["Add outcome 1", "Add outcome 2", "Add outcome 3"],
    metrics: ["Metric 1", "Metric 2", "Metric 3"],
    highlight: "Project highlight",
    image: "/projects/ai-chat-assistant.svg",
    imageCaption: "Add a caption explaining what the project image represents.",
  };
}

export function isValidProjectList(value: unknown): value is Project[] {
  return Array.isArray(value) && value.every(isProject);
}
