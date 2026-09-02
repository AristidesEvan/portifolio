import { Container } from "@/components/Container";
import { MarkGrid } from "@/components/Ornaments";
import { Reveal } from "@/components/Reveal";
import { site } from "@/content/site";

export function ContactCta() {
  return (
    <section className="relative overflow-hidden border-t border-line bg-cream-dark/40 py-20 sm:py-28">
      <div
        className="pointer-events-none absolute -right-24 bottom-0 size-80 rounded-full bg-terracotta/8 blur-3xl"
        aria-hidden
      />
      <MarkGrid className="pointer-events-none absolute -left-6 top-10 hidden w-40 text-ink/[0.07] lg:block" />
      <Container className="relative">
        <Reveal>
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-ink-muted">
            Próximo
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-[clamp(2rem,6vw,4.2rem)] leading-[1.02] tracking-tight">
            Se o próximo trabalho couber nesta mesa — peça e ferramenta — vamos
            conversar.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted">
            O caminho mais curto é o WhatsApp — resposta direta, sem
            intermediário.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ink"
            >
              WhatsApp · {site.phone}
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
