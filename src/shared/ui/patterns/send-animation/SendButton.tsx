import { useRef } from "react";

const FLY: Keyframe[] = [
  { transform: "translate(0, 0) rotate(0deg)", opacity: 1 },
  { transform: "translate(18px, -18px) rotate(-10deg)", opacity: 0, offset: 0.45 },
  { transform: "translate(-12px, 12px)", opacity: 0, offset: 0.46 },
  { transform: "translate(0, 0)", opacity: 1 },
];

export interface SendButtonProps {
  readonly label: string;
  readonly disabled?: boolean;
}

/**
 * Submit button whose paper plane flies off up and to the right when the form is sent,
 * then a new one slides back in. Use it as the form's submit button; the animation is
 * only a cue (reduced motion skips it), and the sent message must appear in the list.
 */
export function SendButton({ label, disabled = false }: SendButtonProps) {
  const planeRef = useRef<SVGSVGElement>(null);
  return (
    <button
      type="submit"
      aria-label={label}
      disabled={disabled}
      onClick={() => {
        if (!disabled && !window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
          planeRef.current?.animate?.(FLY, { duration: 600, easing: "ease-in-out" });
        }
      }}
      className="grid size-10 shrink-0 place-items-center overflow-hidden rounded-full bg-blue-600 text-white disabled:bg-slate-300"
    >
      <svg ref={planeRef} viewBox="0 0 24 24" aria-hidden="true" className="size-5 fill-current">
        <path d="M3 11.5 20.5 4l-7.5 17.5-2.5-7.5L3 11.5Z" />
      </svg>
    </button>
  );
}
