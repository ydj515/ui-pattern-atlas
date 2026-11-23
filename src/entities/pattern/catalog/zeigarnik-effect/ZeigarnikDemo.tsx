import { useState } from "react";

const MODES = [
  ["a", "진행률 없음"],
  ["b", "남은 일 보이기"],
] as const;

export function ZeigarnikDemo() {
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
              name="zeigarnik-effect-mode"
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
            <p className="text-base font-bold">내 프로필</p>
            <p className="mt-1 text-sm text-slate-500">하늘</p>
          </>
        ) : (
          <>
            <p className="text-base font-bold">내 프로필</p>
            <p className="mt-1 text-sm text-slate-500">하늘</p>
            <p className="mt-3 text-xs text-slate-700">프로필 80% 완성 · 남은 일: 사진 올리기</p>
            <span className="mt-1 block h-2 overflow-hidden rounded-full bg-slate-100">
              <span className="block h-full w-4/5 bg-emerald-500" />
            </span>
          </>
        )}
      </div>
      <p role="status" className="text-xs text-slate-600">
        {mode === "a"
          ? "무엇이 남았는지 몰라 끝까지 하지 않아요"
          : "끝내지 못한 일이 보이면 마무리하고 싶어져요"}
      </p>
    </section>
  );
}
