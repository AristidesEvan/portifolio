import type { Metadata } from "next";
import { CampusAtmosphere } from "@/components/CampusAtmosphere";
import { Container } from "@/components/Container";
import { MarkArcs } from "@/components/Ornaments";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/content/site";

export const metadata: Metadata = {
  title: "Trabalho",
  description:
    "CEAD, portal da PUC Goiás, automações internas e o laboratório.",
};

export default function TrabalhoPage() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <CampusAtmosphere />
      <MarkArcs className="pointer-events-none absolute -left-16 top-10 hidden w-56 text-terracotta/20 lg:block" />
      <Container className="relative">
        <Reveal>
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-ink-muted">
            Arquivo
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.2rem,6vw,4.4rem)] leading-[0.98] tracking-tight">
            O que eu coloquei no ar.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted">
            Site e Instagram da CEAD, o portal da PUC, sistemas que tiram o
            braçal da equipe. Exercício de curso fica no GitHub, não na capa.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-14 sm:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.05}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
