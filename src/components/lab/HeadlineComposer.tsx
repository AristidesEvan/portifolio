"use client";

import { useState } from "react";

export function HeadlineComposer() {
  const [size, setSize] = useState(56);
  const [tracking, setTracking] = useState(-2);
  const [weight, setWeight] = useState(400);
  const [italic, setItalic] = useState(true);
  const [accent, setAccent] = useState(false);

  return (
    <div className="lab-panel border border-line bg-cream-dark/30 p-5 sm:p-8">
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="font-display text-2xl">Compositor de headline</h2>
        <span className="text-[11px] uppercase tracking-[0.22em] text-ink-muted">
          01
        </span>
      </div>
      <p className="mt-2 max-w-md text-sm text-ink-muted">
        Peso, tracking, itálico. O mesmo ofício de quem fecha um cartaz — só que
        vivo.
      </p>

      <div
        className="mt-8 flex min-h-[180px] items-center border-y border-line py-8"
        style={{
          fontFamily: "var(--font-display), Georgia, serif",
          fontSize: `clamp(1.6rem, ${size / 16}vw, ${size}px)`,
          letterSpacing: `${tracking / 100}em`,
          fontWeight: weight,
          fontStyle: italic ? "italic" : "normal",
          color: accent ? "var(--terracotta)" : "var(--ink)",
          lineHeight: 0.95,
        }}
      >
        O ofício cabe na tela.
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <label className="block text-xs uppercase tracking-[0.18em] text-ink-muted">
          Corpo · {size}
          <input
            type="range"
            min={36}
            max={88}
            value={size}
            onChange={(event) => setSize(Number(event.target.value))}
            className="mt-3 w-full"
          />
        </label>
        <label className="block text-xs uppercase tracking-[0.18em] text-ink-muted">
          Tracking · {tracking}
          <input
            type="range"
            min={-6}
            max={8}
            value={tracking}
            onChange={(event) => setTracking(Number(event.target.value))}
            className="mt-3 w-full"
          />
        </label>
        <label className="block text-xs uppercase tracking-[0.18em] text-ink-muted">
          Peso · {weight}
          <input
            type="range"
            min={300}
            max={700}
            step={50}
            value={weight}
            onChange={(event) => setWeight(Number(event.target.value))}
            className="mt-3 w-full"
          />
        </label>
        <div className="flex items-end gap-3">
          <button
            type="button"
            onClick={() => setItalic((value) => !value)}
            className={`rounded-full border px-4 py-2 text-sm ${
              italic
                ? "border-ink bg-ink text-cream"
                : "border-ink/20 text-ink"
            }`}
            aria-pressed={italic}
          >
            Itálico
          </button>
          <button
            type="button"
            onClick={() => setAccent((value) => !value)}
            className={`rounded-full border px-4 py-2 text-sm ${
              accent
                ? "border-terracotta bg-terracotta text-paper"
                : "border-ink/20 text-ink"
            }`}
            aria-pressed={accent}
          >
            Acento
          </button>
        </div>
      </div>
    </div>
  );
}
