"use client";

import { useLayoutEffect, useSyncExternalStore } from "react";

export type SiteTheme = "papel" | "lousa";

const STORAGE_KEY = "theme";
const THEME_EVENT = "site-theme";
const LOUSA_COLOR = "#2A3328";
const PAPEL_COLOR = "#F4EFE6";

function applyTheme(theme: SiteTheme) {
  const root = document.documentElement;
  if (theme === "lousa") {
    root.setAttribute("data-theme", "lousa");
  } else {
    root.removeAttribute("data-theme");
  }
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", theme === "lousa" ? LOUSA_COLOR : PAPEL_COLOR);
}

function subscribe(onStoreChange: () => void) {
  window.addEventListener(THEME_EVENT, onStoreChange);
  window.addEventListener("storage", onStoreChange);
  return () => {
    window.removeEventListener(THEME_EVENT, onStoreChange);
    window.removeEventListener("storage", onStoreChange);
  };
}

function getSnapshot(): SiteTheme {
  return document.documentElement.getAttribute("data-theme") === "lousa"
    ? "lousa"
    : "papel";
}

function getServerSnapshot(): SiteTheme {
  return "papel";
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const dark = theme === "lousa";

  function toggle() {
    const next: SiteTheme = dark ? "papel" : "lousa";
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* private mode */
    }
    applyTheme(next);
    window.dispatchEvent(new Event(THEME_EVENT));
  }

  useLayoutEffect(() => {
    applyTheme(getSnapshot());
  }, []);

  return (
    <button
      type="button"
      onClick={toggle}
      className="inline-flex size-8 items-center justify-center rounded-full border border-line text-ink-muted hover:border-terracotta hover:text-ink"
      aria-label={dark ? "Ativar modo papel" : "Ativar modo lousa"}
      aria-pressed={dark}
      title={dark ? "Papel" : "Lousa"}
    >
      {dark ? (
        <svg viewBox="0 0 20 20" className="size-4" fill="none" aria-hidden>
          <circle cx="10" cy="10" r="3.2" stroke="currentColor" strokeWidth="1.3" />
          <path
            d="M10 2.5v1.6M10 15.9v1.6M2.5 10h1.6M15.9 10h1.6M4.6 4.6l1.1 1.1M14.3 14.3l1.1 1.1M4.6 15.4l1.1-1.1M14.3 5.7l1.1-1.1"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
        </svg>
      ) : (
        <svg viewBox="0 0 20 20" className="size-4" fill="none" aria-hidden>
          <path
            d="M11.6 3.2A6.4 6.4 0 1 0 16.8 12 5.1 5.1 0 0 1 11.6 3.2Z"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}
