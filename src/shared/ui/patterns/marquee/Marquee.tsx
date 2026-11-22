import { useState, type ReactNode } from "react";

export interface MarqueeProps {
  readonly label: string;
  readonly items: readonly ReactNode[];
  /** Seconds for one full loop. */
  readonly duration?: number;
  readonly pauseLabel?: string;
  readonly playLabel?: string;
}

/**
 * Strip that scrolls sideways forever. The items are rendered twice and the track moves
 * by half its width, so the loop has no seam. It stops on hover and focus, has a pause
 * button (WCAG 2.2.2), and with reduced motion the items simply wrap.
 */
export function Marquee({
  label,
  items,
  duration = 20,
  pauseLabel = "멈추기",
  playLabel = "재생",
}: MarqueeProps) {
  const [paused, setPaused] = useState(false);
  const list = (hidden: boolean) => (
    <ul
      aria-hidden={hidden || undefined}
      className="flex shrink-0 gap-6 pr-6 motion-reduce:flex-wrap"
    >
      {items.map((item, index) => (
        <li key={index} className="shrink-0">
          {item}
        </li>
      ))}
    </ul>
  );

  return (
    <section aria-label={label} className="flex items-center gap-2">
      <div className="group min-w-0 flex-1 overflow-hidden">
        <style>{"@keyframes marquee-scroll { to { transform: translateX(-50%) } }"}</style>
        <div
          className="flex w-max group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused] motion-reduce:w-auto motion-reduce:animate-none"
          style={{
            animation: `marquee-scroll ${duration}s linear infinite`,
            animationPlayState: paused ? "paused" : undefined,
          }}
        >
          {list(false)}
          <span className="contents motion-reduce:hidden">{list(true)}</span>
        </div>
      </div>
      <button
        type="button"
        aria-pressed={paused}
        onClick={() => setPaused((value) => !value)}
        className="shrink-0 rounded-md border border-slate-200 px-2 py-1 text-xs text-slate-700 motion-reduce:hidden"
      >
        {paused ? playLabel : pauseLabel}
      </button>
    </section>
  );
}
