import { useState } from "react";

const MODES = {
  click: { label: "클릭", note: "누를 수 없는 사진에 클릭이 몰려요" },
  scroll: { label: "스크롤", note: "리뷰까지 내려오는 사람은 25%예요" },
};

const SPOTS = [
  { left: "50%", top: "18%", size: 90, strength: 0.75 },
  { left: "68%", top: "54%", size: 46, strength: 0.5 },
  { left: "24%", top: "40%", size: 30, strength: 0.3 },
];

const DEPTH = [
  { top: "0%", label: "100%" },
  { top: "45%", label: "60%" },
  { top: "78%", label: "25%" },
];

export function BehavioralHeatmapDemo() {
  const [mode, setMode] = useState<keyof typeof MODES>("click");
  return (
    <section className="grid w-80 gap-3 rounded-3xl border border-slate-200 bg-white p-5">
      <fieldset className="flex gap-1 rounded-lg bg-slate-100 p-1 text-sm">
        <legend className="sr-only">보기</legend>
        {(Object.keys(MODES) as (keyof typeof MODES)[]).map((id) => (
          <label
            key={id}
            className="flex-1 cursor-pointer rounded-md py-1 text-center text-slate-600 has-checked:bg-white has-checked:font-semibold has-checked:text-slate-900 has-checked:shadow-sm has-focus-visible:ring-2 has-focus-visible:ring-blue-600"
          >
            <input
              type="radio"
              name="heatmap-mode"
              className="sr-only"
              checked={mode === id}
              onChange={() => setMode(id)}
            />
            {MODES[id].label}
          </label>
        ))}
      </fieldset>
      <div className="relative overflow-hidden rounded-xl border border-slate-200 text-xs">
        <div aria-hidden="true" className="grid gap-2 p-3">
          <span className="h-24 rounded-lg bg-slate-200" />
          <span className="text-sm font-semibold text-slate-900">린넨 셔츠 · 39,000원</span>
          <span className="justify-self-end rounded-md bg-slate-900 px-3 py-1 text-white">
            담기
          </span>
          <span className="h-2 w-5/6 rounded bg-slate-100" />
          <span className="h-2 w-2/3 rounded bg-slate-100" />
          <span className="pt-2 text-slate-500">리뷰 128개</span>
          <span className="h-2 w-3/4 rounded bg-slate-100" />
        </div>
        {mode === "click" ? (
          SPOTS.map((spot) => (
            <span
              key={spot.top}
              aria-hidden="true"
              className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                left: spot.left,
                top: spot.top,
                width: spot.size,
                height: spot.size,
                background: `radial-gradient(circle, rgb(239 68 68 / ${spot.strength}), rgb(251 191 36 / 0.25) 55%, transparent 72%)`,
              }}
            />
          ))
        ) : (
          <>
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/10 to-slate-900/45"
            />
            {DEPTH.map((line) => (
              <span
                key={line.label}
                aria-hidden="true"
                className="absolute inset-x-0 border-t border-dashed border-slate-500"
                style={{ top: line.top }}
              >
                <b className="absolute right-1 bg-white px-1 text-slate-900">{line.label}</b>
              </span>
            ))}
          </>
        )}
      </div>
      <p role="status" className="text-xs text-slate-600">
        {MODES[mode].note}
      </p>
    </section>
  );
}
