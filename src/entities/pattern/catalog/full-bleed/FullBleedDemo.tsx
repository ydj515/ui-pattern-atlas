import { useState } from "react";

import { Bleed, FullBleedLayout } from "@/shared/ui/patterns/full-bleed/FullBleed";

export function FullBleedDemo() {
  const [bleed, setBleed] = useState(true);

  return (
    <div className="w-full max-w-sm space-y-2">
      <article className="h-60 overflow-y-auto rounded-xl border border-slate-200 bg-white py-4 text-sm leading-6 text-slate-700">
        <FullBleedLayout measure="15rem">
          <h3 className="text-base font-semibold text-slate-900">서울의 겨울</h3>
          <p>바람이 세지만 하늘이 가장 맑은 계절이에요.</p>
          <Bleed enabled={bleed}>
            <div
              aria-hidden="true"
              className="my-3 h-24 bg-gradient-to-r from-sky-300 via-cyan-200 to-emerald-200"
            />
          </Bleed>
          <p>사진은 화면 끝까지 펼치고, 글은 읽기 좋은 폭을 지켜요.</p>
        </FullBleedLayout>
      </article>
      <label className="flex items-center justify-end gap-2 text-xs text-slate-600">
        <input
          type="checkbox"
          checked={bleed}
          onChange={(event) => setBleed(event.target.checked)}
        />
        사진 끝까지 펼치기
      </label>
    </div>
  );
}
