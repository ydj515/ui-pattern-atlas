import { useEffect, useRef, useState, type PointerEvent } from "react";

export interface SignaturePadProps {
  readonly label: string;
  /** Called with a PNG data URL after each stroke, or null when cleared. */
  readonly onChange: (dataUrl: string | null) => void;
  readonly clearLabel?: string;
  readonly hint?: string;
  readonly height?: number;
}

/**
 * Canvas for signing with a finger, pen or mouse. Strokes follow the pointer with
 * pointer capture, so they do not break at the edges, and the canvas is sized for the
 * device pixel ratio so lines stay sharp. Offer a typed alternative next to it for
 * people who cannot draw.
 */
export function SignaturePad({
  label,
  onChange,
  clearLabel = "지우기",
  hint,
  height = 140,
}: SignaturePadProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const drawingRef = useRef(false);
  const [empty, setEmpty] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;
    const ratio = window.devicePixelRatio || 1;
    canvas.width = canvas.offsetWidth * ratio;
    canvas.height = height * ratio;
    context.scale(ratio, ratio);
    context.lineWidth = 2.5;
    context.lineCap = "round";
    context.lineJoin = "round";
    context.strokeStyle = "#0f172a";
  }, [height]);

  function point(event: PointerEvent<HTMLCanvasElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    return [event.clientX - rect.left, event.clientY - rect.top] as const;
  }

  function start(event: PointerEvent<HTMLCanvasElement>) {
    const context = event.currentTarget.getContext("2d");
    if (!context) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    drawingRef.current = true;
    context.beginPath();
    context.moveTo(...point(event));
  }

  function move(event: PointerEvent<HTMLCanvasElement>) {
    if (!drawingRef.current) return;
    const context = event.currentTarget.getContext("2d");
    context?.lineTo(...point(event));
    context?.stroke();
  }

  function end(event: PointerEvent<HTMLCanvasElement>) {
    if (!drawingRef.current) return;
    drawingRef.current = false;
    setEmpty(false);
    onChange(event.currentTarget.toDataURL("image/png"));
  }

  function clear() {
    const canvas = canvasRef.current;
    canvas?.getContext("2d")?.clearRect(0, 0, canvas.width, canvas.height);
    setEmpty(true);
    onChange(null);
  }

  return (
    <div>
      <div className="flex items-baseline justify-between">
        <span className="text-sm font-medium text-slate-800">{label}</span>
        <button
          type="button"
          onClick={clear}
          disabled={empty}
          className="text-xs font-medium text-slate-600 underline underline-offset-2 disabled:no-underline disabled:opacity-40"
        >
          {clearLabel}
        </button>
      </div>
      <canvas
        ref={canvasRef}
        role="img"
        aria-label={empty ? `${label}, 비어 있음` : `${label}, 서명함`}
        onPointerDown={start}
        onPointerMove={move}
        onPointerUp={end}
        onPointerCancel={end}
        className="mt-1.5 block w-full touch-none rounded-xl border border-dashed border-slate-300 bg-white"
        style={{ height }}
      />
      {hint ? <p className="mt-1.5 text-xs text-slate-500">{hint}</p> : null}
    </div>
  );
}
