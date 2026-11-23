import { useState } from "react";

const MODES = [
  ["a", "기본값 없음"],
  ["b", "기본값 있음"],
] as const;

export function DefaultEffectDemo() {
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
              name="default-effect-mode"
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
            <p className="text-sm font-bold">기부 금액</p>
            <div className="mt-2 grid grid-cols-3 gap-1 text-sm">
              {["5,000원", "10,000원", "30,000원"].map((amount) => (
                <label key={amount} className="rounded-lg border border-slate-200 py-2 text-center">
                  <input type="radio" name="donate-a" className="sr-only" />
                  {amount}
                </label>
              ))}
            </div>
          </>
        ) : (
          <>
            <p className="text-sm font-bold">기부 금액</p>
            <div className="mt-2 grid grid-cols-3 gap-1 text-sm">
              {["5,000원", "10,000원", "30,000원"].map((amount) => (
                <label
                  key={amount}
                  className="rounded-lg border border-slate-200 py-2 text-center has-checked:border-blue-600 has-checked:bg-blue-50"
                >
                  <input
                    type="radio"
                    name="donate-b"
                    defaultChecked={amount === "10,000원"}
                    className="sr-only"
                  />
                  {amount}
                </label>
              ))}
            </div>
            <p className="mt-1 text-xs text-slate-500">가장 많이 고른 금액이에요</p>
          </>
        )}
      </div>
      <p role="status" className="text-xs text-slate-600">
        {mode === "a"
          ? "아무것도 골라져 있지 않으면 직접 정해야 해요"
          : "미리 정한 값을 그대로 고르는 사람이 많아요. 사용자에게 이로운 값을 기본으로 두세요"}
      </p>
    </section>
  );
}
