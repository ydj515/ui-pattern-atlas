import { useState } from "react";

const STEPS = [
  { time: "0:05", text: "검색창에 운동화를 입력했어요", stuck: false },
  { time: "0:32", text: "사이즈를 고르지 않고 담기를 눌렀어요", stuck: false },
  { time: "0:48", text: "오류 문구를 보지 못하고 담기를 다시 눌렀어요", stuck: true },
  { time: "1:40", text: "화면을 올려 사이즈를 고르고 담았어요", stuck: false },
];

export function UsabilityTestDemo() {
  const [shown, setShown] = useState(1);
  const done = shown === STEPS.length;
  return (
    <section className="grid w-80 gap-3 rounded-3xl border border-slate-200 bg-white p-5">
      <p className="rounded-lg bg-slate-100 px-3 py-2 text-sm text-slate-800">
        과제: 운동화 260 사이즈를 장바구니에 담아 주세요
      </p>
      <ol className="grid gap-2 text-sm">
        {STEPS.slice(0, shown).map((step) => (
          <li key={step.time} className="flex gap-2">
            <span className="w-9 shrink-0 text-xs text-slate-500 tabular-nums">{step.time}</span>
            <span className={step.stuck ? "font-medium text-amber-800" : "text-slate-800"}>
              {step.stuck ? <b className="mr-1 rounded bg-amber-100 px-1 text-xs">막힘</b> : null}
              {step.text}
            </span>
          </li>
        ))}
      </ol>
      <p role="status" className="h-4 text-xs text-slate-600">
        {done ? "찾은 문제: 사이즈 안내가 담기 버튼에서 멀어요" : ""}
      </p>
      <div className="flex gap-2">
        <button
          type="button"
          disabled={done}
          onClick={() => setShown((value) => value + 1)}
          className="rounded-lg bg-slate-900 px-3 py-1.5 text-sm font-semibold text-white disabled:opacity-40"
        >
          다음 관찰
        </button>
        <button
          type="button"
          onClick={() => setShown(1)}
          className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm"
        >
          처음부터
        </button>
      </div>
    </section>
  );
}
