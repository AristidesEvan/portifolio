"use client";

import { useState } from "react";

const fills = [
  { name: "Papel", value: "var(--cream)" },
  { name: "Tinta", value: "var(--ink)" },
  { name: "Terracota", value: "var(--terracotta)" },
  { name: "Oliva", value: "var(--olive)" },
];

export function FigmaFrame() {
  const [padding, setPadding] = useState(20);
  const [gap, setGap] = useState(12);
  const [fill, setFill] = useState(fills[0].value);
  const ink = fill === "var(--cream)" ? "var(--ink)" : "var(--cream)";

  return (
    <div className="lab-panel border border-line bg-cream-dark/30 p-5 sm:p-8">
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="min-w-0 font-display text-2xl">Frame com auto-layout</h2>
        <span className="text-[11px] uppercase tracking-[0.22em] text-ink-muted">
          03
        </span>
      </div>
      <p className="mt-2 max-w-md text-sm text-ink-muted">
        Padding, gap, fill. O gesto do Figma — só que aqui, no papel do site,
        sem arquivo .fig.
      </p>

      <div className="relative mt-8 min-h-[220px] overflow-hidden border border-dashed border-ink/20 bg-[repeating-conic-gradient(var(--cream-dark)_0%_25%,transparent_0%_50%)] bg-[length:16px_16px] p-4 sm:p-6">
        <p className="pointer-events-none absolute left-2 top-1 font-mono text-[10px] tracking-wide text-ink-muted">
          Frame 1 · {padding} · {gap}
        </p>
        <div
          className="mt-4"
          style={{
            background: fill,
            color: ink,
            padding: `${padding}px`,
            display: "flex",
            flexDirection: "column",
            gap: `${gap}px`,
            boxShadow: "0 18px 40px -28px var(--shadow)",
          }}
        >
          <p className="font-display text-xl leading-tight">A peça cabe.</p>
          <p className="text-sm leading-relaxed opacity-80">
            Três blocos empilhados. Muda o padding e o gap — o ritmo muda com
            eles.
          </p>
          <span
            className="inline-flex w-fit rounded-full px-3 py-1 text-[11px] tracking-wide"
            style={{
              background: ink,
              color: fill,
            }}
          >
            Auto-layout
          </span>
        </div>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="text-[11px] uppercase tracking-[0.18em] text-ink-muted">
            Padding {padding}
          </span>
          <input
            type="range"
            min={8}
            max={48}
            value={padding}
            onChange={(event) => setPadding(Number(event.target.value))}
            className="mt-3 w-full"
          />
        </label>
        <label className="block text-sm">
          <span className="text-[11px] uppercase tracking-[0.18em] text-ink-muted">
            Gap {gap}
          </span>
          <input
            type="range"
            min={4}
            max={32}
            value={gap}
            onChange={(event) => setGap(Number(event.target.value))}
            className="mt-3 w-full"
          />
        </label>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {fills.map((swatch) => (
          <button
            key={swatch.name}
            type="button"
            onClick={() => setFill(swatch.value)}
            className="flex items-center gap-2 rounded-full border border-line px-3 py-1.5 text-xs hover:border-terracotta"
            aria-pressed={fill === swatch.value}
          >
            <span
              className="size-3 rounded-full border border-line"
              style={{ background: swatch.value }}
            />
            {swatch.name}
          </button>
        ))}
      </div>
    </div>
  );
}
