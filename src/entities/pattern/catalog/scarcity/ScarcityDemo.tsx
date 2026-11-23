import { useState } from "react";

const MODES = [
  ["a", "제약 없음"],
  ["b", "실제 제약 알리기"],
] as const;

export function ScarcityDemo() {
  const [mode, setMode] = useState<"a" | "b">("a");
  return (
    <section className="grid w-80 gap-3">
      <fieldset className="flex gap-1 rounded-lg bg-slate-100 p-1 text-xs">
        <legend className="sr-only">비교</legend>
        {MODES.map(([value, label]) => (
          <label
            key={value}
            className="flex-1 cursor-pointer rounded-md py-1.5 text-center has-checked:bg-white has-checked:font-semibold has-checked:shadow-sm has-focus-visible:ring-2 has-focus-visible:ring-blue-600"
          >
            <input
              type="radio"
              name="scarcity-mode"
              className="sr-only"
              checked={mode === value}
              onChange={() => setMode(value)}
            />
            {label}
          </label>
        ))}
      </fieldset>
      <div className="min-h-44 rounded-3xl border border-slate-200 bg-white p-4">
        {mode === "a" ? (
          <>
            <p className="text-sm font-bold">토요일 저녁 공연</p>
            <p className="text-sm">11월 29일 19:00</p>
          </>
        ) : (
          <>
            <p className="text-sm font-bold">토요일 저녁 공연</p>
            <p className="text-sm">11월 29일 19:00</p>
            <p className="mt-2 text-xs text-slate-700">남은 좌석 12석</p>
          </>
        )}
      </div>
      <p role="status" className="text-xs text-slate-600">
        {mode === "a"
          ? "남은 좌석을 모르면 나중에 예매하려다 놓칠 수 있어요"
          : "실제 남은 수를 담담하게 알리면 결정을 도와요"}
      </p>
    </section>
  );
}
