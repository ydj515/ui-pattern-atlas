import { useState } from "react";

const MODES = [
  ["a", "이득으로 말하기"],
  ["b", "손실로 말하기"],
] as const;

export function LossAversionDemo() {
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
              name="loss-aversion-mode"
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
            <p className="text-base font-semibold">오늘 가입하면 5,000원 쿠폰을 받아요</p>
          </>
        ) : (
          <>
            <p className="text-base font-semibold">오늘 가입하지 않으면 5,000원 쿠폰이 사라져요</p>
          </>
        )}
      </div>
      <p role="status" className="text-xs text-slate-600">
        {mode === "a"
          ? "받는 이득으로 말하면 부담 없이 읽혀요"
          : "같은 쿠폰도 잃는다고 하면 더 크게 느껴져요. 압박하지 않게 쓰세요"}
      </p>
    </section>
  );
}
