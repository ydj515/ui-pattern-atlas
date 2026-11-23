import { useState } from "react";

const MODES = [
  ["a", "모두 같게"],
  ["b", "하나만 다르게"],
] as const;

export function VonRestorffDemo() {
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
              name="von-restorff-effect-mode"
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
            <div className="grid gap-2 text-sm">
              {["베이직 4,900원", "스탠더드 9,900원", "프리미엄 14,900원"].map((plan) => (
                <p key={plan} className="rounded-lg border border-slate-200 px-3 py-2">
                  {plan}
                </p>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="grid gap-2 text-sm">
              <p className="rounded-lg border border-slate-200 px-3 py-2">베이직 4,900원</p>
              <p className="rounded-lg border-2 border-blue-600 bg-blue-50 px-3 py-2 font-semibold">
                스탠더드 9,900원 · 추천
              </p>
              <p className="rounded-lg border border-slate-200 px-3 py-2">프리미엄 14,900원</p>
            </div>
          </>
        )}
      </div>
      <p role="status" className="text-xs text-slate-600">
        {mode === "a"
          ? "세 요금제가 똑같아 보여 기억에 남지 않아요"
          : "하나만 다르게 하면 눈에 띄고 기억돼요"}
      </p>
    </section>
  );
}
