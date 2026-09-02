import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CampusAtmosphere } from "@/components/CampusAtmosphere";
import { Container } from "@/components/Container";
import { InstagramProfile } from "@/components/InstagramProfile";
import { NextCaseCard } from "@/components/NextCaseCard";
import { ProjectCoverArt } from "@/components/ProjectCoverArt";
import { getProject, instagramHandle, projects } from "@/content/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  return {
    title: project.title,
    description: project.summary,
    alternates: {
      canonical:
        project.slug === "laboratorio" ? "/laboratorio" : `/trabalho/${project.slug}`,
    },
  };
}

const sections = [
  { key: "problem", label: "Problema" },
  { key: "direction", label: "Direção" },
  { key: "execution", label: "Execução" },
  { key: "result", label: "Resultado" },
] as const;

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((item) => item.slug === slug);
  const next = projects[(currentIndex + 1) % projects.length];

  const campusWork =
    project.slug === "cead" ||
    project.slug === "puc-goias" ||
    project.slug === "automacoes";
  const igHandle = project.instagram
    ? instagramHandle(project.instagram)
    : "";

  return (
    <article className="pb-8 sm:pb-10">
      <header className="relative overflow-hidden border-b border-line">
        {campusWork ? <CampusAtmosphere /> : null}
        <Container className="relative grid gap-10 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:py-20">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-ink-muted">
              {project.number} · {project.year}
            </p>
            <h1 className="mt-4 font-display text-[clamp(2.2rem,6vw,4.6rem)] leading-[0.98] tracking-tight">
              {project.title}
            </h1>
            <p className="mt-5 max-w-lg text-lg text-ink-muted">
              {project.subtitle}
            </p>
            <p className="mt-6 text-[11px] uppercase tracking-[0.22em] text-terracotta">
              {project.tags.join(" · ")}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {project.href ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-ink"
                >
                  {project.hrefLabel ?? "Ver no ar"}
                </a>
              ) : null}
              {project.instagram ? (
                <a
                  href={project.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-ghost"
                >
                  @{igHandle}
                </a>
              ) : null}
            </div>
          </div>
          <div className="media-mat">
            <ProjectCoverArt
              cover={project.cover}
              number={project.number}
              image={project.image}
              alt={project.gallery?.[0]?.alt ?? project.title}
            />
          </div>
        </Container>
      </header>

      <Container className="max-w-[820px] py-16">
        <p className="font-display text-2xl leading-snug tracking-tight sm:text-3xl">
          {project.summary}
        </p>
      </Container>

      {project.instagram && project.instagramProfile ? (
        <section className="relative overflow-hidden border-y border-line bg-cream-dark/50">
          <div
            className="pointer-events-none absolute -left-20 top-10 size-64 rounded-full bg-terracotta/10 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-16 bottom-0 size-72 rounded-full bg-olive/10 blur-3xl"
            aria-hidden
          />
          <Container className="relative py-16 lg:py-20">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-terracotta">
              Canal
            </p>
            <h2 className="mt-3 max-w-xl font-display text-3xl tracking-tight sm:text-4xl">
              O perfil que subi do zero.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-muted">
              Nome, tom, números — o canal da coordenação, como peça. Um retrato
              do @cead.pucgoias.
            </p>
            <div className="mt-10">
              <InstagramProfile project={project} />
            </div>
          </Container>
        </section>
      ) : null}

      <Container className="max-w-[820px] pb-8 pt-16">
        <div className="space-y-14">
          {sections.map((section) => (
            <section key={section.key}>
              <h2 className="text-[11px] font-medium uppercase tracking-[0.28em] text-terracotta">
                {section.label}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink">
                {project[section.key]}
              </p>
            </section>
          ))}
        </div>

        {project.slug === "laboratorio" ? (
          <Link
            href="/laboratorio"
            className="btn btn-ink mt-14"
          >
            Abrir o laboratório
          </Link>
        ) : null}
      </Container>

      <Container className="max-w-[820px] pb-2">
        <NextCaseCard project={next} />
      </Container>
    </article>
  );
}
