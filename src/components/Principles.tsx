import { Reveal } from "@/components/Reveal";
import { site } from "@/content/site";

export function Principles() {
  return (
    <div className="grid gap-10 sm:grid-cols-3">
      {site.principles.map((item, index) => (
        <Reveal key={item.title} delay={index * 0.05}>
          <article className="h-full border border-line bg-cream-dark/30 p-6 sm:p-7">
            <p className="font-display text-3xl italic text-terracotta">
              0{index + 1}
            </p>
            <h3 className="mt-4 font-display text-2xl">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              {item.body}
            </p>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
