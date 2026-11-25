import "@/entities/pattern/ui/thumbnail-motion.css";

import type { ComponentType } from "react";

import { useNearViewport } from "@/shared/lib/useNearViewport";

/**
 * Card frame for a looping thumbnail. The thumbnail is mounted only while the card is
 * within about one screen of the viewport, so a long catalog does not run hundreds of
 * off-screen animations; the frame keeps its size, so nothing shifts when it mounts.
 */
export function ThumbnailFrame({ Thumbnail }: { readonly Thumbnail?: ComponentType }) {
  const [ref, near] = useNearViewport<HTMLDivElement>();

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="grid aspect-[3/2] place-items-center rounded-surface bg-field transition-colors group-hover:bg-field-hover motion-reduce:transition-none"
    >
      {near && Thumbnail ? <Thumbnail /> : null}
    </div>
  );
}
