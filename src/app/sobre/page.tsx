import type { Metadata } from "next";
import Image from "next/image";
import { CampusAtmosphere } from "@/components/CampusAtmosphere";
import { ContactCta } from "@/components/ContactCta";
import { Container } from "@/components/Container";
import { MarkPuc } from "@/components/Ornaments";
import { Portrait } from "@/components/Portrait";
import { Reveal } from "@/components/Reveal";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Sobre",
  description: `${site.aboutLead} Design, comunicação e sistemas.`,
};

export default function SobrePage() {
  return (
    <>
      <section className="py-16 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-16">
          <Reveal>
            <figure>
              <div className="media-mat print-frame mx-auto max-w-[420px] lg:mx-0">
                <div className="relative aspect-[2/3] overflow-hidden">
                  <Portrait
                    priority
                    sizes="(max-width: 1024px) 80vw, 420px"
                  />
                </div>
              </div>
              <p className="mt-4 text-xs tracking-wide text-ink-muted">
                {site.nameFull} · nasceu em {site.bornIn} · mora em {site.location}
              </p>
            </figure>
          </Reveal>

          <div>
            <Reveal>
              <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-ink-muted">
                Sobre
              </p>
              <h1 className="mt-4 font-display text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.02] tracking-tight">
                Ofício com o pé no chão.
              </h1>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-8 text-lg leading-relaxed">{site.aboutLead}</p>
              <div className="relative mt-5 overflow-hidden">
                <MarkPuc className="pointer-events-none absolute -right-12 -top-6 w-72 text-ink opacity-[0.05] sm:-right-8 sm:w-80" />
                {site.aboutBody.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 24)}
                    className="relative mt-5 text-base leading-relaxed text-ink-muted first:mt-0"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-ink"
                >
                  WhatsApp
                </a>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-ghost"
                >
                  LinkedIn
                </a>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-ghost"
                >
                  GitHub
                </a>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden border-t border-line py-20">
        <CampusAtmosphere />
        <Container className="relative grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-16">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-ink-muted">
              Percurso
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-tight">
              Linha do tempo.
            </h2>
            <ol className="mt-10">
              {site.timeline.map((item) => (
                <li
                  key={`${item.period}-${item.role}`}
                  className="grid gap-2 border-t border-line py-8 sm:grid-cols-[9rem_1fr] sm:gap-10"
                >
                  <p className="text-xs tabular-nums tracking-wide text-terracotta">
                    {item.period}
                  </p>
                  <div>
                    <p className="font-display text-2xl">{item.role}</p>
                    <p className="mt-1 text-sm text-ink">{item.place}</p>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-muted">
                      {item.note}
                    </p>
                    {"quote" in item ? (
                      <blockquote className="mt-4 max-w-xl">
                        <p className="font-display text-[0.82rem] italic leading-relaxed text-ink-muted">
                          {item.quote}
                        </p>
                        <footer className="mt-1.5 text-[11px] tracking-wide text-ink-muted">
                          — {item.quoteBy}
                        </footer>
                      </blockquote>
                    ) : null}
                    {"noteAfter" in item ? (
                      <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-muted">
                        {item.noteAfter}
                      </p>
                    ) : null}
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-4 border-t border-line pt-8">
              <p className="text-[11px] uppercase tracking-[0.22em] text-ink-muted">
                Formação
              </p>
              <ul className="mt-6 space-y-6">
                {site.degrees.map((degree) => (
                  <li key={degree.title} className="border-t border-line pt-5">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-terracotta">
                      {degree.kind} · {degree.period}
                    </p>
                    <p className="mt-2 font-display text-2xl">{degree.title}</p>
                    <p className="mt-1 text-sm text-ink-muted">{degree.place}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-10 text-[11px] uppercase tracking-[0.22em] text-ink-muted">
                Também
              </p>
              <ul className="mt-4 space-y-2 text-sm text-ink-muted">
                {site.courses.map((course) => (
                  <li key={course}>{course}</li>
                ))}
              </ul>
              <p className="mt-6 max-w-xl text-sm leading-relaxed text-ink-muted">
                Os primeiros exercícios (calculadora, conversor, pizzaria B7Web)
                estão no{" "}
                <a
                  href={site.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-ink link-underline"
                >
                  GitHub
                </a>
                . Não são a capa — são o começo.
              </p>
            </div>
          </div>
          <figure className="media-mat print-frame lg:sticky lg:top-24">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/art/captacao-mesa.jpg"
                alt="Mesa de trabalho com papel, lápis e café"
                fill
                sizes="(max-width: 1024px) 100vw, 380px"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 px-1 text-xs tracking-wide text-ink-muted">
              Papel na mesa — o ofício também é isso.
            </figcaption>
          </figure>
        </Container>
      </section>

      <section className="border-t border-line py-20">
        <Container>
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-ink-muted">
            Competência
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-tight">
            Quatro capítulos, um ofício.
          </h2>
          <div className="mt-10 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {site.skills.map((column, index) => (
              <Reveal key={column.title} delay={index * 0.06}>
                <h3 className="font-display text-2xl italic">{column.title}</h3>
                <p className="mt-5 border-t border-line pt-4 text-sm leading-relaxed text-ink-muted">
                  {column.body}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <ContactCta />
    </>
  );
}
