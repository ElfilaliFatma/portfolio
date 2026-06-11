import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetailClient } from "@/components/project-detail-client";
import { company } from "@/lib/site-data";
import { getProjectBySlug } from "@/lib/project-store";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  return {
    title: project.name,
    description: project.summary,
    openGraph: {
      title: `${project.name} | ${company.name}`,
      description: project.summary,
      images: [project.image],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} | ${company.name}`,
      description: project.summary,
      images: [project.image],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailClient project={project} />;
}
