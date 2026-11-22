import { useRef, useState } from "react";
import { PromptInput } from "@/shared/ui/patterns/prompt-input/PromptInput";

export function PromptInputDemo() {
  const [last, setLast] = useState("주말 브런치 추천해 줘");
  const [generating, setGenerating] = useState(false);
  const timerRef = useRef(0);

  return (
    <section className="grid w-80 gap-3">
      <p className="text-xs text-slate-600">
        보낸 질문: <b className="text-slate-900">{last}</b>
      </p>
      <p role="status" className="h-4 text-xs text-slate-500">
        {generating ? "답변을 만드는 중" : ""}
      </p>
      <PromptInput
        generating={generating}
        placeholder="무엇이든 물어보세요"
        label="메시지"
        sendLabel="보내기"
        stopLabel="멈추기"
        onSend={(text) => {
          setLast(text);
          setGenerating(true);
          timerRef.current = window.setTimeout(() => setGenerating(false), 1500);
        }}
        onStop={() => {
          window.clearTimeout(timerRef.current);
          setGenerating(false);
        }}
        attach={
          <label className="grid size-8 shrink-0 cursor-pointer place-items-center rounded-full text-slate-500 hover:bg-slate-100">
            <span className="sr-only">파일 첨부</span>
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="size-4 fill-none stroke-current stroke-2"
            >
              <path
                d="M21 12.5 13 20.5a5 5 0 0 1-7-7l8.5-8.5a3.3 3.3 0 0 1 4.7 4.7L10.7 18"
                strokeLinecap="round"
              />
            </svg>
            <input type="file" className="sr-only" />
          </label>
        }
      />
    </section>
  );
}
