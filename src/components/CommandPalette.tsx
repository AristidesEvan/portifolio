"use client";

import { useRouter } from "next/navigation";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { site } from "@/content/site";

const items = [
  { href: "/", label: "Início", hint: "Home" },
  { href: "/trabalho", label: "Trabalho", hint: "Arquivo" },
  { href: "/laboratorio", label: "Laboratório", hint: "Ofício em movimento" },
  { href: "/sobre", label: "Sobre", hint: "Bio e linha do tempo" },
  { href: "/colofao", label: "Colofão", hint: "Como este site foi feito" },
  { href: site.whatsapp, label: "WhatsApp", hint: site.phone },
  { href: `mailto:${site.email}`, label: "Escrever e-mail", hint: site.email },
  { href: site.linkedin, label: "LinkedIn", hint: "Perfil" },
  { href: site.github, label: "GitHub", hint: "Código" },
] as const;

function isModK(event: KeyboardEvent) {
  return (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k";
}

function subscribeMac() {
  return () => {};
}

function getIsMac() {
  return /Mac|iPhone|iPad/.test(navigator.platform);
}

function focusables(root: HTMLElement) {
  return [
    ...root.querySelectorAll<HTMLElement>(
      'input, button, [href], textarea, select, [tabindex]:not([tabindex="-1"])',
    ),
  ].filter((node) => !node.hasAttribute("disabled"));
}

export function CommandPalette() {
  const router = useRouter();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState(false);
  const isMac = useSyncExternalStore(subscribeMac, getIsMac, () => false);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter(
      (item) =>
        item.label.toLowerCase().includes(q) ||
        item.hint.toLowerCase().includes(q),
    );
  }, [query]);

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setCopied(false);
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (isModK(event)) {
        event.preventDefault();
        setOpen((value) => !value);
        return;
      }
      if (event.key === "Escape" && open) {
        event.preventDefault();
        close();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    const trigger = triggerRef.current;
    document.body.style.overflow = "hidden";
    const id = window.setTimeout(() => inputRef.current?.focus(), 10);
    return () => {
      document.body.style.overflow = previous;
      window.clearTimeout(id);
      trigger?.focus();
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const dialog = dialogRef.current;
    if (!dialog) return;

    function onKey(event: KeyboardEvent) {
      if (event.key !== "Tab" || !dialog) return;
      const nodes = focusables(dialog);
      if (nodes.length === 0) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    dialog.addEventListener("keydown", onKey);
    return () => dialog.removeEventListener("keydown", onKey);
  }, [open, results.length]);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  }

  function go(href: string) {
    if (href.startsWith("mailto:")) {
      void copyEmail();
      return;
    }
    close();
    if (href.startsWith("http")) {
      window.open(href, "_blank", "noreferrer");
      return;
    }
    router.push(href);
  }

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 rounded-full border border-line px-2.5 py-1 text-[11px] tracking-wide text-ink-muted hover:border-terracotta hover:text-ink"
        aria-label="Abrir índice do site"
        aria-expanded={open}
        aria-haspopup="dialog"
      >
        Índice
        <kbd className="hidden rounded bg-ink-muted/15 px-1.5 py-0.5 font-sans text-[10px] md:inline">
          {isMac ? "⌘K" : "Ctrl K"}
        </kbd>
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-[70] flex items-start justify-center bg-black/45 px-4 pt-[18vh] backdrop-blur-[2px]"
          onClick={close}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label="Índice do site"
            className="w-full max-w-lg overflow-hidden border border-line bg-cream p-3 shadow-[0_28px_80px_-28px_var(--shadow)]"
            onClick={(event) => event.stopPropagation()}
          >
            <input
              ref={inputRef}
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Ir para… trabalho, lab, WhatsApp"
              className="w-full border-b border-line bg-transparent px-3 py-3 text-base outline-none placeholder:text-ink-muted"
              onKeyDown={(event) => {
                if (event.key === "Enter" && results[0]) go(results[0].href);
              }}
            />
            <ul className="max-h-72 overflow-auto py-2">
              {results.map((item) => (
                <li key={item.href}>
                  <button
                    type="button"
                    onClick={() => go(item.href)}
                    className="flex w-full items-baseline justify-between gap-4 px-3 py-2.5 text-left transition-colors hover:bg-cream-dark"
                  >
                    <span>{item.label}</span>
                    <span className="text-xs text-ink-muted">{item.hint}</span>
                  </button>
                </li>
              ))}
              {results.length === 0 ? (
                <li className="px-3 py-4 text-sm text-ink-muted">
                  Nada encontrado.
                </li>
              ) : null}
            </ul>
            {copied ? (
              <p className="px-3 pb-2 text-xs text-terracotta">E-mail copiado.</p>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
}
