"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/content/site";

export function SiteNav() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-3 text-[12px] tracking-wide text-ink-muted sm:gap-8 sm:text-[13px]">
      {site.nav.map((item) => {
        const active =
          pathname === item.href || pathname.startsWith(`${item.href}/`);
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`link-underline hover:text-ink ${active ? "text-ink" : ""}`}
            aria-current={active ? "page" : undefined}
          >
            {item.short !== item.label ? (
              <>
                <span className="sm:hidden">{item.short}</span>
                <span className="hidden sm:inline">{item.label}</span>
              </>
            ) : (
              item.label
            )}
          </Link>
        );
      })}
      <a
        href={site.whatsapp}
        target="_blank"
        rel="noreferrer"
        className="btn btn-ghost hidden !px-3 !py-1.5 text-[12px] sm:inline-flex"
      >
        Conversar
      </a>
    </nav>
  );
}
