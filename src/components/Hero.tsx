import Link from "next/link";
import { Container } from "@/components/Container";
import { MarkArcs, MarkDots, MarkLines } from "@/components/Ornaments";
import { Portrait } from "@/components/Portrait";
import { Reveal } from "@/components/Reveal";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div
        className="pointer-events-none absolute -right-24 top-10 hidden size-[28rem] rounded-full bg-terracotta/8 blur-3xl lg:block"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-16 bottom-0 hidden size-72 rounded-full bg-olive/10 blur-3xl lg:block"
        aria-hidden
      />
      <MarkArcs className="pointer-events-none absolute -right-8 top-4 hidden w-64 text-ink/[0.07] lg:block" />
      <MarkDots className="pointer-events-none absolute left-6 top-24 hidden w-56 text-ink/[0.07] lg:block" />
      <MarkLines className="pointer-events-none absolute bottom-8 left-1/3 hidden w-72 text-terracotta/15 lg:block" />
      <Container className="grid gap-12 py-14 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16 lg:py-24">
        <div>
          <Reveal>
            <blockquote className="max-w-xl">
              <p className="font-display text-[0.82rem] italic leading-relaxed text-ink-muted">
                {site.heroEpigraph}
              </p>
              <footer className="mt-1.5 text-[11px] tracking-wide text-ink-muted">
                — {site.heroEpigraphBy}
              </footer>
            </blockquote>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="mt-8 font-display text-[clamp(2.4rem,7vw,5.4rem)] leading-[0.95] tracking-tight">
              {site.heroTitle.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p className="mt-4 text-[11px] tracking-wide text-ink-muted">
              — {site.name}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
              {site.heroLead}
            </p>
          </Reveal>
          <Reveal delay={0.14}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="btn btn-ink"
              >
                Conversar no WhatsApp
              </a>
              <Link
                href="/trabalho"
                className="link-underline text-sm text-ink-muted hover:text-ink"
              >
                Ver o trabalho
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal
          delay={0.08}
          className="relative mx-auto w-full max-w-[380px] lg:mx-0 lg:justify-self-end"
        >
          <div className="absolute -left-3 top-10 hidden h-[calc(100%-5.5rem)] w-px bg-terracotta sm:block" />
          <figure>
            <div className="media-mat print-frame">
              <div className="relative aspect-[2/3] overflow-hidden">
                <Portrait
                  priority
                  sizes="(max-width: 1024px) 70vw, 380px"
                />
              </div>
            </div>
            <figcaption className="mt-4 flex items-baseline justify-between gap-4 text-xs tracking-wide text-ink-muted">
              <span className="font-display text-base italic text-ink">
                {site.name}
              </span>
              <span>
                {site.bornIn} · {site.location}
              </span>
            </figcaption>
          </figure>
        </Reveal>
      </Container>
    </section>
  );
}
