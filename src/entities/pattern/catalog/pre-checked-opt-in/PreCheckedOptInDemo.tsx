import { useState } from "react";

const MODES = [
  ["a", "다크 패턴"],
  ["b", "바른 방법"],
] as const;

export function PreCheckedOptInDemo() {
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
              name="pre-checked-opt-in-mode"
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
            <p className="text-base font-bold">회원가입</p>
            <label className="mt-3 flex items-center gap-2 text-sm">
              <input type="checkbox" defaultChecked /> [필수] 이용약관 동의
            </label>
            <label className="mt-1 flex items-center gap-2 text-sm">
              <input type="checkbox" defaultChecked /> 마케팅 문자 받기
            </label>
          </>
        ) : (
          <>
            <p className="text-base font-bold">회원가입</p>
            <label className="mt-3 flex items-center gap-2 text-sm">
              <input type="checkbox" /> [필수] 이용약관 동의
            </label>
            <label className="mt-1 flex items-center gap-2 text-sm">
              <input type="checkbox" /> [선택] 마케팅 문자 받기
            </label>
          </>
        )}
      </div>
      <p role="status" className="text-xs text-slate-600">
        {mode === "a" ? "마케팅 동의가 미리 켜져 있어요" : "선택 동의는 직접 켜게 해요"}
      </p>
    </section>
  );
}
