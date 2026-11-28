// The keyframes ship with the first CSS on purpose: loaded lazily, they competed with the
// web fonts for bandwidth and left first-screen thumbnails blank for seconds on slow phones.
import "@/entities/pattern/ui/thumbnail-motion.css";

import { useEffect, useState, type ComponentType } from "react";

import type { ThumbnailLoader } from "@/entities/pattern/model/pattern";
import { useNearViewport } from "@/shared/lib/useNearViewport";

const loaded = new Map<ThumbnailLoader, ComponentType>();
const pending = new Map<ThumbnailLoader, Promise<ComponentType>>();

/**
 * Loads a thumbnail once per loader. A failed load is forgotten so the next time the card
 * comes near it tries again.
 */
function loadThumbnail(load: ThumbnailLoader): Promise<ComponentType> {
  const ready = loaded.get(load);
  if (ready) return Promise.resolve(ready);
  let request = pending.get(load);
  if (!request) {
    request = load()
      .then((Thumbnail) => {
        loaded.set(load, Thumbnail);
        return Thumbnail;
      })
      .finally(() => {
        pending.delete(load);
      });
    pending.set(load, request);
  }
  return request;
}

/**
 * Card frame for a looping thumbnail. The thumbnail code is fetched when the card comes
 * within about one screen of the viewport, and the thumbnail stays mounted
 * only while it is that close, so a long catalog neither downloads nor runs hundreds of
 * off-screen loops. The frame keeps its size, so nothing shifts when the thumbnail appears.
 * It has no corners of its own: the card around it (`catalogCardClassName`) clips it.
 */
export function ThumbnailFrame({ load }: { readonly load?: ThumbnailLoader }) {
  const [ref, near] = useNearViewport<HTMLDivElement>();
  const [shown, setShown] = useState(() =>
    load ? { load, Thumbnail: loaded.get(load) } : undefined,
  );
  const Thumbnail = shown && shown.load === load ? shown.Thumbnail : undefined;

  useEffect(() => {
    if (!near || !load) return;
    let active = true;
    loadThumbnail(load).then(
      (Loaded) => {
        if (active) setShown({ load, Thumbnail: Loaded });
      },
      () => {
        // Leave the frame empty; it retries when the card comes near again.
      },
    );
    return () => {
      active = false;
    };
  }, [near, load]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="grid aspect-[3/2] place-items-center bg-field transition-colors group-hover:bg-field-hover motion-reduce:transition-none"
    >
      {near && Thumbnail ? <Thumbnail /> : null}
    </div>
  );
}
