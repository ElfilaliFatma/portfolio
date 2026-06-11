"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState, useTransition } from "react";
import {
  BarChart3,
  FolderKanban,
  ImagePlus,
  Layers3,
  LogOut,
  Plus,
  RefreshCcw,
  Save,
  ShieldCheck,
  Trash2,
  Users2,
} from "lucide-react";
import type { Project } from "@/lib/site-data";
import { services, skillGroups, teamMembers, testimonials } from "@/lib/site-data";
import { slugify } from "@/lib/project-utils";

type EditableProject = Project & {
  _persistedSlug: string;
};

type AdminDashboardProps = {
  initialProjects: Project[];
};

function toEditableProjects(projects: Project[]): EditableProject[] {
  return projects.map((project) => ({
    ...project,
    _persistedSlug: project.slug,
  }));
}

function toLines(value: string[]) {
  return value.join("\n");
}

function fromLines(value: string) {
  return value
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean);
}

function fromCommaList(value: string) {
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

export function AdminDashboard({ initialProjects }: AdminDashboardProps) {
  const [projects, setProjects] = useState<EditableProject[]>(() =>
    toEditableProjects(initialProjects),
  );
  const [selectedSlug, setSelectedSlug] = useState(initialProjects[0]?.slug ?? "");
  const [status, setStatus] = useState("");
  const [isPending, startTransition] = useTransition();

  const selectedProject =
    projects.find((project) => project.slug === selectedSlug) ?? projects[0] ?? null;

  const stats = useMemo(
    () => [
      {
        label: "Projects",
        value: projects.length,
        icon: FolderKanban,
      },
      {
        label: "Services",
        value: services.length,
        icon: Layers3,
      },
      {
        label: "Team Cards",
        value: teamMembers.length,
        icon: Users2,
      },
      {
        label: "Testimonials",
        value: testimonials.length,
        icon: BarChart3,
      },
    ],
    [projects.length],
  );

  function replaceProjects(nextProjects: Project[]) {
    const editableProjects = toEditableProjects(nextProjects);
    setProjects(editableProjects);

    if (editableProjects.length === 0) {
      setSelectedSlug("");
      return;
    }

    const stillSelected = editableProjects.find((project) => project.slug === selectedSlug);
    setSelectedSlug(stillSelected?.slug ?? editableProjects[0].slug);
  }

  function updateLocalProject(
    slug: string,
    updater: (project: EditableProject) => EditableProject,
  ) {
    setProjects((currentProjects) =>
      currentProjects.map((project) =>
        project.slug === slug ? updater(project) : project,
      ),
    );
  }

  function createProject() {
    startTransition(async () => {
      setStatus("");

      try {
        const response = await fetch("/api/admin/projects", {
          method: "POST",
        });
        const payload = (await response.json()) as {
          message?: string;
          project?: Project;
          projects?: Project[];
        };

        if (!response.ok || !payload.project || !payload.projects) {
          setStatus(payload.message ?? "Unable to create a project.");
          return;
        }

        replaceProjects(payload.projects);
        setSelectedSlug(payload.project.slug);
        setStatus(payload.message ?? "Project created successfully.");
      } catch {
        setStatus("Unable to create a project right now.");
      }
    });
  }

  function saveProject() {
    if (!selectedProject) {
      return;
    }

    startTransition(async () => {
      setStatus("");

      try {
        const response = await fetch(
          `/api/admin/projects/${encodeURIComponent(selectedProject._persistedSlug)}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              project: {
                slug: selectedProject.slug,
                name: selectedProject.name,
                stack: selectedProject.stack,
                summary: selectedProject.summary,
                description: selectedProject.description,
                outcome: selectedProject.outcome,
                metrics: selectedProject.metrics,
                highlight: selectedProject.highlight,
                image: selectedProject.image,
                imageCaption: selectedProject.imageCaption,
              },
            }),
          },
        );
        const payload = (await response.json()) as {
          message?: string;
          project?: Project;
          projects?: Project[];
        };

        if (!response.ok || !payload.project || !payload.projects) {
          setStatus(payload.message ?? "Unable to save project changes.");
          return;
        }

        replaceProjects(payload.projects);
        setSelectedSlug(payload.project.slug);
        setStatus(payload.message ?? "Project updated successfully.");
      } catch {
        setStatus("Unable to save project changes right now.");
      }
    });
  }

  function deleteProject() {
    if (!selectedProject) {
      return;
    }

    startTransition(async () => {
      setStatus("");

      try {
        const response = await fetch(
          `/api/admin/projects/${encodeURIComponent(selectedProject._persistedSlug)}`,
          {
            method: "DELETE",
          },
        );
        const payload = (await response.json()) as {
          message?: string;
          projects?: Project[];
        };

        if (!response.ok || !payload.projects) {
          setStatus(payload.message ?? "Unable to delete this project.");
          return;
        }

        replaceProjects(payload.projects);
        setStatus(payload.message ?? "Project deleted successfully.");
      } catch {
        setStatus("Unable to delete this project right now.");
      }
    });
  }

  function resetProjects() {
    startTransition(async () => {
      setStatus("");

      try {
        const response = await fetch("/api/admin/projects/reset", {
          method: "POST",
        });
        const payload = (await response.json()) as {
          message?: string;
          projects?: Project[];
        };

        if (!response.ok || !payload.projects) {
          setStatus(payload.message ?? "Unable to reset projects.");
          return;
        }

        replaceProjects(payload.projects);
        setStatus(payload.message ?? "Projects reset.");
      } catch {
        setStatus("Unable to reset projects right now.");
      }
    });
  }

  return (
    <div className="section-shell py-10 sm:py-14">
      <div className="grid gap-8 xl:grid-cols-[0.78fr_1.22fr]">
        <aside className="space-y-6">
          <div className="rounded-[2rem] border border-border bg-background/60 p-6">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
                  Admin Dashboard
                </p>
                <h1 className="mt-4 font-heading text-3xl font-semibold tracking-tight">
                  Manage portfolio projects securely
                </h1>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  Only authenticated admins can add, update, or delete project
                  content from this dashboard.
                </p>
              </div>
              <form action="/api/admin/logout" method="post">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background/75 px-4 py-2 text-sm font-semibold text-foreground transition hover:bg-background"
                >
                  <LogOut className="h-4 w-4" />
                  Log out
                </button>
              </form>
            </div>

            <div className="mt-5 flex items-center gap-2 rounded-2xl border border-emerald-500/25 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">
              <ShieldCheck className="h-4 w-4 shrink-0" />
              <p>Authenticated session active.</p>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={createProject}
                disabled={isPending}
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Plus className="h-4 w-4" />
                Add project
              </button>
              <button
                type="button"
                onClick={resetProjects}
                disabled={isPending}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-4 py-2 text-sm font-semibold text-foreground transition hover:bg-background disabled:cursor-not-allowed disabled:opacity-60"
              >
                <RefreshCcw className="h-4 w-4" />
                Reset defaults
              </button>
            </div>

            {status ? <p className="mt-4 text-sm text-accent">{status}</p> : null}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[1.5rem] border border-border bg-background/55 p-5"
              >
                <stat.icon className="h-5 w-5 text-accent" />
                <p className="mt-4 text-2xl font-semibold tracking-tight">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="rounded-[2rem] border border-border bg-background/60 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
              Project list
            </p>
            <div className="mt-4 space-y-3">
              {projects.map((project) => (
                <button
                  key={`${project._persistedSlug}-${project.slug}`}
                  type="button"
                  onClick={() => setSelectedSlug(project.slug)}
                  className={`w-full rounded-2xl border px-4 py-4 text-left transition ${
                    selectedProject?.slug === project.slug
                      ? "border-accent bg-accent/10"
                      : "border-border bg-background/55 hover:bg-background/80"
                  }`}
                >
                  <p className="font-medium text-foreground">{project.name}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {project.slug}
                  </p>
                  <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                    {project.summary}
                  </p>
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-border bg-background/60 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
              Other managed parts
            </p>
            <div className="mt-4 space-y-3 text-sm text-muted-foreground">
              <div className="rounded-2xl border border-border bg-background/55 px-4 py-3">
                Services section: {services.length} cards
              </div>
              <div className="rounded-2xl border border-border bg-background/55 px-4 py-3">
                Skills section: {skillGroups.length} groups
              </div>
              <div className="rounded-2xl border border-border bg-background/55 px-4 py-3">
                Team contact cards: {teamMembers.length} members
              </div>
              <div className="rounded-2xl border border-border bg-background/55 px-4 py-3">
                Testimonials section: {testimonials.length} entries
              </div>
            </div>
          </div>
        </aside>

        <section className="space-y-6">
          {selectedProject ? (
            <>
              <div className="rounded-[2rem] border border-border bg-background/60 p-6 sm:p-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
                      Project Editor
                    </p>
                    <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight">
                      {selectedProject.name}
                    </h2>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href={`/projects/${selectedProject.slug}`}
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-4 py-2 text-sm font-semibold text-foreground transition hover:bg-background"
                    >
                      Preview detail page
                    </Link>
                    <button
                      type="button"
                      onClick={saveProject}
                      disabled={isPending}
                      className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      <Save className="h-4 w-4" />
                      Save changes
                    </button>
                    <button
                      type="button"
                      onClick={deleteProject}
                      disabled={isPending || projects.length <= 1}
                      className="inline-flex items-center gap-2 rounded-full border border-rose-500/40 bg-rose-500/10 px-4 py-2 text-sm font-semibold text-rose-400 transition disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <Trash2 className="h-4 w-4" />
                      Delete
                    </button>
                  </div>
                </div>

                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  <label className="grid gap-2">
                    <span className="text-sm font-medium">Project name</span>
                    <input
                      value={selectedProject.name}
                      onChange={(event) => {
                        const name = event.target.value;
                        updateLocalProject(selectedProject.slug, (project) => ({
                          ...project,
                          name,
                          slug: slugify(name) || project.slug,
                        }));
                        setSelectedSlug(slugify(name) || selectedProject.slug);
                      }}
                      className="h-12 rounded-2xl border border-border bg-background/70 px-4 text-sm outline-none transition focus:border-accent"
                    />
                  </label>
                  <label className="grid gap-2">
                    <span className="text-sm font-medium">Slug</span>
                    <input
                      value={selectedProject.slug}
                      onChange={(event) => {
                        const nextSlug = slugify(event.target.value) || selectedProject.slug;
                        updateLocalProject(selectedProject.slug, (project) => ({
                          ...project,
                          slug: nextSlug,
                        }));
                        setSelectedSlug(nextSlug);
                      }}
                      className="h-12 rounded-2xl border border-border bg-background/70 px-4 text-sm outline-none transition focus:border-accent"
                    />
                  </label>
                </div>

                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  <label className="grid gap-2">
                    <span className="text-sm font-medium">Highlight</span>
                    <input
                      value={selectedProject.highlight}
                      onChange={(event) =>
                        updateLocalProject(selectedProject.slug, (project) => ({
                          ...project,
                          highlight: event.target.value,
                        }))
                      }
                      className="h-12 rounded-2xl border border-border bg-background/70 px-4 text-sm outline-none transition focus:border-accent"
                    />
                  </label>
                  <label className="grid gap-2">
                    <span className="text-sm font-medium">Stack (comma separated)</span>
                    <input
                      value={selectedProject.stack.join(", ")}
                      onChange={(event) =>
                        updateLocalProject(selectedProject.slug, (project) => ({
                          ...project,
                          stack: fromCommaList(event.target.value),
                        }))
                      }
                      className="h-12 rounded-2xl border border-border bg-background/70 px-4 text-sm outline-none transition focus:border-accent"
                    />
                  </label>
                </div>

                <div className="mt-5 space-y-5">
                  <label className="grid gap-2">
                    <span className="text-sm font-medium">Summary</span>
                    <textarea
                      rows={3}
                      value={selectedProject.summary}
                      onChange={(event) =>
                        updateLocalProject(selectedProject.slug, (project) => ({
                          ...project,
                          summary: event.target.value,
                        }))
                      }
                      className="rounded-2xl border border-border bg-background/70 px-4 py-3 text-sm outline-none transition focus:border-accent"
                    />
                  </label>
                  <label className="grid gap-2">
                    <span className="text-sm font-medium">Description</span>
                    <textarea
                      rows={4}
                      value={selectedProject.description}
                      onChange={(event) =>
                        updateLocalProject(selectedProject.slug, (project) => ({
                          ...project,
                          description: event.target.value,
                        }))
                      }
                      className="rounded-2xl border border-border bg-background/70 px-4 py-3 text-sm outline-none transition focus:border-accent"
                    />
                  </label>
                  <div className="grid gap-5 lg:grid-cols-2">
                    <label className="grid gap-2">
                      <span className="text-sm font-medium">
                        Outcome points (one per line)
                      </span>
                      <textarea
                        rows={5}
                        value={toLines(selectedProject.outcome)}
                        onChange={(event) =>
                          updateLocalProject(selectedProject.slug, (project) => ({
                            ...project,
                            outcome: fromLines(event.target.value),
                          }))
                        }
                        className="rounded-2xl border border-border bg-background/70 px-4 py-3 text-sm outline-none transition focus:border-accent"
                      />
                    </label>
                    <label className="grid gap-2">
                      <span className="text-sm font-medium">
                        Metrics (one per line)
                      </span>
                      <textarea
                        rows={5}
                        value={toLines(selectedProject.metrics)}
                        onChange={(event) =>
                          updateLocalProject(selectedProject.slug, (project) => ({
                            ...project,
                            metrics: fromLines(event.target.value),
                          }))
                        }
                        className="rounded-2xl border border-border bg-background/70 px-4 py-3 text-sm outline-none transition focus:border-accent"
                      />
                    </label>
                  </div>
                </div>
              </div>

              <div className="grid gap-6 xl:grid-cols-[0.92fr_1.08fr]">
                <div className="rounded-[2rem] border border-border bg-background/60 p-6">
                  <div className="flex items-center gap-3">
                    <ImagePlus className="h-5 w-5 text-accent" />
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
                      Image management
                    </p>
                  </div>
                  <label className="mt-5 grid gap-2">
                    <span className="text-sm font-medium">Image path or URL</span>
                    <input
                      value={selectedProject.image}
                      onChange={(event) =>
                        updateLocalProject(selectedProject.slug, (project) => ({
                          ...project,
                          image: event.target.value,
                        }))
                      }
                      className="h-12 rounded-2xl border border-border bg-background/70 px-4 text-sm outline-none transition focus:border-accent"
                    />
                  </label>
                  <label className="mt-5 grid gap-2">
                    <span className="text-sm font-medium">Upload image</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(event) => {
                        const file = event.target.files?.[0];

                        if (!file) {
                          return;
                        }

                        const reader = new FileReader();
                        reader.onload = () => {
                          const result = typeof reader.result === "string" ? reader.result : "";
                          updateLocalProject(selectedProject.slug, (project) => ({
                            ...project,
                            image: result,
                          }));
                        };
                        reader.readAsDataURL(file);
                      }}
                      className="rounded-2xl border border-border bg-background/70 px-4 py-3 text-sm outline-none transition file:mr-4 file:rounded-full file:border-0 file:bg-accent/12 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-accent"
                    />
                  </label>
                  <label className="mt-5 grid gap-2">
                    <span className="text-sm font-medium">Image caption</span>
                    <textarea
                      rows={4}
                      value={selectedProject.imageCaption}
                      onChange={(event) =>
                        updateLocalProject(selectedProject.slug, (project) => ({
                          ...project,
                          imageCaption: event.target.value,
                        }))
                      }
                      className="rounded-2xl border border-border bg-background/70 px-4 py-3 text-sm outline-none transition focus:border-accent"
                    />
                  </label>
                </div>

                <div className="rounded-[2rem] border border-border bg-background/60 p-6">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
                        Live preview
                      </p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Review the card before saving it to the public site.
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      <Save className="h-3.5 w-3.5" />
                      {isPending ? "Saving..." : "Ready to save"}
                    </span>
                  </div>

                  <div className="mt-6 overflow-hidden rounded-[1.75rem] border border-border bg-background/70">
                    <div className="relative aspect-[16/10] overflow-hidden border-b border-border">
                      <Image
                        src={selectedProject.image}
                        alt={selectedProject.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1280px) 100vw, 50vw"
                      />
                    </div>
                    <div className="p-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                        {selectedProject.highlight}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {selectedProject.stack.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                      <h3 className="mt-5 font-heading text-2xl font-semibold tracking-tight">
                        {selectedProject.name}
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-muted-foreground">
                        {selectedProject.summary}
                      </p>
                      <p className="mt-4 rounded-2xl border border-border bg-background/60 px-4 py-3 text-sm leading-6 text-muted-foreground">
                        {selectedProject.imageCaption}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : null}
        </section>
      </div>
    </div>
  );
}
