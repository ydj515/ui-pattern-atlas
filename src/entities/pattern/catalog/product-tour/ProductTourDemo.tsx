import { useState } from "react";
import { TourStop } from "@/shared/ui/patterns/product-tour/ProductTour";

const STOPS = [
  { id: "search", label: "검색", title: "검색", body: "이름이나 태그로 찾아요" },
  { id: "filter", label: "필터", title: "필터", body: "기간과 상태로 좁혀요" },
  { id: "export", label: "내보내기", title: "내보내기", body: "표를 파일로 내려받아요" },
];

export function ProductTourDemo() {
  const [step, setStep] = useState(0);
  const [finished, setFinished] = useState(false);

  function end() {
    setStep(0);
    setFinished(true);
  }

  return (
    <div className="relative h-64 w-80 overflow-hidden rounded-2xl border border-slate-200 bg-white p-3">
      <div className="flex gap-2">
        {STOPS.map((stop, index) => (
          <TourStop
            key={stop.id}
            active={step === index + 1}
            step={index + 1}
            total={STOPS.length}
            title={stop.title}
            body={stop.body}
            align={index === STOPS.length - 1 ? "end" : "start"}
            onNext={() => (index + 1 === STOPS.length ? end() : setStep(index + 2))}
            onPrev={() => setStep(index)}
            onSkip={end}
            labels={{ prev: "이전", next: "다음", done: "마치기", skip: "건너뛰기" }}
          >
            <button
              type="button"
              className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm text-slate-700"
            >
              {stop.label}
            </button>
          </TourStop>
        ))}
      </div>
      <div className="mt-3 grid gap-1.5">
        <span className="h-6 rounded bg-slate-100" />
        <span className="h-6 rounded bg-slate-100" />
        <span className="h-6 rounded bg-slate-100" />
      </div>
      <div className="absolute bottom-3 left-3 flex items-center gap-2">
        <button
          type="button"
          onClick={() => setStep(1)}
          className="rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white"
        >
          둘러보기 시작
        </button>
        <p role="status" className="text-xs text-slate-600">
          {finished && step === 0 ? "둘러보기를 마쳤어요" : ""}
        </p>
      </div>
    </div>
  );
}
