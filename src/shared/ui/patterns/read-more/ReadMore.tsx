import { useId, useLayoutEffect, useRef, useState, type ReactNode } from "react";

export interface ReadMoreProps {
  readonly children: ReactNode;
  /** Lines shown while collapsed. */
  readonly lines?: number;
  readonly moreLabel?: string;
  readonly lessLabel?: string;
}

/**
 * Long text cut to a few lines with a "더 보기" button that expands it in place.
 * The button only appears when the text really overflows, says whether it will expand
 * or collapse (aria-expanded) and stays right after the text, so focus does not jump.
 */
export function ReadMore({
  children,
  lines = 3,
  moreLabel = "더 보기",
  lessLabel = "접기",
}: ReadMoreProps) {
  const id = useId();
  const textRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [overflows, setOverflows] = useState(false);

  useLayoutEffect(() => {
    const element = textRef.current;
    if (!element || open) return;
    const measure = () => setOverflows(element.scrollHeight > element.clientHeight + 1);
    measure();
    const observer = typeof ResizeObserver !== "undefined" ? new ResizeObserver(measure) : null;
    observer?.observe(element);
    return () => observer?.disconnect();
  }, [children, lines, open]);

  return (
    <div>
      <div
        ref={textRef}
        id={id}
        className="text-sm leading-6 text-slate-700"
        style={
          open
            ? undefined
            : {
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: lines,
                overflow: "hidden",
              }
        }
      >
        {children}
      </div>
      {overflows || open ? (
        <button
          type="button"
          aria-expanded={open}
          aria-controls={id}
          onClick={() => setOpen((value) => !value)}
          className="mt-1 text-sm font-medium text-slate-900 underline underline-offset-2 hover:text-blue-700"
        >
          {open ? lessLabel : moreLabel}
        </button>
      ) : null}
    </div>
  );
}
