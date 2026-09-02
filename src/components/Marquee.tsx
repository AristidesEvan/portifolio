"use client";

import { useEffect, useRef, useState, type Ref } from "react";
import { site } from "@/content/site";

function Pillars({
  hidden,
  unitRef,
}: {
  hidden?: boolean;
  unitRef?: Ref<HTMLDivElement>;
}) {
  return (
    <div
      ref={unitRef}
      className="flex shrink-0 items-center gap-10 pr-10"
      aria-hidden={hidden || undefined}
    >
      {site.pillars.map((item) => (
        <span key={item} className="flex items-center gap-10">
          {item}
          <span className="text-terracotta" aria-hidden>
            ·
          </span>
        </span>
      ))}
    </div>
  );
}

export function Marquee() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const unitRef = useRef<HTMLDivElement>(null);
  const [copies, setCopies] = useState(4);

  useEffect(() => {
    const wrap = wrapRef.current;
    const unit = unitRef.current;
    if (!wrap || !unit) return;

    const measure = () => {
      const unitWidth = unit.getBoundingClientRect().width;
      if (unitWidth < 1) return;
      setCopies(Math.max(2, Math.ceil(wrap.clientWidth / unitWidth) + 1));
    };

    const observer = new ResizeObserver(measure);
    observer.observe(wrap);
    observer.observe(unit);
    return () => observer.disconnect();
  }, []);

  const sequence = Array.from({ length: copies }, (_, index) => index);

  return (
    <div
      ref={wrapRef}
      className="marquee-wrap overflow-hidden border-b border-line py-4"
    >
      <div
        className="marquee-track flex w-max text-[11px] uppercase tracking-[0.32em] text-ink-muted"
        style={{ animationDuration: `${copies * 22}s` }}
      >
        {sequence.map((index) => (
          <Pillars
            key={`a-${index}`}
            unitRef={index === 0 ? unitRef : undefined}
            hidden={index > 0}
          />
        ))}
        {sequence.map((index) => (
          <Pillars key={`b-${index}`} hidden />
        ))}
      </div>
    </div>
  );
}
