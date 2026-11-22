import { useState } from "react";

import { Card } from "@/shared/ui/patterns/card/Card";

const ARTICLES = [
  {
    href: "#colors",
    title: "색 정리부터 시작하기",
    summary: "작은 팀이 디자인 시스템을 만들 때 가장 먼저 할 일",
    meta: "가이드 · 5분",
    tone: "from-amber-200 to-rose-300",
  },
  {
    href: "#forms",
    title: "폼 오류 문구 쓰는 법",
    summary: "무엇이 틀렸고 어떻게 고치는지 한 문장으로 알려 주기",
    meta: "글쓰기 · 3분",
    tone: "from-sky-200 to-indigo-300",
  },
] as const;

export function CardDemo() {
  const [saved, setSaved] = useState<readonly string[]>([]);
  const [opened, setOpened] = useState("");

  return (
    <div className="w-full max-w-sm space-y-3">
      <div className="grid grid-cols-2 gap-3">
        {ARTICLES.map((article) => {
          const isSaved = saved.includes(article.href);
          return (
            <Card
              key={article.href}
              href={article.href}
              title={article.title}
              summary={article.summary}
              meta={article.meta}
              media={<div className={`size-full bg-gradient-to-br ${article.tone}`} />}
              onOpen={() => setOpened(article.title)}
              action={
                <button
                  type="button"
                  aria-pressed={isSaved}
                  aria-label={`${article.title} 저장`}
                  onClick={() =>
                    setSaved((current) =>
                      isSaved
                        ? current.filter((href) => href !== article.href)
                        : [...current, article.href],
                    )
                  }
                  className="grid size-7 place-items-center rounded-full bg-white/90 text-slate-600 shadow-sm aria-pressed:text-amber-500"
                >
                  <svg
                    viewBox="0 0 20 20"
                    fill={isSaved ? "currentColor" : "none"}
                    stroke="currentColor"
                    strokeWidth="1.7"
                    aria-hidden="true"
                    className="size-4"
                  >
                    <path d="M5 3h10v14l-5-3.5L5 17Z" />
                  </svg>
                </button>
              }
            />
          );
        })}
      </div>
      <p role="status" className="min-h-4 text-center text-xs text-slate-600">
        {opened ? `‘${opened}’ 글을 열었어요` : ""}
      </p>
    </div>
  );
}
