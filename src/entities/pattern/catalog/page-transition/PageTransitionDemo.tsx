import { useState } from "react";
import {
  PageTransition,
  type PageTransitionKind,
} from "@/shared/ui/patterns/page-transition/PageTransition";

const KINDS: { value: PageTransitionKind; label: string }[] = [
  { value: "push", label: "푸시" },
  { value: "fade", label: "페이드" },
  { value: "modal", label: "모달" },
];
const ROWS = ["알림", "개인정보", "화면"];

export function PageTransitionDemo() {
  const [kind, setKind] = useState<PageTransitionKind>("push");
  const [screen, setScreen] = useState<string | null>(null);
  const [direction, setDirection] = useState<"forward" | "back">("forward");

  function open(row: string) {
    setDirection("forward");
    setScreen(row);
  }

  function back() {
    setDirection("back");
    setScreen(null);
  }

  return (
    <section className="w-full max-w-xs">
      <fieldset className="mb-3 flex gap-1 rounded-lg bg-slate-100 p-1 text-xs">
        <legend className="sr-only">전환 방식</legend>
        {KINDS.map((item) => (
          <label
            key={item.value}
            className="flex-1 cursor-pointer rounded-md py-1 text-center has-checked:bg-white has-checked:font-semibold has-checked:shadow-sm"
          >
            <input
              type="radio"
              name="page-kind"
              className="sr-only"
              checked={kind === item.value}
              onChange={() => setKind(item.value)}
            />
            {item.label}
          </label>
        ))}
      </fieldset>
      <div className="h-56 overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <PageTransition screenKey={screen ?? "home"} kind={kind} direction={direction}>
          {screen === null ? (
            <div>
              <h3 className="border-b border-slate-100 px-4 py-3 text-sm font-semibold text-slate-900">
                설정
              </h3>
              <ul className="text-sm">
                {ROWS.map((row) => (
                  <li key={row}>
                    <button
                      type="button"
                      onClick={() => open(row)}
                      className="flex w-full justify-between border-b border-slate-100 px-4 py-3 text-left hover:bg-slate-50"
                    >
                      {row}
                      <span aria-hidden="true" className="text-slate-400">
                        ›
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="h-full bg-slate-50">
              <div className="flex items-center gap-2 border-b border-slate-100 bg-white px-2 py-2">
                <button
                  type="button"
                  onClick={back}
                  className="rounded-md px-2 py-1 text-sm text-blue-700"
                >
                  {kind === "modal" ? "닫기" : "‹ 설정"}
                </button>
                <h3 className="text-sm font-semibold text-slate-900">{screen}</h3>
              </div>
              <p className="p-4 text-sm text-slate-700">{screen} 설정 화면</p>
            </div>
          )}
        </PageTransition>
      </div>
    </section>
  );
}
