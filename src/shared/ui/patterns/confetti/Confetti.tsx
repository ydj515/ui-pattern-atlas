import { useEffect, useEffectEvent, useRef } from "react";

const COLORS = ["#f43f5e", "#f59e0b", "#10b981", "#3b82f6", "#8b5cf6"];

export interface ConfettiProps {
  /** Increase it to burst again; 0 never bursts. */
  readonly trigger: number;
  readonly pieces?: number;
}

/**
 * One short burst of paper pieces from the middle of its box, for a goal reached. It is
 * decoration only (aria-hidden), runs once per trigger, and is skipped for reduced
 * motion; announce the achievement in text next to it.
 */
export function Confetti({ trigger, pieces = 24 }: ConfettiProps) {
  const ref = useRef<HTMLDivElement>(null);

  const burst = useEffectEvent(() => {
    const box = ref.current;
    if (!box || window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    box.replaceChildren();
    for (let index = 0; index < pieces; index++) {
      const piece = document.createElement("span");
      const angle = (index / pieces) * Math.PI * 2;
      const distance = 60 + (index % 5) * 14;
      piece.style.cssText = `position:absolute;left:50%;top:45%;width:6px;height:10px;border-radius:1px;background:${COLORS[index % COLORS.length]}`;
      box.append(piece);
      piece.animate?.(
        [
          { transform: "translate(-50%, -50%) rotate(0deg)", opacity: 1 },
          {
            transform: `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance - 20}px) rotate(${index * 47}deg)`,
            opacity: 1,
            offset: 0.6,
          },
          {
            transform: `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance + 50}px) rotate(${index * 90}deg)`,
            opacity: 0,
          },
        ],
        { duration: 1200, easing: "cubic-bezier(0.2, 0.7, 0.4, 1)", fill: "forwards" },
      );
    }
  });

  useEffect(() => {
    if (trigger > 0) burst();
  }, [trigger]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    />
  );
}
