import Image from "next/image";

type InstagramEmbedProps = {
  handle: string;
  url: string;
};

// TODO: substituir por posts reais selecionados
const PLACEHOLDER_POSTS = [
  { src: "/work/cead.jpg", position: "top" },
  { src: "/work/cead.jpg", position: "left top" },
  { src: "/work/cead.jpg", position: "right top" },
  { src: "/work/pucgoias.jpg", position: "top" },
  { src: "/work/pucgoias.jpg", position: "left top" },
  { src: "/work/pucgoias.jpg", position: "right top" },
  { src: "/work/automacao.jpg", position: "top" },
  { src: "/work/automacao.jpg", position: "center top" },
  { src: "/work/automacao.jpg", position: "right top" },
] as const;

export function InstagramEmbed({ handle, url }: InstagramEmbedProps) {
  return (
    <div className="instagram-card">
      <p className="instagram-card-label">
        Perfil que criei do zero — @{handle}
      </p>
      <div className="instagram-card-frame">
        <figure className="desk mx-auto">
          <div className="desk-paper" aria-hidden />
          <div className="phone">
            <div className="phone-bezel" aria-hidden>
              <span className="phone-speaker" />
              <span className="phone-lens" />
            </div>
            <div className="phone-screen">
              <div className="flex items-center justify-between border-b border-black/8 px-3 py-2.5">
                <p className="truncate text-[11px] font-medium tracking-wide text-ink">
                  @{handle}
                </p>
                <span
                  className="size-2 shrink-0 rounded-sm bg-terracotta/70"
                  aria-hidden
                />
              </div>
              <div
                className="grid grid-cols-3 gap-px bg-black/10"
                aria-hidden
              >
                {PLACEHOLDER_POSTS.map((post, index) => (
                  <div
                    key={`${post.src}-${post.position}-${index}`}
                    className="ig-post"
                  >
                    <Image
                      src={post.src}
                      alt=""
                      fill
                      sizes="110px"
                      className="object-cover"
                      style={{ objectPosition: post.position }}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="phone-home" aria-hidden />
          </div>
          <figcaption className="desk-caption">
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="font-display text-base italic text-ink link-underline"
            >
              @{handle}
            </a>
            <span className="text-xs tracking-wide text-ink-muted">
              Uma seleção do que publiquei por lá
            </span>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
