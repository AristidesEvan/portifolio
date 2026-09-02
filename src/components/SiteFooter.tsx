import Link from "next/link";
import { Container } from "@/components/Container";
import { LocalClock } from "@/components/LocalClock";
import { site } from "@/content/site";

const links = [
  { href: site.whatsapp, label: "WhatsApp" },
  { href: site.linkedin, label: "LinkedIn" },
  { href: site.github, label: "GitHub" },
  { href: `mailto:${site.email}`, label: "E-mail" },
  { href: "/colofao", label: "Colofão" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-cream-dark/35">
      <Container className="flex flex-col gap-8 py-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-xl italic">{site.name}</p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-muted">
            Nasceu em {site.bornIn}. Mora em {site.location}. Design,
            comunicação e sistemas.
          </p>
          <p className="mt-3 text-xs text-ink-muted">
            <LocalClock />
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:items-end">
          <div className="flex flex-wrap gap-5 text-sm">
            {links.map((link) =>
              link.href.startsWith("/") ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className="link-underline text-ink-muted hover:text-ink"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="link-underline text-ink-muted hover:text-ink"
                  {...(link.href.startsWith("http")
                    ? { target: "_blank", rel: "noreferrer" }
                    : {})}
                >
                  {link.label}
                </a>
              ),
            )}
          </div>
          <p className="text-xs tracking-wide text-ink-muted">
            Feito em Next.js 16 — Ctrl+K para o índice.
          </p>
        </div>
      </Container>
    </footer>
  );
}
