import { useState } from "react";

import { MagazineLayout } from "@/shared/ui/patterns/magazine-layout/MagazineLayout";

const block = (tone: string) => <div className={`size-full bg-gradient-to-br ${tone}`} />;

export function MagazineLayoutDemo() {
  const [opened, setOpened] = useState("");

  return (
    <div className="w-full max-w-md space-y-2">
      <MagazineLayout
        onOpen={(story) => setOpened(story.title)}
        lead={{
          id: "lead",
          kicker: "커버 스토리",
          title: "작은 동네 책방이 살아남는 법",
          href: "#lead",
          visual: block("from-amber-200 to-rose-300"),
        }}
        stories={[
          {
            id: "a",
            kicker: "여행",
            title: "겨울 바다 걷기 좋은 곳",
            href: "#a",
            visual: block("from-sky-200 to-indigo-300"),
          },
          {
            id: "b",
            kicker: "음식",
            title: "집에서 굽는 바게트",
            href: "#b",
            visual: block("from-yellow-100 to-amber-300"),
          },
          {
            id: "c",
            kicker: "공간",
            title: "작은 방을 넓게 쓰기",
            href: "#c",
            visual: block("from-emerald-100 to-teal-300"),
          },
        ]}
      />
      <p role="status" className="min-h-4 text-center text-xs text-slate-600">
        {opened ? `‘${opened}’ 기사를 열었어요` : ""}
      </p>
    </div>
  );
}
