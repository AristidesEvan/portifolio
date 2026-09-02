"use client";

import { useMemo, useState } from "react";

type Row = {
  area: "origem" | "desenho" | "codigo" | "operacao";
  ferramenta: string;
  nota: string;
};

const TABLE: Row[] = [
  {
    area: "origem",
    ferramenta: "Arduino",
    nota: "Terceiro ano, colégio militar. LED que acende porque você ligou o fio.",
  },
  {
    area: "origem",
    ferramenta: "Senac",
    nota: "Aos 15. Informática básica com internet.",
  },
  {
    area: "desenho",
    ferramenta: "Figma",
    nota: "Frame, auto-layout, o que a pessoa vai ver.",
  },
  {
    area: "desenho",
    ferramenta: "Canva",
    nota: "Quando a peça precisa sair hoje.",
  },
  {
    area: "codigo",
    ferramenta: "PHP",
    nota: "Sites que ainda precisam de um servidor de verdade.",
  },
  {
    area: "codigo",
    ferramenta: "SQL",
    nota: "A pergunta certa para a tabela certa.",
  },
  {
    area: "codigo",
    ferramenta: "Git",
    nota: "Histórico. Sem drama de arquivo final-final-v3.",
  },
  {
    area: "operacao",
    ferramenta: "Linux",
    nota: "O site só existe se o servidor acorda.",
  },
  {
    area: "operacao",
    ferramenta: "Docker",
    nota: "O suficiente para subir o que precisa. Sem inflar.",
  },
];

const PRESETS = [
  {
    sql: "SELECT * FROM competencias",
    short: "todos",
    long: "SELECT *",
  },
  {
    sql: "SELECT * FROM competencias WHERE area = 'desenho'",
    short: "desenho",
    long: "SELECT * WHERE area = 'desenho'",
  },
  {
    sql: "SELECT * FROM competencias WHERE area = 'codigo'",
    short: "codigo",
    long: "SELECT * WHERE area = 'codigo'",
  },
  {
    sql: "SELECT * FROM competencias WHERE area = 'origem'",
    short: "origem",
    long: "SELECT * WHERE area = 'origem'",
  },
  {
    sql: "SELECT * FROM competencias WHERE area = 'operacao'",
    short: "operacao",
    long: "SELECT * WHERE area = 'operacao'",
  },
] as const;

function fold(value: string) {
  return value.normalize("NFD").replace(/\p{M}/gu, "");
}

function runQuery(sql: string): { rows: Row[]; error?: string } {
  const q = fold(sql.trim().replace(/;+\s*$/, "")).toLowerCase();
  if (!q) return { rows: [], error: "Escreve um SELECT. Ou escolhe um dos de cima." };
  if (!q.startsWith("select")) {
    return {
      rows: [],
      error: "Por aqui só SELECT. INSERT fica para a vida real.",
    };
  }
  if (!q.includes("from competencias")) {
    return {
      rows: [],
      error: "A tabela se chama competencias. Sem JOIN, sem drama.",
    };
  }

  const where = q.match(/where\s+area\s*=\s*'([^']+)'/);
  if (where) {
    const area = where[1] as Row["area"];
    const rows = TABLE.filter((row) => row.area === area);
    if (rows.length === 0) {
      return {
        rows: [],
        error: `Nenhuma linha com area = '${where[1]}'. Tenta origem, desenho, codigo ou operacao.`,
      };
    }
    return { rows };
  }

  if (q.includes("where")) {
    return {
      rows: [],
      error: "O WHERE que eu entendo: area = 'desenho' (ou origem, codigo, operacao).",
    };
  }

  return { rows: TABLE };
}

export function SqlConsole() {
  const [sql, setSql] = useState<string>(PRESETS[0].sql);
  const result = useMemo(() => runQuery(sql), [sql]);

  return (
    <div className="lab-panel border border-line bg-cream-dark/30 p-5 sm:p-8">
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="font-display text-2xl">SELECT o ofício</h2>
        <span className="text-[11px] uppercase tracking-[0.22em] text-ink-muted">
          02
        </span>
      </div>
      <p className="mt-2 max-w-lg text-sm text-ink-muted">
        Banco de mentira, pergunta de verdade. SQL que eu uso no trabalho — aqui
        para olhar as próprias ferramentas, sem inflar currículo.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {PRESETS.map((preset) => (
          <button
            key={preset.sql}
            type="button"
            onClick={() => setSql(preset.sql)}
            className={`rounded-full border px-3 py-1.5 text-left text-[11px] tracking-wide hover:border-terracotta hover:text-terracotta ${
              sql === preset.sql
                ? "border-terracotta text-terracotta"
                : "border-line"
            }`}
            aria-pressed={sql === preset.sql}
          >
            <span className="lg:hidden">{preset.short}</span>
            <span className="hidden lg:inline">{preset.long}</span>
          </button>
        ))}
      </div>

      <label className="mt-6 block">
        <span className="sr-only">Consulta SQL</span>
        <textarea
          value={sql}
          onChange={(event) => setSql(event.target.value)}
          spellCheck={false}
          rows={3}
          className="w-full resize-y border border-line bg-cream px-3 py-3 font-mono text-base outline-none focus-visible:border-terracotta lg:text-sm"
        />
      </label>

      {result.error ? (
        <p className="mt-5 text-sm text-terracotta">{result.error}</p>
      ) : (
        <>
          <ul className="mt-5 divide-y divide-line lg:hidden">
            {result.rows.map((row) => (
              <li key={`${row.area}-${row.ferramenta}`} className="py-3">
                <p className="font-mono text-xs text-terracotta">{row.area}</p>
                <p className="mt-1 text-sm">{row.ferramenta}</p>
                <p className="mt-1 text-sm text-ink-muted">{row.nota}</p>
              </li>
            ))}
          </ul>
          <div className="mt-5 hidden overflow-x-auto lg:block">
            <table className="w-full min-w-[28rem] text-left text-sm">
              <thead>
                <tr className="border-b border-line text-[11px] uppercase tracking-[0.18em] text-ink-muted">
                  <th className="py-2 pr-4 font-medium">area</th>
                  <th className="py-2 pr-4 font-medium">ferramenta</th>
                  <th className="py-2 font-medium">nota</th>
                </tr>
              </thead>
              <tbody>
                {result.rows.map((row) => (
                  <tr
                    key={`${row.area}-${row.ferramenta}`}
                    className="border-b border-line/70"
                  >
                    <td className="py-3 pr-4 font-mono text-xs text-terracotta">
                      {row.area}
                    </td>
                    <td className="py-3 pr-4">{row.ferramenta}</td>
                    <td className="py-3 text-ink-muted">{row.nota}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}
