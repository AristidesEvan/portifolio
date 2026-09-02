import Link from "next/link";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <Container className="py-28">
      <p className="text-[11px] uppercase tracking-[0.28em] text-ink-muted">
        404
      </p>
      <h1 className="mt-4 font-display text-5xl tracking-tight">
        Essa página não existe.
      </h1>
      <Link
        href="/"
        className="mt-8 inline-block text-sm text-terracotta link-underline"
      >
        Voltar ao início
      </Link>
    </Container>
  );
}
