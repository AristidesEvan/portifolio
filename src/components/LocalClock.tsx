"use client";

import { useSyncExternalStore } from "react";

function formatTime() {
  return new Intl.DateTimeFormat("pt-BR", {
    timeZone: "America/Sao_Paulo",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date());
}

function subscribe(onStoreChange: () => void) {
  const id = window.setInterval(onStoreChange, 30_000);
  return () => window.clearInterval(id);
}

export function LocalClock() {
  const time = useSyncExternalStore(subscribe, formatTime, () => "");

  return (
    <span className="inline-block min-h-[1.25em] min-w-[9.5rem] tabular-nums">
      {time ? `${time} em Goiânia` : "\u00a0"}
    </span>
  );
}
