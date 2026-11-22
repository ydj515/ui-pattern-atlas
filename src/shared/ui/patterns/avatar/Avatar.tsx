import { useState } from "react";

export interface AvatarProps {
  readonly name: string;
  readonly src?: string;
  readonly size?: number;
}

const colors = [
  "bg-amber-100 text-amber-800",
  "bg-sky-100 text-sky-800",
  "bg-emerald-100 text-emerald-800",
  "bg-rose-100 text-rose-800",
] as const;

/**
 * Picture of a person, or their initial on a colour picked from the name when there is no
 * picture or it fails to load. The image's alt is the name; the initial is hidden from
 * screen readers and the name is given once as the element's label.
 */
export function Avatar({ name, src, size = 40 }: AvatarProps) {
  const [failedSrc, setFailedSrc] = useState<string | null>(null);
  const showImage = src !== undefined && failedSrc !== src;
  const color =
    colors[[...name].reduce((sum, char) => sum + char.charCodeAt(0), 0) % colors.length];

  return (
    <span
      className="inline-grid shrink-0 overflow-hidden rounded-full"
      style={{ width: size, height: size }}
    >
      {showImage ? (
        <img
          src={src}
          alt={name}
          onError={() => setFailedSrc(src)}
          className="size-full object-cover"
        />
      ) : (
        <span
          role="img"
          aria-label={name}
          className={`grid size-full place-items-center font-semibold ${color}`}
          style={{ fontSize: size * 0.4 }}
        >
          <span aria-hidden="true">{[...name][0]}</span>
        </span>
      )}
    </span>
  );
}
