import { useId, useState, type ReactNode } from "react";

export interface GalleryImage {
  readonly id: string;
  readonly alt: string;
  /** The picture itself (an <img> or any visual); alt is applied by the gallery. */
  readonly render: (size: "large" | "thumb") => ReactNode;
}

export interface ImageGalleryProps {
  readonly label: string;
  readonly images: readonly GalleryImage[];
  readonly thumbLabel?: (image: GalleryImage, index: number, total: number) => string;
}

/**
 * Large picture with a row of thumbnails underneath (product photos). Thumbnails are
 * buttons named after their picture and position; the chosen one has aria-current.
 */
export function ImageGallery({
  label,
  images,
  thumbLabel = (image, index, total) => `${index + 1} / ${total}, ${image.alt}`,
}: ImageGalleryProps) {
  const id = useId();
  const [index, setIndex] = useState(0);
  const current = images[index]!;

  return (
    <section aria-label={label} className="space-y-2">
      <figure
        id={id}
        role="img"
        aria-label={current.alt}
        className="aspect-square overflow-hidden rounded-xl bg-slate-100"
      >
        {current.render("large")}
      </figure>
      {/* Visible name of the picture; the figure already carries it for screen readers. */}
      <p aria-hidden="true" className="text-center text-xs text-slate-500">
        {current.alt}
      </p>
      <div className="grid grid-cols-4 gap-2">
        {images.map((image, imageIndex) => (
          <button
            key={image.id}
            type="button"
            aria-label={thumbLabel(image, imageIndex, images.length)}
            aria-current={imageIndex === index ? "true" : undefined}
            aria-controls={id}
            onClick={() => setIndex(imageIndex)}
            className="aspect-square overflow-hidden rounded-lg bg-slate-100 ring-offset-2 hover:opacity-90 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none aria-[current=true]:ring-2 aria-[current=true]:ring-slate-900"
          >
            <span aria-hidden="true">{image.render("thumb")}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
