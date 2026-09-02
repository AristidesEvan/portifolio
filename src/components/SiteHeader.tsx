import Link from "next/link";
import { Container } from "@/components/Container";
import { CommandPalette } from "@/components/CommandPalette";
import { SiteNav } from "@/components/SiteNav";
import { ThemeToggle } from "@/components/ThemeToggle";
import { site } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-cream/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link
          href="/"
          className="font-display text-[17px] tracking-tight text-ink"
        >
          <span className="sm:hidden">{site.initials}</span>
          <span className="hidden sm:inline">{site.name}</span>
        </Link>
        <div className="flex items-center gap-3 sm:gap-6">
          <ThemeToggle />
          <CommandPalette />
          <SiteNav />
        </div>
      </Container>
    </header>
  );
}
