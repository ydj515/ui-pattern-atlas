import { useState } from "react";

import { Callout, type CalloutTone } from "@/shared/ui/patterns/callout/Callout";

const EXAMPLES: Record<CalloutTone, string> = {
  note: "링크는 30분 동안만 열 수 있어요.",
  tip: "메일이 안 보이면 스팸함을 확인해 보세요.",
  warning: "링크를 다른 사람과 공유하지 마세요.",
};

const TONE_LABELS: Record<CalloutTone, string> = { note: "참고", tip: "팁", warning: "주의" };

export function CalloutDemo() {
  const [tone, setTone] = useState<CalloutTone>("note");

  return (
    <div className="w-full max-w-sm space-y-3">
      <div className="flex justify-center gap-1.5" role="group" aria-label="콜아웃 종류">
        {(Object.keys(EXAMPLES) as CalloutTone[]).map((option) => (
          <button
            key={option}
            type="button"
            aria-pressed={option === tone}
            onClick={() => setTone(option)}
            className="rounded-full border border-slate-300 px-3 py-1 text-xs font-medium text-slate-600 aria-pressed:border-slate-900 aria-pressed:bg-slate-900 aria-pressed:text-white"
          >
            {TONE_LABELS[option]}
          </button>
        ))}
      </div>
      <article className="space-y-3 rounded-xl border border-slate-200 bg-white p-4">
        <h3 className="text-sm font-semibold text-slate-900">비밀번호 재설정</h3>
        <p className="text-sm leading-6 text-slate-600">
          재설정 링크는 가입한 이메일로 보내 드려요.
        </p>
        <Callout tone={tone}>{EXAMPLES[tone]}</Callout>
      </article>
    </div>
  );
}
