import Image from "next/image";
import type { ProjectCover } from "@/content/site";

const covers: Record<ProjectCover, { bg: string; label: string }> = {
  campaign: { bg: "bg-ink text-paper", label: "Peça" },
  institution: { bg: "bg-olive text-paper", label: "Instituição" },
  study: { bg: "bg-terracotta text-paper", label: "EaD" },
  lab: { bg: "bg-cream-dark text-ink", label: "Lab" },
  system: { bg: "bg-ink text-paper", label: "Sistema" },
};

export function CoverHoverCue({ label = "Ver case →" }: { label?: string }) {
  return (
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-olive/80 via-ink/20 to-transparent opacity-0 transition-opacity duration-[350ms] ease-out group-hover:opacity-100">
      <span className="absolute bottom-4 left-4 font-display text-sm italic text-paper">
        {label}
      </span>
    </div>
  );
}

export function ProjectCoverArt({
  cover,
  number,
  image,
  alt,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: {
  cover: ProjectCover;
  number: string;
  image?: string;
  alt?: string;
  sizes?: string;
}) {
  const tone = covers[cover];

  if (image) {
    return (
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-cream-dark">
        <Image
          src={image}
          alt={alt ?? ""}
          fill
          sizes={sizes}
          className="object-cover object-top transition-transform duration-[350ms] ease-out motion-safe:group-hover:scale-[1.04]"
        />
        <span className="absolute left-4 top-4 rounded-full bg-cream/90 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-ink">
          {tone.label}
        </span>
      </div>
    );
  }

  return (
    <div
      className={`relative aspect-[16/10] w-full overflow-hidden ${tone.bg}`}
      aria-hidden
    >
      <span className="absolute left-5 top-5 text-[11px] uppercase tracking-[0.28em] opacity-70">
        {tone.label}
      </span>
      <span className="font-display absolute bottom-3 right-5 text-6xl italic leading-none opacity-90 transition-transform duration-[350ms] ease-out motion-safe:group-hover:scale-[1.04] sm:text-7xl">
        {number}
      </span>
      {cover === "campaign" ? (
        <div className="absolute inset-x-10 top-1/2 h-px -translate-y-1/2 bg-terracotta" />
      ) : null}
      {cover === "lab" ? (
        <>
          <div className="absolute left-8 top-1/2 size-20 -translate-y-1/2 rounded-full border border-ink/20" />
          <div className="absolute left-16 top-1/2 size-20 -translate-y-1/2 rounded-full border border-ink/20" />
        </>
      ) : null}
    </div>
  );
}
