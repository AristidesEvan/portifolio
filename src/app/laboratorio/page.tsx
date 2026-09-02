import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { FigmaFrame } from "@/components/lab/FigmaFrame";
import { HeadlineComposer } from "@/components/lab/HeadlineComposer";
import { Moodboard } from "@/components/lab/Moodboard";
import { SqlConsole } from "@/components/lab/SqlConsole";

export const metadata: Metadata = {
  title: "Laboratório",
  description:
    "O ofício em movimento: tipografia, SQL e layout em CSS — peças que eu construí.",
  alternates: { canonical: "/laboratorio" },
};

export default function LaboratorioPage() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal>
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-ink-muted">
            Laboratório
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.2rem,6vw,4.4rem)] leading-[0.98] tracking-tight">
            O ofício em movimento. Cada peça aqui eu construí — não é efeito
            emprestado.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted">
            Tipografia, SQL, layout — em CSS puro e um pouco de estado. Nada de
            biblioteca pesada fazendo o trabalho por mim; se está rápido, é
            porque eu escrevi assim.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <Reveal className="lg:col-span-2">
            <HeadlineComposer />
          </Reveal>
          <Reveal delay={0.06} className="lg:col-span-2">
            <SqlConsole />
          </Reveal>
          <Reveal delay={0.1}>
            <FigmaFrame />
          </Reveal>
          <Reveal delay={0.12}>
            <Moodboard />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
