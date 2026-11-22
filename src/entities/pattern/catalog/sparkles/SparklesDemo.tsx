import { useState } from "react";

const DRAFT = "내일 회의 시간 바꿔도 되나요";
const POLISHED = "내일 회의를 오후 3시로 옮겨도 괜찮을까요?";

export function SparklesDemo() {
  const [text, setText] = useState(DRAFT);
  const polished = text === POLISHED;
  return (
    <section className="grid w-72 gap-3 rounded-3xl border border-slate-200 bg-white p-4">
      <label className="grid gap-1 text-sm font-medium text-slate-900">
        메시지
        <textarea
          rows={3}
          value={text}
          onChange={(event) => setText(event.target.value)}
          className="resize-none rounded-lg border border-slate-300 px-3 py-2 text-sm font-normal"
        />
      </label>
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => setText(POLISHED)}
          disabled={polished}
          className="inline-flex items-center gap-1.5 rounded-lg bg-violet-600 px-3 py-1.5 text-sm font-semibold text-white disabled:bg-violet-300"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 fill-current">
            <path d="M12 2l1.8 5.2L19 9l-5.2 1.8L12 16l-1.8-5.2L5 9l5.2-1.8zM19 14l.9 2.1L22 17l-2.1.9L19 20l-.9-2.1L16 17l2.1-.9z" />
          </svg>
          AI로 다듬기
        </button>
        {polished ? (
          <button
            type="button"
            onClick={() => setText(DRAFT)}
            className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm"
          >
            되돌리기
          </button>
        ) : null}
      </div>
      <p role="status" className="h-4 text-xs text-slate-600">
        {polished ? "AI가 다듬은 문장이에요" : ""}
      </p>
    </section>
  );
}
