import { useState } from "react";

import { Tag } from "@/shared/ui/patterns/tag/Tag";

const INITIAL = [
  { label: "디자인", tone: "blue" },
  { label: "접근성", tone: "green" },
  { label: "초안", tone: "amber" },
] as const;

export function TagDemo() {
  const [tags, setTags] = useState<readonly (typeof INITIAL)[number][]>(INITIAL);

  return (
    <article className="w-full max-w-xs space-y-3 rounded-xl border border-slate-200 bg-white p-4">
      <h3 className="text-sm font-semibold text-slate-900">버튼 문구 가이드</h3>
      <div className="flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <Tag
            key={tag.label}
            tone={tag.tone}
            removeLabel={(label) => `${label} 태그 빼기`}
            onRemove={() => setTags((current) => current.filter((item) => item !== tag))}
          >
            {tag.label}
          </Tag>
        ))}
      </div>
      {tags.length < INITIAL.length ? (
        <button
          type="button"
          onClick={() => setTags(INITIAL)}
          className="text-xs text-slate-500 underline"
        >
          태그 되돌리기
        </button>
      ) : null}
    </article>
  );
}
