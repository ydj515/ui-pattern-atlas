import { useEffect, useState, type ReactNode } from "react";

export interface Story {
  readonly id: string;
  readonly label: string;
  readonly content: ReactNode;
}

export interface StoriesProps {
  readonly label: string;
  readonly stories: readonly Story[];
  readonly onClose: () => void;
  /** How long each story stays, in ms. */
  readonly duration?: number;
  readonly prevLabel?: string;
  readonly nextLabel?: string;
  readonly pauseLabel?: string;
  readonly playLabel?: string;
  readonly closeLabel?: string;
}

/**
 * Full-screen stories that advance on their own, with a progress bar per story. Tap the
 * left or right side to go back or forward; the pause button (and holding anywhere) stops
 * the timer. Auto-advance is off with reduced motion, and all controls are real buttons.
 */
export function Stories({
  label,
  stories,
  onClose,
  duration = 4000,
  prevLabel = "이전 스토리",
  nextLabel = "다음 스토리",
  pauseLabel = "일시 정지",
  playLabel = "재생",
  closeLabel = "닫기",
}: StoriesProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [holding, setHolding] = useState(false);
  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  const running = !paused && !holding && !reduced;
  const story = stories[index]!;

  useEffect(() => {
    if (!running) return;
    const timer = window.setTimeout(() => {
      if (index === stories.length - 1) onClose();
      else setIndex(index + 1);
    }, duration);
    return () => window.clearTimeout(timer);
  }, [running, index, stories.length, duration, onClose]);

  return (
    <section
      aria-label={label}
      aria-roledescription="스토리"
      className="relative size-full overflow-hidden bg-slate-900 text-white"
    >
      <div
        className="absolute inset-0"
        onPointerDown={() => setHolding(true)}
        onPointerUp={() => setHolding(false)}
        onPointerLeave={() => setHolding(false)}
      >
        {story.content}
      </div>
      <div className="absolute inset-x-2 top-2 flex gap-1">
        {stories.map((item, itemIndex) => (
          <span key={item.id} className="h-0.5 flex-1 overflow-hidden rounded-full bg-white/30">
            <span
              key={itemIndex === index ? `${item.id}-${index}` : item.id}
              className="block h-full origin-left bg-white"
              style={{
                transform:
                  itemIndex < index ? "scaleX(1)" : itemIndex > index ? "scaleX(0)" : undefined,
                animation:
                  itemIndex === index && !reduced
                    ? `story-progress ${duration}ms linear forwards`
                    : undefined,
                animationPlayState: running ? "running" : "paused",
              }}
            />
          </span>
        ))}
      </div>
      <style>
        {"@keyframes story-progress { from { transform: scaleX(0) } to { transform: scaleX(1) } }"}
      </style>
      <p className="absolute top-5 left-3 text-xs font-semibold" aria-live="polite">
        {story.label}
      </p>
      <div className="absolute top-4 right-2 flex gap-1">
        <button
          type="button"
          aria-label={paused ? playLabel : pauseLabel}
          onClick={() => setPaused((value) => !value)}
          className="grid size-8 place-items-center rounded-full text-xs hover:bg-white/10"
        >
          <span aria-hidden="true">{paused ? "▶" : "❚❚"}</span>
        </button>
        <button
          type="button"
          aria-label={closeLabel}
          onClick={onClose}
          className="grid size-8 place-items-center rounded-full hover:bg-white/10"
        >
          <span aria-hidden="true">✕</span>
        </button>
      </div>
      <button
        type="button"
        aria-label={prevLabel}
        disabled={index === 0}
        onClick={() => setIndex(index - 1)}
        className="absolute top-14 bottom-0 left-0 w-1/3 focus-visible:bg-white/10 focus-visible:outline-none"
      />
      <button
        type="button"
        aria-label={nextLabel}
        onClick={() => (index === stories.length - 1 ? onClose() : setIndex(index + 1))}
        className="absolute top-14 right-0 bottom-0 w-1/3 focus-visible:bg-white/10 focus-visible:outline-none"
      />
    </section>
  );
}
