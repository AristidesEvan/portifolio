"use client";

import { useEffect, useRef, useState } from "react";
import { MarkDesk } from "@/components/Ornaments";

export function DeskScene() {
  const ref = useRef<HTMLDivElement>(null);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setDrawn(true);
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="flex aspect-[4/3] items-center justify-center bg-cream"
    >
      <MarkDesk drawn={drawn} className="h-[82%] w-[90%]" />
    </div>
  );
}
