type MarkProps = {
  className?: string;
};

export function MarkArcs({ className = "" }: MarkProps) {
  return (
    <svg
      viewBox="0 0 240 240"
      fill="none"
      className={className}
      aria-hidden
    >
      <circle cx="120" cy="120" r="108" stroke="currentColor" strokeWidth="0.8" />
      <circle cx="120" cy="120" r="76" stroke="currentColor" strokeWidth="0.8" />
      <circle cx="120" cy="120" r="44" stroke="currentColor" strokeWidth="0.8" />
      <circle cx="120" cy="120" r="3.5" fill="currentColor" />
    </svg>
  );
}

export function MarkGrid({ className = "" }: MarkProps) {
  const cells = Array.from({ length: 36 }, (_, index) => index);

  return (
    <svg
      viewBox="0 0 180 180"
      fill="none"
      className={className}
      aria-hidden
    >
      {cells.map((cell) => {
        const x = (cell % 6) * 30 + 15;
        const y = Math.floor(cell / 6) * 30 + 15;
        return (
          <path
            key={cell}
            d={`M${x - 4} ${y}h8M${x} ${y - 4}v8`}
            stroke="currentColor"
            strokeWidth="0.8"
          />
        );
      })}
    </svg>
  );
}

export function MarkSeal({ className = "" }: MarkProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      className={className}
      aria-hidden
    >
      <circle cx="100" cy="100" r="94" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="100" cy="100" r="82" stroke="currentColor" strokeWidth="0.6" />
      <path
        d="M46 118V86c0-4 3-8 8-8h12c5 0 8 4 8 8v32"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M86 124V74c0-5 4-9 10-9h8c6 0 10 4 10 9v50"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M126 118V86c0-4 3-8 8-8h12c5 0 8 4 8 8v32"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path d="M40 118h120" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="100" cy="148" r="3" fill="currentColor" />
    </svg>
  );
}

export function MarkRule({ className = "" }: MarkProps) {
  return (
    <svg
      viewBox="0 0 160 12"
      fill="none"
      className={className}
      aria-hidden
    >
      <path d="M0 6h68M92 6h68" stroke="currentColor" strokeWidth="1" />
      <circle cx="80" cy="6" r="3.5" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

export function MarkDots({ className = "" }: MarkProps) {
  const dots = Array.from({ length: 48 }, (_, index) => index);

  return (
    <svg
      viewBox="0 0 200 120"
      fill="none"
      className={className}
      aria-hidden
    >
      {dots.map((dot) => {
        const x = (dot % 12) * 16 + 8;
        const y = Math.floor(dot / 12) * 16 + 8;
        return <circle key={dot} cx={x} cy={y} r="1.1" fill="currentColor" />;
      })}
    </svg>
  );
}

export function MarkLines({ className = "" }: MarkProps) {
  return (
    <svg
      viewBox="0 0 280 80"
      fill="none"
      className={className}
      aria-hidden
    >
      <path d="M0 12h280" stroke="currentColor" strokeWidth="0.6" />
      <path d="M0 40h180" stroke="currentColor" strokeWidth="0.6" />
      <path d="M40 68h240" stroke="currentColor" strokeWidth="0.6" />
    </svg>
  );
}

export function MarkPuc({ className = "" }: MarkProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      className={className}
      aria-hidden
    >
      <circle cx="100" cy="100" r="92" stroke="currentColor" strokeWidth="1" />
      <circle cx="100" cy="100" r="78" stroke="currentColor" strokeWidth="0.5" />
      <path
        d="M52 118c0-28 12-52 48-52s48 24 48 52"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path d="M68 118V92h18c10 0 16 5 16 13s-6 13-16 13H68Z" stroke="currentColor" strokeWidth="1.3" />
      <path d="M118 92v28c0 8 6 14 14 14s14-6 14-14V92" stroke="currentColor" strokeWidth="1.3" />
      <path d="M168 96c-3-3-8-5-14-5-12 0-20 8-20 21s8 21 20 21c6 0 11-2 14-5" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

export function MarkDesk({
  className = "",
  drawn = false,
}: MarkProps & { drawn?: boolean }) {
  return (
    <svg
      viewBox="0 0 400 300"
      fill="none"
      className={`desk-mark ${drawn ? "is-drawn" : ""} ${className}`}
      aria-hidden
    >
      <path
        className="draw draw-ink"
        pathLength={1}
        d="M28 186h344"
        strokeWidth="2.2"
      />
      <path
        className="draw draw-ink"
        pathLength={1}
        d="M40 186v10h320v-10"
        strokeWidth="1.1"
      />

      <path
        className="draw draw-terracotta"
        pathLength={1}
        d="M58 86h118v96H58Z"
        strokeWidth="1.3"
      />
      <path
        className="draw draw-terracotta"
        pathLength={1}
        d="M74 108h86M74 124h70M74 140h78"
        strokeWidth="0.9"
      />
      <path
        className="draw draw-terracotta"
        pathLength={1}
        d="M86 168c18-46 52-78 86-92"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        className="draw draw-terracotta"
        pathLength={1}
        d="M84 170l8 10 8-6"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        className="draw draw-olive"
        pathLength={1}
        d="M224 90h128v92H224Z"
        strokeWidth="1.3"
      />
      <path
        className="draw draw-olive"
        pathLength={1}
        d="M240 112h76M240 128h52M240 144h68"
        strokeWidth="0.9"
      />
      <path
        className="draw draw-olive"
        pathLength={1}
        d="M246 166l10 12-10 12M318 166l-10 12 10 12"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        className="desk-cursor"
        x="328"
        y="158"
        width="7"
        height="18"
        fill="var(--olive)"
      />

      <path
        className="draw draw-terracotta"
        pathLength={1}
        d="M78 204c16 20 48 22 68 2"
        strokeWidth="1.1"
      />
      <path
        className="draw draw-olive"
        pathLength={1}
        d="M254 204c16 20 48 22 68 2"
        strokeWidth="1.1"
      />
    </svg>
  );
}
