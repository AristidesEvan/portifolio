import Link from "next/link";
import { CoverHoverCue, ProjectCoverArt } from "@/components/ProjectCoverArt";
import type { Project } from "@/content/site";

export function NextCaseCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/trabalho/${project.slug}`}
      className="work-card work-card-panel group grid cursor-pointer overflow-hidden border border-line sm:grid-cols-[minmax(11rem,14rem)_1fr]"
    >
      <div className="relative overflow-hidden">
        <ProjectCoverArt
          cover={project.cover}
          number={project.number}
          image={project.image}
          alt={project.gallery?.[0]?.alt ?? project.title}
          sizes="(max-width: 640px) 100vw, 224px"
        />
        <CoverHoverCue />
      </div>
      <div className="flex flex-col justify-center px-5 py-5 sm:px-7">
        <p className="flex items-baseline justify-between gap-4 text-[11px] font-medium uppercase tracking-[0.28em] text-ink-muted">
          <span>Seguinte</span>
          <span className="tabular-nums text-terracotta">
            {project.number} →
          </span>
        </p>
        <h2 className="mt-3 font-display text-2xl tracking-tight transition-colors duration-[350ms] ease-out group-hover:text-terracotta sm:text-3xl">
          {project.title}
        </h2>
        <p className="mt-2 text-sm text-ink-muted">{project.subtitle}</p>
        <p className="mt-4 text-[11px] uppercase tracking-[0.22em] text-terracotta">
          {project.tags.join(" · ")}
        </p>
      </div>
    </Link>
  );
}
