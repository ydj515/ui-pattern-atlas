import { useEffect, useId, useState, type ReactNode } from "react";

export interface CarouselSlide {
  readonly id: string;
  readonly label: string;
  readonly content: ReactNode;
}

export interface CarouselProps {
  readonly label: string;
  readonly slides: readonly CarouselSlide[];
  /** Auto-advance interval in ms; leave undefined for manual only. */
  readonly interval?: number;
  readonly prevLabel?: string;
  readonly nextLabel?: string;
  readonly pauseLabel?: string;
  readonly playLabel?: string;
  readonly slideLabel?: (index: number, total: number) => string;
}

/**
 * One slide at a time with previous/next buttons and dots (WAI-ARIA carousel). If it
 * rotates on its own, it stops while hovered or focused and has a visible pause button
 * (WCAG 2.2.2); rotation is off when reduced motion is requested. Only the current slide
 * is in the accessibility tree.
 */
export function Carousel({
  label,
  slides,
  interval,
  prevLabel = "이전 슬라이드",
  nextLabel = "다음 슬라이드",
  pauseLabel = "자동 넘김 멈추기",
  playLabel = "자동 넘김 시작",
  slideLabel = (index, total) => `${index + 1} / ${total}`,
}: CarouselProps) {
  const id = useId();
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(interval !== undefined);
  const [hovered, setHovered] = useState(false);
  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  const rotating = playing && !hovered && !reduced && interval !== undefined;

  useEffect(() => {
    if (!rotating) return;
    const timer = window.setInterval(
      () => setIndex((current) => (current + 1) % slides.length),
      interval,
    );
    return () => window.clearInterval(timer);
  }, [rotating, interval, slides.length]);

  const go = (next: number) => setIndex((next + slides.length) % slides.length);
  const buttonClass =
    "grid size-8 place-items-center rounded-full bg-white/90 text-slate-800 shadow hover:bg-white focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none";

  return (
    <section
      aria-roledescription="carousel"
      aria-label={label}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      className="relative overflow-hidden rounded-xl"
    >
      <div id={id} aria-live={rotating ? "off" : "polite"}>
        {slides.map((slide, slideIndex) => (
          <div
            key={slide.id}
            role="group"
            aria-roledescription="slide"
            aria-label={`${slideLabel(slideIndex, slides.length)}, ${slide.label}`}
            hidden={slideIndex !== index}
          >
            {slide.content}
          </div>
        ))}
      </div>
      <div className="absolute inset-x-2 top-1/2 flex -translate-y-1/2 justify-between">
        <button
          type="button"
          aria-label={prevLabel}
          aria-controls={id}
          onClick={() => go(index - 1)}
          className={buttonClass}
        >
          <span aria-hidden="true">‹</span>
        </button>
        <button
          type="button"
          aria-label={nextLabel}
          aria-controls={id}
          onClick={() => go(index + 1)}
          className={buttonClass}
        >
          <span aria-hidden="true">›</span>
        </button>
      </div>
      <div className="absolute inset-x-0 bottom-2 flex items-center justify-center gap-1.5">
        {interval !== undefined ? (
          <button
            type="button"
            aria-label={playing ? pauseLabel : playLabel}
            onClick={() => setPlaying((value) => !value)}
            className="mr-1 grid size-6 place-items-center rounded-full bg-black/40 text-[10px] text-white"
          >
            <span aria-hidden="true">{playing ? "❚❚" : "▶"}</span>
          </button>
        ) : null}
        {slides.map((slide, slideIndex) => (
          <button
            key={slide.id}
            type="button"
            aria-label={slideLabel(slideIndex, slides.length)}
            aria-current={slideIndex === index ? "true" : undefined}
            onClick={() => go(slideIndex)}
            className="size-2 rounded-full bg-white/50 aria-[current=true]:w-5 aria-[current=true]:bg-white"
          />
        ))}
      </div>
    </section>
  );
}
