import Link from "next/link";
import { CoverHoverCue, ProjectCoverArt } from "@/components/ProjectCoverArt";
import type { Project } from "@/content/site";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/trabalho/${project.slug}`}
      className="work-card group block cursor-pointer"
    >
      <div className="work-card-media">
        <ProjectCoverArt
          cover={project.cover}
          number={project.number}
          image={project.image}
          alt={project.gallery?.[0]?.alt ?? project.title}
        />
        <CoverHoverCue />
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-2xl tracking-tight transition-colors duration-[350ms] ease-out group-hover:text-terracotta">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-ink-muted">{project.subtitle}</p>
        </div>
        <span className="text-xs tabular-nums text-ink-muted">{project.year}</span>
      </div>
      <p className="mt-3 max-w-prose text-sm leading-relaxed text-ink-muted">
        {project.summary}
      </p>
      <p className="mt-4 text-[11px] uppercase tracking-[0.22em] text-terracotta">
        {project.tags.join(" · ")}
      </p>
    </Link>
  );
}
