import { useId, useRef, type KeyboardEvent, type PointerEvent } from "react";

export interface Crop {
  /** Offset of the image from the frame centre, in px at frame size. */
  readonly x: number;
  readonly y: number;
  /** 1 fills the frame; larger zooms in. */
  readonly zoom: number;
}

export interface ImageCropperProps {
  readonly src: string;
  readonly value: Crop;
  readonly onChange: (crop: Crop) => void;
  /** Frame size in px. */
  readonly size?: number;
  readonly maxZoom?: number;
  readonly frameLabel?: string;
  readonly zoomLabel?: string;
}

const STEP = 8;

/** Keeps the image covering the whole frame. */
function clamp(crop: Crop, size: number): Crop {
  const limit = (size * crop.zoom - size) / 2;
  return {
    zoom: crop.zoom,
    x: Math.max(-limit, Math.min(limit, crop.x)),
    y: Math.max(-limit, Math.min(limit, crop.y)),
  };
}

/** Image transform for a crop, scaled for a preview of another size. */
export function cropStyle(crop: Crop, frameSize: number, previewSize = frameSize) {
  const ratio = previewSize / frameSize;
  return { transform: `translate(${crop.x * ratio}px, ${crop.y * ratio}px) scale(${crop.zoom})` };
}

/**
 * Square frame with a round mask for fitting a profile photo. Drag the photo to move
 * it, use the slider to zoom. The frame is focusable and arrow keys move the photo,
 * so it works without a pointer. The photo always covers the frame.
 */
export function ImageCropper({
  src,
  value,
  onChange,
  size = 200,
  maxZoom = 3,
  frameLabel = "사진 위치. 화살표 키로 옮겨요",
  zoomLabel = "확대",
}: ImageCropperProps) {
  const id = useId();
  const dragRef = useRef<{ x: number; y: number; crop: Crop } | null>(null);

  function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
    event.currentTarget.setPointerCapture(event.pointerId);
    dragRef.current = { x: event.clientX, y: event.clientY, crop: value };
  }

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const drag = dragRef.current;
    if (!drag) return;
    onChange(
      clamp(
        {
          ...drag.crop,
          x: drag.crop.x + event.clientX - drag.x,
          y: drag.crop.y + event.clientY - drag.y,
        },
        size,
      ),
    );
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const moves: Record<string, [number, number]> = {
      ArrowLeft: [-STEP, 0],
      ArrowRight: [STEP, 0],
      ArrowUp: [0, -STEP],
      ArrowDown: [0, STEP],
    };
    const move = moves[event.key];
    if (!move) return;
    event.preventDefault();
    onChange(clamp({ ...value, x: value.x + move[0], y: value.y + move[1] }, size));
  }

  return (
    <div className="space-y-3">
      <div
        role="group"
        tabIndex={0}
        aria-label={frameLabel}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={() => {
          dragRef.current = null;
        }}
        onKeyDown={handleKeyDown}
        className="relative cursor-grab touch-none overflow-hidden rounded-xl bg-slate-200 select-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none active:cursor-grabbing"
        style={{ width: size, height: size }}
      >
        <img
          src={src}
          alt=""
          draggable={false}
          className="absolute inset-0 size-full object-cover"
          style={cropStyle(value, size)}
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-full shadow-[0_0_0_999px_rgba(15,23,42,0.55)]"
        />
      </div>
      <div className="flex items-center gap-3" style={{ width: size }}>
        <label htmlFor={id} className="shrink-0 text-xs text-slate-600">
          {zoomLabel}
        </label>
        <input
          id={id}
          type="range"
          min={1}
          max={maxZoom}
          step={0.1}
          value={value.zoom}
          onChange={(event) =>
            onChange(clamp({ ...value, zoom: Number(event.target.value) }, size))
          }
          className="w-full accent-blue-600"
        />
      </div>
    </div>
  );
}
