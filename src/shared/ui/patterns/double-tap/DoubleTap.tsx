import { useRef, useState, type ReactNode } from "react";

export interface DoubleTapProps {
  readonly children: ReactNode;
  readonly liked: boolean;
  readonly onLike: () => void;
  /** Image description. */
  readonly label: string;
}

/**
 * Picture that likes itself on a double tap, with a short heart burst. It only adds a
 * like (a second double tap does not undo it); a visible like button next to it does the
 * same and can undo, so the gesture is a shortcut, not the only way.
 */
export function DoubleTap({ children, liked, onLike, label }: DoubleTapProps) {
  const [burst, setBurst] = useState(0);
  const lastRef = useRef(0);

  function like() {
    if (!liked) onLike();
    setBurst((value) => value + 1);
  }

  return (
    <div
      role="img"
      aria-label={label}
      onPointerUp={() => {
        const now = Date.now();
        if (now - lastRef.current < 300) like();
        lastRef.current = now;
      }}
      onDoubleClick={(event) => event.preventDefault()}
      className="relative touch-manipulation overflow-hidden select-none"
    >
      {children}
      {burst > 0 ? (
        <span
          key={burst}
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 grid place-items-center"
        >
          <svg
            viewBox="0 0 24 24"
            className="size-20 animate-[double-tap-heart_700ms_ease-out_forwards] fill-white drop-shadow motion-reduce:animate-none"
          >
            <path d="M12 21s-8-4.9-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 6.1-8 11-8 11Z" />
          </svg>
        </span>
      ) : null}
      <style>
        {
          "@keyframes double-tap-heart { 0% { opacity: 0; transform: scale(.4) } 20% { opacity: 1; transform: scale(1.1) } 70% { opacity: 1; transform: scale(1) } 100% { opacity: 0; transform: scale(1) } }"
        }
      </style>
    </div>
  );
}
