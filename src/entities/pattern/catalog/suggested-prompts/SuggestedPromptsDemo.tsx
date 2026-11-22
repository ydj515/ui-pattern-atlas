import { useState } from "react";
import { SuggestedPrompts } from "@/shared/ui/patterns/suggested-prompts/SuggestedPrompts";

const PROMPTS = ["주말 브런치 추천해 줘", "회의록을 세 줄로 요약해 줘", "영어 메일을 다듬어 줘"];

export function SuggestedPromptsDemo() {
  const [asked, setAsked] = useState<string | null>(null);
  return (
    <section className="grid w-80 gap-3 rounded-3xl border border-slate-200 bg-slate-50 p-4">
      {asked ? (
        <>
          <p className="max-w-[85%] justify-self-end rounded-2xl rounded-br-sm bg-slate-900 px-3 py-2 text-sm text-white">
            {asked}
          </p>
          <p
            role="status"
            className="w-fit rounded-2xl rounded-bl-sm bg-white px-3 py-2 text-sm text-slate-600 shadow-sm"
          >
            답변을 준비하고 있어요
          </p>
          <button
            type="button"
            onClick={() => setAsked(null)}
            className="justify-self-start rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs"
          >
            처음으로
          </button>
        </>
      ) : (
        <>
          <h3 className="text-base font-bold text-slate-900">무엇을 도와드릴까요?</h3>
          <SuggestedPrompts label="추천 질문" prompts={PROMPTS} onPick={setAsked} />
        </>
      )}
    </section>
  );
}
