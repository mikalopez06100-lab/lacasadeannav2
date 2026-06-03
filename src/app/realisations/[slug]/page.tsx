import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectPageView } from "@/components/ProjectPageView";
import { getAdjacentProjects, getProject, projects } from "@/lib/data";
import { site } from "@/lib/site";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = getProject(params.slug);
  if (!project) return {};
  const title = `${project.title} ${project.titleItalic} — ${site.name}`;
  return {
    title,
    description: project.lede,
    alternates: { canonical: `/realisations/${project.slug}` },
    openGraph: {
      title,
      description: project.lede,
      images: [{ url: project.image, alt: project.alt }],
    },
  };
}

export default function ProjectPage({ params }: Props) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(params.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: site.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Réalisations",
        item: `${site.url}/#realisations`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `${project.title} ${project.titleItalic}`,
        item: `${site.url}/realisations/${project.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProjectPageView project={project} prev={prev} next={next} />
    </>
  );
}
