import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Colofão",
  description:
    "Como este site foi feito: tipo, cor, peso e o atalho Ctrl+K. Ofício visível.",
};

export default function ColofaoPage() {
  return (
    <section className="py-16 sm:py-24">
      <Container className="max-w-[820px]">
        <Reveal>
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-ink-muted">
            Colofão
          </p>
          <h1 className="mt-4 font-display text-[clamp(2.2rem,6vw,4.2rem)] leading-[0.98] tracking-tight">
            Como esta peça foi feita.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-ink-muted">
            Em tipografia, o colofão é a nota no fim do livro: papel, tipo,
            oficina. Aqui é o mesmo gesto: quem lê o portfólio também precisa
            ver critério técnico.
          </p>
        </Reveal>

        <div className="mt-16 space-y-12">
          {site.colophon.map((item) => (
            <section key={item.title} className="border-t border-line pt-8">
              <h2 className="font-display text-2xl italic">{item.title}</h2>
              <p className="mt-3 text-base leading-relaxed text-ink-muted">
                {item.body}
              </p>
            </section>
          ))}
        </div>

        <p className="mt-16 text-sm text-ink-muted">
          Next.js 16 · React 19 · TypeScript · Tailwind v4 · App Router.
          Atalho: Ctrl+K.
        </p>
      </Container>
    </section>
  );
}
