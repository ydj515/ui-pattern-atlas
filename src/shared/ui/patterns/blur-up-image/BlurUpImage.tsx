import { useEffect, useRef, useState } from "react";

export interface BlurUpImageProps {
  /** Full image. Leave undefined while its URL is still being fetched. */
  readonly src?: string;
  /** A tiny version of the same image (about 16–32 px wide, often inlined as a data URL). */
  readonly placeholderSrc: string;
  readonly alt: string;
  readonly width: number;
  readonly height: number;
  readonly className?: string;
}

/**
 * Image that starts as a blurred tiny preview and fades to the full image once loaded.
 *
 * The box keeps the final aspect ratio from the start, so nothing jumps when the image
 * arrives. The preview is decorative; only the real image carries the alt text.
 */
export function BlurUpImage({
  src,
  placeholderSrc,
  alt,
  width,
  height,
  className = "",
}: BlurUpImageProps) {
  const [loadedSrc, setLoadedSrc] = useState<string | null>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const loaded = src !== undefined && loadedSrc === src;

  useEffect(() => {
    // A cached image can finish before React attaches onLoad.
    if (src && imgRef.current?.complete && imgRef.current.naturalWidth > 0) setLoadedSrc(src);
  }, [src]);

  return (
    <div
      className={`relative overflow-hidden bg-slate-200 ${className}`}
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      <img
        src={placeholderSrc}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 size-full scale-110 object-cover blur-lg"
      />
      {src ? (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          width={width}
          height={height}
          decoding="async"
          onLoad={() => setLoadedSrc(src)}
          className={`absolute inset-0 size-full object-cover transition-opacity duration-500 motion-reduce:transition-none ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      ) : null}
    </div>
  );
}
