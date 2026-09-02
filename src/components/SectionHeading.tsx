export function SectionHeading({
  eyebrow,
  title,
  action,
}: {
  eyebrow: string;
  title: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="mb-10 flex flex-col gap-4 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-ink-muted">
          {eyebrow}
        </p>
        <h2 className="mt-3 font-display text-3xl tracking-tight sm:text-4xl">
          {title}
        </h2>
      </div>
      {action}
    </div>
  );
}
