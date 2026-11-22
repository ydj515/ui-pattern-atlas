import { useState, type KeyboardEvent, type ReactNode } from "react";

export interface OnboardingSlide {
  readonly title: string;
  readonly body: string;
  readonly art: ReactNode;
}

export interface OnboardingCarouselProps {
  readonly slides: readonly OnboardingSlide[];
  readonly onFinish: () => void;
  readonly skipLabel?: string;
  readonly nextLabel?: string;
  readonly finishLabel?: string;
}

/**
 * A few screens that introduce the service one idea at a time, moved with 다음, arrow
 * keys or the dots. 건너뛰기 is always there, and the last screen turns 다음 into the
 * start button. It never advances on its own.
 */
export function OnboardingCarousel({
  slides,
  onFinish,
  skipLabel = "건너뛰기",
  nextLabel = "다음",
  finishLabel = "시작하기",
}: OnboardingCarouselProps) {
  const [index, setIndex] = useState(0);
  const slide = slides[index];
  const last = index === slides.length - 1;
  if (!slide) return null;

  function handleKey(event: KeyboardEvent) {
    if (event.key === "ArrowRight") setIndex((value) => Math.min(slides.length - 1, value + 1));
    if (event.key === "ArrowLeft") setIndex((value) => Math.max(0, value - 1));
  }

  return (
    <section
      aria-roledescription="carousel"
      aria-label="서비스 소개"
      onKeyDown={handleKey}
      className="flex h-full flex-col rounded-2xl bg-white p-5"
    >
      <div className="flex justify-end">
        <button
          type="button"
          onClick={onFinish}
          className="rounded-md px-2 py-1 text-xs text-slate-500 hover:bg-slate-100"
        >
          {skipLabel}
        </button>
      </div>
      <div
        key={index}
        aria-roledescription="slide"
        aria-label={`${index + 1} / ${slides.length}`}
        className="flex flex-1 flex-col items-center justify-center text-center"
      >
        <div aria-hidden="true" className="mb-4">
          {slide.art}
        </div>
        <h2 aria-live="polite" className="text-lg font-bold text-slate-900">
          {slide.title}
        </h2>
        <p className="mt-1 text-sm text-slate-600">{slide.body}</p>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex gap-1.5">
          {slides.map((item, dot) => (
            <button
              key={item.title}
              type="button"
              aria-label={`${dot + 1}번째 소개`}
              aria-current={dot === index ? "step" : undefined}
              onClick={() => setIndex(dot)}
              className={`h-2 rounded-full transition-all motion-reduce:transition-none ${dot === index ? "w-5 bg-slate-900" : "w-2 bg-slate-300"}`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => (last ? onFinish() : setIndex(index + 1))}
          className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white"
        >
          {last ? finishLabel : nextLabel}
        </button>
      </div>
    </section>
  );
}
