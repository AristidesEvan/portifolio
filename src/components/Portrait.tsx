import Image from "next/image";
import retrato from "../../public/retrato.jpg";
import { site } from "@/content/site";

export function Portrait({
  priority = false,
  sizes,
}: {
  priority?: boolean;
  sizes: string;
}) {
  return (
    <Image
      src={retrato}
      alt={site.portraitAlt}
      fill
      priority={priority}
      sizes={sizes}
      className="object-cover object-top"
    />
  );
}
