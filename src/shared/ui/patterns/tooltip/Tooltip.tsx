import { useEffect, useId, useRef, useState, type ReactElement } from "react";

const SHOW_DELAY_MS = 300;

export interface TooltipTriggerProps {
  readonly "aria-describedby": string;
}

export interface TooltipProps {
  /** Short, non-interactive text. Never put links or buttons in a tooltip. */
  readonly content: string;
  /** Render the trigger and spread the props so it is described by the tooltip. */
  readonly children: (triggerProps: TooltipTriggerProps) => ReactElement;
}

/**
 * Tooltip that appears on hover (after a short delay) and immediately on keyboard focus.
 *
 * Meets WCAG 1.4.13: it is dismissible with Escape, hoverable, and persists
 * until the pointer or focus leaves.
 */
export function Tooltip({ content, children }: TooltipProps) {
  const [visible, setVisible] = useState(false);
  const timerRef = useRef<number | undefined>(undefined);
  const tooltipId = useId();

  useEffect(() => () => window.clearTimeout(timerRef.current), []);

  function show(delay: number) {
    window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => setVisible(true), delay);
  }

  function hide() {
    window.clearTimeout(timerRef.current);
    setVisible(false);
  }

  return (
    <span
      className="relative inline-flex"
      onPointerEnter={() => show(SHOW_DELAY_MS)}
      onPointerLeave={hide}
      onFocus={() => show(0)}
      onBlur={hide}
      onKeyDown={(event) => {
        if (event.key === "Escape") hide();
      }}
    >
      {children({ "aria-describedby": tooltipId })}
      <span
        id={tooltipId}
        role="tooltip"
        hidden={!visible}
        className="absolute bottom-full left-1/2 z-20 w-max max-w-56 -translate-x-1/2 pb-2"
      >
        <span className="block rounded-md bg-slate-900 px-2.5 py-1.5 text-xs leading-5 text-white shadow-md">
          {content}
        </span>
      </span>
    </span>
  );
}
