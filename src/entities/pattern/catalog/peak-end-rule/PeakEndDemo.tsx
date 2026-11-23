import { useState } from "react";

const MODES = [
  ["a", "밋밋한 끝"],
  ["b", "좋은 끝"],
] as const;

export function PeakEndDemo() {
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
              name="peak-end-rule-mode"
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
            <p className="text-base font-bold">배송 완료</p>
            <p className="mt-1 text-sm text-slate-500">주문 #2481</p>
          </>
        ) : (
          <>
            <p className="text-base font-bold">배송 완료</p>
            <span className="mt-2 block h-16 rounded-lg bg-gradient-to-br from-amber-100 to-amber-300" />
            <p className="mt-2 text-sm">문 앞에 두었어요. 맛있게 드세요</p>
            <p className="text-xs text-slate-500">도착 사진을 함께 보내 드렸어요</p>
          </>
        )}
      </div>
      <p role="status" className="text-xs text-slate-600">
        {mode === "a"
          ? "배송은 잘 됐지만 끝이 밋밋해 기억에 남지 않아요"
          : "마지막 순간을 챙기면 전체 경험이 좋게 기억돼요"}
      </p>
    </section>
  );
}
