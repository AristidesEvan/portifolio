import Link from "next/link";
import { CampaignMethod } from "@/components/CampaignMethod";
import { CampusAtmosphere } from "@/components/CampusAtmosphere";
import { ContactCta } from "@/components/ContactCta";
import { Container } from "@/components/Container";
import { DeskScene } from "@/components/DeskScene";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { MarkArcs, MarkDots, MarkGrid, MarkLines, MarkRule } from "@/components/Ornaments";
import { Principles } from "@/components/Principles";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { featuredProjects, site } from "@/content/site";

export default function HomePage() {
  const featured = featuredProjects();

  return (
    <>
      <Hero />
      <Marquee />

      <section className="relative overflow-hidden py-20 sm:py-28">
        <MarkArcs className="pointer-events-none absolute -left-20 top-6 hidden w-72 text-terracotta/20 lg:block" />
        <MarkGrid className="pointer-events-none absolute -right-4 bottom-8 hidden w-44 text-ink/[0.08] lg:block" />
        <Container className="relative grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <Reveal>
            <figure>
              <div className="media-mat print-frame">
                <DeskScene />
              </div>
              <figcaption className="mt-3 text-xs tracking-wide text-ink-muted">
                Os dois lados da mesa — peça e ferramenta.
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-ink-muted">
              Ofício
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-tight sm:text-4xl">
              Dois lados da mesma mesa.
            </h2>
            <MarkRule className="mt-6 w-36 text-terracotta" />
            <p className="mt-6 text-lg leading-relaxed text-ink">
              {site.aboutLead}
            </p>
            <Link
              href="/sobre"
              className="mt-6 inline-block text-sm text-terracotta link-underline"
            >
              Continuar o sobre
            </Link>
          </Reveal>
        </Container>
      </section>

      <section className="relative overflow-hidden border-t border-line py-20 sm:py-28">
        <MarkDots className="pointer-events-none absolute left-8 top-12 hidden w-48 text-ink/[0.07] lg:block" />
        <MarkLines className="pointer-events-none absolute right-10 top-24 hidden w-64 text-terracotta/20 lg:block" />
        <CampusAtmosphere />
        <Container className="relative">
          <SectionHeading
            eyebrow="Seleção"
            title="O que está no ar."
            action={
              <Link
                href="/trabalho"
                className="text-sm text-ink-muted link-underline hover:text-ink"
              >
                Arquivo completo
              </Link>
            }
          />
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {featured.map((project, index) => (
              <Reveal key={project.slug} delay={index * 0.06}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CampaignMethod />

      <section className="relative overflow-hidden border-t border-line py-20 sm:py-28">
        <MarkArcs className="pointer-events-none absolute -right-24 -top-10 hidden w-80 text-olive/15 lg:block" />
        <MarkDots className="pointer-events-none absolute bottom-8 left-10 hidden w-40 text-ink/[0.06] lg:block" />
        <Container className="relative">
          <SectionHeading
            eyebrow="Critério"
            title="Três critérios que eu não negocio."
          />
          <Principles />
        </Container>
      </section>

      <ContactCta />
    </>
  );
}
