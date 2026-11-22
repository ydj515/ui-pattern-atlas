import { useState } from "react";

export function LeftDigitEffectDemo() {
  const [different, setDifferent] = useState(false);
  const before = different ? "5,900원" : "5,800원";
  const after = different ? "6,000원" : "5,900원";
  return (
    <div className="grid w-full max-w-xs gap-3 rounded-xl bg-white p-4 text-slate-800">
      <label className="flex items-center gap-2 text-sm">
        <input
          type="checkbox"
          checked={different}
          onChange={(event) => setDifferent(event.currentTarget.checked)}
        />
        첫 자리 바꾸기
      </label>
      <div role="status">
        <p className="flex flex-wrap items-center gap-2 text-xl tabular-nums">
          <span>
            <b className="text-blue-800">{before[0]}</b>
            {before.slice(1)}
          </span>
          <span aria-hidden="true">→</span>
          <span>
            <b className="text-blue-800">{after[0]}</b>
            {after.slice(1)}
          </span>
        </p>
        <p className="mt-1 text-sm">
          가격 차이 100원 · {different ? "첫 자리가 달라요" : "첫 자리가 같아요"}
        </p>
      </div>
    </div>
  );
}
