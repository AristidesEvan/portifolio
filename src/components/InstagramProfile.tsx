import Image from "next/image";
import type { Project } from "@/content/site";
import { instagramHandle } from "@/content/site";

export function InstagramProfile({ project }: { project: Project }) {
  const profile = project.instagramProfile;
  const url = project.instagram;
  if (!profile || !url) return null;

  const handle = instagramHandle(url);

  return (
    <div className="max-w-[42rem]">
      <article className="ig-profile print-frame">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
          <div className="ig-avatar relative mx-auto sm:mx-0">
            <Image
              src={profile.avatar}
              alt={`Foto de perfil de @${handle}`}
              fill
              sizes="128px"
              className="object-cover"
            />
          </div>

          <div className="min-w-0 flex-1 text-center sm:text-left">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-terracotta">
              @{handle}
            </p>
            <h3 className="mt-2 font-display text-2xl tracking-tight sm:text-3xl">
              {profile.name}
            </h3>

            <dl className="ig-stats">
              {profile.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="font-display text-2xl tabular-nums tracking-tight sm:text-[1.75rem]">
                      {stat.value}
                    </span>
                    <span className="mt-1 block text-[11px] uppercase tracking-[0.18em] text-ink-muted">
                      {stat.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-6 space-y-1 text-sm leading-relaxed text-ink sm:text-[0.95rem]">
              {profile.bio.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>

            <p className="mt-4 text-xs leading-relaxed text-ink-muted">
              {profile.location}
            </p>

            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ink mt-7"
            >
              Abrir @{handle}
            </a>
          </div>
        </div>
      </article>

      {profile.around?.length ? (
        <aside className="ig-around">
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-ink-muted">
            Em volta
          </p>
          <ul className="mt-4 grid gap-4 sm:grid-cols-2">
            {profile.around.map((item) => (
              <li key={item.caption}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group block"
                >
                  <div className="ig-shot relative">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, 360px"
                      className="object-cover object-top"
                    />
                  </div>
                  <p className="mt-2 text-xs tracking-wide text-ink-muted transition-colors duration-200 group-hover:text-terracotta">
                    {item.caption} →
                  </p>
                </a>
              </li>
            ))}
          </ul>
        </aside>
      ) : null}
    </div>
  );
}
