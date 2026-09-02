"use client";

import { useState } from "react";

const palettes = [
  {
    name: "Papel",
    note: "Revista, ofício, conversa longa.",
    bg: "#F4EFE6",
    ink: "#1A1714",
    accent: "#C45C3E",
  },
  {
    name: "Lousa",
    note: "Sala, giz, silêncio.",
    bg: "#2A3328",
    ink: "#F4EFE6",
    accent: "#D4A574",
  },
  {
    name: "Pátio",
    note: "Pátio, sol, intervalo.",
    bg: "#E7D7B8",
    ink: "#3F4F3A",
    accent: "#C45C3E",
  },
] as const;

export function Moodboard() {
  const [index, setIndex] = useState(0);
  const palette = palettes[index];

  return (
    <div className="lab-panel border border-line bg-cream/40 p-5 sm:p-8">
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="font-display text-2xl">Moodboard vivo</h2>
        <span className="text-[11px] uppercase tracking-[0.22em] text-ink-muted">
          04
        </span>
      </div>
      <p className="mt-2 max-w-md text-sm text-ink-muted">
        Três peles. Clique numa paleta e veja o cartaz mudar de humor.
      </p>

      <div
        className="mt-8 flex min-h-[220px] flex-col justify-between p-7 transition-colors duration-500"
        style={{ background: palette.bg, color: palette.ink }}
      >
        <p
          className="text-[11px] uppercase tracking-[0.28em]"
          style={{ opacity: 0.7 }}
        >
          {palette.name} · estudo
        </p>
        <p
          className="font-display text-3xl leading-[1.05] sm:text-4xl"
          style={{ fontStyle: "italic" }}
        >
          Clareza
          <br />
          com calor.
        </p>
        <div className="flex items-center justify-between">
          <span className="text-sm">{palette.note}</span>
          <span
            className="size-4 rounded-full"
            style={{ background: palette.accent }}
          />
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {palettes.map((item, itemIndex) => (
          <button
            key={item.name}
            type="button"
            onClick={() => setIndex(itemIndex)}
            className={`flex items-center gap-2 rounded-full border px-3 py-2 text-sm ${
              itemIndex === index
                ? "border-ink bg-ink text-cream"
                : "border-ink/15"
            }`}
            aria-pressed={itemIndex === index}
          >
            <span
              className="flex size-4 overflow-hidden rounded-full"
              aria-hidden
            >
              <span className="h-full w-1/2" style={{ background: item.bg }} />
              <span
                className="h-full w-1/2"
                style={{ background: item.accent }}
              />
            </span>
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
}
