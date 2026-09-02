import Image from "next/image";
import { MarkSeal } from "@/components/Ornaments";

export function CampusAtmosphere({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden
    >
      <Image
        src="/art/campus-papel.jpg"
        alt=""
        fill
        sizes="100vw"
        className="campus-wash object-cover opacity-[0.16] mix-blend-multiply"
      />
      <MarkSeal className="absolute -right-10 -top-8 w-[22rem] text-ink/[0.09] sm:w-[28rem]" />
    </div>
  );
}
