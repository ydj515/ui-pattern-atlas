import { useState } from "react";

const MODES = [
  ["a", "선택지 12개"],
  ["b", "묶어서 4개"],
] as const;

export function HicksLawDemo() {
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
              name="hicks-law-mode"
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
            <p className="mb-2 text-sm font-bold">무엇을 도와드릴까요?</p>
            <div className="grid grid-cols-3 gap-1 text-xs">
              {[
                "주문 조회",
                "배송 문의",
                "환불",
                "교환",
                "쿠폰",
                "포인트",
                "회원 정보",
                "비밀번호",
                "알림",
                "결제 수단",
                "주소",
                "탈퇴",
              ].map((item) => (
                <button
                  key={item}
                  type="button"
                  className="rounded-md border border-slate-200 py-1.5"
                >
                  {item}
                </button>
              ))}
            </div>
          </>
        ) : (
          <>
            <p className="mb-2 text-sm font-bold">무엇을 도와드릴까요?</p>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {["주문과 배송", "환불과 교환", "혜택", "내 정보"].map((item) => (
                <button
                  key={item}
                  type="button"
                  className="rounded-lg border border-slate-200 py-3 font-semibold"
                >
                  {item}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
      <p role="status" className="text-xs text-slate-600">
        {mode === "a"
          ? "고를 것이 많을수록 결정이 느려져요"
          : "자주 찾는 것부터 묶어 줄이면 빨리 골라요"}
      </p>
    </section>
  );
}
