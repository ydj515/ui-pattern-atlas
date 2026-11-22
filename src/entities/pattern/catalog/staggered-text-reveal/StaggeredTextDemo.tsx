import { useState } from "react";
import { StaggeredText } from "@/shared/ui/patterns/staggered-text-reveal/StaggeredText";

const LINES = ["작게 시작해서", "매일 조금씩", "끝까지 갑니다"];

export function StaggeredTextDemo() {
  const [run, setRun] = useState(0);
  const [by, setBy] = useState<"line" | "word">("line");
  return (
    <section className="grid w-full max-w-sm gap-4">
      <StaggeredText
        key={`${run}-${by}`}
        lines={LINES}
        by={by}
        gap={by === "line" ? 140 : 70}
        className="text-3xl leading-tight font-bold text-slate-900"
      />
      <div className="flex items-center gap-2">
        <fieldset className="flex gap-1 text-xs">
          <legend className="sr-only">나누는 단위</legend>
          {(["line", "word"] as const).map((value) => (
            <label
              key={value}
              className="cursor-pointer rounded-md border border-slate-200 px-2 py-1 has-checked:border-slate-900 has-checked:font-semibold"
            >
              <input
                type="radio"
                name="stagger-by"
                className="sr-only"
                checked={by === value}
                onChange={() => setBy(value)}
              />
              {value === "line" ? "줄 단위" : "단어 단위"}
            </label>
          ))}
        </fieldset>
        <button
          type="button"
          onClick={() => setRun((value) => value + 1)}
          className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50"
        >
          다시 보기
        </button>
      </div>
    </section>
  );
}
