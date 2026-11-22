import { useState } from "react";

import { IconButton } from "@/shared/ui/patterns/icon-button/IconButton";

const icons = {
  share: (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 3v10M6 7l4-4 4 4M4 12v4h12v-4" />
    </svg>
  ),
  bookmark: (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinejoin="round"
    >
      <path d="M5 3h10v14l-5-3.5L5 17Z" />
    </svg>
  ),
  trash: (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
    >
      <path d="M4 6h12M8 6V4h4v2M6 6l1 11h6l1-11" />
    </svg>
  ),
};

const ACTIONS = [
  { label: "공유", icon: icons.share, done: "링크를 복사했어요" },
  { label: "저장", icon: icons.bookmark, done: "저장한 글에 넣었어요" },
  { label: "삭제", icon: icons.trash, done: "글을 삭제했어요" },
] as const;

export function IconButtonDemo() {
  const [message, setMessage] = useState("");

  return (
    <div className="w-full max-w-xs pb-8">
      <article className="rounded-xl border border-slate-200 bg-white p-4">
        <p className="text-sm font-semibold text-slate-900">디자인 시스템을 처음 만들 때</p>
        <div className="mt-2 flex justify-end gap-1">
          {ACTIONS.map((action) => (
            <IconButton
              key={action.label}
              label={action.label}
              icon={action.icon}
              onClick={() => setMessage(action.done)}
            />
          ))}
        </div>
      </article>
      <p role="status" className="mt-8 min-h-4 text-center text-xs text-slate-600">
        {message}
      </p>
    </div>
  );
}
