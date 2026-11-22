import { useState } from "react";

import { Stories } from "@/shared/ui/patterns/stories/Stories";

const STORIES = [
  {
    id: "1",
    label: "오늘의 메뉴",
    text: "오늘의 메뉴는 버섯 리조또",
    tone: "from-amber-400 to-orange-600",
  },
  {
    id: "2",
    label: "새 원두",
    text: "에티오피아 원두가 들어왔어요",
    tone: "from-emerald-500 to-teal-700",
  },
  {
    id: "3",
    label: "영업 시간",
    text: "이번 주는 저녁 9시까지 열어요",
    tone: "from-indigo-500 to-violet-700",
  },
] as const;

export function StoriesDemo() {
  const [open, setOpen] = useState(true);

  return (
    <div className="grid h-72 w-44 place-items-center overflow-hidden rounded-3xl border-4 border-slate-900 bg-white">
      {open ? (
        <Stories
          label="카페 소식"
          duration={4000}
          onClose={() => setOpen(false)}
          stories={STORIES.map((story) => ({
            id: story.id,
            label: story.label,
            content: (
              <div
                className={`grid size-full place-items-center bg-gradient-to-br ${story.tone} px-5 pt-8 text-center text-base font-bold`}
              >
                {story.text}
              </div>
            ),
          }))}
        />
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="rounded-full border border-slate-300 px-3 py-1.5 text-xs"
        >
          다시 보기
        </button>
      )}
    </div>
  );
}
